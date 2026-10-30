import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import ProjectView from '@/components/Portfolio/ProjectView';
import { allProjectSlugs, findProject } from '@/lib/portfolio/data';
import {
  resolveLocalized,
  type Locale,
  type Project,
} from '@/lib/portfolio/types';
import { routing } from '../../../../i18n/routing';

type Props = { params: Promise<{ locale: string; slug: string }> };

// Slug fora da lista = 404 direto, sem tentar renderizar.
export const dynamicParams = false;

// Pré-gera uma página por projeto em cada idioma.
export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    allProjectSlugs().map((slug) => ({ locale, slug })),
  );
}

// Primeira imagem do projeto, usada como prévia ao compartilhar o link.
function getCover(project: Project): string | undefined {
  for (const block of project.blocks) {
    if (block.type === 'image') return block.image.src;
    if (block.type === 'imageGrid' && block.images[0]) return block.images[0].src;
  }
  return undefined;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const found = findProject(slug);
  if (!found) return {};

  const { project } = found;
  const t = await getTranslations({ locale, namespace: 'Portfolio' });
  const title = resolveLocalized(project.title, locale as Locale);
  const description = project.summary[locale as Locale];
  const cover = getCover(project);

  return {
    title,
    description,
    openGraph: {
      type: 'website',
      siteName: t('name'),
      locale: locale === 'pt' ? 'pt_BR' : 'en_US',
      title: `${title} — ${t('name')}`,
      description,
      images: cover ? [{ url: cover }] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} — ${t('name')}`,
      description,
      images: cover ? [cover] : undefined,
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const found = findProject(slug);
  if (!found) notFound();

  const t = await getTranslations('Portfolio');

  return (
    <ProjectView
      project={found.project}
      locale={locale as Locale}
      visitLabel={t('visitProject')}
      inProgressLabel={t('inProgress')}
    />
  );
}
