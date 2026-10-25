'use client';

import {useLocale} from 'next-intl';
import {usePathname, useRouter} from 'next/navigation';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  function changeLocale(newLocale: 'pt' | 'en') {
    const pathWithoutLocale = pathname.replace(/^\/(pt|en)(?=\/|$)/, '');
    router.replace(`/${newLocale}${pathWithoutLocale || '/'}`);
  }

  return (
    <div>
      <button
        onClick={() => changeLocale('pt')}
        disabled={locale === 'pt'}
      >
        PT
      </button>

      <button
        onClick={() => changeLocale('en')}
        disabled={locale === 'en'}
      >
        EN
      </button>
    </div>
  );
}