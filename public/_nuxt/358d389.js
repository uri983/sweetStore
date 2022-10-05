(window.webpackJsonp = window.webpackJsonp || []).push([
  [74, 31],
  {
    587: function (t, e, r) {
      var n = r(588),
        o = r(591)(n);
      t.exports = o;
    },
    588: function (t, e, r) {
      var n = r(589),
        o = r(159);
      t.exports = function (object, t) {
        return object && n(object, t, o);
      };
    },
    589: function (t, e, r) {
      var n = r(590)();
      t.exports = n;
    },
    590: function (t, e) {
      t.exports = function (t) {
        return function (object, e, r) {
          for (
            var n = -1, o = Object(object), c = r(object), l = c.length;
            l--;

          ) {
            var d = c[t ? l : ++n];
            if (!1 === e(o[d], d, o)) break;
          }
          return object;
        };
      };
    },
    591: function (t, e, r) {
      var n = r(201);
      t.exports = function (t, e) {
        return function (r, o) {
          if (null == r) return r;
          if (!n(r)) return t(r, o);
          for (
            var c = r.length, l = e ? c : -1, d = Object(r);
            (e ? l-- : ++l < c) && !1 !== o(d[l], l, d);

          );
          return r;
        };
      };
    },
    592: function (t, e, r) {
      var content = r(630);
      content.__esModule && (content = content.default),
        'string' == typeof content && (content = [[t.i, content, '']]),
        content.locals && (t.exports = content.locals);
      (0, r(56).default)('45bbf294', content, !0, { sourceMap: !1 });
    },
    626: function (t, e, r) {
      var n = r(323),
        map = r(627);
      t.exports = function (t, e) {
        return n(map(t, e), 1);
      };
    },
    627: function (t, e, r) {
      var n = r(312),
        o = r(202),
        c = r(628),
        l = r(67);
      t.exports = function (t, e) {
        return (l(t) ? n : c)(t, o(e, 3));
      };
    },
    628: function (t, e, r) {
      var n = r(587),
        o = r(201);
      t.exports = function (t, e) {
        var r = -1,
          c = o(t) ? Array(t.length) : [];
        return (
          n(t, function (t, n, o) {
            c[++r] = e(t, n, o);
          }),
          c
        );
      };
    },
    629: function (t, e, r) {
      'use strict';
      r(592);
    },
    630: function (t, e, r) {
      var n = r(55)(function (i) {
        return i[1];
      });
      n.push([
        t.i,
        '.overlay[data-v-52da565d]{position:absolute;top:0;left:0;height:100%;width:100%;--tw-bg-opacity:1;background-color:rgba(28, 26, 23, var(--tw-bg-opacity));opacity:0.5}',
        '',
      ]),
        (n.locals = {}),
        (t.exports = n);
    },
    676: function (t, e, r) {
      'use strict';
      r.r(e);
      r(45);
      var n = r(626),
        o = r.n(n),
        c = r(13),
        l = r.n(c),
        d = {
          props: { order: { type: Object, default: null } },
          computed: {
            thumbnails: function () {
              return this.orderProducts.length
                ? o()(this.orderProducts.slice(0, 4), function (t) {
                    var e;
                    return null !== (e = t.images) && void 0 !== e && e.length
                      ? l()(t, 'images[0].file', !1)
                      : null;
                  })
                : [];
            },
            orderProducts: function () {
              return this.order.items
                ? o()(this.order.items, function (t) {
                    return t.product ? t.product : [];
                  })
                : [];
            },
            formattedDate: function () {
              if (this.order) {
                var t = new Date(this.order.dateCreated);
                return new Intl.DateTimeFormat('default', {
                  month: 'long',
                  day: '2-digit',
                  year: 'numeric',
                }).format(t);
              }
            },
            statusMessage: function () {
              switch (this.order.status) {
                case 'pending':
                  return [
                    this.$t('account.orders.order.status.pendingMessage'),
                    this.$t('account.orders.order.status.pending'),
                  ];
                case 'draft':
                  return [
                    this.$t('account.orders.order.status.draftMessage'),
                    this.$t('account.orders.order.status.draft'),
                  ];
                case 'payment_pending':
                  return [
                    this.$t(
                      'account.orders.order.status.pendingPaymentMessage',
                    ),
                    this.$t('account.orders.order.status.pendingPayment'),
                  ];
                case 'delivery_pending':
                  return [
                    this.$t(
                      'account.orders.order.status.pendingDeliveryMessage',
                    ),
                    this.$t('account.orders.order.status.pendingDelivery'),
                  ];
                case 'hold':
                  return [
                    this.$t('account.orders.order.status.holdMessage'),
                    this.$t('account.orders.order.status.hold'),
                  ];
                case 'complete':
                  return [
                    this.$t('account.orders.order.status.completeMessage'),
                    this.$t('account.orders.order.status.complete'),
                  ];
                case 'canceled':
                  return [
                    this.$t('account.orders.order.status.canceledMessage'),
                    this.$t('account.orders.order.status.canceled'),
                  ];
                default:
                  return ['', ''];
              }
            },
          },
        },
        m = (r(629), r(3)),
        component = Object(m.a)(
          d,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              'div',
              {
                staticClass:
                  'rounded bg-primary-lightest py-4 shadow-md md:py-0',
              },
              [
                e(
                  'div',
                  {
                    staticClass:
                      'container grid grid-cols-1 gap-4 md:grid-cols-2 md:p-4',
                  },
                  [
                    e(
                      'div',
                      {
                        staticClass: 'mb-4 grid md:mb-0',
                        class: {
                          'grid-cols-1 gap-4 md:grid-cols-2':
                            1 === t.thumbnails.length,
                          'grid-cols-2 gap-4': 2 === t.thumbnails.length,
                          'grid-cols-2 grid-rows-2 gap-4':
                            t.thumbnails.length > 2,
                        },
                      },
                      t._l(t.thumbnails, function (r, n) {
                        return e(
                          'div',
                          {
                            key: 'product-media-'.concat(n),
                            staticClass: 'relative overflow-hidden rounded',
                          },
                          [
                            r
                              ? e('VisualMedia', {
                                  attrs: { source: r, sizes: '120px' },
                                })
                              : e(
                                  'div',
                                  {
                                    staticClass:
                                      'relative rounded bg-primary-lighter pb-full',
                                  },
                                  [
                                    e('BaseIcon', {
                                      staticClass:
                                        'center-xy absolute text-primary-med',
                                      attrs: {
                                        icon: 'uil:camera-slash',
                                        size: 'lg',
                                      },
                                    }),
                                  ],
                                  1,
                                ),
                            t._v(' '),
                            t.orderProducts.length > t.thumbnails.length &&
                            n === t.thumbnails.length - 1
                              ? e(
                                  'div',
                                  {
                                    staticClass:
                                      'overlay text-primary-lightest',
                                  },
                                  [
                                    e(
                                      'span',
                                      {
                                        staticClass:
                                          'center-xy absolute text-lg font-semibold text-primary-lightest',
                                      },
                                      [
                                        t._v(
                                          '\n            +' +
                                            t._s(
                                              t.orderProducts.length -
                                                t.thumbnails.length,
                                            ) +
                                            '\n          ',
                                        ),
                                      ],
                                    ),
                                  ],
                                )
                              : t._e(),
                          ],
                          1,
                        );
                      }),
                      0,
                    ),
                    t._v(' '),
                    e(
                      'div',
                      { staticClass: 'flex flex-col' },
                      [
                        e(
                          'div',
                          {
                            staticClass: 'mb-3 hidden md:flex md:items-center',
                          },
                          [
                            e(
                              'h2',
                              { staticClass: 'mb-0 inline-block text-xl' },
                              [
                                t._v(
                                  '\n          ' +
                                    t._s(t.statusMessage[1]) +
                                    '\n        ',
                                ),
                              ],
                            ),
                            t._v(' '),
                            e(
                              'svg',
                              {
                                staticClass:
                                  'ml-2 inline-block h-3 w-3 fill-current',
                                class: {
                                  'text-ok-default':
                                    'complete' === t.order.status,
                                  'text-error-default':
                                    'canceled' === t.order.status,
                                  'text-primary-dark':
                                    'complete' !== t.order.status ||
                                    'canceled' !== t.order.status,
                                },
                                attrs: { fill: 'none', viewBox: '0 0 10 10' },
                              },
                              [
                                e('circle', {
                                  attrs: { cx: '5', cy: '5', r: '5' },
                                }),
                              ],
                            ),
                          ],
                        ),
                        t._v(' '),
                        e('h2', { staticClass: 'md:hidden' }, [
                          t._v(
                            '\n        ' +
                              t._s(t.$t('account.orders.order.title')) +
                              ' #' +
                              t._s(t.order.number) +
                              '\n      ',
                          ),
                        ]),
                        t._v(' '),
                        e('p', { staticClass: 'mb-2 text-sm' }, [
                          e('span', { staticClass: 'pr-2' }, [
                            t._v(t._s(t.$t('account.orders.order.date'))),
                          ]),
                          t._v(' '),
                          e('span', { staticClass: 'font-semibold' }, [
                            t._v(t._s(t.formattedDate)),
                          ]),
                        ]),
                        t._v(' '),
                        e('p', { staticClass: 'mb-2 text-sm' }, [
                          e('span', { staticClass: 'pr-2' }, [
                            t._v(t._s(t.$t('account.orders.order.title'))),
                          ]),
                          t._v(' '),
                          e('span', { staticClass: 'font-semibold' }, [
                            t._v('#' + t._s(t.order.number)),
                          ]),
                        ]),
                        t._v(' '),
                        e('p', { staticClass: 'mb-2 text-sm' }, [
                          e('span', { staticClass: 'pr-2' }, [
                            t._v(t._s(t.$t('account.orders.order.total'))),
                          ]),
                          t._v(' '),
                          e('span', { staticClass: 'font-semibold' }, [
                            t._v(
                              t._s(
                                t.formatMoney(
                                  t.order.grandTotal,
                                  t.order.currency,
                                ),
                              ),
                            ),
                          ]),
                        ]),
                        t._v(' '),
                        e('div', { staticClass: 'mb-10 md:hidden' }, [
                          e(
                            'svg',
                            {
                              staticClass:
                                'mr-1 inline-block h-2 w-2 fill-current',
                              class: {
                                'text-ok-default':
                                  'complete' === t.order.status,
                                'text-error-default':
                                  'canceled' === t.order.status,
                                'text-primary-dark':
                                  'complete' !== t.order.status ||
                                  'canceled' !== t.order.status,
                              },
                              attrs: { fill: 'none', viewBox: '0 0 10 10' },
                            },
                            [
                              e('circle', {
                                attrs: { cx: '5', cy: '5', r: '5' },
                              }),
                            ],
                          ),
                          t._v(' '),
                          e('span', { staticClass: 'text-sm' }, [
                            t._v(t._s(t.statusMessage[0])),
                          ]),
                        ]),
                        t._v(' '),
                        e('BaseButton', {
                          staticClass: 'mt-auto',
                          attrs: {
                            link: t.localePath(
                              '/account/orders/'.concat(t.order.id, '/'),
                            ),
                            appearance: 'light',
                            label: t.$t('account.orders.order.view'),
                          },
                        }),
                      ],
                      1,
                    ),
                  ],
                ),
              ],
            );
          },
          [],
          !1,
          null,
          '52da565d',
          null,
        );
      e.default = component.exports;
      installComponents(component, {
        BaseIcon: r(30).default,
        BaseButton: r(84).default,
      });
    },
    773: function (t, e, r) {
      'use strict';
      r.r(e);
      var n = r(0),
        o =
          (r(15),
          {
            layout: 'account',
            data: function () {
              return { orders: null, shopLink: null };
            },
            fetch: function () {
              var t = this;
              return Object(n.a)(
                regeneratorRuntime.mark(function e() {
                  var r, n, o;
                  return regeneratorRuntime.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (r = t.$swell), (e.next = 3), r.account.listOrders()
                          );
                        case 3:
                          return (
                            (n = e.sent),
                            (o = n.results),
                            (t.orders = o),
                            (e.next = 8),
                            r.settings.get('/', '/')
                          );
                        case 8:
                          t.shopLink = e.sent;
                        case 9:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              )();
            },
            head: function () {
              return { title: this.$t('account.orders.title') };
            },
          }),
        c = o,
        l = r(3),
        component = Object(l.a)(
          c,
          function () {
            var t = this,
              e = t._self._c;
            return e('div', { staticClass: 'container md:pr-0' }, [
              e('h1', { staticClass: 'mb-8 hidden text-4xl md:block' }, [
                t._v('\n    ' + t._s(t.$t('account.orders.title')) + '\n  '),
              ]),
              t._v(' '),
              t.$fetchState.pending
                ? e('div', [
                    e('div', {
                      staticClass: 'loader-el m-auto mb-6 h-7 w-1/3',
                    }),
                    t._v(' '),
                    e('div', {
                      staticClass: 'loader-el m-auto mb-4 h-2 w-3/5',
                    }),
                    t._v(' '),
                    e('div', {
                      staticClass: 'loader-el m-auto mb-8 h-2 w-2/5',
                    }),
                  ])
                : e(
                    'div',
                    [
                      t.orders && t.orders.length
                        ? t._l(t.orders, function (t, r) {
                            return e('AccountOrderContainer', {
                              key: 'order-'.concat(r),
                              staticClass: 'mb-6 last:mb-0',
                              attrs: { order: t },
                            });
                          })
                        : [
                            e(
                              'p',
                              { staticClass: 'text-sm text-primary-dark' },
                              [
                                t._v(
                                  '\n        ' +
                                    t._s(t.$t('account.orders.noOrders')) +
                                    '\n      ',
                                ),
                              ],
                            ),
                            t._v(' '),
                            e('BaseButton', {
                              staticClass: 'mt-10 block',
                              attrs: {
                                fit: 'auto',
                                appearance: 'dark',
                                icon: 'shopping-bag',
                                label: t.$t('account.orders.backToProducts'),
                                link: t.shopLink,
                              },
                            }),
                          ],
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
        AccountOrderContainer: r(676).default,
        BaseButton: r(84).default,
      });
    },
  },
]);
