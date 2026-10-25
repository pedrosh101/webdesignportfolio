export type Locale = 'en' | 'pt';

export type Localized<T = string> = {
  en: T;
  pt: T;
};

export type ImageRef = {
  src: string;
  alt: Localized;
};

export type Block =
  | { type: 'heading'; text: Localized }
  | { type: 'intro'; text: Localized }
  | { type: 'paragraph'; text: Localized }
  | { type: 'quote'; text: Localized }
  | { type: 'image'; image: ImageRef }
  | { type: 'imageGrid'; images: ImageRef[] };

export type Project = {
  slug: string;
  year: number;
  title: MaybeLocalized;
  summary: Localized;
  tags?: string[];
  link?: string;
  blocks: Block[];
};

export type Category = {
  key: string;
  label: MaybeLocalized;
  projects: Project[];
};

export type MaybeLocalized<T = string> = T | Localized<T>;

export function resolveLocalized<T>(value: MaybeLocalized<T>, locale: Locale): T {
  if (typeof value === 'object' && value !== null && 'en' in value && 'pt' in value) {
    return (value as Localized<T>)[locale];
  }
  return value as T;
}