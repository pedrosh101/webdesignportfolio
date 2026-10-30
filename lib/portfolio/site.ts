// URL pública do site. Usada para montar os links absolutos das prévias
// (Open Graph) de cada projeto. No Netlify, `URL` é preenchida no build com
// o endereço principal do site (inclusive domínio próprio, quando houver).
export const SITE_URL = process.env.URL ?? 'https://pedrosh101.netlify.app';
