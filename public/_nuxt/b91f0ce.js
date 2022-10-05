(window.webpackJsonp = window.webpackJsonp || []).push([
  [64, 55, 65],
  {
    609: function (e, t, r) {
      var content = r(655);
      content.__esModule && (content = content.default),
        'string' == typeof content && (content = [[e.i, content, '']]),
        content.locals && (e.exports = content.locals);
      (0, r(56).default)('79b393e2', content, !0, { sourceMap: !1 });
    },
    654: function (e, t, r) {
      'use strict';
      r(609);
    },
    655: function (e, t, r) {
      var n = r(55)(function (i) {
        return i[1];
      });
      n.push([
        e.i,
        '.sw-nav-link[data-v-1ef3698e]{display:inline-block;width:100%}.sw-nav-link.nuxt-link-active[data-v-1ef3698e], .sw-nav-link[data-v-1ef3698e]:focus{--tw-border-opacity:1;border-color:rgba(230, 51, 96, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(230, 51, 96, var(--tw-text-opacity));--tw-shadow:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.nav-menu-enter-active[data-v-1ef3698e], .nav-menu-leave-active[data-v-1ef3698e]{transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;transition-duration:500ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.nav-menu-enter[data-v-1ef3698e], .nav-menu-leave-to[data-v-1ef3698e]{opacity:0}.nav-menu-enter-to[data-v-1ef3698e], .nav-menu-leave[data-v-1ef3698e]{opacity:1}.nav-menu-link-enter-active[data-v-1ef3698e], .nav-menu-link-leave-active[data-v-1ef3698e]{transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;transition-duration:500ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.nav-menu-link-enter[data-v-1ef3698e], .nav-menu-link-leave-to[data-v-1ef3698e]{--tw-translate-y:1rem;transform:var(--tw-transform);transform:var(--tw-transform);opacity:0}.nav-menu-link-enter-to[data-v-1ef3698e],.nav-menu-link-leave[data-v-1ef3698e]{transition-delay:calc(50ms*var(--i))}.nav-menu-link-enter-to[data-v-1ef3698e], .nav-menu-link-leave[data-v-1ef3698e]{--tw-translate-y:0;transform:var(--tw-transform);transform:var(--tw-transform);opacity:1}',
        '',
      ]),
        (n.locals = {}),
        (e.exports = n);
    },
    671: function (e, t, r) {
      var content = r(750);
      content.__esModule && (content = content.default),
        'string' == typeof content && (content = [[e.i, content, '']]),
        content.locals && (e.exports = content.locals);
      (0, r(56).default)('074bc478', content, !0, { sourceMap: !1 });
    },
    693: function (e, t, r) {
      'use strict';
      r.r(t);
      var n = r(34),
        o = (r(12), r(16), r(11), r(14), r(6), r(20), r(17), r(21), r(4)),
        l = r(10);
      function c(object, e) {
        var t = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(object);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(object, e).enumerable;
            })),
            t.push.apply(t, r);
        }
        return t;
      }
      var m = {
          name: 'MegaNav',
          props: {
            items: {
              type: Array,
              default: function () {
                return [];
              },
            },
          },
          computed: (function (e) {
            for (var i = 1; i < arguments.length; i++) {
              var source = null != arguments[i] ? arguments[i] : {};
              i % 2
                ? c(Object(source), !0).forEach(function (t) {
                    Object(o.a)(e, t, source[t]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(source),
                  )
                : c(Object(source)).forEach(function (t) {
                    Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(source, t),
                    );
                  });
            }
            return e;
          })({}, Object(l.b)(['currency'])),
        },
        d = m,
        v = r(3),
        component = Object(v.a)(
          d,
          function () {
            var e = this,
              t = e._self._c;
            return t(
              'div',
              {
                staticClass:
                  'w-full border-t border-primary-light bg-primary-lightest shadow-md',
              },
              [
                t('div', { staticClass: 'container' }, [
                  t(
                    'div',
                    { staticClass: '-mx-4 flex flex-wrap items-stretch pt-6' },
                    e._l(e.items, function (r, o) {
                      return t(
                        'ul',
                        {
                          key: 'megaNavCol' + o,
                          staticClass: 'mb-6 w-1/4 min-w-48 flex-initial px-4',
                        },
                        e._l(r.items, function (r, i) {
                          return t(
                            'li',
                            { key: 'megaNavItem' + i, staticClass: 'mb-0' },
                            [
                              'product' === r.type &&
                              'object' === Object(n.a)(r.value)
                                ? t(
                                    'NuxtLink',
                                    {
                                      staticClass: 'mt-1 block',
                                      attrs: {
                                        to: e.localePath(e.resolveUrl(r)),
                                      },
                                      nativeOn: {
                                        click: function (t) {
                                          return e.$emit('click');
                                        },
                                      },
                                    },
                                    [
                                      r.value.images
                                        ? t('VisualMedia', {
                                            staticClass: 'rounded',
                                            attrs: {
                                              source: r.value.images[0],
                                              sizes: '300px',
                                            },
                                          })
                                        : e._e(),
                                      e._v(' '),
                                      t('div', { staticClass: 'pt-4' }, [
                                        t('h4', [e._v(e._s(r.value.name))]),
                                        e._v(' '),
                                        r.value.price
                                          ? t(
                                              'p',
                                              {
                                                staticClass:
                                                  'text-primary-darker',
                                              },
                                              [
                                                e._v(
                                                  '\n                ' +
                                                    e._s(
                                                      e.formatMoney(
                                                        r.value.price,
                                                        e.currency,
                                                      ),
                                                    ) +
                                                    '\n              ',
                                                ),
                                              ],
                                            )
                                          : e._e(),
                                      ]),
                                    ],
                                    1,
                                  )
                                : 'heading' === r.type
                                ? t(
                                    'p',
                                    {
                                      staticClass: 'label-sm-faded mb-2',
                                      class: { 'mt-4': i > 0 },
                                    },
                                    [
                                      e._v(
                                        '\n            ' +
                                          e._s(r.name) +
                                          '\n          ',
                                      ),
                                    ],
                                  )
                                : 'callout' === r.type
                                ? t(
                                    'p',
                                    {
                                      staticClass: 'btn',
                                      class: { 'mt-4': i > 0 },
                                    },
                                    [
                                      e._v(
                                        '\n            ' +
                                          e._s(r.name) +
                                          '\n          ',
                                      ),
                                    ],
                                  )
                                : 'url' === r.type
                                ? t(
                                    'a',
                                    {
                                      staticClass:
                                        '-mx-1 block p-1 leading-tight',
                                      attrs: {
                                        rel: 'noreferrer noopener',
                                        href: r.value,
                                        target:
                                          'blank' === r.options.target
                                            ? '_blank'
                                            : '_self',
                                      },
                                    },
                                    [
                                      e._v(
                                        '\n            ' +
                                          e._s(r.name) +
                                          '\n          ',
                                      ),
                                    ],
                                  )
                                : t(
                                    'NuxtLink',
                                    {
                                      staticClass:
                                        '-mx-1 block p-1 leading-tight',
                                      attrs: {
                                        to: e.localePath(e.resolveUrl(r)),
                                      },
                                      nativeOn: {
                                        click: function (t) {
                                          return e.$emit('click');
                                        },
                                      },
                                    },
                                    [
                                      e._v(
                                        '\n            ' +
                                          e._s(r.name) +
                                          '\n          ',
                                      ),
                                    ],
                                  ),
                            ],
                            1,
                          );
                        }),
                        0,
                      );
                    }),
                    0,
                  ),
                ]),
              ],
            );
          },
          [],
          !1,
          null,
          null,
          null,
        );
      t.default = component.exports;
    },
    704: function (e, t, r) {
      'use strict';
      r.r(t);
      r(12), r(16), r(11), r(14), r(6), r(20), r(17), r(21);
      var n = r(4),
        o = r(10);
      function l(object, e) {
        var t = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(object);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(object, e).enumerable;
            })),
            t.push.apply(t, r);
        }
        return t;
      }
      var c = {
          name: 'TheMobileNav',
          props: {
            menuItems: {
              type: Array,
              default: function () {
                return [];
              },
            },
          },
          computed: (function (e) {
            for (var i = 1; i < arguments.length; i++) {
              var source = null != arguments[i] ? arguments[i] : {};
              i % 2
                ? l(Object(source), !0).forEach(function (t) {
                    Object(n.a)(e, t, source[t]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(source),
                  )
                : l(Object(source)).forEach(function (t) {
                    Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(source, t),
                    );
                  });
            }
            return e;
          })({}, Object(o.b)(['customerLoggedIn', 'currency'])),
          methods: {
            checkIfLoggedIn: function () {
              this.customerLoggedIn &&
                (this.$emit('click-close'),
                this.$router.push(this.localePath('/account/')));
            },
          },
        },
        m = c,
        d = (r(654), r(3)),
        component = Object(d.a)(
          m,
          function () {
            var e = this,
              t = e._self._c;
            return t(
              'transition',
              { attrs: { name: 'nav-menu', duration: 500, appear: '' } },
              [
                t('div', { staticClass: 'fixed inset-0 z-30' }, [
                  t(
                    'div',
                    {
                      staticClass:
                        'absolute left-0 flex h-screen w-full flex-col overflow-y-scroll bg-primary-lightest',
                    },
                    [
                      t(
                        'div',
                        {
                          staticClass:
                            'container flex flex-grow pt-28 md:max-w-120 md:items-center md:justify-center',
                        },
                        [
                          t(
                            'transition-group',
                            {
                              staticClass: 'w-full text-2xl font-semibold',
                              style: { '--length': e.menuItems.length },
                              attrs: {
                                name: 'nav-menu-link',
                                tag: 'ul',
                                appear: '',
                              },
                            },
                            e._l(e.menuItems, function (r, n) {
                              return t(
                                'li',
                                {
                                  key: 'mobileNavItem' + n,
                                  staticClass: 'mb-6 md:text-center',
                                  style: { '--i': n },
                                },
                                [
                                  'url' === r.type
                                    ? t(
                                        'a',
                                        {
                                          staticClass: 'sw-nav-link',
                                          attrs: {
                                            rel: 'noreferrer noopener',
                                            href: r.value,
                                            target:
                                              'blank' === r.options.target
                                                ? '_blank'
                                                : '_self',
                                          },
                                        },
                                        [e._v(e._s(r.name))],
                                      )
                                    : t(
                                        'NuxtLink',
                                        {
                                          staticClass: 'sw-nav-link',
                                          attrs: {
                                            to: e.localePath(e.resolveUrl(r)),
                                          },
                                        },
                                        [
                                          e._v(
                                            '\n              ' +
                                              e._s(r.name) +
                                              '\n            ',
                                          ),
                                        ],
                                      ),
                                ],
                                1,
                              );
                            }),
                            0,
                          ),
                        ],
                        1,
                      ),
                      e._v(' '),
                      t(
                        'div',
                        {
                          ref: 'miscLinks',
                          staticClass: 'container md:max-w-120',
                        },
                        [
                          t(
                            'div',
                            {
                              staticClass:
                                'border-t border-primary-light py-12',
                            },
                            [
                              t(
                                'button',
                                {
                                  staticClass: 'grid-icon-label mb-8',
                                  on: {
                                    click: function (t) {
                                      return (
                                        t.preventDefault(),
                                        e.$emit('click-search')
                                      );
                                    },
                                  },
                                },
                                [
                                  t('BaseIcon', {
                                    attrs: { icon: 'uil:search', size: 'sm' },
                                  }),
                                  t('span', { staticClass: 'text-left' }, [
                                    e._v(e._s(e.$t('navigation.search'))),
                                  ]),
                                ],
                                1,
                              ),
                              e._v(' '),
                              t(
                                'NuxtLink',
                                {
                                  staticClass: 'grid-icon-label mb-8',
                                  attrs: {
                                    to: e.localePath(
                                      e.customerLoggedIn
                                        ? '/account/orders/'
                                        : '/account/login/',
                                    ),
                                  },
                                },
                                [
                                  t('BaseIcon', {
                                    attrs: { icon: 'uil:user', size: 'sm' },
                                  }),
                                  t('span', [
                                    e._v(e._s(e.$t('navigation.account'))),
                                  ]),
                                ],
                                1,
                              ),
                              e._v(' '),
                              e.$i18n.locales.length > 1
                                ? t('LocaleSelect', {
                                    staticClass: 'mb-8',
                                    attrs: { appearance: 'popup' },
                                  })
                                : e._e(),
                              e._v(' '),
                              e.currency
                                ? t('CurrencySelect', {
                                    attrs: { appearance: 'popup' },
                                  })
                                : e._e(),
                            ],
                            1,
                          ),
                        ],
                      ),
                    ],
                  ),
                ]),
              ],
            );
          },
          [],
          !1,
          null,
          '1ef3698e',
          null,
        );
      t.default = component.exports;
      installComponents(component, {
        BaseIcon: r(30).default,
        LocaleSelect: r(205).default,
        CurrencySelect: r(206).default,
      });
    },
    749: function (e, t, r) {
      'use strict';
      r(671);
    },
    750: function (e, t, r) {
      var n = r(55)(function (i) {
        return i[1];
      });
      n.push([
        e.i,
        '.sw-nav-link.nuxt-link-active, .sw-nav-link:focus{--tw-border-opacity:1;border-color:rgba(230, 51, 96, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(230, 51, 96, var(--tw-text-opacity));--tw-shadow:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.mega-nav:hover, .sw-nav-link-wrapper a:hover+.mega-nav{display:block}.hamburger{cursor:pointer}.hamburger-inner{top:50%;margin-top:-1px;display:block}.hamburger-inner, .hamburger-inner:after, .hamburger-inner:before{position:absolute;height:2px;width:1.5rem;border-radius:0.25rem;background-color:currentColor}.hamburger-inner:after,.hamburger-inner:before{content:"";display:block}.hamburger-inner:before{top:-8px}.hamburger-inner:after{bottom:-8px}.hamburger-squeeze .hamburger-inner{transition-duration:75ms;transition-timing-function:cubic-bezier(.55,.055,.675,.19)}.hamburger-squeeze .hamburger-inner:before{transition:top 75ms ease .12s,opacity 75ms ease}.hamburger-squeeze .hamburger-inner:after{transition:bottom 75ms ease .12s,transform 75ms cubic-bezier(.55,.055,.675,.19)}.hamburger-squeeze.is-active .hamburger-inner{transform:rotate(45deg);transition-delay:.12s;transition-timing-function:cubic-bezier(.215,.61,.355,1)}.hamburger-squeeze.is-active .hamburger-inner:before{top:0;opacity:0;transition:top 75ms ease,opacity 75ms ease .12s}.hamburger-squeeze.is-active .hamburger-inner:after{bottom:0;transform:rotate(-90deg);transition:bottom 75ms ease,transform 75ms cubic-bezier(.215,.61,.355,1) .12s}',
        '',
      ]),
        (n.locals = {}),
        (e.exports = n);
    },
    792: function (e, t, r) {
      'use strict';
      r.r(t);
      r(12), r(11), r(57), r(16), r(14), r(6), r(20), r(17), r(21);
      var n = r(4),
        o = r(0),
        l = (r(15), r(10)),
        c = r(186),
        m = r.n(c);
      function d(object, e) {
        var t = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(object);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(object, e).enumerable;
            })),
            t.push.apply(t, r);
        }
        return t;
      }
      var v = {
          name: 'TheHeader',
          data: function () {
            return {
              header: {},
              menu: {},
              storeName: null,
              logoSrc: null,
              mounted: !1,
              megaNavIsEnabled: !0,
              currentMegaNavIndex: null,
              mobileNavIsVisible: !1,
              hideHeader: !1,
              lastScrollPos: 0,
              isScrolled: !1,
              scrollRAF: null,
              currencyList: [],
              customMenu: [
                { id: 'home', name: 'Inicio', route: '/' },
                { id: 'home', name: 'Categorías', route: '/categories/' },
                { id: 'home', name: 'Ubicación', route: '/Contacto' },
                { id: 'home', name: 'Contacto', route: '/Contacto' },
              ],
            };
          },
          fetch: function () {
            var e = this;
            return Object(o.a)(
              regeneratorRuntime.mark(function t() {
                var r, n;
                return regeneratorRuntime.wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (r = e.$swell),
                          (t.next = 3),
                          r.settings.get('header.menu', 'header')
                        );
                      case 3:
                        return (
                          (n = t.sent), (t.next = 6), r.settings.get('header')
                        );
                      case 6:
                        return (
                          (e.header = t.sent), (t.next = 9), r.settings.menus(n)
                        );
                      case 9:
                        return (
                          (e.menu = t.sent),
                          (e.storeName = 'Sweet Spot Dev'),
                          (t.next = 13),
                          r.settings.get('header.logo.file.url')
                        );
                      case 13:
                        return (
                          (e.logoSrc = t.sent), (t.next = 16), r.currency.list()
                        );
                      case 16:
                        e.currencyList = t.sent;
                      case 17:
                      case 'end':
                        return t.stop();
                    }
                }, t);
              }),
            )();
          },
          computed: (function (e) {
            for (var i = 1; i < arguments.length; i++) {
              var source = null != arguments[i] ? arguments[i] : {};
              i % 2
                ? d(Object(source), !0).forEach(function (t) {
                    Object(n.a)(e, t, source[t]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(source),
                  )
                : d(Object(source)).forEach(function (t) {
                    Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(source, t),
                    );
                  });
            }
            return e;
          })(
            {},
            Object(l.b)(['cart', 'customerLoggedIn', 'currency', 'locale']),
          ),
          watch: {
            currency: '$fetch',
            locale: '$fetch',
            $route: function () {
              (this.hideHeader = !1), this.setMobileNavVisibility(!1);
            },
          },
          created: function () {
            var e = this.hideMegaNav;
            this.hideMegaNav = m()(e, 200);
          },
          mounted: function () {
            (this.mounted = !0),
              this.setScrollListener(!0),
              this.$store.commit('setState', {
                key: 'headerHeight',
                value: this.$refs.header.offsetHeight,
              });
          },
          beforeDestroy: function () {
            this.setScrollListener(!1), cancelAnimationFrame(this.scrollRAF);
          },
          methods: {
            setMobileNavVisibility: function (e) {
              (this.mobileNavIsVisible =
                'boolean' == typeof e ? e : !this.mobileNavIsVisible),
                this.mobileNavIsVisible
                  ? this.setScrollListener(!1)
                  : this.setScrollListener(!0);
            },
            megaNavIsActive: function (e, t) {
              var r = e.items;
              if (e && r && r.length)
                return (
                  !this.mounted ||
                  !(!this.megaNavIsEnabled || this.currentMegaNavIndex !== t) ||
                  void 0
                );
            },
            showMegaNav: function (e) {
              this.hideMegaNav.cancel(),
                (this.megaNavIsEnabled = !0),
                (this.currentMegaNavIndex = e);
            },
            hideMegaNav: function () {
              (this.megaNavIsEnabled = !1), (this.currentMegaNavIndex = null);
            },
            setHeaderVisibility: function () {
              this.isScrolled = !1;
              var e = window.pageYOffset || document.documentElement.scrollTop;
              if (!(e < 0 || Math.abs(e - this.lastScrollPos) < 50)) {
                if (e > this.lastScrollPos) {
                  if (this.hideHeader) return void (this.lastScrollPos = e);
                  (this.hideHeader = !0),
                    this.$store.commit('setState', {
                      key: 'headerIsVisible',
                      value: !1,
                    });
                } else {
                  if (!this.hideHeader) return void (this.lastScrollPos = e);
                  (this.hideHeader = !1),
                    this.$store.commit('setState', {
                      key: 'headerIsVisible',
                      value: !0,
                    });
                }
                this.lastScrollPos = e;
              }
            },
            handleScroll: function () {
              this.isScrolled ||
                ((this.isScrolled = !0),
                (this.scrollRAF = requestAnimationFrame(
                  this.setHeaderVisibility,
                )));
            },
            setScrollListener: function (e) {
              this.header.hideOnScroll &&
                (e
                  ? window.addEventListener('scroll', this.handleScroll)
                  : (window.removeEventListener('scroll', this.handleScroll),
                    (this.hideHeader = !1)));
            },
          },
        },
        h = v,
        f = (r(749), r(3)),
        component = Object(f.a)(
          h,
          function () {
            var e = this,
              t = e._self._c;
            return t(
              'div',
              {
                ref: 'header',
                staticClass: 'bg-sweetPrimary',
                attrs: { 'data-sw-path': 'header' },
              },
              [
                t(
                  'div',
                  { staticClass: 'opacity-0' },
                  [
                    e.header.showPromo
                      ? t('ThePromoBar', {
                          attrs: {
                            text: '|',
                            hidden: e.header.hideOnScroll && e.hideHeader,
                          },
                        })
                      : e._e(),
                    e._v(' '),
                    t('div', { staticClass: 'py-3' }, [
                      e.logoSrc
                        ? t('span', {
                            staticClass: 'block',
                            style: { height: e.header.logoHeight + 'px' },
                          })
                        : t('span', { staticClass: 'text-3xl sm:text-4xl' }, [
                            e._v('|'),
                          ]),
                    ]),
                  ],
                  1,
                ),
                e._v(' '),
                e.mobileNavIsVisible
                  ? t(
                      'TheMobileNav',
                      e._g(
                        { attrs: { 'menu-items': e.menu.items } },
                        e.$listeners,
                      ),
                    )
                  : e._e(),
                e._v(' '),
                t('div', { staticClass: 'fixed top-0 z-40 w-full' }, [
                  t(
                    'div',
                    {
                      staticClass:
                        'fixed w-full translate-y-0 transform transition-all duration-200 ease-in-out',
                      class: [
                        'bg-primary-lightest',
                        {
                          '-translate-y-full transform':
                            e.header.hideOnScroll && e.hideHeader,
                        },
                      ],
                    },
                    [
                      t(
                        'header',
                        {
                          staticClass:
                            'z-40 transition-all duration-300 ease-in-out bg-sweetPrimary',
                          class: {
                            'shadow-md': !e.mobileNavIsVisible,
                            'border-b border-primary-light':
                              e.mobileNavIsVisible,
                          },
                        },
                        [
                          e.header.showPromo
                            ? t('ThePromoBar', {
                                attrs: {
                                  url: e.header.promoUrl,
                                  text:
                                    e.header.promoText ||
                                    '[ Promotional text ]',
                                  hidden: e.header.hideOnScroll && e.hideHeader,
                                },
                              })
                            : e._e(),
                          e._v(' '),
                          t(
                            'div',
                            {
                              staticClass:
                                'container relative z-20 flex items-stretch justify-between',
                            },
                            [
                              t(
                                'div',
                                { staticClass: 'py-3 lg:w-1/4' },
                                [
                                  t(
                                    'NuxtLink',
                                    {
                                      attrs: {
                                        to: e.localePath(
                                          e.resolveUrl({ type: 'home' }),
                                        ),
                                      },
                                    },
                                    [
                                      e.logoSrc
                                        ? t('img', {
                                            staticClass: 'inline-block w-auto',
                                            style: {
                                              height:
                                                e.header.logoHeight + 'px',
                                            },
                                            attrs: {
                                              src: e.logoSrc,
                                              height: e.header.logoHeight,
                                              alt: e.storeName,
                                            },
                                          })
                                        : t(
                                            'span',
                                            {
                                              staticClass:
                                                'whitespace-no-wrap text-3xl sm:text-4xl',
                                            },
                                            [e._v(e._s(e.storeName))],
                                          ),
                                    ],
                                  ),
                                ],
                                1,
                              ),
                              e._v(' '),
                              e.menu
                                ? t(
                                    'nav',
                                    {
                                      staticClass:
                                        'hidden w-full lg:flex lg:w-auto',
                                    },
                                    [
                                      t(
                                        'ul',
                                        { staticClass: 'flex justify-center' },
                                        e._l(e.menu.items, function (r, n) {
                                          return t(
                                            'li',
                                            {
                                              key: r.name,
                                              staticClass:
                                                'sw-nav-link-wrapper mb-0',
                                            },
                                            [
                                              'url' === r.type
                                                ? t(
                                                    'a',
                                                    {
                                                      staticClass:
                                                        'sw-nav-link relative flex h-full items-center rounded-none border-b-4 border-transparent px-5 pt-1',
                                                      attrs: {
                                                        rel: 'noreferrer noopener',
                                                        href: r.value,
                                                        target:
                                                          'blank' ===
                                                          r.options.target
                                                            ? '_blank'
                                                            : '_self',
                                                      },
                                                    },
                                                    [e._v(e._s(r.name))],
                                                  )
                                                : t(
                                                    'NuxtLink',
                                                    {
                                                      staticClass:
                                                        'sw-nav-link relative flex h-full items-center rounded-none border-b-4 border-transparent px-5 pt-1',
                                                      attrs: {
                                                        to: e.localePath(
                                                          e.resolveUrl(r),
                                                        ),
                                                        title: r.description,
                                                      },
                                                      nativeOn: {
                                                        click: function (t) {
                                                          e.megaNavIsEnabled =
                                                            !1;
                                                        },
                                                        mouseleave: function (
                                                          t,
                                                        ) {
                                                          return e.hideMegaNav.apply(
                                                            null,
                                                            arguments,
                                                          );
                                                        },
                                                        mouseenter: function (
                                                          t,
                                                        ) {
                                                          return e.showMegaNav(
                                                            n,
                                                          );
                                                        },
                                                      },
                                                    },
                                                    [
                                                      t(
                                                        'span',
                                                        {
                                                          staticClass:
                                                            'relative',
                                                        },
                                                        [
                                                          e._v(
                                                            '\n                    ' +
                                                              e._s(r.name) +
                                                              '\n                  ',
                                                          ),
                                                        ],
                                                      ),
                                                    ],
                                                  ),
                                              e._v(' '),
                                              t(
                                                'transition',
                                                { attrs: { name: 'fade' } },
                                                [
                                                  e.megaNavIsActive(r, n)
                                                    ? t(
                                                        'div',
                                                        {
                                                          staticClass:
                                                            'absolute left-0 right-0 min-h-full',
                                                          class: {
                                                            'mega-nav fade-in hidden':
                                                              !e.mounted,
                                                          },
                                                          on: {
                                                            mouseenter:
                                                              function (t) {
                                                                return e.showMegaNav(
                                                                  n,
                                                                );
                                                              },
                                                            mouseleave:
                                                              e.hideMegaNav,
                                                          },
                                                        },
                                                        [
                                                          t('MegaNav', {
                                                            attrs: {
                                                              items: r.items,
                                                            },
                                                            on: {
                                                              click:
                                                                e.hideMegaNav,
                                                            },
                                                          }),
                                                        ],
                                                        1,
                                                      )
                                                    : e._e(),
                                                ],
                                              ),
                                            ],
                                            1,
                                          );
                                        }),
                                        0,
                                      ),
                                    ],
                                  )
                                : e._e(),
                              e._v(' '),
                              t(
                                'div',
                                {
                                  staticClass:
                                    '-mr-2 flex flex-row items-center justify-end lg:w-1/4',
                                },
                                [
                                  e.$i18n.locales.length > 1
                                    ? t('LocaleSelect', {
                                        staticClass: 'hidden lg:block',
                                        attrs: { appearance: 'float' },
                                      })
                                    : e._e(),
                                  e._v(' '),
                                  e.currencyList.length > 1
                                    ? t('CurrencySelect', {
                                        staticClass: 'hidden lg:block',
                                        attrs: { appearance: 'float' },
                                      })
                                    : e._e(),
                                  e._v(' '),
                                  t(
                                    'button',
                                    {
                                      staticClass: 'text-inherit h-10 p-2',
                                      attrs: {
                                        'aria-label': e.$t('navigation.search'),
                                      },
                                      on: {
                                        click: function (t) {
                                          return (
                                            t.preventDefault(),
                                            e.$emit('click-search')
                                          );
                                        },
                                      },
                                    },
                                    [
                                      t('BaseIcon', {
                                        attrs: { icon: 'uil:search' },
                                      }),
                                    ],
                                    1,
                                  ),
                                  e._v(' '),
                                  t(
                                    'NuxtLink',
                                    {
                                      staticClass:
                                        'hidden h-10 p-2 lg:inline-block',
                                      attrs: {
                                        'aria-label':
                                          e.$t('navigation.account'),
                                        to: e.localePath(
                                          e.customerLoggedIn
                                            ? '/account/orders/'
                                            : '/account/login/',
                                        ),
                                      },
                                    },
                                    [
                                      t('BaseIcon', {
                                        attrs: { icon: 'uil:user' },
                                      }),
                                    ],
                                    1,
                                  ),
                                  e._v(' '),
                                  t(
                                    'button',
                                    {
                                      staticClass:
                                        'text-inherit relative h-10 p-2',
                                      attrs: {
                                        'data-sw-path': 'cart',
                                        'data-sw-click': 'true',
                                        'aria-label': e.$t('cart.title'),
                                      },
                                      on: {
                                        click: function (t) {
                                          return (
                                            t.preventDefault(),
                                            e.$store.commit('setState', {
                                              key: 'cartIsActive',
                                              value: !0,
                                            })
                                          );
                                        },
                                      },
                                    },
                                    [
                                      t('BaseIcon', {
                                        attrs: { icon: 'uil:cart' },
                                      }),
                                      e._v(' '),
                                      e.cart && e.cart.itemQuantity
                                        ? t(
                                            'div',
                                            {
                                              staticClass:
                                                'fade-in absolute top-0 left-5 flex h-6 w-6 items-center justify-center rounded-full bg-accent-default text-primary-lighter',
                                            },
                                            [
                                              t(
                                                'span',
                                                {
                                                  staticClass:
                                                    'mt-px block text-2xs leading-none',
                                                },
                                                [
                                                  e._v(
                                                    e._s(e.cart.itemQuantity),
                                                  ),
                                                ],
                                              ),
                                            ],
                                          )
                                        : e._e(),
                                    ],
                                    1,
                                  ),
                                  e._v(' '),
                                  t(
                                    'button',
                                    {
                                      staticClass:
                                        'outline-none hamburger hamburger-squeeze relative ml-2 h-10 w-10 rounded p-1 lg:hidden',
                                      class: {
                                        'is-active': e.mobileNavIsVisible,
                                      },
                                      attrs: {
                                        type: 'button',
                                        'aria-label': e.$t('navigation.menu'),
                                      },
                                      on: { click: e.setMobileNavVisibility },
                                    },
                                    [e._m(0)],
                                  ),
                                ],
                                1,
                              ),
                            ],
                          ),
                        ],
                        1,
                      ),
                    ],
                  ),
                ]),
              ],
              1,
            );
          },
          [
            function () {
              var e = this._self._c;
              return e('span', { staticClass: 'center-xy absolute h-6 w-6' }, [
                e('span', { staticClass: 'hamburger-inner' }),
              ]);
            },
          ],
          !1,
          null,
          null,
          null,
        );
      t.default = component.exports;
      installComponents(component, {
        ThePromoBar: r(329).default,
        TheMobileNav: r(704).default,
        MegaNav: r(693).default,
        LocaleSelect: r(205).default,
        CurrencySelect: r(206).default,
        BaseIcon: r(30).default,
      });
    },
  },
]);
