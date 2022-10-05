(window.webpackJsonp = window.webpackJsonp || []).push([
  [81, 56],
  {
    545: function (t, e, r) {
      'use strict';
      e.a = {
        mounted: function () {
          this.$store.state.refetchCurrency && this.$fetch();
        },
      };
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
              h = this.storeUrl,
              v = function (t) {
                return t + ' - ' + f;
              },
              meta = {
                storeName: f,
                url: h + t.path,
                title: f,
                description: '',
                image: {},
                link: [],
              };
            if (c()(this, '$fetchState.pending')) meta.title = 'Loading...';
            else if (e) {
              var title = e.metaTitle || e.name;
              (meta.title = v(title)),
                (meta.description = e.metaDescription || ''),
                (meta.image = l(e.images));
            } else if (r)
              (meta.title = v('Categories')),
                (meta.image = l(c()(r, '0.images')));
            else if (n) {
              var m = n.metaTitle || n.name;
              (meta.title = v(m)),
                (meta.description = n.metaDescription || ''),
                (meta.image = l(n.images));
            } else if (o)
              (meta.title = v('Products')),
                (meta.image = l(c()(o, '0.images')));
            else if (d) {
              var y = d.metaTitle || d.name;
              (meta.title = v(y)), (meta.description = d.metaDescription || '');
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
    644: function (t, e, r) {
      'use strict';
      r.d(e, 'a', function () {
        return c;
      });
      r(16), r(6), r(17), r(38), r(46);
      var n = r(88),
        o = r.n(n);
      function c(t, e) {
        var r = {},
          n = ['select'];
        if (o()(t) && Array.isArray(e)) {
          var c = Object.keys(t);
          e.forEach(function (e) {
            var o = e.id,
              l = e.type;
            if (c.includes(o)) {
              var d = t[o],
                f = n.includes(l) && !Array.isArray(d);
              r[o] = f ? [d] : d;
            }
          });
        }
        return r;
      }
    },
    691: function (t, e, r) {
      'use strict';
      r.r(e);
      r(16), r(11), r(14), r(6), r(20), r(17), r(21);
      var n = r(4);
      function o(object, t) {
        var e = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(object);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(object, t).enumerable;
            })),
            e.push.apply(e, r);
        }
        return e;
      }
      function c(t) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? o(Object(source), !0).forEach(function (e) {
                Object(n.a)(t, e, source[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(
                t,
                Object.getOwnPropertyDescriptors(source),
              )
            : o(Object(source)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(source, e),
                );
              });
        }
        return t;
      }
      var l = r(85),
        d =
          (r(66),
          r(38),
          r(35),
          r(25),
          r(42),
          r(45),
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
                validator: function (t) {
                  return ['prevNext', 'buttons'].includes(t);
                },
              },
            },
            computed: {
              pageButtons: function () {
                var t = Object(l.a)(Array(this.pagesCount).keys()).map(
                  function (t) {
                    return ++t;
                  },
                );
                return this.pagesCount <= 5
                  ? t
                  : this.currentPage - 2 > 1 && this.currentPage + 2 < t.length
                  ? [t[0], 'break'].concat(
                      Object(l.a)(
                        t.slice(this.currentPage - 2, this.currentPage + 1),
                      ),
                      ['break', t[t.length - 1]],
                    )
                  : this.currentPage - 3 <= 0
                  ? [].concat(Object(l.a)(t.slice(0, 4)), [
                      'break',
                      t[t.length - 1],
                    ])
                  : this.currentPage + 3 > t.length
                  ? [t[0], 'break'].concat(Object(l.a)(t.slice(-4)))
                  : t;
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
        f = r(3),
        component = Object(f.a)(
          d,
          function () {
            var t = this,
              e = t._self._c;
            return e('div', [
              'prevNext' === t.appearance
                ? e(
                    'aside',
                    { staticClass: 'flex items-center justify-between' },
                    [
                      e(
                        'NuxtLink',
                        {
                          staticClass: 'btn sm:w-32',
                          class: { disabled: !t.prevPage },
                          attrs: {
                            tabindex: t.prevPage ? 0 : -1,
                            to: t.localePath({
                              query: c(
                                c({}, t.$route.query),
                                {},
                                { page: t.prevPage },
                              ),
                            }),
                          },
                        },
                        [
                          t._v(
                            '\n      ' +
                              t._s(
                                t.$t('categories.slug.pagination.previous'),
                              ) +
                              '\n    ',
                          ),
                        ],
                      ),
                      t._v(' '),
                      e('div', { staticClass: 'text-center' }, [
                        t._v(
                          '\n      ' +
                            t._s(
                              t.$t('categories.slug.pagination.page', {
                                currentPage: t.currentPage,
                                pagesCount: t.pagesCount,
                              }),
                            ) +
                            '\n    ',
                        ),
                      ]),
                      t._v(' '),
                      e(
                        'NuxtLink',
                        {
                          staticClass: 'btn sm:w-32',
                          class: { disabled: !t.nextPage },
                          attrs: {
                            tabindex: t.nextPage ? 0 : -1,
                            to: t.localePath({
                              query: c(
                                c({}, t.$route.query),
                                {},
                                { page: t.nextPage },
                              ),
                            }),
                          },
                        },
                        [
                          t._v(
                            '\n      ' +
                              t._s(t.$t('categories.slug.pagination.next')) +
                              '\n    ',
                          ),
                        ],
                      ),
                    ],
                    1,
                  )
                : e('div', {}, [
                    e(
                      'div',
                      { staticClass: 'mb-4 flex justify-center gap-x-2' },
                      [
                        t._l(t.pageButtons, function (r, n) {
                          return [
                            'break' !== r
                              ? e(
                                  'NuxtLink',
                                  {
                                    key: n,
                                    staticClass: 'btn h-auto px-3 py-2',
                                    class: { disabled: t.currentPage == r },
                                    attrs: {
                                      to: t.localePath({ query: { page: r } }),
                                    },
                                  },
                                  [
                                    t._v(
                                      '\n          ' + t._s(r) + '\n        ',
                                    ),
                                  ],
                                )
                              : t._e(),
                            t._v(' '),
                            'break' === r
                              ? e(
                                  'span',
                                  { key: n, staticClass: 'flex items-end' },
                                  [t._v('\n          …\n        ')],
                                )
                              : t._e(),
                          ];
                        }),
                      ],
                      2,
                    ),
                    t._v(' '),
                    e('div', { staticClass: 'text-center' }, [
                      t._v(
                        '\n      ' +
                          t._s(
                            t.$t('categories.slug.pagination.page', {
                              currentPage: t.currentPage,
                              pagesCount: t.pagesCount,
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
      e.default = component.exports;
    },
    783: function (t, e, r) {
      'use strict';
      r.r(e);
      r(12), r(11), r(57), r(14), r(20), r(21);
      var n = r(4),
        o = r(85),
        c = r(0),
        l =
          (r(15),
          r(319),
          r(35),
          r(6),
          r(25),
          r(16),
          r(17),
          r(26),
          r(86),
          r(13)),
        d = r.n(l),
        f = r(10),
        h = r(566),
        v = r(644),
        m = r(545);
      function y(object, t) {
        var e = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(object);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(object, t).enumerable;
            })),
            e.push.apply(e, r);
        }
        return e;
      }
      function _(t) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? y(Object(source), !0).forEach(function (e) {
                Object(n.a)(t, e, source[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(
                t,
                Object.getOwnPropertyDescriptors(source),
              )
            : y(Object(source)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(source, e),
                );
              });
        }
        return t;
      }
      function P(t) {
        return (
          ~~d()(t, 'content.productRows', 4) *
          ~~d()(t, 'content.productCols', 6)
        );
      }
      var x = {
          name: 'CategoryDetailPage',
          mixins: [h.a, m.a],
          data: function () {
            return {
              slug: void 0,
              category: void 0,
              products: void 0,
              productsCount: 0,
              filters: [],
              filterState: {},
              pages: {},
              page: 1,
              limit: 24,
              sortMode: '',
              filterModalIsVisible: !1,
              paginationStyle: 'prevNext',
            };
          },
          fetch: function () {
            var t = this;
            return Object(c.a)(
              regeneratorRuntime.mark(function e() {
                var r, n, c, l;
                return regeneratorRuntime.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (r = t.$swell),
                          (n = t.$route),
                          (t.slug = n.params.slug),
                          (t.page = parseInt(n.query.page) || 1),
                          (t.sortMode = n.query.sort || ''),
                          (t.products = Object(o.a)(Array(t.limit).keys()).map(
                            function () {
                              return {};
                            },
                          )),
                          (e.next = 7),
                          r.categories.get(t.slug)
                        );
                      case 7:
                        return (
                          (c = e.sent) ||
                            t.$nuxt.error({
                              statusCode: 404,
                              message: t.$t('errors.categoryNotFound'),
                            }),
                          (t.limit = P(c)),
                          (e.next = 12),
                          t.fetchProducts()
                        );
                      case 12:
                        return (
                          (l = e.sent),
                          (t.category = c),
                          (e.next = 16),
                          r.products.filterableAttributeFilters(l)
                        );
                      case 16:
                        if (
                          ((t.filters = e.sent),
                          (t.filterState = Object(v.a)(n.query, t.filters)),
                          !t.activeFilterCount)
                        ) {
                          e.next = 22;
                          break;
                        }
                        return (
                          (e.next = 21),
                          t.fetchProducts(t.filterState, t.filters)
                        );
                      case 21:
                        l = e.sent;
                      case 22:
                        t.setProducts(l),
                          (t.paginationStyle = d()(
                            c,
                            'content.paginationStyle',
                          ));
                      case 24:
                      case 'end':
                        return e.stop();
                    }
                }, e);
              }),
            )();
          },
          computed: _(
            _({}, Object(f.b)(['currency'])),
            {},
            {
              settings: function () {
                return d()(this, 'category.content', {});
              },
              activeFilterCount: function () {
                return Object.keys(this.filterState).length;
              },
            },
          ),
          watch: { '$route.query': 'updateProductsFiltered' },
          mounted: function () {
            var t = this;
            return Object(c.a)(
              regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), t.updateProductsFiltered();
                      case 2:
                      case 'end':
                        return e.stop();
                    }
                }, e);
              }),
            )();
          },
          created: function () {
            this.sortModes = [
              { value: '', label: this.$t('categories.slug.sortModes.latest') },
              {
                value: 'popularity',
                label: this.$t('categories.slug.sortModes.popularity'),
              },
              {
                value: 'price_asc',
                label: this.$t('categories.slug.sortModes.priceAsc'),
              },
              {
                value: 'price_desc',
                label: this.$t('categories.slug.sortModes.priceDesc'),
              },
            ];
          },
          methods: {
            fetchProducts: function (t) {
              var e = this.$swell,
                r = this.page,
                n = this.limit,
                o = this.sortMode,
                c = this.slug;
              return e.products.list({
                page: r,
                limit: n <= 100 ? n : 100,
                sort: void 0 === o.value ? o : o.value,
                categories: c,
                $filters: t,
                expand: ['variants'],
                $currency: e.currency.list().map(function (t) {
                  return t.code;
                }),
              });
            },
            setProducts: function (t) {
              (this.pages = t.pages),
                (this.products = t.results),
                (this.productsCount = t.count);
            },
            updateProductsFiltered: function () {
              var t = this;
              return Object(c.a)(
                regeneratorRuntime.mark(function e() {
                  var r, n;
                  return regeneratorRuntime.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (r = t.$route),
                            (t.page = parseInt(r.query.page) || 1),
                            (t.sortMode = r.query.sort || ''),
                            (t.filterState = Object(v.a)(r.query, t.filters)),
                            (e.next = 6),
                            t.fetchProducts(t.filterState, t.filters)
                          );
                        case 6:
                          (n = e.sent), t.setProducts(n);
                        case 8:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              )();
            },
            toggleFilterModal: function () {
              this.filterModalIsVisible = !this.filterModalIsVisible;
            },
            updateFilters: function (t) {
              this.updateRouteQuery(t), this.toggleFilterModal();
            },
            updateSortMode: function (option) {
              this.updateRouteQuery(
                _(
                  _({}, this.filterState),
                  {},
                  { sort: void 0 === option.value ? option : option.value },
                ),
              );
            },
            updateRouteQuery: function (t) {
              var e = this.$route,
                path = e.path,
                r = e.query,
                n = _(_({}, r), t),
                o = Object(v.a)(r, this.filters),
                c = Object(v.a)(t, this.filters);
              Object.keys(o).forEach(function (t) {
                c[t] || delete n[t];
              }),
                n.sort || delete n.sort,
                this.$router
                  .replace({ path: path, query: n })
                  .catch(function (t) {});
            },
          },
        },
        O = r(3),
        component = Object(O.a)(
          x,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              'main',
              {},
              [
                e('FilterPanel', {
                  directives: [
                    {
                      name: 'show',
                      rawName: 'v-show',
                      value: t.filterModalIsVisible,
                      expression: 'filterModalIsVisible',
                    },
                  ],
                  attrs: {
                    show: t.filterModalIsVisible,
                    filters: t.filters,
                    'filter-state': t.filterState,
                  },
                  on: {
                    'click-close': function (e) {
                      return t.toggleFilterModal();
                    },
                    change: t.updateFilters,
                  },
                }),
                t._v(' '),
                t.settings.showHeroImage
                  ? e('section', { staticClass: 'relative' }, [
                      e(
                        'div',
                        {
                          staticClass: 'h-64 sm:h-72 md:h-80 lg:h-96 xl:h-112',
                        },
                        [
                          t.category && t.category.images
                            ? e('VisualMedia', {
                                attrs: {
                                  source: t.category.images[0],
                                  'is-background': !0,
                                },
                              })
                            : t._e(),
                        ],
                        1,
                      ),
                      t._v(' '),
                      t.category && t.settings.darkenHeroImage
                        ? e('div', {
                            staticClass:
                              'absolute inset-0 h-full w-full bg-primary-darkest',
                            style: {
                              opacity: t.category.images
                                ? t.settings.darkenHeroImage / 100
                                : 1,
                            },
                          })
                        : t._e(),
                      t._v(' '),
                      t.category
                        ? e(
                            'div',
                            {
                              staticClass:
                                'center-xy container absolute text-center',
                            },
                            [
                              e(
                                'h1',
                                {
                                  class: {
                                    'text-primary-lightest':
                                      'light' === t.settings.textColor,
                                    'text-primary-darkest':
                                      'dark' === t.settings.textColor,
                                  },
                                },
                                [
                                  t._v(
                                    '\n        ' +
                                      t._s(t.category.name) +
                                      '\n      ',
                                  ),
                                ],
                              ),
                              t._v(' '),
                              e('div', {
                                staticClass: 'mx-auto max-w-128 text-lg',
                                class: {
                                  'text-primary-lightest':
                                    'light' === t.settings.textColor,
                                  'text-primary-darkest':
                                    'dark' === t.settings.textColor,
                                },
                                domProps: {
                                  innerHTML: t._s(t.category.description),
                                },
                              }),
                            ],
                          )
                        : t._e(),
                    ])
                  : t._e(),
                t._v(' '),
                e(
                  'div',
                  { staticClass: 'container pb-4 pt-7' },
                  [
                    t.settings.showHeroImage
                      ? t._e()
                      : [
                          !t.category && t.$fetchState.pending
                            ? e('div', {
                                staticClass: 'loader-el mt-2 mb-9 h-10 w-64',
                              })
                            : 'hero_image' !== t.settings.headingPosition
                            ? e('div', { staticClass: 'mb-7' }, [
                                e('h1', [
                                  t._v(t._s(t.category && t.category.name)),
                                ]),
                                t._v(' '),
                                e('div', {
                                  staticClass: 'text-lg',
                                  domProps: {
                                    innerHTML: t._s(
                                      t.category && t.category.description,
                                    ),
                                  },
                                }),
                              ])
                            : t._e(),
                        ],
                    t._v(' '),
                    e(
                      'aside',
                      { staticClass: 'mb-6 flex items-center text-sm' },
                      [
                        t.filters.length > 0
                          ? e(
                              'button',
                              {
                                staticClass: 'inline-flex items-center',
                                on: {
                                  click: function (e) {
                                    return t.toggleFilterModal();
                                  },
                                },
                              },
                              [
                                e(
                                  'div',
                                  {
                                    directives: [
                                      {
                                        name: 'show',
                                        rawName: 'v-show',
                                        value: t.activeFilterCount,
                                        expression: 'activeFilterCount',
                                      },
                                    ],
                                    staticClass:
                                      'flex h-6 w-6 items-center justify-center rounded-full bg-accent-default text-primary-lighter',
                                  },
                                  [
                                    e(
                                      'span',
                                      {
                                        staticClass:
                                          'block text-2xs leading-none',
                                      },
                                      [t._v(t._s(t.activeFilterCount))],
                                    ),
                                  ],
                                ),
                                t._v(' '),
                                e(
                                  'div',
                                  {
                                    directives: [
                                      {
                                        name: 'show',
                                        rawName: 'v-show',
                                        value: !t.activeFilterCount,
                                        expression: '!activeFilterCount',
                                      },
                                    ],
                                  },
                                  [
                                    e('BaseIcon', {
                                      attrs: { icon: 'uil:filter' },
                                    }),
                                  ],
                                  1,
                                ),
                                t._v(' '),
                                e('span', { staticClass: 'ml-1' }, [
                                  t._v(t._s(t.$t('categories.slug.filters'))),
                                ]),
                              ],
                            )
                          : t._e(),
                        t._v(' '),
                        e('span', { staticClass: 'ml-1 hidden sm:inline' }, [
                          t._v(
                            t._s(
                              t.$fetchState.pending
                                ? ''
                                : t.$tc(
                                    'categories.slug.productsCount',
                                    t.productsCount,
                                    { count: t.productsCount },
                                  ),
                            ),
                          ),
                        ]),
                        t._v(' '),
                        e('div', { staticClass: 'ml-auto' }, [
                          e(
                            'div',
                            { staticClass: 'flex items-center' },
                            [
                              e('span', { staticClass: 'pr-2' }, [
                                t._v(t._s(t.$t('categories.slug.sort')) + ' '),
                              ]),
                              t._v(' '),
                              e('InputDropdown', {
                                staticClass: 'w-40',
                                attrs: {
                                  options: t.sortModes,
                                  value: t.sortMode,
                                },
                                on: { change: t.updateSortMode },
                              }),
                            ],
                            1,
                          ),
                        ]),
                      ],
                    ),
                    t._v(' '),
                    t.products.length
                      ? e('ProductPreviews', {
                          attrs: {
                            products: t.products,
                            'column-count': t.settings.productCols,
                          },
                        })
                      : t.activeFilterCount > 0
                      ? e(
                          'div',
                          {
                            staticClass:
                              'rounded bg-primary-lighter py-16 text-center',
                          },
                          [
                            e('p', [
                              t._v(
                                t._s(
                                  t.$t(
                                    'categories.slug.filterProductsNotFound',
                                  ),
                                ),
                              ),
                            ]),
                            t._v(' '),
                            e('BaseButton', {
                              staticClass: 'mt-4',
                              attrs: {
                                appearance: 'light',
                                fit: 'static',
                                label: t.$t('categories.slug.editFilters'),
                              },
                              nativeOn: {
                                click: function (e) {
                                  return t.toggleFilterModal.apply(
                                    null,
                                    arguments,
                                  );
                                },
                              },
                            }),
                          ],
                          1,
                        )
                      : e(
                          'div',
                          {
                            staticClass:
                              'rounded bg-primary-lighter py-16 text-center',
                          },
                          [
                            e('p', [
                              t._v(
                                t._s(
                                  t.$t(
                                    'categories.slug.categoryProductsNotFound',
                                  ),
                                ),
                              ),
                            ]),
                          ],
                        ),
                    t._v(' '),
                    t.pages
                      ? e(
                          'div',
                          { staticClass: 'py-2 sm:py-4 md:py-6' },
                          [
                            e('PaginationButtons', {
                              attrs: {
                                'current-page': t.page,
                                pages: t.pages,
                                appearance: t.paginationStyle,
                              },
                            }),
                          ],
                          1,
                        )
                      : t._e(),
                  ],
                  2,
                ),
              ],
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
        FilterPanel: r(686).default,
        BaseIcon: r(30).default,
        InputDropdown: r(324).default,
        ProductPreviews: r(311).default,
        BaseButton: r(84).default,
        PaginationButtons: r(691).default,
      });
    },
  },
]);
