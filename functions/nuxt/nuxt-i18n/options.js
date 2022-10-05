export const Constants = {
  COMPONENT_OPTIONS_KEY: 'nuxtI18n',
  STRATEGIES: {
    PREFIX: 'prefix',
    PREFIX_EXCEPT_DEFAULT: 'prefix_except_default',
    PREFIX_AND_DEFAULT: 'prefix_and_default',
    NO_PREFIX: 'no_prefix',
  },
  REDIRECT_ON_OPTIONS: { ALL: 'all', ROOT: 'root', NO_PREFIX: 'no prefix' },
};
export const nuxtOptions = {
  isUniversalMode: true,
  trailingSlash: true,
};
export const options = {
  vueI18n: { fallbackLocale: { default: ['es-MX'] }, pluralizationRules: {} },
  vueI18nLoader: false,
  locales: [{ code: 'es-MX', file: 'es-MX.json' }],
  defaultLocale: 'es-MX',
  defaultDirection: 'ltr',
  routesNameSeparator: '___',
  defaultLocaleRouteNameSuffix: 'default',
  sortRoutes: true,
  strategy: 'prefix_except_default',
  lazy: true,
  langDir: 'C:\\Users\\Desarrollo 5\\perla-negra\\static\\lang',
  rootRedirect: null,
  detectBrowserLanguage: {
    alwaysRedirect: true,
    cookieAge: 365,
    cookieCrossOrigin: false,
    cookieDomain: null,
    cookieKey: 'swell-locale',
    cookieSecure: false,
    fallbackLocale: '',
    redirectOn: 'root',
    useCookie: true,
  },
  differentDomains: false,
  baseUrl: '',
  vuex: { moduleName: 'i18n', syncRouteParams: true },
  parsePages: true,
  pages: {},
  skipSettingLocaleOnNavigate: true,
  onBeforeLanguageSwitch: () => {},
  onLanguageSwitched: () => null,
  normalizedLocales: [{ code: 'es-MX', file: 'es-MX.json' }],
  localeCodes: ['es-MX'],
  additionalMessages: [],
};

export const localeMessages = {
  'es-MX.json': () =>
    import(
      '../..\\static\\lang\\es-MX.json' /* webpackChunkName: "lang-es-MX.json" */
    ),
};
