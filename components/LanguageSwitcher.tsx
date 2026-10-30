'use client';

import {useLocale} from 'next-intl';
import {usePathname, useRouter} from '@/i18n/navigation';
import {routing} from '@/i18n/routing';

const LOCALES = routing.locales;

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  // Mesma página, outro idioma: /pt/projects/ato -> /en/projects/ato.
  function changeLocale(newLocale: (typeof LOCALES)[number]) {
    router.replace(pathname, {locale: newLocale});
  }

  return (
    <div className="flex items-baseline text-sm">
      {LOCALES.map((code, i) => {
        const isActive = locale === code;
        return (
          <span key={code} className="flex items-baseline">
            {i > 0 && (
              <span aria-hidden="true" className="text-black/30">
                /
              </span>
            )}
            <button
              type="button"
              lang={code}
              onClick={() => changeLocale(code)}
              disabled={isActive}
              aria-current={isActive ? 'true' : undefined}
              className={`appearance-none bg-transparent border-none px-1.5 py-1 font-inherit uppercase disabled:cursor-default ${
                isActive
                  ? 'text-black font-medium'
                  : 'text-black/50 cursor-pointer hover:italic hover:text-black'
              }`}
            >
              {code}
            </button>
          </span>
        );
      })}
    </div>
  );
}
