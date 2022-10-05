(window.webpackJsonp = window.webpackJsonp || []).push([
  [92],
  {
    545: function (t, e, n) {
      'use strict';
      e.a = {
        mounted: function () {
          this.$store.state.refetchCurrency && this.$fetch();
        },
      };
    },
    724: function (t, e, n) {
      t.exports = n.p + 'img/location.352086e.png';
    },
    768: function (t, e, n) {
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
            methods: {
              openMap: function () {
                window.open(
                  'https://www.google.com/maps/dir/?api=1&travelmode=driving&layer=traffic&destination=21.126106830479788, -86.83926485418037',
                );
              },
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
              e('div', { staticClass: 'container pt-7 pb-4' }, [
                e(
                  'div',
                  {
                    staticClass:
                      'container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center',
                  },
                  [
                    e('div', { staticClass: 'w-full lg:w-1/2' }, [
                      t._m(0),
                      t._v(' '),
                      e('img', {
                        staticClass:
                          'object-cover w-full h-full mx-auto rounded-md lg:max-w-2xl rounded mt-4',
                        attrs: { src: n(724), alt: 'glasses photo' },
                      }),
                    ]),
                    t._v(' '),
                    e(
                      'div',
                      {
                        staticClass:
                          'flex flex-col items-center text-center justify-center w-full h-96 lg:w-1/2',
                      },
                      [
                        t._m(1),
                        t._v(' '),
                        e('div', { staticClass: 'flex mt-10' }, [
                          t.$device.isAndroid || t.$device.isDesktop
                            ? e(
                                'button',
                                {
                                  staticClass:
                                    'flex bg-sweetPrimary text-white font-bold uppercase text-base px-8 py-3 rounded shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150',
                                  attrs: { type: 'button' },
                                  on: {
                                    click: function (e) {
                                      return t.openMap();
                                    },
                                  },
                                },
                                [
                                  e('BaseIcon', {
                                    staticClass: 'mr-2 -mb-1 text-white',
                                    attrs: {
                                      icon: 'arcticons:google-maps',
                                      size: 'lg',
                                    },
                                  }),
                                  t._v(' '),
                                  e('span', { staticClass: 'text-white' }, [
                                    t._v('Como llegar'),
                                  ]),
                                ],
                                1,
                              )
                            : t._e(),
                          t._v(' '),
                          t.$device.isIos || t.$device.isDesktop
                            ? e(
                                'button',
                                {
                                  staticClass:
                                    'flex bg-sweetPrimary text-white font-bold uppercase text-base px-8 py-3 rounded shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150',
                                  attrs: { type: 'button' },
                                  on: {
                                    click: function (e) {
                                      return t.openMap();
                                    },
                                  },
                                },
                                [
                                  e('BaseIcon', {
                                    staticClass: 'mr-px -mb-1 text-white',
                                    attrs: {
                                      icon: 'arcticons:maps',
                                      size: 'lg',
                                    },
                                  }),
                                  t._v(' '),
                                  e('span', { staticClass: 'text-white' }, [
                                    t._v('Como llegar'),
                                  ]),
                                ],
                                1,
                              )
                            : t._e(),
                        ]),
                      ],
                    ),
                  ],
                ),
              ]),
            ]);
          },
          [
            function () {
              var t = this._self._c;
              return t('div', { staticClass: 'lg:max-w-lg' }, [
                t(
                  'h1',
                  {
                    staticClass:
                      'text-3xl font-bold tracking-wide text-gray-800 dark:text-white lg:text-5xl',
                  },
                  [this._v('\n            Ubicación\n          ')],
                ),
              ]);
            },
            function () {
              var t = this._self._c;
              return t('div', { staticClass: 'mt-4 space-y-5' }, [
                t(
                  'p',
                  {
                    staticClass:
                      'items-center -mx-2 text-gray-700 dark:text-gray-200',
                  },
                  [
                    t('span', { staticClass: 'mx-2' }, [
                      this._v('Av. Huayacan Km1 Plaza Punto Vieira Local 1A'),
                    ]),
                  ],
                ),
              ]);
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
