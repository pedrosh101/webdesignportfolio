'use client';

import {useLocale} from 'next-intl';
import {usePathname, useRouter} from 'next/navigation';

const LOCALES = ['pt', 'en'] as const;

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  function changeLocale(newLocale: (typeof LOCALES)[number]) {
    const pathWithoutLocale = pathname.replace(/^\/(pt|en)(?=\/|$)/, '');
    router.replace(`/${newLocale}${pathWithoutLocale || '/'}`);
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
