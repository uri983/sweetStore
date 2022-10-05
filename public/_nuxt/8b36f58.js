(window.webpackJsonp = window.webpackJsonp || []).push([
  [47],
  {
    545: function (t, e, r) {
      'use strict';
      e.a = {
        mounted: function () {
          this.$store.state.refetchCurrency && this.$fetch();
        },
      };
    },
    604: function (t, e, r) {
      var content = r(643);
      content.__esModule && (content = content.default),
        'string' == typeof content && (content = [[t.i, content, '']]),
        content.locals && (t.exports = content.locals);
      (0, r(56).default)('5d941df0', content, !0, { sourceMap: !1 });
    },
    642: function (t, e, r) {
      'use strict';
      r(604);
    },
    643: function (t, e, r) {
      var n = r(55)(function (i) {
        return i[1];
      });
      n.push([
        t.i,
        '.swiper[data-v-d46340cc]{width:100%;display:flex;overflow:hidden;position:relative}.swiper-slide[data-v-d46340cc]{width:80px!important}.swiper-button-next[data-v-d46340cc],.swiper-button-prev[data-v-d46340cc]{position:absolute;top:50%;width:calc(var(--swiper-navigation-size)/44*27);height:var(--swiper-navigation-size);margin-top:calc(0px - var(--swiper-navigation-size)/2);z-index:10;cursor:pointer;display:flex;align-items:center;justify-content:center;color:#ffb4f2!important;border-radius:9999px}.swiper-button-next[data-v-d46340cc]:after,.swiper-button-prev[data-v-d46340cc]:after{font-size:25px}',
        '',
      ]),
        (n.locals = {}),
        (t.exports = n);
    },
    685: function (t, e, r) {
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
            name: 'CategoryTags',
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
        l = (r(642), r(3)),
        component = Object(l.a)(
          o,
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
                              'span',
                              {
                                key: n,
                                staticClass:
                                  'cursor-pointer text-xs font-semibold inline-block py-1 px-2 uppercase rounded text-blue-600 bg-blue-200 uppercase last:mr-0 mr-1',
                                class: {
                                  'text-pink-600 bg-pink-200':
                                    t.selectCategory === r.id,
                                },
                                on: {
                                  click: function (e) {
                                    return t.categorySelection(r);
                                  },
                                },
                              },
                              [
                                t._v(
                                  '\n              ' +
                                    t._s(r.name) +
                                    '\n            ',
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
          'd46340cc',
          null,
        );
      e.default = component.exports;
    },
  },
]);
