import { setRequestLocale } from 'next-intl/server';

type Props = { params: Promise<{ locale: string }> };

// Home: o painel da direita fica vazio; a sidebar (layout.tsx) já tem tudo.
export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return null;
}
