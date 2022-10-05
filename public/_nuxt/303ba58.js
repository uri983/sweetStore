(window.webpackJsonp = window.webpackJsonp || []).push([
  [56],
  {
    691: function (e, t, n) {
      'use strict';
      n.r(t);
      n(16), n(11), n(14), n(6), n(20), n(17), n(21);
      var r = n(4);
      function c(object, e) {
        var t = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(object);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(object, e).enumerable;
            })),
            t.push.apply(t, n);
        }
        return t;
      }
      function o(e) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? c(Object(source), !0).forEach(function (t) {
                Object(r.a)(e, t, source[t]);
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
      }
      var l = n(85),
        P =
          (n(66),
          n(38),
          n(35),
          n(25),
          n(42),
          n(45),
          {
            name: 'PaginationButtons',
            props: {
              currentPage: { type: Number, default: 1 },
              pages: {
                type: Object,
                default: function () {
                  return {};
                },
              },
              appearance: {
                type: String,
                default: 'buttons',
                validator: function (e) {
                  return ['prevNext', 'buttons'].includes(e);
                },
              },
            },
            computed: {
              pageButtons: function () {
                var e = Object(l.a)(Array(this.pagesCount).keys()).map(
                  function (e) {
                    return ++e;
                  },
                );
                return this.pagesCount <= 5
                  ? e
                  : this.currentPage - 2 > 1 && this.currentPage + 2 < e.length
                  ? [e[0], 'break'].concat(
                      Object(l.a)(
                        e.slice(this.currentPage - 2, this.currentPage + 1),
                      ),
                      ['break', e[e.length - 1]],
                    )
                  : this.currentPage - 3 <= 0
                  ? [].concat(Object(l.a)(e.slice(0, 4)), [
                      'break',
                      e[e.length - 1],
                    ])
                  : this.currentPage + 3 > e.length
                  ? [e[0], 'break'].concat(Object(l.a)(e.slice(-4)))
                  : e;
              },
              pagesCount: function () {
                return Object.keys(this.pages).length;
              },
              prevPage: function () {
                return this.currentPage > 1 ? this.currentPage - 1 : 0;
              },
              nextPage: function () {
                return this.currentPage < this.pagesCount
                  ? this.currentPage + 1
                  : 0;
              },
            },
          }),
        f = n(3),
        component = Object(f.a)(
          P,
          function () {
            var e = this,
              t = e._self._c;
            return t('div', [
              'prevNext' === e.appearance
                ? t(
                    'aside',
                    { staticClass: 'flex items-center justify-between' },
                    [
                      t(
                        'NuxtLink',
                        {
                          staticClass: 'btn sm:w-32',
                          class: { disabled: !e.prevPage },
                          attrs: {
                            tabindex: e.prevPage ? 0 : -1,
                            to: e.localePath({
                              query: o(
                                o({}, e.$route.query),
                                {},
                                { page: e.prevPage },
                              ),
                            }),
                          },
                        },
                        [
                          e._v(
                            '\n      ' +
                              e._s(
                                e.$t('categories.slug.pagination.previous'),
                              ) +
                              '\n    ',
                          ),
                        ],
                      ),
                      e._v(' '),
                      t('div', { staticClass: 'text-center' }, [
                        e._v(
                          '\n      ' +
                            e._s(
                              e.$t('categories.slug.pagination.page', {
                                currentPage: e.currentPage,
                                pagesCount: e.pagesCount,
                              }),
                            ) +
                            '\n    ',
                        ),
                      ]),
                      e._v(' '),
                      t(
                        'NuxtLink',
                        {
                          staticClass: 'btn sm:w-32',
                          class: { disabled: !e.nextPage },
                          attrs: {
                            tabindex: e.nextPage ? 0 : -1,
                            to: e.localePath({
                              query: o(
                                o({}, e.$route.query),
                                {},
                                { page: e.nextPage },
                              ),
                            }),
                          },
                        },
                        [
                          e._v(
                            '\n      ' +
                              e._s(e.$t('categories.slug.pagination.next')) +
                              '\n    ',
                          ),
                        ],
                      ),
                    ],
                    1,
                  )
                : t('div', {}, [
                    t(
                      'div',
                      { staticClass: 'mb-4 flex justify-center gap-x-2' },
                      [
                        e._l(e.pageButtons, function (n, r) {
                          return [
                            'break' !== n
                              ? t(
                                  'NuxtLink',
                                  {
                                    key: r,
                                    staticClass: 'btn h-auto px-3 py-2',
                                    class: { disabled: e.currentPage == n },
                                    attrs: {
                                      to: e.localePath({ query: { page: n } }),
                                    },
                                  },
                                  [
                                    e._v(
                                      '\n          ' + e._s(n) + '\n        ',
                                    ),
                                  ],
                                )
                              : e._e(),
                            e._v(' '),
                            'break' === n
                              ? t(
                                  'span',
                                  { key: r, staticClass: 'flex items-end' },
                                  [e._v('\n          …\n        ')],
                                )
                              : e._e(),
                          ];
                        }),
                      ],
                      2,
                    ),
                    e._v(' '),
                    t('div', { staticClass: 'text-center' }, [
                      e._v(
                        '\n      ' +
                          e._s(
                            e.$t('categories.slug.pagination.page', {
                              currentPage: e.currentPage,
                              pagesCount: e.pagesCount,
                            }),
                          ) +
                          '\n    ',
                      ),
                    ]),
                  ]),
            ]);
          },
          [],
          !1,
          null,
          null,
          null,
        );
      t.default = component.exports;
    },
  },
]);
