import { createNavigation } from 'next-intl/navigation';
import { routing } from './routing';

// Link, useRouter e usePathname que já entendem o idioma da URL (/pt, /en):
// usePathname() devolve o caminho SEM o prefixo ("/projects/ato"), e
// router.replace(pathname, { locale }) troca só o idioma.
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
