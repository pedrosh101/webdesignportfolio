import '../globals.css';
import type { Metadata } from 'next';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import {
  getMessages,
  getTranslations,
  setRequestLocale,
} from 'next-intl/server';
import { notFound } from 'next/navigation';
import PortfolioShell from '@/components/Portfolio/PortfolioShell';
import { SITE_URL } from '@/lib/portfolio/site';
import { routing } from '../../i18n/routing';

type Props = {
  children: React.ReactNode;
  params: Promise<{
    locale: string;
  }>;
};

// Pré-gera /pt e /en (e, nas páginas filhas, cada projeto) em vez de renderizar sob demanda.
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) return {};

  const t = await getTranslations({ locale, namespace: 'Portfolio' });

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: `${t('name')} — ${t('role')}`,
      template: `%s — ${t('name')}`,
    },
    description: t('tagline'),
    openGraph: {
      type: 'website',
      siteName: t('name'),
      locale: locale === 'pt' ? 'pt_BR' : 'en_US',
      title: `${t('name')} — ${t('role')}`,
      description: t('tagline'),
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Necessário para as páginas serem geradas estaticamente com next-intl.
  setRequestLocale(locale);

  const messages = await getMessages();
  const t = await getTranslations('Portfolio');

  const copy = {
    name: t('name'),
    tagline: t('tagline'),
    saibaMais: t('saibaMais'),
    comingSoon: t('comingSoon'),
    menu: t('menu'),
    close: t('close'),
    aboutLabel: t('about.title'),
    social: {
      instagram: t('social.instagram'),
      youtube: t('social.youtube'),
      linkedin: t('social.linkedin'),
    },
  };

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          {/* A sidebar vive aqui: não desmonta ao navegar entre as páginas filhas. */}
          <PortfolioShell copy={copy}>{children}</PortfolioShell>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
