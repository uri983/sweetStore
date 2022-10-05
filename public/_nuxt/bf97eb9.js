(window.webpackJsonp = window.webpackJsonp || []).push([
  [91, 45],
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
              m = this.storeUrl,
              v = function (t) {
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
              (meta.title = v(title)),
                (meta.description = e.metaDescription || ''),
                (meta.image = l(e.images));
            } else if (r)
              (meta.title = v('Categories')),
                (meta.image = l(c()(r, '0.images')));
            else if (n) {
              var h = n.metaTitle || n.name;
              (meta.title = v(h)),
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
    582: function (t, e, r) {
      var content = r(621);
      content.__esModule && (content = content.default),
        'string' == typeof content && (content = [[t.i, content, '']]),
        content.locals && (t.exports = content.locals);
      (0, r(56).default)('7f0b67f0', content, !0, { sourceMap: !1 });
    },
    585: function (t, e, r) {
      'use strict';
      r.d(e, 'a', function () {
        return d;
      });
      var n = r(207),
        o = r(208),
        c = r(622),
        l = r.n(c),
        d = (function () {
          function t() {
            Object(n.a)(this, t);
          }
          return (
            Object(o.a)(t, null, [
              {
                key: 'instance',
                value: function () {
                  return (
                    (this.axiosInstance = l.a.create({
                      baseURL: 'http://localhost:3000/',
                      headers: { 'Content-Type': 'application/json' },
                    })),
                    this.axiosInstance
                  );
                },
              },
            ]),
            t
          );
        })();
      d.debug = !0;
    },
    620: function (t, e, r) {
      'use strict';
      r(582);
    },
    621: function (t, e, r) {
      var n = r(55)(function (i) {
        return i[1];
      });
      n.push([
        t.i,
        '.input-coupon[data-v-131b2994]::-moz-placeholder{text-overflow:ellipsis}.input-coupon[data-v-131b2994]::placeholder{text-overflow:ellipsis}',
        '',
      ]),
        (n.locals = {}),
        (t.exports = n);
    },
    673: function (t, e, r) {
      'use strict';
      r.r(e);
      r(16), r(11), r(14), r(6), r(20), r(17), r(21);
      var n = r(4),
        o = r(0),
        c = (r(26), r(72), r(310), r(15), r(10));
      function l(object, t) {
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
      function d(t) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? l(Object(source), !0).forEach(function (e) {
                Object(n.a)(t, e, source[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(
                t,
                Object.getOwnPropertyDescriptors(source),
              )
            : l(Object(source)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(source, e),
                );
              });
        }
        return t;
      }
      var f = {
          name: 'TheCart',
          data: function () {
            return {
              couponCode: null,
              shopLink: null,
              couponError: { message: 'The coupon code was not valid' },
            };
          },
          fetch: function () {
            var t = this;
            return Object(o.a)(
              regeneratorRuntime.mark(function e() {
                var r;
                return regeneratorRuntime.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (r = t.$swell), (e.next = 3), r.settings.get('/', '/')
                        );
                      case 3:
                        t.shopLink = e.sent;
                      case 4:
                      case 'end':
                        return e.stop();
                    }
                }, e);
              }),
            )();
          },
          computed: d(
            d(
              {},
              Object(c.b)(['cart', 'cartIsUpdating', 'currency', 'locale']),
            ),
            {},
            {
              account: function () {
                if (this.cart.account) return this.cart.account;
              },
            },
          ),
          watch: {
            currency: function () {
              this.$store.dispatch('initializeCart', {});
            },
            locale: function () {
              this.$store.dispatch('initializeCart', {});
            },
          },
          mounted: function () {
            var t = this.$route.query.checkout;
            this.$store.dispatch('initializeCart', { checkoutId: t });
          },
          methods: {
            closeCart: function () {
              this.$store.commit('setState', {
                key: 'cartIsActive',
                value: !1,
              });
            },
            validateCouponCode: function (code) {
              return code && null !== code.trim().match(/^[a-z0-9]+$/i);
            },
            applyDiscount: function () {
              var t = this;
              return Object(o.a)(
                regeneratorRuntime.mark(function e() {
                  return regeneratorRuntime.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (!t.validateCouponCode(t.couponCode)) {
                            e.next = 6;
                            break;
                          }
                          return (
                            (e.next = 4),
                            t.$store.dispatch('applyDiscount', t.couponCode)
                          );
                        case 4:
                          e.next = 8;
                          break;
                        case 6:
                          return (
                            (e.next = 8),
                            t.$store.dispatch('handleError', t.couponError)
                          );
                        case 8:
                          t.couponCode = null;
                        case 9:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              )();
            },
            removeDiscount: function (t) {
              this.$store.dispatch('removeDiscount', t);
            },
          },
        },
        m = (r(620), r(3)),
        component = Object(m.a)(
          f,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              'div',
              { staticClass: 'bg-primary-lighter right-0 h-full w-full' },
              [
                e(
                  'div',
                  {
                    staticClass:
                      'h-full w-full overflow-y-scroll bg-primary-lighter',
                  },
                  [
                    e(
                      'div',
                      {
                        staticClass:
                          'container relative border-b border-primary-med py-5',
                      },
                      [
                        e(
                          'div',
                          { staticClass: 'flex items-center justify-between' },
                          [
                            e('h3', [
                              t._v(
                                '\n          ' +
                                  t._s(t.$t('Tu compra')) +
                                  '\n          ',
                              ),
                              t.cart && t.cart.itemQuantity
                                ? e('span', [
                                    t._v('(' + t._s(t.cart.itemQuantity) + ')'),
                                  ])
                                : t._e(),
                            ]),
                          ],
                        ),
                        t._v(' '),
                        t.$te('cart.infoText')
                          ? e('div', {
                              staticClass: 'mt-4 text-sm',
                              domProps: {
                                innerHTML: t._s(t.$t('cart.infoText')),
                              },
                            })
                          : t._e(),
                      ],
                    ),
                    t._v(' '),
                    t.cart && t.cart.items && t.cart.items.length
                      ? e(
                          'div',
                          t._l(t.cart.items, function (t, r) {
                            return e('CartItem', {
                              key: 'cartItem_'.concat(t.id),
                              attrs: { item: t, index: r },
                            });
                          }),
                          1,
                        )
                      : e(
                          'div',
                          { staticClass: 'container py-10' },
                          [
                            e('span', { staticClass: 'mb-4 block' }, [
                              t._v(t._s(t.$t('cart.empty'))),
                            ]),
                            t._v(' '),
                            e('BaseButton', {
                              attrs: {
                                link: t.shopLink,
                                label: t.$t('cart.backToProducts'),
                                fit: 'static',
                              },
                            }),
                          ],
                          1,
                        ),
                    t._v(' '),
                    t.cart && t.cart.items && t.cart.items.length
                      ? e(
                          'div',
                          {
                            staticClass:
                              'border-t border-primary-med bg-primary-lighter',
                          },
                          [
                            t._e(),
                            t._v(' '),
                            e(
                              'div',
                              {
                                staticClass:
                                  'container border-b border-primary-med py-6',
                              },
                              [
                                e(
                                  'div',
                                  { staticClass: 'mb-1 flex justify-between' },
                                  [
                                    e('span', [
                                      t._v(t._s(t.$t('cart.subtotal'))),
                                    ]),
                                    t._v(' '),
                                    e('span', [
                                      t._v(
                                        t._s(
                                          t.formatMoney(
                                            t.cart.subTotal,
                                            t.currency,
                                          ),
                                        ),
                                      ),
                                    ]),
                                  ],
                                ),
                                t._v(' '),
                                e(
                                  'div',
                                  { staticClass: 'mb-1 flex justify-between' },
                                  [
                                    e('span', [
                                      t._v(t._s(t.$t('cart.shipping'))),
                                    ]),
                                    t._v(' '),
                                    e('span', [
                                      t._v(
                                        t._s(
                                          t.formatMoney(
                                            t.cart.shipmentTotal,
                                            t.currency,
                                          ),
                                        ),
                                      ),
                                    ]),
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
                                        value: t.cart.discountTotal,
                                        expression: 'cart.discountTotal',
                                      },
                                    ],
                                    staticClass: 'mb-1 flex justify-between',
                                  },
                                  [
                                    e('span', [
                                      t._v(t._s(t.$t('cart.discounts'))),
                                    ]),
                                    t._v(' '),
                                    e('span', [
                                      t._v(
                                        '–' +
                                          t._s(
                                            t.formatMoney(
                                              t.cart.discountTotal,
                                              t.currency,
                                            ),
                                          ),
                                      ),
                                    ]),
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
                                        value: t.cart.taxTotal,
                                        expression: 'cart.taxTotal',
                                      },
                                    ],
                                    staticClass: 'mb-1 flex justify-between',
                                  },
                                  [
                                    e('span', [t._v(t._s(t.$t('cart.taxes')))]),
                                    t._v(' '),
                                    e('span', [
                                      t._v(
                                        t._s(
                                          t.formatMoney(
                                            t.cart.taxTotal,
                                            t.currency,
                                          ),
                                        ),
                                      ),
                                    ]),
                                  ],
                                ),
                                t._v(' '),
                                e(
                                  'h3',
                                  {
                                    staticClass:
                                      'mt-3 flex justify-between text-xl font-semibold',
                                  },
                                  [
                                    e('span', [t._v(t._s(t.$t('cart.total')))]),
                                    t._v(' '),
                                    e('span', [
                                      t._v(
                                        t._s(
                                          t.formatMoney(
                                            t.cart.grandTotal,
                                            t.currency,
                                          ),
                                        ),
                                      ),
                                    ]),
                                  ],
                                ),
                                t._v(' '),
                                t.account &&
                                t.account.balance &&
                                t.account.balance > 0
                                  ? e(
                                      'div',
                                      {
                                        staticClass:
                                          'mt-4 mb-1 flex justify-between border-t border-primary-med pt-4',
                                      },
                                      [
                                        e('span', [
                                          t._v(
                                            t._s(t.$t('cart.accountBalance')),
                                          ),
                                        ]),
                                        t._v(' '),
                                        e('span', [
                                          t._v(
                                            t._s(
                                              t.formatMoney(
                                                t.account.balance,
                                                t.currency,
                                              ),
                                            ),
                                          ),
                                        ]),
                                      ],
                                    )
                                  : t._e(),
                              ],
                            ),
                          ],
                        )
                      : t._e(),
                  ],
                ),
              ],
            );
          },
          [],
          !1,
          null,
          '131b2994',
          null,
        );
      e.default = component.exports;
      installComponents(component, {
        CartItem: r(325).default,
        BaseButton: r(84).default,
        BaseIcon: r(30).default,
      });
    },
    674: function (t, e, r) {
      'use strict';
      r.r(e);
      r(16), r(11), r(14), r(6), r(20), r(17), r(21);
      var n = r(4),
        o = r(0),
        c = (r(15), r(10)),
        l = r(62),
        d = r(585),
        f = r(610);
      function m(object, t) {
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
      var v = {
          mixins: [l.validationMixin],
          components: { LoaderProcess: f.default },
          props: {},
          data: function () {
            return {
              selected: 1,
              loading: !1,
              pickup: {
                price: 0,
                service: 'Recoger en tienda',
                service_name: 'Recoger en tienda',
              },
              standar: {
                price: 35,
                service: 'Envio Estandar (Cancún)',
                service_name: 'Envio Estandar (Cancún)',
              },
            };
          },
          fetch: function () {
            return Object(o.a)(
              regeneratorRuntime.mark(function t() {
                return regeneratorRuntime.wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                      case 'end':
                        return t.stop();
                    }
                }, t);
              }),
            )();
          },
          computed: (function (t) {
            for (var i = 1; i < arguments.length; i++) {
              var source = null != arguments[i] ? arguments[i] : {};
              i % 2
                ? m(Object(source), !0).forEach(function (e) {
                    Object(n.a)(t, e, source[e]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    t,
                    Object.getOwnPropertyDescriptors(source),
                  )
                : m(Object(source)).forEach(function (e) {
                    Object.defineProperty(
                      t,
                      e,
                      Object.getOwnPropertyDescriptor(source, e),
                    );
                  });
            }
            return t;
          })(
            {},
            Object(c.b)([
              'cart',
              'customerLoggedIn',
              'customer',
              'cartIsUpdating',
            ]),
          ),
          watch: {
            cart: function () {
              var t, e;
              console.log(this.$swell), console.log(this.cart);
              var r =
                (null === (t = this.cart) ||
                void 0 === t ||
                null === (e = t.shipping) ||
                void 0 === e
                  ? void 0
                  : e.service) || null;
              console.log(r),
                r === this.standar.service
                  ? (this.selected = 2)
                  : (this.selected = 1);
            },
            customer: function () {
              console.log(this.customer);
            },
          },
          created: function () {},
          mounted: function () {},
          methods: {
            selectMethod: function (t) {
              this.selected = t;
            },
            addShippingMethod: function () {
              var t = this;
              return Object(o.a)(
                regeneratorRuntime.mark(function e() {
                  var r, n;
                  return regeneratorRuntime.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (t.loading = !0),
                              (e.prev = 1),
                              (r = d.a.instance()),
                              (n = 1 === t.selected ? t.pickup : t.standar),
                              (e.next = 6),
                              r.put('updateShippingService/' + t.cart.id, n)
                            );
                          case 6:
                            if (200 !== e.sent.status) {
                              e.next = 12;
                              break;
                            }
                            return (
                              (e.next = 10),
                              t.$store.dispatch('initializeCart', {})
                            );
                          case 10:
                            t.$emit('advance'), (t.loading = !1);
                          case 12:
                            e.next = 18;
                            break;
                          case 14:
                            (e.prev = 14),
                              (e.t0 = e.catch(1)),
                              console.log(e.t0),
                              (t.loading = !1);
                          case 18:
                            t.loading = !1;
                          case 19:
                          case 'end':
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[1, 14]],
                  );
                }),
              )();
            },
          },
        },
        h = v,
        y = r(3),
        component = Object(y.a)(
          h,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              'div',
              { staticClass: 'w-full' },
              [
                e('LoaderProcess', { attrs: { loading: t.loading } }),
                t._v(' '),
                t._m(0),
                t._v(' '),
                e('div', { staticClass: 'container pt-2 pb-4 md:pb-0' }, [
                  e(
                    'div',
                    {
                      staticClass: 'w-full',
                      on: {
                        click: function (e) {
                          return t.selectMethod(1);
                        },
                      },
                    },
                    [
                      e(
                        'div',
                        {
                          staticClass:
                            'relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg',
                          class: {
                            'text-blue-500 bg-blue-100 border-indigo-500':
                              1 == t.selected,
                          },
                        },
                        [
                          e('div', { staticClass: 'px-4 py-5 flex-auto' }, [
                            e('h6', { staticClass: 'text-xl font-semibold' }, [
                              t._v(t._s(t.pickup.service)),
                            ]),
                            t._v(' '),
                            e(
                              'p',
                              { staticClass: 'mt-2 mb-4 text-blueGray-400' },
                              [
                                t._v(
                                  'Precio: $' + t._s(t.pickup.price) + ' MXN.',
                                ),
                              ],
                            ),
                          ]),
                        ],
                      ),
                    ],
                  ),
                  t._v(' '),
                  e(
                    'div',
                    {
                      staticClass: 'w-full',
                      on: {
                        click: function (e) {
                          return t.selectMethod(2);
                        },
                      },
                    },
                    [
                      e(
                        'div',
                        {
                          staticClass:
                            'relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg',
                          class: {
                            'text-blue-500 bg-blue-100 border-indigo-500':
                              2 == t.selected,
                          },
                        },
                        [
                          e('div', { staticClass: 'px-4 py-5 flex-auto' }, [
                            e('h6', { staticClass: 'text-xl font-semibold' }, [
                              t._v(t._s(t.standar.service)),
                            ]),
                            t._v(' '),
                            e(
                              'p',
                              { staticClass: 'mt-2 mb-4 text-blueGray-400' },
                              [
                                t._v(
                                  'Precio: $' + t._s(t.standar.price) + ' MXN.',
                                ),
                              ],
                            ),
                          ]),
                        ],
                      ),
                    ],
                  ),
                ]),
                t._v(' '),
                e(
                  'button',
                  {
                    staticClass:
                      'float-right flex bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-base px-8 py-3 rounded shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150',
                    attrs: { type: 'button' },
                    on: { click: t.addShippingMethod },
                  },
                  [
                    t.loading
                      ? t._e()
                      : e('span', { staticClass: 'text-white' }, [
                          t._v('Continuar a metodos de pago'),
                        ]),
                    t._v(' '),
                    t.loading
                      ? e('span', { staticClass: 'text-white animate-pulse' }, [
                          t._v('Procesando...'),
                        ])
                      : t._e(),
                  ],
                ),
              ],
              1,
            );
          },
          [
            function () {
              var t = this._self._c;
              return t('div', { staticClass: 'container pb-4 md:pb-0' }, [
                t('div', { staticClass: 'flex py-4' }, [
                  t('h3', [this._v('Metodo de envío')]),
                ]),
              ]);
            },
          ],
          !1,
          null,
          null,
          null,
        );
      e.default = component.exports;
    },
    764: function (t, e, r) {
      'use strict';
      r.r(e);
      r(16), r(11), r(14), r(6), r(20), r(17), r(21);
      var n = r(4),
        o = r(0),
        c = (r(15), r(10)),
        l = r(62),
        d = r(673),
        f = r(753),
        m = r(674),
        v = r(754),
        h = r(566),
        y = r(545);
      function w(object, t) {
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
      var x = {
          name: 'ProductDetailPage',
          mixins: [h.a, l.validationMixin, y.a],
          data: function () {
            return { step: 1 };
          },
          components: {
            cartPreview: d.default,
            ClientInfo: f.default,
            ShippingMethod: m.default,
            PaymentMethod: v.default,
          },
          fetch: function () {
            var t = this;
            return Object(o.a)(
              regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2), t.$store.dispatch('initializeCustomer')
                        );
                      case 2:
                      case 'end':
                        return e.stop();
                    }
                }, e);
              }),
            )();
          },
          computed: (function (t) {
            for (var i = 1; i < arguments.length; i++) {
              var source = null != arguments[i] ? arguments[i] : {};
              i % 2
                ? w(Object(source), !0).forEach(function (e) {
                    Object(n.a)(t, e, source[e]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    t,
                    Object.getOwnPropertyDescriptors(source),
                  )
                : w(Object(source)).forEach(function (e) {
                    Object.defineProperty(
                      t,
                      e,
                      Object.getOwnPropertyDescriptor(source, e),
                    );
                  });
            }
            return t;
          })({}, Object(c.b)(['cart', 'cartIsUpdating', 'currency', 'locale'])),
          watch: {},
          mounted: function () {
            console.log(this.$swell),
              this.$store.dispatch('initializeCustomer');
          },
          methods: {},
          validations: function () {},
        },
        _ = x,
        O = r(3),
        component = Object(O.a)(
          _,
          function () {
            var t = this,
              e = t._self._c;
            return e('main', [
              e('section', { staticClass: 'md:flex' }, [
                e('div', { staticClass: 'relative md:w-2/3' }, [
                  t.cart && t.cart.items && t.cart.items.length
                    ? e('div', [
                        t._m(0),
                        t._v(' '),
                        e('div', { staticClass: 'text-gray-600' }, [
                          e(
                            'div',
                            {
                              staticClass:
                                'container flex flex-col flex-wrap px-5 py-4 mx-auto',
                            },
                            [
                              e(
                                'div',
                                { staticClass: 'flex flex-wrap mx-auto' },
                                [
                                  e(
                                    'a',
                                    {
                                      staticClass:
                                        'cursor-pointer inline-flex items-center justify-center w-1/2 py-3 font-medium leading-none tracking-wider border-b-2 sm:px-6 sm:w-auto sm:justify-start title-font',
                                      class: {
                                        'text-blue-500 bg-blue-100 border-indigo-500':
                                          1 == t.step,
                                      },
                                      on: {
                                        click: function (e) {
                                          t.step = 1;
                                        },
                                      },
                                    },
                                    [
                                      t._v(
                                        '\n                Información del cliente\n              ',
                                      ),
                                    ],
                                  ),
                                  t._v(' '),
                                  e(
                                    'a',
                                    {
                                      staticClass:
                                        'cursor-pointer inline-flex items-center justify-center w-1/2 py-3 font-medium leading-none tracking-wider border-b-2 sm:px-6 sm:w-auto sm:justify-start title-font',
                                      class: {
                                        'text-blue-500 bg-blue-100 border-indigo-500':
                                          2 == t.step,
                                      },
                                      on: {
                                        click: function (e) {
                                          t.step = 2;
                                        },
                                      },
                                    },
                                    [
                                      t._v(
                                        '\n                Metodo de envío\n              ',
                                      ),
                                    ],
                                  ),
                                  t._v(' '),
                                  e(
                                    'a',
                                    {
                                      staticClass:
                                        'cursor-pointer inline-flex items-center justify-center w-1/2 py-3 font-medium leading-none tracking-wider border-b-2 sm:px-6 sm:w-auto sm:justify-start title-font',
                                      class: {
                                        'text-blue-500 bg-blue-100 border-indigo-500':
                                          3 == t.step,
                                      },
                                      on: {
                                        click: function (e) {
                                          t.step = 3;
                                        },
                                      },
                                    },
                                    [
                                      t._v(
                                        '\n                Metodo de pago\n              ',
                                      ),
                                    ],
                                  ),
                                ],
                              ),
                              t._v(' '),
                              e(
                                'div',
                                { staticClass: 'flex flex-col w-full' },
                                [
                                  e(
                                    'div',
                                    {
                                      staticClass:
                                        'py-4 bg-white sm:py-4 lg:py-4',
                                    },
                                    [
                                      e(
                                        'div',
                                        {
                                          staticClass:
                                            'px-4 mx-auto max-w-screen-2xl md:px-8',
                                        },
                                        [
                                          e('ClientInfo', {
                                            directives: [
                                              {
                                                name: 'show',
                                                rawName: 'v-show',
                                                value: 1 == t.step,
                                                expression: 'step == 1',
                                              },
                                            ],
                                            on: {
                                              advance: function (e) {
                                                t.step = 2;
                                              },
                                            },
                                          }),
                                          t._v(' '),
                                          e('ShippingMethod', {
                                            directives: [
                                              {
                                                name: 'show',
                                                rawName: 'v-show',
                                                value: 2 == t.step,
                                                expression: 'step == 2',
                                              },
                                            ],
                                            on: {
                                              advance: function (e) {
                                                t.step = 3;
                                              },
                                            },
                                          }),
                                          t._v(' '),
                                          e('PaymentMethod', {
                                            directives: [
                                              {
                                                name: 'show',
                                                rawName: 'v-show',
                                                value: 3 == t.step,
                                                expression: 'step == 3',
                                              },
                                            ],
                                          }),
                                        ],
                                        1,
                                      ),
                                    ],
                                  ),
                                ],
                              ),
                            ],
                          ),
                        ]),
                      ])
                    : t._e(),
                ]),
                t._v(' '),
                e(
                  'div',
                  { staticClass: 'md:w-1/3 bg-gray-200' },
                  [e('cartPreview')],
                  1,
                ),
              ]),
            ]);
          },
          [
            function () {
              var t = this,
                e = t._self._c;
              return e('div', { staticClass: 'mt-8' }, [
                e(
                  'h2',
                  {
                    staticClass:
                      'mb-4 text-2xl font-bold text-center text-gray-800 lg:text-3xl md:mb-6',
                  },
                  [t._v('\n            The Sweet Spot\n          ')],
                ),
                t._v(' '),
                e(
                  'p',
                  {
                    staticClass:
                      'max-w-screen-md mx-auto text-center text-gray-500 md:text-lg',
                  },
                  [
                    t._v(
                      '\n            Por favor llena tu información.\n          ',
                    ),
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
    },
  },
]);
