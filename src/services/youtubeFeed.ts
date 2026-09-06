import { CHANNEL_ID, CHANNEL_URL } from '../data/videos';

export type FeedVideo = {
  youtubeId: string;
  title: string;
  published: string;
};

const YT_UA =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';

function decodeXml(text: string) {
  return text
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

function parseFeedEntries(xml: string): FeedVideo[] {
  const entries = [...xml.matchAll(/<entry>([\s\S]*?)<\/entry>/g)];
  return entries
    .map((entry) => {
      const block = entry[1];
      const youtubeId = block.match(/<yt:videoId>([^<]+)<\/yt:videoId>/)?.[1];
      const titleRaw =
        block.match(/<media:title>([^<]*)<\/media:title>/)?.[1] ||
        block.match(/<title>([^<]*)<\/title>/)?.[1];
      const published = block.match(/<published>([^<]+)<\/published>/)?.[1] ?? '';
      if (!youtubeId || !titleRaw) return null;
      return {
        youtubeId,
        title: decodeXml(titleRaw),
        published,
      };
    })
    .filter((v): v is FeedVideo => v != null);
}

function sortByPublishedDesc(videos: FeedVideo[]): FeedVideo[] {
  return [...videos].sort((a, b) => {
    const ta = a.published ? Date.parse(a.published) : 0;
    const tb = b.published ? Date.parse(b.published) : 0;
    return tb - ta;
  });
}

async function fetchXml(url: string): Promise<string> {
  const bust = `${url}${url.includes('?') ? '&' : '?'}_=${Date.now()}`;
  const response = await fetch(bust, {
    headers: {
      'User-Agent': YT_UA,
      Accept: 'application/atom+xml,application/xml,text/xml,*/*',
      'Cache-Control': 'no-cache',
    },
  });
  if (!response.ok) {
    throw new Error(`YouTube feed HTTP ${response.status}`);
  }
  return response.text();
}

function extractTitleFromRenderer(node: Record<string, unknown>): string {
  const title = node.title;
  if (!title || typeof title !== 'object') return '';
  const t = title as Record<string, unknown>;
  if (typeof t.simpleText === 'string') return t.simpleText;
  if (typeof t.content === 'string') return t.content;
  const runs = t.runs;
  if (Array.isArray(runs) && runs[0] && typeof (runs[0] as { text?: string }).text === 'string') {
    return (runs[0] as { text: string }).text;
  }
  return '';
}

function titleFromLockup(lockup: Record<string, unknown>): string {
  const metadata = lockup.metadata as Record<string, unknown> | undefined;
  const viewModel = metadata?.lockupMetadataViewModel as Record<string, unknown> | undefined;
  const title = viewModel?.title as Record<string, unknown> | undefined;
  if (typeof title?.content === 'string') return title.content;
  return '';
}

function collectVideoRenderers(node: unknown, out: FeedVideo[], seen: Set<string>) {
  if (!node || typeof node !== 'object') return;
  if (Array.isArray(node)) {
    for (const item of node) collectVideoRenderers(item, out, seen);
    return;
  }

  const obj = node as Record<string, unknown>;

  // Current YouTube channel /videos UI
  if (obj.lockupViewModel && typeof obj.lockupViewModel === 'object') {
    const lockup = obj.lockupViewModel as Record<string, unknown>;
    const id = typeof lockup.contentId === 'string' ? lockup.contentId : '';
    if (id.length === 11 && !seen.has(id)) {
      seen.add(id);
      out.push({
        youtubeId: id,
        title: titleFromLockup(lockup) || id,
        published: '',
      });
    }
  }

  const renderer =
    (obj.videoRenderer as Record<string, unknown> | undefined) ||
    (obj.gridVideoRenderer as Record<string, unknown> | undefined) ||
    (obj.compactVideoRenderer as Record<string, unknown> | undefined);

  if (renderer && typeof renderer.videoId === 'string' && renderer.videoId.length === 11) {
    const id = renderer.videoId;
    if (!seen.has(id)) {
      seen.add(id);
      out.push({
        youtubeId: id,
        title: extractTitleFromRenderer(renderer) || id,
        published: '',
      });
    }
  }

  for (const value of Object.values(obj)) {
    collectVideoRenderers(value, out, seen);
  }
}

function extractYtInitialData(html: string): unknown | null {
  const marker = 'ytInitialData';
  const idx = html.indexOf(marker);
  if (idx < 0) return null;
  const eq = html.indexOf('=', idx);
  if (eq < 0) return null;
  let i = eq + 1;
  while (i < html.length && /\s/.test(html[i])) i += 1;
  if (html[i] !== '{') return null;
  let depth = 0;
  let inString = false;
  let escape = false;
  for (let j = i; j < html.length; j += 1) {
    const ch = html[j];
    if (inString) {
      if (escape) escape = false;
      else if (ch === '\\') escape = true;
      else if (ch === '"') inString = false;
      continue;
    }
    if (ch === '"') {
      inString = true;
      continue;
    }
    if (ch === '{') depth += 1;
    else if (ch === '}') {
      depth -= 1;
      if (depth === 0) {
        try {
          return JSON.parse(html.slice(i, j + 1));
        } catch {
          return null;
        }
      }
    }
  }
  return null;
}

/** Fallback when Atom RSS is blocked/unavailable — parse the public /videos page. */
async function fetchLatestFromChannelPage(limit = 15): Promise<FeedVideo[]> {
  const url = `${CHANNEL_URL.replace(/\/$/, '')}/videos?hl=en&_=${Date.now()}`;
  const response = await fetch(url, {
    headers: {
      'User-Agent': YT_UA,
      'Accept-Language': 'en-US,en;q=0.9',
      Accept: 'text/html,application/xhtml+xml',
      'Cache-Control': 'no-cache',
    },
  });
  if (!response.ok) {
    throw new Error(`YouTube channel page HTTP ${response.status}`);
  }
  const html = await response.text();
  const data = extractYtInitialData(html);
  if (data) {
    const videos: FeedVideo[] = [];
    collectVideoRenderers(data, videos, new Set());
    if (videos.length) return videos.slice(0, limit);
  }

  // Lightweight regex fallback if JSON walk fails
  const ids = [...html.matchAll(/"videoId":"([0-9A-Za-z_-]{11})"/g)].map((m) => m[1]);
  const unique: string[] = [];
  const seen = new Set<string>();
  for (const id of ids) {
    if (seen.has(id)) continue;
    seen.add(id);
    unique.push(id);
    if (unique.length >= limit) break;
  }
  return unique.map((youtubeId) => ({ youtubeId, title: youtubeId, published: '' }));
}

async function fetchFromRss(limit: number): Promise<FeedVideo[]> {
  const uploadsPlaylistId = `UU${CHANNEL_ID.slice(2)}`;
  const sources = [
    `https://www.youtube.com/feeds/videos.xml?playlist_id=${uploadsPlaylistId}`,
    `https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`,
  ];

  let lastError: unknown;
  for (const url of sources) {
    try {
      const xml = await fetchXml(url);
      const list = sortByPublishedDesc(parseFeedEntries(xml));
      if (list.length) return list.slice(0, limit);
    } catch (err) {
      lastError = err;
    }
  }
  if (lastError) throw lastError;
  return [];
}

/** Newest uploads from @GeraSheriff (RSS when available, otherwise channel page). */
export async function fetchLatestChannelVideos(limit = 15): Promise<FeedVideo[]> {
  try {
    const fromRss = await fetchFromRss(limit);
    if (fromRss.length) return fromRss;
  } catch {
    // fall through
  }
  return fetchLatestFromChannelPage(limit);
}

/**
 * “Uploads” playlist for a channel is UU + channelId without the UC prefix.
 * Falls back to channel page scrape when RSS is unavailable.
 */
export async function fetchAllChannelVideos(limit = 50): Promise<FeedVideo[]> {
  return fetchLatestChannelVideos(limit);
}

export async function fetchLatestVideo(): Promise<FeedVideo | null> {
  const list = await fetchLatestChannelVideos(1);
  return list[0] ?? null;
}

/** Videos inside a public playlist (RSS). Throws on network/parse failure. */
export async function fetchPlaylistVideos(
  youtubePlaylistId: string,
  limit = 30
): Promise<FeedVideo[]> {
  const xml = await fetchXml(
    `https://www.youtube.com/feeds/videos.xml?playlist_id=${youtubePlaylistId}`
  );
  return sortByPublishedDesc(parseFeedEntries(xml)).slice(0, limit);
}
