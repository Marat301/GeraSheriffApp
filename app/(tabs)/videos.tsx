import { Redirect } from 'expo-router';

/** Merged into Library tab — keep file so old routes don't break */
export default function VideosRedirect() {
  return <Redirect href="/(tabs)/library" />;
}
