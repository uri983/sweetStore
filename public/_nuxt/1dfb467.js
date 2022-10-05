(window.webpackJsonp = window.webpackJsonp || []).push([
  [83],
  {
    545: function (t, e, n) {
      'use strict';
      e.a = {
        mounted: function () {
          this.$store.state.refetchCurrency && this.$fetch();
        },
      };
    },
    765: function (t, e, n) {
      'use strict';
      n.r(e);
      var r = n(85),
        o = n(0),
        c =
          (n(15),
          n(6),
          n(25),
          n(35),
          {
            name: 'ProductIndexPage',
            mixins: [n(545).a],
            data: function () {
              return {
                products: [],
                productCount: 0,
                pages: {},
                currentPage: 0,
                settings: { productCols: 3 },
              };
            },
            fetch: function () {
              var t = this;
              return Object(o.a)(
                regeneratorRuntime.mark(function e() {
                  var n, o, c, l, d;
                  return regeneratorRuntime.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (n = t.$swell),
                            (o = t.$route),
                            (c = parseInt(o.query.page) || 1),
                            (l = parseInt(o.query.limit) || 24),
                            (t.products = Object(r.a)(Array(l).keys())),
                            (e.next = 6),
                            n.products.list({
                              page: c,
                              limit: l,
                              expand: ['variants'],
                              $currency: n.currency.list().map(function (t) {
                                return t.code;
                              }),
                            })
                          );
                        case 6:
                          (d = e.sent) &&
                            ((t.products = d.results),
                            (t.productCount = d.count),
                            (t.pages = d.pages),
                            (t.currentPage = c));
                        case 8:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              )();
            },
            watchQuery: ['page'],
          }),
        l = n(3),
        component = Object(l.a)(
          c,
          function () {
            var t = this,
              e = t._self._c;
            return e('main', {}, [
              e('div', { staticClass: 'container pt-4 pb-4' }, [
                e(
                  'div',
                  {
                    staticClass:
                      'container flex flex-col px-6 py-4 mx-auto lg:h-[32rem] lg:py-16 lg:flex-row',
                  },
                  [
                    e('div', { staticClass: 'w-full lg:w-1/2' }, [
                      e('div', { staticClass: 'lg:max-w-lg' }, [
                        e(
                          'h1',
                          {
                            staticClass:
                              'text-3xl font-bold tracking-wide text-gray-800 dark:text-white lg:text-5xl',
                          },
                          [t._v('\n            Contactanos\n          ')],
                        ),
                        t._v(' '),
                        e('div', { staticClass: 'mt-8 space-y-5' }, [
                          t._m(0),
                          t._v(' '),
                          e(
                            'p',
                            {
                              staticClass:
                                'flex items-center -mx-2 text-gray-700 dark:text-gray-200',
                            },
                            [
                              e(
                                'svg',
                                {
                                  staticClass: 'w-6 h-6 mx-2 text-blue-500',
                                  attrs: {
                                    xmlns: 'http://www.w3.org/2000/svg',
                                    fill: 'none',
                                    viewBox: '0 0 24 24',
                                    stroke: 'currentColor',
                                  },
                                },
                                [
                                  e('path', {
                                    attrs: {
                                      'stroke-linecap': 'round',
                                      'stroke-linejoin': 'round',
                                      'stroke-width': '2',
                                      d: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
                                    },
                                  }),
                                ],
                              ),
                              t._v(' '),
                              e('span', { staticClass: 'mx-2' }, [
                                t._v('9981234567'),
                              ]),
                            ],
                          ),
                          t._v(' '),
                          e(
                            'button',
                            {
                              staticClass:
                                'flex bg-wp text-white active:bg-blue-600 font-bold uppercase text-base px-8 py-3 rounded shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150',
                              attrs: { type: 'button' },
                            },
                            [
                              e('BaseIcon', {
                                staticClass: 'mr-px -mb-1 text-white',
                                attrs: { icon: 'arcticons:maps', size: 'lg' },
                              }),
                              t._v(' '),
                              e('span', { staticClass: 'text-white' }, [
                                t._v('WhatsApp'),
                              ]),
                            ],
                            1,
                          ),
                          t._v(' '),
                          e(
                            'button',
                            {
                              staticClass:
                                'flex bg-insta text-white active:bg-blue-600 font-bold uppercase text-base px-8 py-3 rounded shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150',
                              attrs: { type: 'button' },
                            },
                            [
                              e('BaseIcon', {
                                staticClass: 'mr-px -mb-1 text-white',
                                attrs: { icon: 'arcticons:maps', size: 'lg' },
                              }),
                              t._v(' '),
                              e('span', { staticClass: 'text-white' }, [
                                t._v('Instagram'),
                              ]),
                            ],
                            1,
                          ),
                          t._v(' '),
                          e(
                            'button',
                            {
                              staticClass:
                                'flex bg-fb text-white active:bg-blue-600 font-bold uppercase text-base px-8 py-3 rounded shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150',
                              attrs: { type: 'button' },
                            },
                            [
                              e('BaseIcon', {
                                staticClass: 'mr-px -mb-1 text-white',
                                attrs: { icon: 'arcticons:maps', size: 'lg' },
                              }),
                              t._v(' '),
                              e('span', { staticClass: 'text-white' }, [
                                t._v('Messenger'),
                              ]),
                            ],
                            1,
                          ),
                        ]),
                      ]),
                    ]),
                  ],
                ),
              ]),
            ]);
          },
          [
            function () {
              var t = this._self._c;
              return t(
                'p',
                {
                  staticClass:
                    'flex items-center -mx-2 text-gray-700 dark:text-gray-200',
                },
                [
                  t('span', { staticClass: 'mx-2' }, [
                    this._v('Encuentranos en nuestras redes sociales:'),
                  ]),
                ],
              );
            },
          ],
          !1,
          null,
          null,
          null,
        );
      e.default = component.exports;
      installComponents(component, { BaseIcon: n(30).default });
    },
  },
]);
