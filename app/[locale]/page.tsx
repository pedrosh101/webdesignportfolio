import { getTranslations } from 'next-intl/server';
import PortfolioClient from '@/components/Portfolio/PortfolioClient';

export default async function HomePage() {
  const t = await getTranslations('Portfolio');

  const copy = {
    name: t('name'),
    tagline: t('tagline'),
    saibaMais: t('saibaMais'),
    comingSoon: t('comingSoon'),
    visitProject: t('visitProject'),
    inProgress: t('inProgress'),
    menu: t('menu'),
    close: t('close'),
    social: {
      instagram: t('social.instagram'),
      youtube: t('social.youtube'),
      linkedin: t('social.linkedin'),
    },
    about: {
      title: t('about.title'),
      body: t('about.body'),
    },
  };

  return <PortfolioClient copy={copy} />;
}