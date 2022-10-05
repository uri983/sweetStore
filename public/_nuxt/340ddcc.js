(window.webpackJsonp = window.webpackJsonp || []).push([
  [12, 23],
  {
    546: function (t, e, n) {
      'use strict';
      n.r(e);
      n(11), n(57);
      var r = {
          name: 'SectionUndefined',
          props: {
            heading: { type: String, default: 'New section' },
            description: { type: String, default: 'No type chosen' },
          },
        },
        o = n(3),
        component = Object(o.a)(
          r,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              'div',
              { staticClass: 'm-6 border border-dashed py-32 text-center' },
              [
                e('h3', [t._v(t._s(t.heading))]),
                t._v(' '),
                e('p', [t._v(t._s(t.description))]),
              ],
            );
          },
          [],
          !1,
          null,
          null,
          null,
        );
      e.default = component.exports;
    },
    616: function (t, e, n) {
      'use strict';
      n.r(e);
      n(12);
      var r = n(85),
        o = n(0),
        c = (n(15), n(66), n(35), n(6), n(25), n(45), n(13)),
        l = n.n(c),
        d = {
          name: 'SectionCollectionPreview',
          props: {
            type: { type: String, default: null },
            id: { type: String, default: null },
            categoryId: { type: String, default: null },
            showTitle: { type: Boolean, default: !0 },
            title: { type: String, default: '' },
            titleSize: { type: String, default: 'md' },
            titleAlign: { type: String, default: 'left' },
            productCols: { type: Number, default: 3 },
            productRows: { type: Number, default: 1 },
            showPrice: { type: Boolean, default: !0 },
            productTextAlign: { type: String, default: null },
          },
          data: function () {
            return { name: null, slug: null, products: [], loaded: !1 };
          },
          fetch: function () {
            var t = this;
            return Object(o.a)(
              regeneratorRuntime.mark(function e() {
                var n, o, c;
                return regeneratorRuntime.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (
                          ((n = t.$swell),
                          t.loaded ||
                            (t.products = Object(r.a)(
                              Array(t.productCols * t.productRows).keys(),
                            ).map(function () {
                              return {};
                            })),
                          t.categoryId)
                        ) {
                          e.next = 4;
                          break;
                        }
                        return e.abrupt('return');
                      case 4:
                        return (e.next = 6), n.categories.get(t.categoryId);
                      case 6:
                        return (
                          (o = e.sent),
                          (e.next = 9),
                          n.products.list({
                            category: t.categoryId,
                            expand: ['variants'],
                            $currency: n.currency.list().map(function (t) {
                              return t.code;
                            }),
                          })
                        );
                      case 9:
                        if (((c = e.sent), o)) {
                          e.next = 12;
                          break;
                        }
                        throw new Error(
                          'Category "'.concat(
                            t.categoryId,
                            '" inactive or not found',
                          ),
                        );
                      case 12:
                        (t.name = t.title || o.name),
                          (t.slug = o.slug),
                          (t.products = l()(c, 'results', []).slice(
                            0,
                            t.productCols * t.productRows,
                          )),
                          (t.loaded = !0);
                      case 16:
                      case 'end':
                        return e.stop();
                    }
                }, e);
              }),
            )();
          },
          activated: function () {
            this.$fetchState.timestamp <= Date.now() - 6e4 && this.$fetch();
          },
        },
        f = n(3),
        component = Object(f.a)(
          d,
          function () {
            var t = this,
              e = t._self._c;
            return t.$fetchState.error
              ? e('SectionUndefined', {
                  attrs: {
                    heading: 'Collection preview',
                    description: t.$fetchState.error.message,
                  },
                })
              : e('section', { staticClass: 'py-16' }, [
                  e(
                    'div',
                    { staticClass: 'container' },
                    [
                      t.showTitle
                        ? [
                            !t.loaded && t.$fetchState.pending
                              ? e('div', {
                                  staticClass:
                                    'loader-el mb-2 h-8 w-64 md:h-10',
                                })
                              : e(
                                  'NuxtLink',
                                  {
                                    attrs: {
                                      to: t.localePath(
                                        t.resolveUrl({
                                          type: 'category',
                                          value: t.slug,
                                        }),
                                      ),
                                    },
                                  },
                                  [
                                    e(
                                      'lg' === t.titleSize
                                        ? 'h1'
                                        : 'md' === t.titleSize
                                        ? 'h2'
                                        : 'h3',
                                      {
                                        tag: 'component',
                                        staticClass: 'mb-2',
                                        class: {
                                          'text-center':
                                            'center' === t.titleAlign,
                                        },
                                      },
                                      [
                                        t._v(
                                          '\n          ' +
                                            t._s(t.name) +
                                            '\n        ',
                                        ),
                                      ],
                                    ),
                                  ],
                                  1,
                                ),
                          ]
                        : t._e(),
                      t._v(' '),
                      e('ProductPreviews', {
                        attrs: {
                          products: t.products,
                          'column-count': t.productCols,
                          'product-text-align': t.productTextAlign,
                          'show-price': t.showPrice,
                        },
                      }),
                    ],
                    2,
                  ),
                ]);
          },
          [],
          !1,
          null,
          null,
          null,
        );
      e.default = component.exports;
      installComponents(component, {
        SectionUndefined: n(546).default,
        ProductPreviews: n(311).default,
      });
    },
  },
]);
