(window.webpackJsonp = window.webpackJsonp || []).push([
  [86, 63],
  {
    545: function (t, e, n) {
      'use strict';
      e.a = {
        mounted: function () {
          this.$store.state.refetchCurrency && this.$fetch();
        },
      };
    },
    566: function (t, e, n) {
      'use strict';
      var r = n(0),
        o = (n(15), n(42), n(12), n(11), n(57), n(200), n(13)),
        c = n.n(o),
        l = function (t) {
          var e = Array.isArray(t) ? c()(t, '0.file.url') : c()(t, 'file.url'),
            n = 1200,
            r = 630;
          return e
            ? ''.concat(e, '?w=').concat(n, '&h=').concat(r, '&q=100&fit=fill')
            : '';
        };
      e.a = {
        asyncData: function (t) {
          return Object(r.a)(
            regeneratorRuntime.mark(function e() {
              var n, r, o;
              return regeneratorRuntime.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (n = t.$swell),
                        (e.next = 3),
                        n.settings.get('store.name')
                      );
                    case 3:
                      return (
                        (r = e.sent), (e.next = 6), n.settings.get('store.url')
                      );
                    case 6:
                      return (
                        (o = e.sent),
                        e.abrupt('return', { storeName: r, storeUrl: o })
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
              n = this.categories,
              r = this.product,
              o = this.products,
              d = this.page,
              v = this.storeName,
              h = this.storeUrl,
              m = function (t) {
                return t + ' - ' + v;
              },
              meta = {
                storeName: v,
                url: h + t.path,
                title: v,
                description: '',
                image: {},
                link: [],
              };
            if (c()(this, '$fetchState.pending')) meta.title = 'Loading...';
            else if (e) {
              var title = e.metaTitle || e.name;
              (meta.title = m(title)),
                (meta.description = e.metaDescription || ''),
                (meta.image = l(e.images));
            } else if (n)
              (meta.title = m('Categories')),
                (meta.image = l(c()(n, '0.images')));
            else if (r) {
              var f = r.metaTitle || r.name;
              (meta.title = m(f)),
                (meta.description = r.metaDescription || ''),
                (meta.image = l(r.images));
            } else if (o)
              (meta.title = m('Products')),
                (meta.image = l(c()(o, '0.images')));
            else if (d) {
              var y = d.metaTitle || d.name;
              (meta.title = m(y)), (meta.description = d.metaDescription || '');
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
            n = t.storeName,
            r = t.url,
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
                { hid: 'og:site_name', property: 'og:site_name', content: n },
                { hid: 'og:title', property: 'og:title', content: title },
                {
                  hid: 'og:description',
                  property: 'og:description',
                  content: o,
                },
                { hid: 'og:url', property: 'og:url', content: r },
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
    692: function (t, e, n) {
      'use strict';
      n.r(e);
      n(38), n(46), n(26), n(86), n(11), n(57), n(63);
      var r = {
          email: 'mailto:%20?subject=@t&body=@u%0D%0A@d',
          facebook:
            'https://www.facebook.com/sharer/sharer.php?u=@u&title=@t&description=@d',
          pinterest:
            'https://pinterest.com/pin/create/button/?url=@u&media=@m&description=@t',
          twitter: 'https://twitter.com/intent/tweet?text=@t&url=@u',
        },
        o = 'undefined' != typeof window ? window : null,
        c = {
          name: 'SocialShare',
          props: {
            network: { type: String, default: 'facebook' },
            url: { type: String, default: null },
            title: { type: String, default: null },
            description: { type: String, default: null },
            media: { type: String, default: null },
          },
          data: function () {
            return {
              popup: { width: 620, height: 420 },
              popupTop: 0,
              popupLeft: 0,
              popupWindow: void 0,
              popupInterval: null,
            };
          },
          computed: {
            rawLink: function () {
              var t = navigator.userAgent.toLowerCase(),
                e = this.network.toLowerCase();
              return t.includes('ipad') > -1 ? r[e].replace(':?', ':&') : r[e];
            },
            shareLink: function () {
              var link = this.rawLink;
              if (link)
                return link
                  .replace(/@u/g, encodeURIComponent(this.url))
                  .replace(/@t/g, encodeURIComponent(this.title))
                  .replace(/@d/g, encodeURIComponent(this.description))
                  .replace(/@m/g, encodeURIComponent(this.media));
            },
          },
          methods: {
            handleShare: function () {
              'http' === this.rawLink.substring(0, 4)
                ? this.openSharePopup()
                : this.share();
            },
            resizePopup: function () {
              var t =
                  o.innerWidth ||
                  document.documentElement.clientWidth ||
                  o.screenX,
                e =
                  o.innerHeight ||
                  document.documentElement.clientHeight ||
                  o.screenY,
                n = t / o.screen.availWidth;
              (this.popupLeft =
                (t - this.popup.width) / 2 / n +
                (void 0 !== o.screenLeft ? o.screenLeft : o.screenX)),
                (this.popupTop =
                  (e - this.popup.height) / 2 / n +
                  (void 0 !== o.screenTop ? o.screenTop : o.screenY));
            },
            openSharePopup: function () {
              var t = this;
              this.resizePopup(),
                this.popupWindow &&
                  this.popupInterval &&
                  (clearInterval(this.popupInterval), this.popupWindow.close()),
                (this.popupWindow = o.open(
                  this.shareLink,
                  'sharer-' + this.network,
                  ',height=' +
                    this.popup.height +
                    ',width=' +
                    this.popup.width +
                    ',left=' +
                    this.popupLeft +
                    ',top=' +
                    this.popupTop +
                    ',screenX=' +
                    this.popupLeft +
                    ',screenY=' +
                    this.popupTop,
                )),
                this.popupWindow &&
                  (this.popupWindow.focus(),
                  (this.popupInterval = setInterval(function () {
                    (t.popupWindow && !t.popupWindow.closed) ||
                      (clearInterval(t.popupInterval), (t.popupWindow = null));
                  }, 500)));
            },
            share: function () {
              window.open(this.shareLink, '_blank');
            },
          },
        },
        l = n(3),
        component = Object(l.a)(
          c,
          function () {
            var t = this;
            return (0, t._self._c)(
              'a',
              {
                attrs: { href: '#' },
                on: {
                  click: function (e) {
                    return t.handleShare();
                  },
                },
              },
              [t._t('default')],
              2,
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
    784: function (t, e, n) {
      'use strict';
      n.r(e);
      var r = n(4);
      n(12), n(11), n(57), n(16), n(14), n(6), n(20), n(17), n(21);
      function o(object, t) {
        var e = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(object);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(object, t).enumerable;
            })),
            e.push.apply(e, n);
        }
        return e;
      }
      function c(t) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? o(Object(source), !0).forEach(function (e) {
                Object(r.a)(t, e, source[e]);
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
      var l = n(85),
        d = n(0),
        v =
          (n(15),
          n(35),
          n(25),
          n(66),
          n(50),
          n(38),
          n(46),
          n(27),
          n(327),
          n(160),
          n(10)),
        h = n(13),
        m = n.n(h),
        f = n(121),
        y = n.n(f),
        w = n(62),
        I = n(36),
        _ = n(566),
        O = n(76),
        k = n(126),
        C = n(545);
      function S(object, t) {
        var e = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(object);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(object, t).enumerable;
            })),
            e.push.apply(e, n);
        }
        return e;
      }
      function x(t) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? S(Object(source), !0).forEach(function (e) {
                Object(r.a)(t, e, source[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(
                t,
                Object.getOwnPropertyDescriptors(source),
              )
            : S(Object(source)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(source, e),
                );
              });
        }
        return t;
      }
      var P = {
          name: 'ProductDetailPage',
          mixins: [_.a, w.validationMixin, C.a],
          data: function () {
            return {
              product: {},
              quantity: 1,
              enableQuantity: !0,
              maxQuantity: 99,
              relatedProducts: [],
              bundleItemsOptionState: null,
              bundleItemsAvailable: !0,
              optionState: {},
              selectedPurchaseOption: void 0,
              productBenefits: [],
              upsellProductCols: 4,
              enableSocialSharing: !1,
              showStockLevel: !1,
              activeDropdownUID: null,
            };
          },
          fetch: function () {
            var t = this;
            return Object(d.a)(
              regeneratorRuntime.mark(function e() {
                var n, r, o, c, l, d, v, h;
                return regeneratorRuntime.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (r = t.$swell),
                          (o = t.$route),
                          (e.next = 3),
                          r.products.get(o.params.slug, {
                            expand: ['up_sells.product', 'cross_sells'],
                          })
                        );
                      case 3:
                        if (
                          ((c = e.sent),
                          (l = c.purchaseOptions) &&
                            l.subscription &&
                            l.subscription.plans &&
                            (l.subscription.plans = l.subscription.plans.filter(
                              function (t) {
                                return t && t.price > 0;
                              },
                            )),
                          c)
                        ) {
                          e.next = 8;
                          break;
                        }
                        return e.abrupt(
                          'return',
                          t.$nuxt.error({
                            statusCode: 404,
                            message: t.$t('errors.productNotFound'),
                          }),
                        );
                      case 8:
                        c.bundle &&
                          null !== (n = c.bundleItems) &&
                          void 0 !== n &&
                          n.length &&
                          ((d = c.bundleItems.map(function (t) {
                            var e,
                              n = [];
                            return (
                              (n =
                                null !== (e = t.options) &&
                                void 0 !== e &&
                                e.length
                                  ? t.options.reduce(function (t, e) {
                                      var n = e.name,
                                        r = e.value;
                                      return t.push({ name: n, value: r }), t;
                                    }, [])
                                  : t.product.options.reduce(function (t, e) {
                                      var n = e.name,
                                        r = e.values,
                                        o = e.inputType,
                                        c = null;
                                      return (
                                        (o && 'select' !== o) ||
                                          (c = m()(r, '0.name')),
                                        t.push({ name: n, value: c }),
                                        t
                                      );
                                    }, [])),
                              { id: t.id, productId: t.productId, options: n }
                            );
                          })),
                          (t.bundleItemsOptionState = d)),
                          (v = []),
                          (h =
                            (h = m()(c, 'content.maxQuantity')) &&
                            'string' == typeof h
                              ? Number(h)
                              : 99),
                          (h = isNaN(h) ? 99 : h),
                          (t.selectedPurchaseOption = Object(k.a)(
                            c.purchaseOptions,
                          )),
                          (t.product = c),
                          t.getInitialOptions(c),
                          (t.relatedProducts = v),
                          (t.productBenefits = m()(
                            c,
                            'content.productBenefits',
                            [],
                          )),
                          (t.enableSocialSharing = m()(
                            c,
                            'content.enableSocialSharing',
                          )),
                          (t.showStockLevel = m()(c, 'content.showStockLevel')),
                          (t.enableQuantity = m()(c, 'content.enableQuantity')),
                          (t.upsellProductCols =
                            m()(c, 'content.upSellCols') || 4),
                          (t.maxQuantity = h);
                      case 23:
                      case 'end':
                        return e.stop();
                    }
                }, e);
              }),
            )();
          },
          computed: x(
            x(
              {},
              Object(v.b)(['cartIsUpdating', 'headerIsVisible', 'currency']),
            ),
            {},
            {
              variation: function () {
                return this.product
                  ? this.$swell.products.variation(
                      this.product,
                      this.selectedOptions,
                      this.selectedPurchaseOption,
                    )
                  : {};
              },
              activeVariantOptionIds: function () {
                var t, e;
                return null !== (t = this.product) &&
                  void 0 !== t &&
                  t.variants.results.length
                  ? null === (e = this.product) || void 0 === e
                    ? void 0
                    : e.variants.results.reduce(function (t, e) {
                        return t.push(e.optionValueIds), t;
                      }, [])
                  : [];
              },
              bundleItems: function () {
                var t;
                return this.product.bundle ||
                  (null !== (t = this.product.bundleItems) &&
                    void 0 !== t &&
                    t.length)
                  ? this.product.bundleItems
                  : null;
              },
              available: function () {
                var t = this.variation,
                  e = t.stockStatus,
                  n = t.stockTracking,
                  r = t.stockPurchasable;
                return (
                  !(!this.bundleItemsAvailable || this.variation.price <= 0) &&
                  ((e && 'out_of_stock' !== e) || !n || r)
                );
              },
              productImages: function () {
                var t, e;
                return null !== (t = this.product) &&
                  void 0 !== t &&
                  null !== (e = t.images) &&
                  void 0 !== e &&
                  e.length
                  ? this.product.images
                  : null;
              },
              billingInterval: function () {
                return m()(this, 'selectedOptions.Plan');
              },
              intervalData: function () {
                var t = this;
                if (
                  this.selectedPurchaseOption &&
                  'subscription' === this.selectedPurchaseOption.type
                ) {
                  var e = this.product.purchaseOptions.subscription.plans.find(
                    function (e) {
                      return e.id === t.selectedPurchaseOption.plan;
                    },
                  ).billingSchedule;
                  return {
                    interval: e.interval,
                    intervalCount: e.intervalCount,
                  };
                }
              },
              intervalCount: function () {
                if (this.intervalData) {
                  var t = this.intervalData.intervalCount;
                  return t > 1 ? t : '';
                }
              },
              subscriptionInterval: function () {
                if (this.intervalData)
                  return this.$t(
                    'products.slug.purchaseOptions.interval.'.concat(
                      this.intervalData.interval,
                      '.short',
                    ),
                  );
              },
              selectedOptions: function () {
                return this.normalizeOptions(this.optionState);
              },
              upsellProducts: function () {
                var t, e;
                return null !== (t = this.product) &&
                  void 0 !== t &&
                  null !== (e = t.upSells) &&
                  void 0 !== e &&
                  e.length
                  ? this.product.upSells.map(function (t) {
                      return t.product;
                    })
                  : null;
              },
              optionInputs: function () {
                var t = this,
                  e = m()(this, 'product.options', []),
                  r = 1 === e.length && 'select' === e[0].inputType;
                return e.reduce(function (e, option) {
                  var o;
                  switch (option.inputType) {
                    case 'short_text':
                    case 'long_text':
                      o = 'Text';
                      break;
                    case 'toggle':
                      o = 'Checkbox';
                      break;
                    default:
                      o = 'Select';
                  }
                  if (option.subscription && option.values.length < 2) return e;
                  if (r) {
                    var c = option.values.filter(function (e) {
                      return y()(t.activeVariantOptionIds).includes(e.id);
                    });
                    option.values = c;
                  }
                  return (
                    e.push({
                      option: option,
                      component: function () {
                        return n(162)('./ProductOption'.concat(o, '.vue'));
                      },
                    }),
                    e
                  );
                }, []);
              },
            },
          ),
          watch: {
            currency: '$fetch',
            selectedPurchaseOption: function () {
              this.quantity = 1;
            },
            variation: function (t) {
              this.exposeProduct(t);
            },
          },
          mounted: function () {
            this.checkBundleItemAvailability();
          },
          methods: {
            getAttributeComponent: function (t) {
              switch (t) {
                case 'long_text':
                case 'textarea':
                  return 'AttributeLongText';
                case 'file':
                  return 'AttributeFile';
                case 'image':
                  return 'AttributeImage';
                case 'currency':
                  return 'AttributeCurrency';
                default:
                  return 'AttributeShortText';
              }
            },
            setActiveDropdownUID: function (t) {
              this.activeDropdownUID = t;
            },
            addToCart: function () {
              var t = this;
              return Object(d.a)(
                regeneratorRuntime.mark(function e() {
                  var n, r, o;
                  return regeneratorRuntime.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (((e.prev = 0), t.$v.$touch(), !t.$v.$invalid)) {
                              e.next = 4;
                              break;
                            }
                            return e.abrupt('return');
                          case 4:
                            if (
                              !t.bundleItems ||
                              null === (n = t.$refs.bundleItem) ||
                              void 0 === n ||
                              !n.length
                            ) {
                              e.next = 15;
                              break;
                            }
                            if (
                              (t.$refs.bundleItem.forEach(function (t) {
                                return t.$v.$touch();
                              }),
                              (r = t.$refs.bundleItem.every(function (t) {
                                return !t.$v.$invalid;
                              })),
                              (o = t.$refs.bundleItemAccordion) &&
                                !o.isExpanded &&
                                o.toggleExpanded(),
                              r)
                            ) {
                              e.next = 11;
                              break;
                            }
                            return e.abrupt('return');
                          case 11:
                            return (
                              (e.next = 13),
                              t.$store.dispatch('addCartItem', {
                                productId: t.variation.id,
                                quantity: t.quantity || 1,
                                options: t.selectedOptions,
                                purchaseOption: t.selectedPurchaseOption,
                                bundleItems: t.bundleItemsOptionState,
                              })
                            );
                          case 13:
                            e.next = 17;
                            break;
                          case 15:
                            return (
                              (e.next = 17),
                              t.$store.dispatch('addCartItem', {
                                productId: t.variation.id,
                                quantity: t.quantity || 1,
                                options: t.selectedOptions,
                                purchaseOption: t.selectedPurchaseOption,
                              })
                            );
                          case 17:
                            e.next = 22;
                            break;
                          case 19:
                            (e.prev = 19),
                              (e.t0 = e.catch(0)),
                              'invalid_stock' === e.t0.message &&
                                t.$store.dispatch('showNotification', {
                                  message: t.$t('cart.exceedsStockLevel'),
                                  type: 'error',
                                });
                          case 22:
                          case 'end':
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 19]],
                  );
                }),
              )();
            },
            setOptionValue: function (t) {
              var e = t.optionId,
                n = t.option,
                o = t.value,
                c = x(
                  x({}, this.optionState[e] || {}),
                  {},
                  { name: n, value: o },
                ),
                l = x(x({}, this.optionState), {}, Object(r.a)({}, e, c)),
                d = this.product.options || [],
                v = Object(O.a)(d, this.normalizeOptions(l, !1)).map(function (
                  t,
                ) {
                  return t.id;
                });
              this.optionState = this.markVisibleOptions(l, v);
            },
            setBundleItemOptionValue: function (t) {
              var option = t.option,
                e = t.value,
                n = t.productId;
              if (!this.bundleItemsOptionState) return null;
              var r = Object(l.a)(this.bundleItemsOptionState),
                o = r.findIndex(function (t) {
                  return t.productId === n;
                }),
                c = r[o].options.findIndex(function (t) {
                  return t.name === option;
                });
              (r[o].options[c].value = e), (this.bundleItemsOptionState = r);
            },
            checkBundleItemAvailability: function () {
              this.bundleItems && this.$refs.bundleItem
                ? (this.bundleItemsAvailable = this.$refs.bundleItem.every(
                    function (t) {
                      return t.available;
                    },
                  ))
                : (this.bundleItemsAvailable = !0);
            },
            navigateBack: function () {
              this.$router.back();
            },
            getInitialOptions: function (t) {
              var e = this;
              if (t) {
                var n = t.options || [],
                  r = n.reduce(function (t, r) {
                    var o = r.id,
                      c = r.name,
                      l = r.required,
                      d = r.values,
                      v = r.inputType,
                      option = { name: c, required: l, isVisible: !1 };
                    if (v && 'select' !== v) t[o] = option;
                    else if (1 === n.length) {
                      var h = d.filter(function (t) {
                        return y()(e.activeVariantOptionIds).includes(t.id);
                      });
                      t[o] = x(x({}, option), {}, { value: h[0].name });
                    } else t[o] = x(x({}, option), {}, { value: d[0].name });
                    return t;
                  }, {}),
                  o = this.normalizeOptions(r, !1),
                  c = Object(O.a)(n, o).map(function (t) {
                    return t.id;
                  });
                this.optionState = this.markVisibleOptions(r, c);
              }
            },
            normalizeOptions: function (t) {
              var e =
                !(arguments.length > 1 && void 0 !== arguments[1]) ||
                arguments[1];
              return Object.values(t).reduce(function (t, n) {
                var r = n.name,
                  o = n.value,
                  c = n.isVisible;
                return (!e || (e && c)) && r && o && (t[r] = o), t;
              }, {});
            },
            markVisibleOptions: function (t, e) {
              return (
                Object.keys(t).forEach(function (n) {
                  e.includes(n) ? (t[n].isVisible = !0) : (t[n].isVisible = !1);
                }),
                t
              );
            },
            exposeProduct: function (t) {
              var e;
              if (window) {
                var n = window.Swell,
                  r = x(
                    x({}, n),
                    {},
                    {
                      theme: x(
                        x({}, null == n ? void 0 : n.theme),
                        {},
                        {
                          page: x(
                            x(
                              {},
                              null == n ||
                                null === (e = n.theme) ||
                                void 0 === e
                                ? void 0
                                : e.page,
                            ),
                            {},
                            {
                              product: {
                                id: this.product.id,
                                variation: {
                                  id:
                                    this.variation.variantId ||
                                    this.variation.id,
                                  stock: {
                                    status: this.variation.stockStatus,
                                    purchasable:
                                      this.variation.stockPurchasable,
                                    tracking: this.variation.stockTracking,
                                    level: this.variation.stockLevel,
                                  },
                                },
                              },
                            },
                          ),
                        },
                      ),
                    },
                  );
                window.Swell = r;
                var o = new CustomEvent('variation-change', { detail: t });
                window.dispatchEvent(o);
              }
            },
          },
          validations: function () {
            return {
              selectedOptions: Object.values(this.optionState).reduce(function (
                t,
                option,
              ) {
                return (
                  option.isVisible &&
                    option.required &&
                    (t[option.name] = { required: I.required }),
                  t
                );
              },
              {}),
            };
          },
        },
        j = P,
        $ = n(3),
        component = Object($.a)(
          j,
          function () {
            var t = this,
              e = t._self._c;
            return e('main', [
              e('section', { staticClass: 'mb-12 md:flex' }, [
                e(
                  'div',
                  { staticClass: 'relative md:w-1/2' },
                  [
                    t.productImages
                      ? e('MediaSlider', {
                          staticClass: 'h-0 pb-full md:hidden',
                          attrs: { media: t.productImages },
                        })
                      : e(
                          'div',
                          {
                            staticClass:
                              'relative rounded bg-primary-lighter pb-full md:hidden',
                          },
                          [
                            e('BaseIcon', {
                              staticClass:
                                'center-xy absolute text-primary-med',
                              attrs: { icon: 'uil:camera-slash', size: 'lg' },
                            }),
                          ],
                          1,
                        ),
                    t._v(' '),
                    e(
                      'div',
                      { staticClass: 'hidden h-full md:block' },
                      [
                        t.$fetchState.pending
                          ? e('div', {
                              staticClass: 'h-full bg-primary-lighter',
                            })
                          : [
                              t.productImages
                                ? e(
                                    'div',
                                    t._l(t.productImages, function (image) {
                                      return e('VisualMedia', {
                                        key: image.id,
                                        attrs: {
                                          source: image,
                                          alt: image.alt,
                                          sizes:
                                            '(min-width: 768px) 50vw, 100vw',
                                        },
                                      });
                                    }),
                                    1,
                                  )
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
                            ],
                      ],
                      2,
                    ),
                    t._v(' '),
                    e(
                      'a',
                      {
                        staticClass:
                          'fixed left-6 bottom-6 flex h-9 w-9 items-center justify-center rounded-full bg-primary-lighter shadow-md',
                        attrs: { href: '#' },
                        on: {
                          click: function (e) {
                            return (
                              e.preventDefault(),
                              t.navigateBack.apply(null, arguments)
                            );
                          },
                        },
                      },
                      [
                        e('BaseIcon', {
                          staticClass: '-ml-px',
                          attrs: { icon: 'uil:angle-left' },
                        }),
                      ],
                      1,
                    ),
                  ],
                  1,
                ),
                t._v(' '),
                e('div', { staticClass: 'md:w-1/2 lg:px-6 xl:px-12' }, [
                  e(
                    'div',
                    {
                      staticClass:
                        'container top-0 max-w-160 pt-10 transition-all duration-300 ease-in-out md:sticky md:pt-12',
                      class: t.headerIsVisible ? 'top-20' : 'top-0',
                    },
                    [
                      t.$fetchState.pending
                        ? e(
                            'div',
                            [
                              e('div', {
                                staticClass: 'loader-el mb-4 h-3 w-32',
                              }),
                              t._v(' '),
                              e('div', {
                                staticClass: 'loader-el mb-7 h-9 w-2/3',
                              }),
                              t._v(' '),
                              e('div', {
                                staticClass: 'loader-el mb-4 h-3 w-40',
                              }),
                              t._v(' '),
                              e('div', {
                                staticClass: 'loader-el mb-12 h-4 w-20',
                              }),
                              t._v(' '),
                              t._l(7, function (t) {
                                return e('div', {
                                  key: 'skeleton-1-'.concat(t),
                                  staticClass: 'loader-el mb-4 h-2',
                                  style: 'width: '.concat(
                                    100 - 20 * Math.random(),
                                    '%',
                                  ),
                                });
                              }),
                              t._v(' '),
                              t._m(0),
                              t._v(' '),
                              e('div', { staticClass: 'loader-el mb-10 h-12' }),
                              t._v(' '),
                              t._l(3, function (n) {
                                return e(
                                  'div',
                                  {
                                    key: 'skeleton-2-'.concat(n),
                                    staticClass: 'mb-2 flex items-center',
                                  },
                                  [
                                    e('div', {
                                      staticClass:
                                        'loader-el mr-2 h-5 w-5 rounded-full',
                                    }),
                                    t._v(' '),
                                    e('div', {
                                      staticClass: 'loader-el h-2',
                                      style: 'width: '.concat(
                                        80 - 30 * Math.random(),
                                        '%',
                                      ),
                                    }),
                                  ],
                                );
                              }),
                            ],
                            2,
                          )
                        : e(
                            'div',
                            [
                              e('h1', { staticClass: 'mb-4 leading-tight' }, [
                                t._v(
                                  '\n            ' +
                                    t._s(t.product.name) +
                                    '\n          ',
                                ),
                              ]),
                              t._v(' '),
                              e(
                                'div',
                                {
                                  staticClass:
                                    'mt-2 mb-5 flex items-center text-lg font-semibold md:mb-8',
                                },
                                [
                                  t.variation.price > 0
                                    ? e('span', [
                                        t._v(
                                          t._s(
                                            t.formatMoney(
                                              t.variation.price,
                                              t.currency,
                                              !1,
                                            ),
                                          ),
                                        ),
                                      ])
                                    : e('span', [
                                        t._v(
                                          t._s(
                                            t.$t(
                                              'products.slug.unavailableInCurrency',
                                              { currency: t.currency },
                                            ),
                                          ),
                                        ),
                                      ]),
                                  t._v(' '),
                                  t.billingInterval
                                    ? e('span', { staticClass: 'lowercase' }, [
                                        t._v(' ' + t._s(t.billingInterval)),
                                      ])
                                    : t._e(),
                                  t._v(' '),
                                  t.variation.origPrice
                                    ? e(
                                        'span',
                                        {
                                          staticClass:
                                            'ml-3 -mt-2px inline-block h-6 rounded bg-error-faded px-2 text-xs uppercase leading-loose text-error-default',
                                        },
                                        [
                                          t._v(
                                            '\n              ' +
                                              t._s(t.$t('products.slug.save')) +
                                              '\n              ' +
                                              t._s(
                                                t.formatMoney(
                                                  t.variation.origPrice -
                                                    t.variation.price,
                                                  t.currency,
                                                  !1,
                                                ),
                                              ) +
                                              '\n            ',
                                          ),
                                        ],
                                      )
                                    : t._e(),
                                ],
                              ),
                              t._v(' '),
                              e('div', {
                                staticClass: 'markdown',
                                domProps: {
                                  innerHTML: t._s(t.product.description),
                                },
                              }),
                              t._v(' '),
                              t.bundleItems
                                ? [
                                    e(
                                      'div',
                                      {
                                        staticClass:
                                          'my-8 border-b border-primary-med',
                                        class: {
                                          'hidden md:block':
                                            t.bundleItems.length > 3,
                                        },
                                      },
                                      [
                                        e('h2', { staticClass: 'text-xl' }, [
                                          t._v(
                                            t._s(
                                              t.$t(
                                                'products.slug.bundle.title',
                                              ),
                                            ),
                                          ),
                                        ]),
                                        t._v(' '),
                                        t._l(t.bundleItems, function (n, r) {
                                          return e('ProductBundleItem', {
                                            key: 'bundleItem' + r,
                                            ref: 'bundleItem',
                                            refInFor: !0,
                                            staticClass:
                                              'border-b border-primary-light last:border-b-0',
                                            attrs: {
                                              item: n,
                                              'option-state':
                                                t.bundleItemsOptionState,
                                            },
                                            on: {
                                              'check-availability':
                                                t.checkBundleItemAvailability,
                                              'value-changed':
                                                t.setBundleItemOptionValue,
                                            },
                                          });
                                        }),
                                      ],
                                      2,
                                    ),
                                    t._v(' '),
                                    t.bundleItems.length > 3
                                      ? e(
                                          'div',
                                          { staticClass: 'block md:hidden' },
                                          [
                                            e(
                                              'AccordionItem',
                                              {
                                                ref: 'bundleItemAccordion',
                                                attrs: {
                                                  heading: t.$t(
                                                    'products.slug.bundle.title',
                                                  ),
                                                },
                                              },
                                              t._l(
                                                t.bundleItems,
                                                function (n, r) {
                                                  return e(
                                                    'ProductBundleItem',
                                                    {
                                                      key: 'bundleItem' + r,
                                                      ref: 'bundleItem',
                                                      refInFor: !0,
                                                      staticClass:
                                                        'border-b border-primary-light last:border-b-0',
                                                      attrs: {
                                                        item: n,
                                                        'option-state':
                                                          t.bundleItemsOptionState,
                                                      },
                                                      on: {
                                                        'check-availability':
                                                          t.checkBundleItemAvailability,
                                                        'value-changed':
                                                          t.setBundleItemOptionValue,
                                                      },
                                                    },
                                                  );
                                                },
                                              ),
                                              1,
                                            ),
                                          ],
                                          1,
                                        )
                                      : t._e(),
                                  ]
                                : t._e(),
                              t._v(' '),
                              t._l(t.optionInputs, function (input) {
                                return e(
                                  'div',
                                  { key: input.name, staticClass: 'my-8' },
                                  [
                                    t.optionState[input.option.id] &&
                                    t.optionState[input.option.id].isVisible
                                      ? e(input.component, {
                                          tag: 'component',
                                          attrs: {
                                            option: input.option,
                                            'current-value':
                                              t.optionState[input.option.id]
                                                .value,
                                            'active-dropdown-u-i-d':
                                              t.activeDropdownUID,
                                            validation:
                                              t.$v.selectedOptions[
                                                input.option.name
                                              ],
                                          },
                                          on: {
                                            'value-changed': function (e) {
                                              return t.setOptionValue(
                                                c(
                                                  c({}, e),
                                                  {},
                                                  { optionId: input.option.id },
                                                ),
                                              );
                                            },
                                            'dropdown-active': function (e) {
                                              return t.setActiveDropdownUID(e);
                                            },
                                          },
                                        })
                                      : t._e(),
                                  ],
                                  1,
                                );
                              }),
                              t._v(' '),
                              t.product.purchaseOptions
                                ? e('ProductPurchaseOptions', {
                                    attrs: {
                                      options: t.product.purchaseOptions,
                                      'option-state': t.selectedOptions,
                                      product: t.product,
                                      quantity: t.quantity,
                                    },
                                    model: {
                                      value: t.selectedPurchaseOption,
                                      callback: function (e) {
                                        t.selectedPurchaseOption = e;
                                      },
                                      expression: 'selectedPurchaseOption',
                                    },
                                  })
                                : t._e(),
                              t._v(' '),
                              t.variation
                                ? e(
                                    'div',
                                    { staticClass: 'relative my-8' },
                                    [
                                      t.product.stockTracking &&
                                      !t.product.stockPurchasable
                                        ? e('StockStatus', {
                                            attrs: {
                                              'status-value':
                                                t.variation.stockStatus,
                                              'bundle-items-available':
                                                t.bundleItemsAvailable,
                                              'stock-level':
                                                t.variation.stockLevel,
                                              'show-stock-level':
                                                t.showStockLevel,
                                            },
                                          })
                                        : t._e(),
                                      t._v(' '),
                                      e(
                                        'div',
                                        { staticClass: 'flex' },
                                        [
                                          t.enableQuantity &&
                                          t.selectedPurchaseOption &&
                                          'standard' ===
                                            t.selectedPurchaseOption.type
                                            ? e('ProductQuantity', {
                                                attrs: {
                                                  'initial-limit':
                                                    t.maxQuantity,
                                                  'stock-tracking':
                                                    t.variation.stockTracking,
                                                  'stock-purchasable':
                                                    t.variation
                                                      .stockPurchasable,
                                                  'stock-level':
                                                    t.variation.stockLevel,
                                                },
                                                model: {
                                                  value: t.quantity,
                                                  callback: function (e) {
                                                    t.quantity = e;
                                                  },
                                                  expression: 'quantity',
                                                },
                                              })
                                            : t._e(),
                                          t._v(' '),
                                          e(
                                            'button',
                                            {
                                              staticClass:
                                                'btn btn--lg relative h-auto w-full',
                                              class: {
                                                loading: t.cartIsUpdating,
                                                disabled: !t.available,
                                              },
                                              attrs: {
                                                type: 'submit',
                                                disabled: !t.available,
                                              },
                                              on: {
                                                click: function (e) {
                                                  return (
                                                    e.preventDefault(),
                                                    t.addToCart.apply(
                                                      null,
                                                      arguments,
                                                    )
                                                  );
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
                                                      value: !t.cartIsUpdating,
                                                      expression:
                                                        '!cartIsUpdating',
                                                    },
                                                  ],
                                                },
                                                [
                                                  t.variation.price > 0
                                                    ? [
                                                        e('span', [
                                                          t._v(
                                                            t._s(
                                                              t.$t(
                                                                'products.slug.addToCart',
                                                              ),
                                                            ),
                                                          ),
                                                        ]),
                                                        t._v(' '),
                                                        e(
                                                          'span',
                                                          {
                                                            staticClass:
                                                              'hidden sm:inline',
                                                          },
                                                          [
                                                            e('span', {
                                                              staticClass:
                                                                'mx-1 mb-1 inline-block w-5 border-b border-primary-lightest',
                                                            }),
                                                            t._v(' '),
                                                            e('span', [
                                                              t._v(
                                                                t._s(
                                                                  t.formatMoney(
                                                                    t.variation
                                                                      .price *
                                                                      t.quantity,
                                                                    t.currency,
                                                                    !1,
                                                                  ),
                                                                ),
                                                              ),
                                                            ]),
                                                            t._v(' '),
                                                            t.billingInterval
                                                              ? e('span', [
                                                                  t._v(
                                                                    t._s(
                                                                      t.billingInterval,
                                                                    ),
                                                                  ),
                                                                ])
                                                              : t._e(),
                                                            t._v(' '),
                                                            !t.variation
                                                              .origPrice ||
                                                            (t.selectedPurchaseOption &&
                                                              'subscription' ===
                                                                t
                                                                  .selectedPurchaseOption
                                                                  .type)
                                                              ? t._e()
                                                              : e(
                                                                  'span',
                                                                  {
                                                                    staticClass:
                                                                      'ml-1 text-primary-med line-through',
                                                                  },
                                                                  [
                                                                    t._v(
                                                                      '\n                        ' +
                                                                        t._s(
                                                                          t.formatMoney(
                                                                            t
                                                                              .variation
                                                                              .origPrice *
                                                                              t.quantity,
                                                                            t.currency,
                                                                            !1,
                                                                          ),
                                                                        ) +
                                                                        '\n                      ',
                                                                    ),
                                                                  ],
                                                                ),
                                                            t._v(' '),
                                                            t.selectedPurchaseOption &&
                                                            'subscription' ===
                                                              t
                                                                .selectedPurchaseOption
                                                                .type
                                                              ? e(
                                                                  'span',
                                                                  {
                                                                    staticClass:
                                                                      'lowercase',
                                                                  },
                                                                  [
                                                                    t._v(
                                                                      '\n                        / ' +
                                                                        t._s(
                                                                          t.intervalCount,
                                                                        ) +
                                                                        t._s(
                                                                          t.subscriptionInterval,
                                                                        ) +
                                                                        '\n                      ',
                                                                    ),
                                                                  ],
                                                                )
                                                              : t._e(),
                                                          ],
                                                        ),
                                                      ]
                                                    : [
                                                        e('span', [
                                                          t._v(
                                                            t._s(
                                                              t.$t(
                                                                'products.slug.unavailableInCurrencyAddToCart',
                                                                {
                                                                  currency:
                                                                    t.currency,
                                                                },
                                                              ),
                                                            ),
                                                          ),
                                                        ]),
                                                      ],
                                                ],
                                                2,
                                              ),
                                              t._v(' '),
                                              e(
                                                'div',
                                                {
                                                  directives: [
                                                    {
                                                      name: 'show',
                                                      rawName: 'v-show',
                                                      value: t.cartIsUpdating,
                                                      expression:
                                                        'cartIsUpdating',
                                                    },
                                                  ],
                                                },
                                                [
                                                  e('div', {
                                                    staticClass:
                                                      'spinner absolute inset-0 mt-3',
                                                  }),
                                                  t._v(' '),
                                                  e('span', [
                                                    t._v(
                                                      t._s(
                                                        t.$t(
                                                          'products.slug.updating',
                                                        ),
                                                      ),
                                                    ),
                                                  ]),
                                                ],
                                              ),
                                            ],
                                          ),
                                        ],
                                        1,
                                      ),
                                    ],
                                    1,
                                  )
                                : t._e(),
                              t._v(' '),
                              e('div', { staticClass: 'my-8' }, [
                                e(
                                  'ul',
                                  {},
                                  t._l(t.productBenefits, function (n, r) {
                                    return e(
                                      'li',
                                      {
                                        key: 'storeProductBenefit' + r,
                                        staticClass: 'label-sm my-2 flex',
                                      },
                                      [
                                        e('BaseIcon', {
                                          staticClass: 'mr-2 -mb-1',
                                          attrs: { icon: n.icon, size: 'sm' },
                                        }),
                                        t._v(' '),
                                        e('span', [t._v(t._s(n.text))]),
                                      ],
                                      1,
                                    );
                                  }),
                                  0,
                                ),
                              ]),
                              t._v(' '),
                              t._l(t.product.attributes, function (n) {
                                return e(
                                  'div',
                                  { key: n.id },
                                  [
                                    n.visible
                                      ? [
                                          e(t.getAttributeComponent(n.type), {
                                            tag: 'component',
                                            attrs: {
                                              attribute: n,
                                              currency: t.currency,
                                            },
                                          }),
                                        ]
                                      : t._e(),
                                  ],
                                  2,
                                );
                              }),
                              t._v(' '),
                              t.enableSocialSharing
                                ? e(
                                    'div',
                                    { staticClass: 'flex-no-wrap flex py-3' },
                                    [
                                      e(
                                        'strong',
                                        {
                                          staticClass:
                                            'w-1/4 pr-6 text-primary-darkest',
                                        },
                                        [
                                          t._v(
                                            t._s(t.$t('products.slug.share')),
                                          ),
                                        ],
                                      ),
                                      t._v(' '),
                                      e(
                                        'div',
                                        {
                                          staticClass: 'flex w-3/4 justify-end',
                                        },
                                        [
                                          e(
                                            'SocialShare',
                                            {
                                              staticClass:
                                                'mr-2 cursor-pointer',
                                              attrs: {
                                                network: 'facebook',
                                                url: t.pageMeta.url,
                                                title: t.pageMeta.title,
                                                description:
                                                  t.pageMeta.description,
                                              },
                                            },
                                            [
                                              e('BaseIcon', {
                                                attrs: { icon: 'mdi:facebook' },
                                              }),
                                            ],
                                            1,
                                          ),
                                          t._v(' '),
                                          e(
                                            'SocialShare',
                                            {
                                              staticClass:
                                                'mr-2 cursor-pointer',
                                              attrs: {
                                                network: 'twitter',
                                                url: t.pageMeta.url,
                                                title: t.pageMeta.title,
                                                description:
                                                  t.pageMeta.description,
                                              },
                                            },
                                            [
                                              e('BaseIcon', {
                                                attrs: { icon: 'mdi:twitter' },
                                              }),
                                            ],
                                            1,
                                          ),
                                          t._v(' '),
                                          e(
                                            'SocialShare',
                                            {
                                              staticClass:
                                                'mr-2 cursor-pointer',
                                              attrs: {
                                                network: 'pinterest',
                                                url: t.pageMeta.url,
                                                description:
                                                  t.pageMeta.description,
                                                media: t.pageMeta.image,
                                              },
                                            },
                                            [
                                              e('BaseIcon', {
                                                attrs: {
                                                  icon: 'mdi:pinterest',
                                                },
                                              }),
                                            ],
                                            1,
                                          ),
                                          t._v(' '),
                                          e(
                                            'SocialShare',
                                            {
                                              staticClass: 'cursor-pointer',
                                              attrs: {
                                                network: 'email',
                                                url: t.pageMeta.url,
                                                title: t.pageMeta.title,
                                                description:
                                                  t.pageMeta.description,
                                              },
                                            },
                                            [
                                              e('BaseIcon', {
                                                attrs: { icon: 'mdi:envelope' },
                                              }),
                                            ],
                                            1,
                                          ),
                                        ],
                                        1,
                                      ),
                                    ],
                                  )
                                : t._e(),
                            ],
                            2,
                          ),
                    ],
                  ),
                ]),
              ]),
              t._v(' '),
              t.upsellProducts
                ? e(
                    'section',
                    { staticClass: 'container mb-12' },
                    [
                      e('h2', { staticClass: 'mb-12' }, [
                        t._v(t._s(t.$t('products.slug.upSell.title'))),
                      ]),
                      t._v(' '),
                      e('ProductPreviews', {
                        attrs: {
                          products: t.upsellProducts,
                          slider: !0,
                          'column-count': t.upsellProductCols,
                        },
                      }),
                    ],
                    1,
                  )
                : t._e(),
            ]);
          },
          [
            function () {
              var t = this._self._c;
              return t(
                'div',
                { staticClass: 'mt-12 mb-4 flex justify-between' },
                [
                  t('div', { staticClass: 'loader-el h-3 w-24' }),
                  this._v(' '),
                  t('div', { staticClass: 'loader-el h-3 w-48' }),
                ],
              );
            },
          ],
          !1,
          null,
          null,
          null,
        );
      e.default = component.exports;
      installComponents(component, {
        MediaSlider: n(332).default,
        BaseIcon: n(30).default,
        ProductBundleItem: n(333).default,
        AccordionItem: n(321).default,
        ProductPurchaseOptions: n(334).default,
        StockStatus: n(335).default,
        ProductQuantity: n(211).default,
        SocialShare: n(692).default,
        ProductPreviews: n(311).default,
      });
    },
  },
]);
