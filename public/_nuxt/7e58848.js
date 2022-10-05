(window.webpackJsonp = window.webpackJsonp || []).push([
  [93],
  {
    545: function (t, e, r) {
      'use strict';
      e.a = {
        mounted: function () {
          this.$store.state.refetchCurrency && this.$fetch();
        },
      };
    },
    762: function (t, e, r) {
      'use strict';
      r.r(e);
      r(12);
      var n = r(85),
        c = r(0),
        o =
          (r(15),
          r(35),
          r(6),
          r(25),
          {
            name: 'CategorySwiper',
            mixins: [r(545).a],
            components: {},
            data: function () {
              return {
                selectCategory: null,
                aspectRatio: '1:1',
                sizes: null,
                widths: [192, 262, 358, 548, 716, 1096],
                categories: [],
                categoriesCount: 0,
                pages: {},
                currentPage: 0,
              };
            },
            fetch: function () {
              var t = this;
              return Object(c.a)(
                regeneratorRuntime.mark(function e() {
                  var r, c;
                  return regeneratorRuntime.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (r = t.$swell),
                            (t.categories = Object(n.a)(Array(5).keys()).map(
                              function () {
                                return {};
                              },
                            )),
                            (e.next = 4),
                            r.categories.list()
                          );
                        case 4:
                          return (
                            (c = e.sent),
                            (e.next = 7),
                            t.$swell.settings.get(
                              'productPreviews.aspectRatio',
                              '1:1',
                            )
                          );
                        case 7:
                          (t.aspectRatio = e.sent),
                            c && (t.categories = c.results);
                        case 9:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              )();
            },
            watchQuery: ['page'],
            methods: {
              categorySelection: function (t) {
                this.selectCategory === t.id
                  ? (this.selectCategory = null)
                  : (this.selectCategory = t.id),
                  this.$emit('selectCategory', {
                    category: this.selectCategory,
                  });
              },
            },
            mounted: function () {},
          }),
        l = r(3),
        component = Object(l.a)(
          o,
          function () {
            var t = this,
              e = t._self._c;
            return e('div', { staticClass: 'w-full h-screen bg-gray-100' }, [
              e('div', { staticClass: 'px-4 pt-2 pb-5 lg:p-3 lg:pb-3' }, [
                e(
                  'h1',
                  {
                    staticClass:
                      'text-3xl text-center mt-10 font-bold tracking-tight text-heading',
                  },
                  [t._v('\n      Categorías\n    ')],
                ),
                t._v(' '),
                e(
                  'div',
                  { ref: 'swiper', staticClass: 'relative mt-8 mx-auto' },
                  [
                    e('div', { staticClass: 'swiper flex' }, [
                      e(
                        'div',
                        { staticClass: 'swiper-wrapper flex flex-wrap' },
                        [
                          t._l(t.categories, function (r, n) {
                            return [
                              e(
                                'NuxtLink',
                                {
                                  key: n,
                                  attrs: {
                                    prefetch: !1,
                                    to: '/?category=' + r.slug,
                                    title: r.name,
                                  },
                                },
                                [
                                  e(
                                    'div',
                                    {
                                      staticClass:
                                        'bg-white rounded mb-4 mx-2 w-36 h-36',
                                    },
                                    [
                                      e(
                                        'div',
                                        {
                                          staticClass:
                                            'text-center rounded bg-light relative overflow-hidden cursor-pointer border-transparent',
                                          attrs: { role: 'button' },
                                        },
                                        [
                                          e(
                                            'div',
                                            {
                                              staticClass:
                                                'flex items-center justify-center h-24 w-auto relative overflow-hidden pa-2 mb-3 my-2',
                                            },
                                            [
                                              e('span', [
                                                r.images && r.images.length
                                                  ? e('div', [
                                                      e('img', {
                                                        staticClass: 'p-2 h-24',
                                                        staticStyle: {
                                                          'object-fit':
                                                            'contain',
                                                        },
                                                        attrs: {
                                                          alt: r.name,
                                                          src: r.images[0].file
                                                            .url,
                                                          decoding: 'async',
                                                          'data-nimg': 'fill',
                                                          sizes: '100vw',
                                                          srcset:
                                                            r.images[0].file
                                                              .url,
                                                        },
                                                      }),
                                                    ])
                                                  : t._e(),
                                              ]),
                                            ],
                                          ),
                                          t._v(' '),
                                          e(
                                            'span',
                                            {
                                              staticClass:
                                                'text-sm font-semibold text-heading text-center px-4 pb-4 block',
                                            },
                                            [
                                              t._v(
                                                '\n                      ' +
                                                  t._s(r.name),
                                              ),
                                            ],
                                          ),
                                        ],
                                      ),
                                    ],
                                  ),
                                ],
                              ),
                            ];
                          }),
                        ],
                        2,
                      ),
                    ]),
                  ],
                ),
              ]),
            ]);
          },
          [],
          !1,
          null,
          null,
          null,
        );
      e.default = component.exports;
    },
  },
]);
