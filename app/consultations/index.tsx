import { Ionicons } from '@expo/vector-icons';
import * as Clipboard from 'expo-clipboard';
import { Stack } from 'expo-router';
import React, { useMemo, useState } from 'react';
import {
  Alert,
  Linking,
  Modal,
  Pressable,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import { AppText } from '../../src/components/AppText';
import { Screen } from '../../src/components/Screen';
import { StackBackButton } from '../../src/components/StackBackButton';
import { useLanguage } from '../../src/context/LanguageContext';
import {
  buildConsultationDraft,
  CONSULTATION_EMAIL,
  consultationTopicLabel,
  consultationTopics,
  ConsultationTopicId,
} from '../../src/data/consultations';
import { colors, radius, spacing } from '../../src/theme/colors';

export default function ConsultationsScreen() {
  const { language, t } = useLanguage();
  const [topicId, setTopicId] = useState<ConsultationTopicId>('consultation');
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [message, setMessage] = useState('');
  const [topicOpen, setTopicOpen] = useState(false);

  const topic = useMemo(
    () => consultationTopics.find((item) => item.id === topicId) ?? consultationTopics[0],
    [topicId]
  );
  const topicLabel = consultationTopicLabel(topic, language);

  const draft = () =>
    buildConsultationDraft({
      language,
      topicLabel,
      name,
      location,
      message,
    });

  const validate = () => {
    if (!name.trim()) {
      Alert.alert(t('consultations'), t('consultationsNameRequired'));
      return false;
    }
    if (!message.trim()) {
      Alert.alert(t('consultations'), t('consultationsMessageRequired'));
      return false;
    }
    return true;
  };

  const openEmail = async () => {
    if (!validate()) return;
    const { subject, body } = draft();
    const url = `mailto:${CONSULTATION_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    try {
      const can = await Linking.canOpenURL(url);
      if (!can) {
        Alert.alert(t('consultations'), t('consultationsMailFailed'));
        return;
      }
      await Linking.openURL(url);
    } catch {
      Alert.alert(t('consultations'), t('consultationsMailFailed'));
    }
  };

  const copyDraft = async () => {
    if (!validate()) return;
    const { subject, body } = draft();
    await Clipboard.setStringAsync(`${subject}\n\n${body}`);
    Alert.alert(t('consultations'), t('consultationsCopied'));
  };

  return (
    <Screen>
      <Stack.Screen
        options={{
          title: t('consultations'),
          headerLeft: () => <StackBackButton />,
        }}
      />

      <AppText variant="label" color={colors.blueBright}>
        {t('consultationsEyebrow')}
      </AppText>
      <AppText variant="title" style={{ marginTop: spacing.xs }}>
        {t('consultationsTitle')}
      </AppText>
      <AppText muted style={{ marginTop: spacing.sm, marginBottom: spacing.lg }}>
        {t('consultationsIntro')}
      </AppText>

      <AppText variant="subtitle" style={styles.fieldLabel}>
        {t('consultationsTopic')}
      </AppText>
      <Pressable
        onPress={() => setTopicOpen(true)}
        style={({ pressed }) => [styles.select, pressed && { opacity: 0.9 }]}
        accessibilityRole="button"
        accessibilityLabel={t('consultationsTopic')}
      >
        <AppText style={{ flex: 1 }}>{topicLabel}</AppText>
        <Ionicons name="chevron-down" size={18} color={colors.blueBright} />
      </Pressable>

      <AppText variant="subtitle" style={styles.fieldLabel}>
        {t('consultationsName')}
      </AppText>
      <TextInput
        value={name}
        onChangeText={setName}
        placeholder={t('consultationsNamePlaceholder')}
        placeholderTextColor={colors.textMuted}
        style={[styles.input, styles.fieldGap]}
        maxLength={100}
        autoComplete="name"
      />

      <AppText variant="subtitle" style={styles.fieldLabel}>
        {t('consultationsLocation')}
      </AppText>
      <TextInput
        value={location}
        onChangeText={setLocation}
        placeholder={t('consultationsLocationPlaceholder')}
        placeholderTextColor={colors.textMuted}
        style={[styles.input, styles.fieldGap]}
        maxLength={100}
      />

      <AppText variant="subtitle" style={styles.fieldLabel}>
        {t('consultationsMessage')}
      </AppText>
      <TextInput
        value={message}
        onChangeText={setMessage}
        placeholder={t('consultationsMessagePlaceholder')}
        placeholderTextColor={colors.textMuted}
        style={[styles.input, styles.textarea]}
        multiline
        textAlignVertical="top"
        maxLength={3500}
      />

      <AppText muted style={styles.note}>
        {t('consultationsNote')}
      </AppText>

      <Pressable
        onPress={() => void openEmail()}
        style={({ pressed }) => [styles.primaryBtn, pressed && { opacity: 0.9 }]}
      >
        <AppText color={colors.white} style={styles.primaryBtnText}>
          {t('consultationsOpenEmail')}
        </AppText>
        <Ionicons name="open-outline" size={18} color={colors.white} />
      </Pressable>

      <AppText muted style={styles.orWrite}>
        {t('consultationsOrWrite')}{' '}
        <AppText
          color={colors.blueBright}
          onPress={() => void Linking.openURL(`mailto:${CONSULTATION_EMAIL}`)}
        >
          {CONSULTATION_EMAIL}
        </AppText>
      </AppText>

      <Pressable onPress={() => void copyDraft()} style={styles.copyBtn}>
        <AppText color={colors.blueBright}>{t('consultationsCopyDraft')}</AppText>
      </Pressable>

      <AppText variant="caption" style={styles.disclaimer}>
        {t('disclaimer')}
      </AppText>

      <Modal
        visible={topicOpen}
        transparent
        animationType="fade"
        onRequestClose={() => setTopicOpen(false)}
      >
        <Pressable style={styles.modalBackdrop} onPress={() => setTopicOpen(false)}>
          <View style={styles.modalCard}>
            <AppText variant="subtitle" style={{ marginBottom: spacing.sm }}>
              {t('consultationsTopic')}
            </AppText>
            {consultationTopics.map((item) => {
              const label = consultationTopicLabel(item, language);
              const selected = item.id === topicId;
              return (
                <Pressable
                  key={item.id}
                  onPress={() => {
                    setTopicId(item.id);
                    setTopicOpen(false);
                  }}
                  style={({ pressed }) => [
                    styles.topicOption,
                    selected && styles.topicSelected,
                    pressed && { opacity: 0.85 },
                  ]}
                >
                  <AppText color={selected ? colors.white : colors.textPrimary}>{label}</AppText>
                </Pressable>
              );
            })}
          </View>
        </Pressable>
      </Modal>
    </Screen>
  );
}

const styles = StyleSheet.create({
  fieldLabel: {
    marginBottom: spacing.xs,
  },
  select: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.md,
    paddingHorizontal: spacing.md,
    paddingVertical: 14,
    marginBottom: spacing.md,
  },
  fieldGap: {
    marginBottom: spacing.md,
  },
  input: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.md,
    color: colors.textPrimary,
    fontSize: 16,
    paddingHorizontal: spacing.md,
    paddingVertical: 14,
  },
  textarea: {
    minHeight: 120,
    marginBottom: spacing.md,
  },
  note: {
    marginBottom: spacing.md,
    fontSize: 13,
    lineHeight: 18,
  },
  primaryBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.sm,
    backgroundColor: colors.blackSoft,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.md,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.md,
    marginBottom: spacing.md,
  },
  primaryBtnText: {
    fontWeight: '700',
    flexShrink: 1,
  },
  orWrite: {
    textAlign: 'center',
    marginBottom: spacing.sm,
  },
  copyBtn: {
    alignItems: 'center',
    paddingVertical: spacing.sm,
    marginBottom: spacing.md,
  },
  disclaimer: {
    textAlign: 'center',
    marginBottom: spacing.lg,
  },
  modalBackdrop: {
    flex: 1,
    backgroundColor: colors.overlay,
    justifyContent: 'center',
    padding: spacing.lg,
  },
  modalCard: {
    backgroundColor: colors.surfaceElevated,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.md,
    maxHeight: '80%',
  },
  topicOption: {
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.sm,
    borderRadius: radius.md,
    marginBottom: 4,
  },
  topicSelected: {
    backgroundColor: colors.blue,
  },
});
