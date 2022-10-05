(window.webpackJsonp = window.webpackJsonp || []).push([
  [87],
  {
    545: function (t, e, r) {
      'use strict';
      e.a = {
        mounted: function () {
          this.$store.state.refetchCurrency && this.$fetch();
        },
      };
    },
    767: function (t, e, r) {
      'use strict';
      r.r(e);
      var n = r(85),
        c = r(0),
        o =
          (r(15),
          r(6),
          r(25),
          r(35),
          {
            name: 'ProductIndexPage',
            mixins: [r(545).a],
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
              return Object(c.a)(
                regeneratorRuntime.mark(function e() {
                  var r, c, o, d, l;
                  return regeneratorRuntime.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (r = t.$swell),
                            (c = t.$route),
                            (o = parseInt(c.query.page) || 1),
                            (d = parseInt(c.query.limit) || 24),
                            (t.products = Object(n.a)(Array(d).keys())),
                            (e.next = 6),
                            r.products.list({
                              page: o,
                              limit: d,
                              expand: ['variants'],
                              $currency: r.currency.list().map(function (t) {
                                return t.code;
                              }),
                            })
                          );
                        case 6:
                          (l = e.sent) &&
                            ((t.products = l.results),
                            (t.productCount = l.count),
                            (t.pages = l.pages),
                            (t.currentPage = o));
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
        d = r(3),
        component = Object(d.a)(
          o,
          function () {
            var t = this._self._c;
            return t('main', {}, [
              t(
                'div',
                { staticClass: 'container pt-7 pb-4' },
                [t('ProductPreviews', { attrs: { products: this.products } })],
                1,
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
      installComponents(component, { ProductPreviews: r(311).default });
    },
  },
]);
