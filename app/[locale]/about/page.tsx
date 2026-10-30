import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import AboutView from '@/components/Portfolio/AboutView';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Portfolio.about' });

  return {
    title: t('title'),
    description: t('body').split('\n\n')[0],
  };
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('Portfolio.about');

  return <AboutView title={t('title')} body={t('body')} />;
}
