import { translations, defaultLang } from './ui.js';

export function getLangFromUrl(url) {
  const lang = url.searchParams?.get('lang');
  if (lang && translations[lang]) return lang;
  return defaultLang;
}

export function useTranslations(lang = defaultLang) {
  return function t(key) {
    return translations[lang]?.[key] || translations[defaultLang]?.[key] || key;
  };
}
