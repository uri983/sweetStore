(window.webpackJsonp = window.webpackJsonp || []).push([
  [46],
  {
    545: function (t, e, r) {
      'use strict';
      e.a = {
        mounted: function () {
          this.$store.state.refetchCurrency && this.$fetch();
        },
      };
    },
    672: function (t, e, r) {
      var content = r(752);
      content.__esModule && (content = content.default),
        'string' == typeof content && (content = [[t.i, content, '']]),
        content.locals && (t.exports = content.locals);
      (0, r(56).default)('4a6f7741', content, !0, { sourceMap: !1 });
    },
    751: function (t, e, r) {
      'use strict';
      r(672);
    },
    752: function (t, e, r) {
      var n = r(55)(function (i) {
        return i[1];
      });
      n.push([
        t.i,
        '.swiper[data-v-590241cb]{height:90px;width:100%;display:flex;overflow:hidden;position:relative}.swiper-slide[data-v-590241cb]{width:80px!important}.swiper-button-next[data-v-590241cb],.swiper-button-prev[data-v-590241cb]{position:absolute;top:50%;width:calc(var(--swiper-navigation-size)/44*27);height:var(--swiper-navigation-size);margin-top:calc(0px - var(--swiper-navigation-size)/2);z-index:10;cursor:pointer;display:flex;align-items:center;justify-content:center;color:#ffb4f2!important;border-radius:9999px}.swiper-button-next[data-v-590241cb]:after,.swiper-button-prev[data-v-590241cb]:after{font-size:25px}',
        '',
      ]),
        (n.locals = {}),
        (t.exports = n);
    },
    793: function (t, e, r) {
      'use strict';
      r.r(e);
      r(12);
      var n = r(85),
        o = r(0),
        c =
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
              return Object(o.a)(
                regeneratorRuntime.mark(function e() {
                  var r, o;
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
                            (o = e.sent),
                            (e.next = 7),
                            t.$swell.settings.get(
                              'productPreviews.aspectRatio',
                              '1:1',
                            )
                          );
                        case 7:
                          (t.aspectRatio = e.sent),
                            o && (t.categories = o.results);
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
        l = (r(751), r(3)),
        component = Object(l.a)(
          c,
          function () {
            var t = this,
              e = t._self._c;
            return e('div', { staticClass: 'w-full bg-gray-100' }, [
              e('div', { staticClass: 'px-4 pt-2 pb-5 lg:p-3 lg:pb-3' }, [
                e(
                  'h1',
                  {
                    staticClass:
                      'text-lg font-bold tracking-tight text-heading',
                  },
                  [t._v('Categorías')],
                ),
                t._v(' '),
                e('div', { ref: 'swiper', staticClass: 'relative' }, [
                  e('div', { staticClass: 'swiper flex' }, [
                    e(
                      'div',
                      { staticClass: 'swiper-wrapper flex' },
                      [
                        t._l(t.categories, function (r, n) {
                          return [
                            e(
                              'div',
                              {
                                key: n,
                                staticClass:
                                  'bg-white rounded mb-4 mx-2 w-32 swiper-slide',
                                class: {
                                  'border-sweetPrimary border-4':
                                    t.selectCategory === r.id,
                                },
                                on: {
                                  click: function (e) {
                                    return t.categorySelection(r);
                                  },
                                },
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
                                          'flex items-center justify-center h-10 w-auto relative overflow-hidden pa-2 mb-3 my-2',
                                      },
                                      [
                                        e('span', [
                                          r.images && r.images.length
                                            ? e('div', [
                                                e('img', {
                                                  staticStyle: {
                                                    'object-fit': 'contain',
                                                  },
                                                  attrs: {
                                                    alt: r.name,
                                                    src: r.images[0].file.url,
                                                    decoding: 'async',
                                                    'data-nimg': 'fill',
                                                    sizes: '100vw',
                                                    srcset:
                                                      r.images[0].file.url,
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
                                          '\n                  ' + t._s(r.name),
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
                ]),
              ]),
            ]);
          },
          [],
          !1,
          null,
          '590241cb',
          null,
        );
      e.default = component.exports;
    },
  },
]);
