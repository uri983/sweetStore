(window.webpackJsonp = window.webpackJsonp || []).push([
  [82, 12, 23],
  {
    545: function (t, e, r) {
      'use strict';
      e.a = {
        mounted: function () {
          this.$store.state.refetchCurrency && this.$fetch();
        },
      };
    },
    546: function (t, e, r) {
      'use strict';
      r.r(e);
      r(11), r(57);
      var n = {
          name: 'SectionUndefined',
          props: {
            heading: { type: String, default: 'New section' },
            description: { type: String, default: 'No type chosen' },
          },
        },
        o = r(3),
        component = Object(o.a)(
          n,
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
    566: function (t, e, r) {
      'use strict';
      var n = r(0),
        o = (r(15), r(42), r(12), r(11), r(57), r(200), r(13)),
        c = r.n(o),
        l = function (t) {
          var e = Array.isArray(t) ? c()(t, '0.file.url') : c()(t, 'file.url'),
            r = 1200,
            n = 630;
          return e
            ? ''.concat(e, '?w=').concat(r, '&h=').concat(n, '&q=100&fit=fill')
            : '';
        };
      e.a = {
        asyncData: function (t) {
          return Object(n.a)(
            regeneratorRuntime.mark(function e() {
              var r, n, o;
              return regeneratorRuntime.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (r = t.$swell),
                        (e.next = 3),
                        r.settings.get('store.name')
                      );
                    case 3:
                      return (
                        (n = e.sent), (e.next = 6), r.settings.get('store.url')
                      );
                    case 6:
                      return (
                        (o = e.sent),
                        e.abrupt('return', { storeName: n, storeUrl: o })
                      );
                    case 8:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            }),
          )();
        },
        computed: {
          pageMeta: function () {
            var t = this.$route,
              e = this.category,
              r = this.categories,
              n = this.product,
              o = this.products,
              d = this.page,
              f = this.storeName,
              m = this.storeUrl,
              h = function (t) {
                return t + ' - ' + f;
              },
              meta = {
                storeName: f,
                url: m + t.path,
                title: f,
                description: '',
                image: {},
                link: [],
              };
            if (c()(this, '$fetchState.pending')) meta.title = 'Loading...';
            else if (e) {
              var title = e.metaTitle || e.name;
              (meta.title = h(title)),
                (meta.description = e.metaDescription || ''),
                (meta.image = l(e.images));
            } else if (r)
              (meta.title = h('Categories')),
                (meta.image = l(c()(r, '0.images')));
            else if (n) {
              var y = n.metaTitle || n.name;
              (meta.title = h(y)),
                (meta.description = n.metaDescription || ''),
                (meta.image = l(n.images));
            } else if (o)
              (meta.title = h('Products')),
                (meta.image = l(c()(o, '0.images')));
            else if (d) {
              var v = d.metaTitle || d.name;
              (meta.title = h(v)), (meta.description = d.metaDescription || '');
            }
            return meta;
          },
          structuredData: function () {
            var t = this.product;
            if (t) {
              var e = t.stockStatus || 'inStock';
              return {
                '@context': 'http://schema.org',
                '@type': 'Product',
                name: t.name,
                image: l(c()(this, 'product.images[0]')),
                description: t.description,
                offers: {
                  '@type': 'Offer',
                  price: t.price,
                  priceCurrency: t.currency,
                  availability: 'http://schema.org/'.concat(
                    {
                      inStock: 'InStock',
                      limitedAvailability: 'LimitedAvailability',
                      preorder: 'PreOrder',
                      outOfStock: 'OutOfStock',
                      soldOut: 'SoldOut',
                    }[e],
                  ),
                },
              };
            }
          },
        },
        head: function () {
          var t = this.pageMeta,
            e = this.structuredData,
            r = t.storeName,
            n = t.url,
            title = t.title,
            o = t.description,
            image = t.image,
            link = t.link,
            script = [];
          return (
            e &&
              script.push({
                innerHTML: JSON.stringify(e),
                type: 'application/ld+json',
              }),
            {
              __dangerouslyDisableSanitizers: ['script'],
              script: script,
              title: title,
              link: link,
              meta: [
                { hid: 'description', name: 'description', content: o },
                { hid: 'og:site_name', property: 'og:site_name', content: r },
                { hid: 'og:title', property: 'og:title', content: title },
                {
                  hid: 'og:description',
                  property: 'og:description',
                  content: o,
                },
                { hid: 'og:url', property: 'og:url', content: n },
                { hid: 'og:image', property: 'og:image', content: image },
                { property: 'twitter:card', content: 'summary_large_image' },
                { property: 'twitter:title', content: title },
                { property: 'twitter:description', content: o },
                { property: 'twitter:image', content: image },
              ],
            }
          );
        },
      };
    },
    616: function (t, e, r) {
      'use strict';
      r.r(e);
      r(12);
      var n = r(85),
        o = r(0),
        c = (r(15), r(66), r(35), r(6), r(25), r(45), r(13)),
        l = r.n(c),
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
                var r, o, c;
                return regeneratorRuntime.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (
                          ((r = t.$swell),
                          t.loaded ||
                            (t.products = Object(n.a)(
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
                        return (e.next = 6), r.categories.get(t.categoryId);
                      case 6:
                        return (
                          (o = e.sent),
                          (e.next = 9),
                          r.products.list({
                            category: t.categoryId,
                            expand: ['variants'],
                            $currency: r.currency.list().map(function (t) {
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
        f = r(3),
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
        SectionUndefined: r(546).default,
        ProductPreviews: r(311).default,
      });
    },
    763: function (t, e, r) {
      'use strict';
      r.r(e);
      var n = r(85),
        o = r(0),
        c = (r(15), r(35), r(6), r(25), r(566)),
        l = r(545),
        d = {
          name: 'CategoryIndexPage',
          mixins: [c.a, l.a],
          data: function () {
            return {
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
                var r, o, c, l;
                return regeneratorRuntime.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (r = t.$swell),
                          (o = t.$route),
                          (c = parseInt(o.query.page) || 1),
                          (t.categories = Object(n.a)(Array(5).keys()).map(
                            function () {
                              return {};
                            },
                          )),
                          (e.next = 5),
                          r.categories.list()
                        );
                      case 5:
                        (l = e.sent) &&
                          ((t.categories = l.results),
                          (t.categoriesCount = l.count),
                          (t.pages = l.pages),
                          (t.currentPage = c));
                      case 7:
                      case 'end':
                        return e.stop();
                    }
                }, e);
              }),
            )();
          },
          watchQuery: ['page'],
        },
        f = r(3),
        component = Object(f.a)(
          d,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              'main',
              t._l(t.categories, function (r) {
                return e(
                  'SectionCollectionPreview',
                  t._b(
                    { key: r.id, attrs: { 'category-id': r.id } },
                    'SectionCollectionPreview',
                    r,
                    !1,
                  ),
                );
              }),
              1,
            );
          },
          [],
          !1,
          null,
          null,
          null,
        );
      e.default = component.exports;
      installComponents(component, {
        SectionCollectionPreview: r(616).default,
      });
    },
  },
]);
