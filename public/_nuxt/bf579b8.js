(window.webpackJsonp = window.webpackJsonp || []).push([
  [85, 47, 50, 52, 53],
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
    644: function (t, e, r) {
      'use strict';
      r.d(e, 'a', function () {
        return o;
      });
      r(16), r(6), r(17), r(38), r(46);
      var n = r(88),
        l = r.n(n);
      function o(t, e) {
        var r = {},
          n = ['select'];
        if (l()(t) && Array.isArray(e)) {
          var o = Object.keys(t);
          e.forEach(function (e) {
            var l = e.id,
              c = e.type;
            if (o.includes(l)) {
              var d = t[l],
                f = n.includes(c) && !Array.isArray(d);
              r[l] = f ? [d] : d;
            }
          });
        }
        return r;
      }
    },
    679: function (t, e, r) {
      'use strict';
      r.r(e);
      var n = r(9),
        l = r(0),
        o =
          (r(15),
          r(6),
          r(27),
          r(25),
          r(66),
          r(26),
          r(51),
          r(209),
          {
            name: 'productList',
            components: {
              productCard: r(680).default,
              VueGlide: function () {
                return Object(l.a)(
                  regeneratorRuntime.mark(function t() {
                    var e, n;
                    return regeneratorRuntime.wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.next = 2), r.e(0).then(r.t.bind(null, 756, 7))
                            );
                          case 2:
                            return (
                              (e = t.sent), (n = e.Glide), t.abrupt('return', n)
                            );
                          case 5:
                          case 'end':
                            return t.stop();
                        }
                    }, t);
                  }),
                )();
              },
              VueGlideSlide: function () {
                return Object(l.a)(
                  regeneratorRuntime.mark(function t() {
                    var e, n;
                    return regeneratorRuntime.wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.next = 2), r.e(0).then(r.t.bind(null, 756, 7))
                            );
                          case 2:
                            return (
                              (e = t.sent),
                              (n = e.GlideSlide),
                              t.abrupt('return', n)
                            );
                          case 5:
                          case 'end':
                            return t.stop();
                        }
                    }, t);
                  }),
                )();
              },
            },
            props: {
              products: {
                type: Array,
                default: function () {
                  return [];
                },
              },
              columnCount: { type: Number, default: 4 },
              slider: { type: Boolean, default: !1 },
              productTextAlign: { type: String, default: null },
              showPrice: { type: Boolean, default: !0 },
            },
            data: function () {
              return {
                sliderAtStart: !0,
                sliderAtEnd: !1,
                aspectRatio: '1:1',
                ratioPadding: null,
                globalAlignment: 'left',
                glideOptions: {
                  bound: !0,
                  gap: 0,
                  keyboard: !1,
                  rewind: !1,
                  swipeThreshold: !1,
                  dragThreshold: !1,
                  animationTimingFunc: 'cubic-bezier(0.6, 0.2, 0, 1)',
                  breakpoints: { 768: { perView: 2 } },
                },
              };
            },
            fetch: function () {
              var t = this;
              return Object(l.a)(
                regeneratorRuntime.mark(function e() {
                  var r, l, o, c, d;
                  return regeneratorRuntime.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (r = t.$swell),
                            (e.next = 3),
                            r.settings.get('productPreviews.aspectRatio', '1:1')
                          );
                        case 3:
                          return (
                            (t.aspectRatio = e.sent),
                            (e.next = 6),
                            r.settings.get('productPreviews.textAlign', 'left')
                          );
                        case 6:
                          return (
                            (t.globalAlignment = e.sent),
                            (e.next = 9),
                            r.settings.get('productList.enableQuickAdd')
                          );
                        case 9:
                          (t.quickAddIsEnabled = e.sent),
                            (l = t.aspectRatio.split(':')),
                            (o = Object(n.a)(l, 2)),
                            (c = o[0]),
                            (d = o[1]),
                            (t.ratioPadding = ''.concat((d / c) * 100, '%'));
                        case 12:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              )();
            },
            computed: {
              textAlign: function () {
                return this.productTextAlign || this.globalAlignment;
              },
            },
            methods: {
              prevSlide: function () {
                this.$refs.prevSlide && this.$refs.prevSlide.click();
              },
              nextSlide: function () {
                this.$refs.nextSlide && this.$refs.nextSlide.click();
              },
            },
          }),
        c = r(3),
        component = Object(c.a)(
          o,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              'section',
              { staticClass: 'relative flex flex-wrap sm:-mx-2 xl:-mx-3' },
              [
                t.slider && t.products.length > t.columnCount
                  ? [
                      e(
                        'VueGlide',
                        {
                          attrs: {
                            type: 'slider',
                            'per-view': t.columnCount,
                            options: t.glideOptions,
                          },
                          on: {
                            'glide:run-start': function (e) {
                              t.sliderAtStart = !0;
                            },
                            'glide:run-end': function (e) {
                              t.sliderAtEnd = !0;
                            },
                            'glide:run': function () {
                              (t.sliderAtStart = !1), (t.sliderAtEnd = !1);
                            },
                          },
                        },
                        [
                          t._l(t.products, function (r) {
                            return e(
                              'VueGlideSlide',
                              { key: r.id },
                              [
                                e('productCard', {
                                  attrs: {
                                    product: r,
                                    'text-align': t.textAlign,
                                  },
                                }),
                              ],
                              1,
                            );
                          }),
                          t._v(' '),
                          e('template', { slot: 'control' }, [
                            e('button', {
                              ref: 'prevSlide',
                              staticClass: 'invisible absolute h-0 w-0',
                              attrs: { 'data-glide-dir': '<' },
                            }),
                            t._v(' '),
                            e('button', {
                              ref: 'nextSlide',
                              staticClass: 'invisible absolute h-0 w-0',
                              attrs: { 'data-glide-dir': '>' },
                            }),
                          ]),
                        ],
                        2,
                      ),
                      t._v(' '),
                      e('div', { staticClass: 'absolute w-full' }, [
                        e(
                          'div',
                          {
                            staticClass:
                              'pointer-events-none absolute top-0 left-0 px-1 sm:px-2 xl:px-3',
                            class: [
                              { 'w-1/2': 2 === t.columnCount },
                              { 'w-1/2 md:w-1/3': 3 === t.columnCount },
                              { 'w-1/2 md:w-1/4': 4 === t.columnCount },
                              { 'w-1/2 md:w-1/5': 5 === t.columnCount },
                              { 'w-1/2 md:w-1/6': 6 === t.columnCount },
                            ],
                          },
                          [
                            e('span', {
                              staticClass: 'block w-full',
                              style: { paddingBottom: t.ratioPadding },
                            }),
                            t._v(' '),
                            e(
                              'button',
                              {
                                directives: [
                                  {
                                    name: 'show',
                                    rawName: 'v-show',
                                    value: !t.sliderAtStart,
                                    expression: '!sliderAtStart',
                                  },
                                ],
                                staticClass:
                                  'pointer-events-auto absolute left-0 top-1/2 ml-3 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-full bg-primary-lightest shadow-md',
                                on: { click: t.prevSlide },
                              },
                              [
                                e('BaseIcon', {
                                  attrs: { icon: 'uil:angle-left' },
                                }),
                              ],
                              1,
                            ),
                          ],
                        ),
                        t._v(' '),
                        e(
                          'div',
                          {
                            staticClass:
                              'pointer-events-none absolute top-0 right-0 px-1 sm:px-2 xl:px-3',
                            class: [
                              { 'w-1/2': 2 === t.columnCount },
                              { 'w-1/2 md:w-1/3': 3 === t.columnCount },
                              { 'w-1/2 md:w-1/4': 4 === t.columnCount },
                              { 'w-1/2 md:w-1/5': 5 === t.columnCount },
                              { 'w-1/2 md:w-1/6': 6 === t.columnCount },
                            ],
                          },
                          [
                            e('span', {
                              staticClass: 'block w-full',
                              style: { paddingBottom: t.ratioPadding },
                            }),
                            t._v(' '),
                            e(
                              'button',
                              {
                                directives: [
                                  {
                                    name: 'show',
                                    rawName: 'v-show',
                                    value: !t.sliderAtEnd,
                                    expression: '!sliderAtEnd',
                                  },
                                ],
                                staticClass:
                                  'pointer-events-auto absolute right-0 top-1/2 mr-3 flex h-10 w-10 translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-full bg-primary-lightest shadow-md',
                                on: { click: t.nextSlide },
                              },
                              [
                                e('BaseIcon', {
                                  attrs: { icon: 'uil:angle-right' },
                                }),
                              ],
                              1,
                            ),
                          ],
                        ),
                      ]),
                    ]
                  : t._l(t.products, function (r) {
                      return e('productCard', {
                        key: r.id,
                        class: [
                          { 'w-1/2': 2 === t.columnCount },
                          { 'w-1/2 md:w-1/3': 3 === t.columnCount },
                          { 'w-1/2 md:w-1/4': 4 === t.columnCount },
                          { 'w-1/2 md:w-1/5': 5 === t.columnCount },
                          { 'w-1/2 md:w-1/6': 6 === t.columnCount },
                        ],
                        attrs: {
                          product: r,
                          'text-align': t.textAlign,
                          'show-price': t.showPrice,
                        },
                      });
                    }),
              ],
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
      installComponents(component, { BaseIcon: r(30).default });
    },
    682: function (t, e, r) {
      'use strict';
      r.r(e);
      r(11), r(20), r(17), r(21);
      var n = r(9),
        l = r(4),
        o = (r(42), r(16), r(66), r(14), r(6), r(10)),
        c = r(614),
        d = r(615);
      function f(object, t) {
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
      function h(t) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? f(Object(source), !0).forEach(function (e) {
                Object(l.a)(t, e, source[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(
                t,
                Object.getOwnPropertyDescriptors(source),
              )
            : f(Object(source)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(source, e),
                );
              });
        }
        return t;
      }
      var m = {
          name: 'FilterPanel',
          props: {
            filters: {
              type: Array,
              default: function () {
                return [];
              },
            },
            filterState: {
              type: Object,
              default: function () {
                return {};
              },
            },
            show: Boolean,
          },
          data: function () {
            return { localFilterState: {} };
          },
          computed: h(
            h({}, Object(o.b)(['currency'])),
            {},
            {
              currencyObj: function () {
                return this.$swell.currency.get(this.currency);
              },
              activeFilters: function () {
                return Object(d.a)(this.filters, this.localFilterState);
              },
              activeFilterCountLabel: function () {
                var t = this.activeFilters.length;
                return ''
                  .concat(t, ' filter')
                  .concat(1 === t ? '' : 's', ' active');
              },
            },
          ),
          created: function () {
            Object.keys(this.filterState).length &&
              ((this.localFilterState = this.filterState),
              this.localFilterState.price &&
                this.localFilterState.price.length > 0 &&
                ((this.localFilterState.price[0] = Number(
                  this.localFilterState.price[0],
                )),
                (this.localFilterState.price[1] = Number(
                  this.localFilterState.price[1],
                ))));
          },
          methods: {
            updateFilter: function (t) {
              var filter = t.filter,
                e = t.optionValue;
              (this.localFilterState = Object(c.a)(
                this.localFilterState,
                filter,
                e,
              )),
                this.localFilterState.price &&
                  this.localFilterState.price.length > 0 &&
                  ((this.localFilterState.price[0] = Number(
                    this.localFilterState.price[0],
                  )),
                  (this.localFilterState.price[1] = Number(
                    this.localFilterState.price[1],
                  )));
            },
            applyFilters: function () {
              this.$emit('change', this.localFilterState);
            },
            resetFilters: function () {
              (this.localFilterState = {}), this.$emit('change');
            },
            activeRangeLabel: function (filter) {
              var t = Object(n.a)(filter.options, 2),
                e = t[0],
                r = t[1],
                l = e.label,
                o = r.label;
              if ('price' === filter.id) {
                if (!this.currency) return l + ' – ' + o;
                var c = this.currencyObj.rate,
                  d = c ? e.value * c : e.value,
                  f = c ? r.value * c : r.value;
                (l = this.formatMoney(d, this.currency)),
                  (o = this.formatMoney(f, this.currency));
              }
              return l + ' – ' + o;
            },
          },
        },
        v = r(3),
        component = Object(v.a)(
          m,
          function () {
            var t = this,
              e = t._self._c;
            return e('div', { staticClass: 'shadow-2xl h-full' }, [
              e(
                'div',
                {
                  directives: [
                    {
                      name: 'show',
                      rawName: 'v-show',
                      value: t.activeFilters.length,
                      expression: 'activeFilters.length',
                    },
                  ],
                  staticClass:
                    'overflow-hidden border-b border-primary-light bg-primary-lighter py-4 px-1 text-sm',
                },
                [
                  e(
                    'div',
                    { staticClass: 'flex items-center justify-between' },
                    [
                      e('span', { staticClass: 'text-primary-dark' }, [
                        t._v(t._s(t.activeFilterCountLabel)),
                      ]),
                      t._v(' '),
                      e(
                        'button',
                        {
                          staticClass: 'font-semibold',
                          on: { click: t.resetFilters },
                        },
                        [
                          t._v(
                            '\n        ' +
                              t._s(t.$t('categories.slug.clear')) +
                              '\n      ',
                          ),
                        ],
                      ),
                    ],
                  ),
                  t._v(' '),
                  e(
                    'ul',
                    { staticClass: 'flex w-full flex-wrap pt-3' },
                    t._l(t.activeFilters, function (filter) {
                      return e(
                        'li',
                        { key: 'activefilter' + filter.id },
                        [
                          'select' === filter.type
                            ? t._l(filter.options, function (option) {
                                return e(
                                  'div',
                                  {
                                    key: 'activeFilterOption' + option.label,
                                    staticClass:
                                      'mb-2 mr-2 inline-flex items-center rounded bg-primary-light px-1 py-1',
                                  },
                                  [
                                    e('span', { staticClass: 'mx-1' }, [
                                      t._v(t._s(option.label)),
                                    ]),
                                    t._v(' '),
                                    e(
                                      'button',
                                      {
                                        on: {
                                          click: function (e) {
                                            return t.updateFilter({
                                              filter: filter,
                                              optionValue: option.value,
                                            });
                                          },
                                        },
                                      },
                                      [
                                        e('BaseIcon', {
                                          attrs: {
                                            icon: 'uil:times',
                                            size: 'sm',
                                          },
                                        }),
                                      ],
                                      1,
                                    ),
                                  ],
                                );
                              })
                            : 'range' === filter.type
                            ? [
                                e(
                                  'div',
                                  {
                                    staticClass:
                                      'mb-2 mr-2 inline-flex items-center rounded bg-primary-light px-1 py-1',
                                  },
                                  [
                                    e('span', { staticClass: 'mx-1' }, [
                                      t._v(t._s(t.activeRangeLabel(filter))),
                                    ]),
                                    t._v(' '),
                                    e(
                                      'button',
                                      {
                                        on: {
                                          click: function (e) {
                                            return t.updateFilter({
                                              filter: filter,
                                            });
                                          },
                                        },
                                      },
                                      [
                                        e('BaseIcon', {
                                          attrs: {
                                            icon: 'uil:times',
                                            size: 'sm',
                                          },
                                        }),
                                      ],
                                      1,
                                    ),
                                  ],
                                ),
                              ]
                            : t._e(),
                        ],
                        2,
                      );
                    }),
                    0,
                  ),
                ],
              ),
              t._v(' '),
              e(
                'div',
                { staticClass: 'p-6' },
                [
                  t._l(t.filters, function (filter) {
                    return e('div', { key: filter.id }, [
                      e(
                        'span',
                        { staticClass: 'label-xs-bold-faded uppercase' },
                        [t._v(t._s(filter.label))],
                      ),
                      t._v(' '),
                      'range' === filter.type
                        ? e(
                            'div',
                            { staticClass: 'w-full pt-4 pb-10' },
                            [
                              e('RangeSlider', {
                                attrs: {
                                  show: t.show,
                                  filter: filter,
                                  'filter-state': t.localFilterState,
                                  'is-price': 'price' === filter.id,
                                },
                                on: { change: t.updateFilter },
                              }),
                            ],
                            1,
                          )
                        : e(
                            'div',
                            { staticClass: 'pt-4 pb-8' },
                            [
                              e('InputSelect', {
                                attrs: {
                                  filter: filter,
                                  'filter-state': t.localFilterState,
                                  type: 'checkbox',
                                },
                                on: { change: t.updateFilter },
                              }),
                            ],
                            1,
                          ),
                    ]);
                  }),
                  t._v(' '),
                  e(
                    'button',
                    {
                      staticClass:
                        'w-full bg-sweetPrimary text-white text-center active:bg-blue-600 font-bold uppercase px-8 py-3 rounded shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150',
                      attrs: { type: 'button' },
                      on: { click: t.applyFilters },
                    },
                    [
                      e('span', { staticClass: 'text-white text-center' }, [
                        t._v(t._s(t.$t('categories.slug.apply'))),
                      ]),
                    ],
                  ),
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
        BaseIcon: r(30).default,
        RangeSlider: r(611).default,
        InputSelect: r(612).default,
      });
    },
    683: function (t, e, r) {
      'use strict';
      r.r(e);
      var n = {
          name: 'HeroBanner',
          data: function () {
            return {};
          },
        },
        l = r(3),
        component = Object(l.a)(
          n,
          function () {
            this._self._c;
            return this._m(0);
          },
          [
            function () {
              var t = this,
                e = t._self._c;
              return e('div', { staticClass: 'relative' }, [
                e('div', { staticClass: '-z-1 overflow-hidden' }, [
                  e('div', { staticClass: 'relative' }, [
                    e(
                      'div',
                      {
                        staticClass:
                          'swiper swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden',
                      },
                      [
                        e('div', { staticClass: 'swiper-wrapper' }, [
                          e(
                            'div',
                            { staticClass: 'swiper-slide swiper-slide-active' },
                            [
                              e(
                                'div',
                                {
                                  staticClass:
                                    'relative lg:h-screen md:h-screen w-full max-h-140 sm:max-h-60',
                                },
                                [
                                  e('span', [
                                    e('img', {
                                      staticClass:
                                        'md:h-full lg:h-full h-48 md:min-h-140 ld:min-h-140 sm:min-h-10 w-full object-cover',
                                      attrs: {
                                        alt: 'Get Your Bakery Items Delivered',
                                        src: 'https://s29938.pcdn.co/wp-content/uploads/2018/10/Wallpaper-MuffinMani_Confetti_1-1100x1318.jpg.optimal.jpg',
                                        decoding: 'async',
                                        'data-nimg': 'fill',
                                        sizes: '100vw',
                                        srcset:
                                          'https://s29938.pcdn.co/wp-content/uploads/2018/10/Wallpaper-MuffinMani_Confetti_1-1100x1318.jpg.optimal.jpg',
                                      },
                                    }),
                                  ]),
                                  t._v(' '),
                                  e(
                                    'div',
                                    {
                                      staticClass:
                                        'absolute inset-0 lg:mt-8 md:mt-8 flex w-full flex-col items-center lg:justify-center md:justify-center p-5 text-center md:px-20 lg:space-y-10',
                                    },
                                    [
                                      e(
                                        'h1',
                                        {
                                          staticClass:
                                            'text-2xl font-bold tracking-tight text-heading lg:text-4xl xl:text-5xl',
                                        },
                                        [
                                          t._v(
                                            '\n                  Los mejores dulces de la ciudad\n                ',
                                          ),
                                        ],
                                      ),
                                      t._v(' '),
                                      e(
                                        'p',
                                        {
                                          staticClass:
                                            'text-sm text-heading lg:text-base xl:text-lg',
                                        },
                                        [
                                          t._v(
                                            '\n                  los mejores dulces importados de nuestra tienda a la puerta\n                  de tu casa\n                ',
                                          ),
                                        ],
                                      ),
                                      t._v(' '),
                                      e(
                                        'div',
                                        { staticClass: 'w-full max-w-3xl' },
                                        [
                                          e('form', { staticClass: 'w-full' }, [
                                            e(
                                              'div',
                                              {
                                                staticClass:
                                                  'relative flex rounded md:rounded-lg h-14 shadow-900',
                                              },
                                              [
                                                e(
                                                  'label',
                                                  {
                                                    staticClass: 'sr-only',
                                                    attrs: { for: 'search' },
                                                  },
                                                  [t._v('Buscar')],
                                                ),
                                                e('input', {
                                                  staticClass:
                                                    'shadow-lg px-4 search item-center flex h-full w-full appearance-none overflow-hidden truncate rounded-l-lg text-sm text-heading placeholder-gray-500 transition duration-300 ease-in-out focus:outline-none focus:ring-0 bg-light ltr:pl-6 rtl:pr-6 ltr:pr-14 rtl:pl-14 border ltr:border-r-0 rtl:border-l-0 border-transparent focus:border-accent',
                                                  attrs: {
                                                    type: 'text',
                                                    value: '',
                                                    autocomplete: 'off',
                                                    name: 'search',
                                                    placeholder:
                                                      'Buscar un producto....',
                                                  },
                                                }),
                                                e(
                                                  'button',
                                                  {
                                                    staticClass:
                                                      'bg-blue-200 flex h-full items-center justify-center px-8 font-semibold text-blue-50 transition-colors duration-200 rounded-r-lg',
                                                  },
                                                  [
                                                    t._v(
                                                      '\n                        Buscar\n                      ',
                                                    ),
                                                  ],
                                                ),
                                              ],
                                            ),
                                          ]),
                                        ],
                                      ),
                                    ],
                                  ),
                                ],
                              ),
                            ],
                          ),
                        ]),
                      ],
                    ),
                  ]),
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
    684: function (t, e, r) {
      'use strict';
      r.r(e);
      var n = {
          name: 'StickyBarFilter',
          data: function () {
            return {};
          },
        },
        l = r(3),
        component = Object(l.a)(
          n,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              'div',
              {
                staticClass:
                  'lg:hidden md:hidden sticky top-14 z-10 flex h-14 bg-white items-center justify-between border-t border-b border-border-200 bg-light py-3 px-5 md:top-16 md:h-16 lg:top-15 lg:px-7',
              },
              [
                e(
                  'button',
                  {
                    staticClass:
                      'flex h-8 items-center rounded border border-border-200 bg-gray-100 bg-opacity-90 py-1 px-3 text-sm font-semibold text-heading transition-colors duration-200 hover:border-accent-hover hover:bg-accent hover:text-light focus:border-accent-hover focus:bg-accent focus:text-light focus:outline-none md:h-10 md:py-1.5 md:px-4 md:text-base',
                    on: {
                      click: function (e) {
                        return t.$emit('filterButton');
                      },
                    },
                  },
                  [t._v('\n    Filtros\n  ')],
                ),
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
    685: function (t, e, r) {
      'use strict';
      r.r(e);
      r(12);
      var n = r(85),
        l = r(0),
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
              return Object(l.a)(
                regeneratorRuntime.mark(function e() {
                  var r, l;
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
                            (l = e.sent),
                            (e.next = 7),
                            t.$swell.settings.get(
                              'productPreviews.aspectRatio',
                              '1:1',
                            )
                          );
                        case 7:
                          (t.aspectRatio = e.sent),
                            l && (t.categories = l.results);
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
        c = (r(642), r(3)),
        component = Object(c.a)(
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
    735: function (t, e) {},
    778: function (t, e, r) {
      'use strict';
      r.r(e);
      r(11), r(14), r(20), r(21);
      var n = r(4),
        l = r(0),
        o =
          (r(6),
          r(17),
          r(12),
          r(35),
          r(66),
          r(16),
          r(319),
          r(26),
          r(86),
          r(105),
          r(15),
          r(10)),
        c = r(725),
        d = r(679),
        f = r(682),
        h = r(683),
        m = r(684),
        v = r(685),
        w = r(545),
        x = r(644);
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
      function C(t) {
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
      var _ = {
          name: 'ProductIndexPage',
          mixins: [w.a],
          components: {
            HeroBanner: h.default,
            StickyBarFilter: m.default,
            CategorySwiper: v.default,
            Filters: f.default,
            productList: d.default,
          },
          data: function () {
            return {
              filterModalIsVisible: !1,
              products: [],
              filters: [],
              filterState: {},
              productCount: 0,
              pages: {},
              currentPage: 0,
              settings: { productCols: 3 },
            };
          },
          fetch: function () {
            var t = this;
            return Object(l.a)(
              regeneratorRuntime.mark(function e() {
                var r, n, l, o, c;
                return regeneratorRuntime.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (r = t.$swell),
                          (n = t.$route),
                          (l = parseInt(n.query.page) || 1),
                          (t.products = []),
                          (e.next = 5),
                          t.fetchProducts()
                        );
                      case 5:
                        return (o = e.sent), (e.next = 8), r.categories.list();
                      case 8:
                        return (
                          (c = e.sent),
                          (e.next = 11),
                          r.products.filterableAttributeFilters(o)
                        );
                      case 11:
                        if (
                          ((t.filters = e.sent),
                          t.filters.push(t.buildCategoryFilters(c)),
                          (t.filterState = Object(x.a)(n.query, t.filters)),
                          !t.activeFilterCount)
                        ) {
                          e.next = 18;
                          break;
                        }
                        return (
                          (e.next = 17),
                          t.fetchProducts(t.filterState, t.filters)
                        );
                      case 17:
                        o = e.sent;
                      case 18:
                        o &&
                          ((t.products = o.results),
                          (t.productCount = o.count),
                          (t.pages = o.pages),
                          (t.currentPage = l));
                      case 19:
                      case 'end':
                        return e.stop();
                    }
                }, e);
              }),
            )();
          },
          methods: {
            buildCategoryFilters: function (t) {
              var e = [];
              return (
                t.results.forEach(function (t) {
                  e.push({ value: t.slug, label: t.name });
                }),
                {
                  id: 'category',
                  label: 'Category',
                  type: 'select',
                  options: e,
                }
              );
            },
            findByCategory: function (data) {
              var t = this;
              return Object(l.a)(
                regeneratorRuntime.mark(function e() {
                  var r, n, l;
                  return regeneratorRuntime.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (r = t.$swell),
                            (n = {
                              $currency: r.currency.list().map(function (t) {
                                return t.code;
                              }),
                            }),
                            data.category &&
                              (n = {
                                category: data.category,
                                expand: ['variants'],
                                $currency: r.currency.list().map(function (t) {
                                  return t.code;
                                }),
                              }),
                            (e.next = 5),
                            r.products.list(n)
                          );
                        case 5:
                          (l = e.sent) &&
                            ((t.products = l.results),
                            (t.productCount = l.count),
                            (t.pages = l.pages));
                        case 7:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              )();
            },
            updateProductsFiltered: function () {
              var t = this;
              return Object(l.a)(
                regeneratorRuntime.mark(function e() {
                  var r, n;
                  return regeneratorRuntime.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (r = t.$route),
                            (e.next = 3),
                            Object(x.a)(r.query, t.filters)
                          );
                        case 3:
                          return (
                            (t.filterState = e.sent),
                            t.filterState.price &&
                              ((t.filterState.price[0] = Number(
                                t.filterState.price[0],
                              )),
                              (t.filterState.price[1] = Number(
                                t.filterState.price[1],
                              ))),
                            (e.next = 7),
                            t.fetchProducts(t.filterState, t.filters)
                          );
                        case 7:
                          (n = e.sent), (t.products = n.results);
                        case 9:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              )();
            },
            updateFilters: function (t) {
              this.updateRouteQuery(t);
            },
            updateRouteQuery: function (t) {
              var e = this.$route,
                path = e.path,
                r = e.query,
                n = C(C({}, r), t),
                l = Object(x.a)(r, this.filters),
                o = Object(x.a)(t, this.filters);
              Object.keys(l).forEach(function (t) {
                o[t] || delete n[t];
              }),
                n.sort || delete n.sort,
                this.$router
                  .replace({ path: path, query: n })
                  .catch(function (t) {});
            },
            fetchProducts: function (t) {
              var e = this;
              return Object(l.a)(
                regeneratorRuntime.mark(function r() {
                  var n, l, o, d;
                  return regeneratorRuntime.wrap(function (r) {
                    for (;;)
                      switch ((r.prev = r.next)) {
                        case 0:
                          return (
                            console.log(e.$swell),
                            (n = { $filters: t }),
                            (l = [Object(c.stringify)(n)]
                              .join('&')
                              .replace(/^&/, '')),
                            (o = '/products/'),
                            '' !== l && (o = o + '?' + l),
                            (r.next = 7),
                            e.$swell.get(o, { expand: ['variants'] })
                          );
                        case 7:
                          return (d = r.sent), r.abrupt('return', d);
                        case 9:
                        case 'end':
                          return r.stop();
                      }
                  }, r);
                }),
              )();
            },
            toggleFilterModal: function () {
              this.filterModalIsVisible = !this.filterModalIsVisible;
            },
          },
          computed: C(
            C({}, Object(o.b)(['currency'])),
            {},
            {
              activeFilterCount: function () {
                return Object.keys(this.filterState).length;
              },
            },
          ),
          watch: { '$route.query': 'updateProductsFiltered' },
          watchQuery: ['page'],
          mounted: function () {
            var t = this;
            return Object(l.a)(
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
        },
        j = r(3),
        component = Object(j.a)(
          _,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              'div',
              [
                t._e(),
                t._v(' '),
                t.$breakpoints.sSm
                  ? e('FilterPanel', {
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
                    })
                  : t._e(),
                t._v(' '),
                e('StickyBarFilter', {
                  on: {
                    filterButton: function (e) {
                      return t.toggleFilterModal();
                    },
                  },
                }),
                t._v(' '),
                e('div', { staticClass: 'grid grid-cols-12' }, [
                  e(
                    'div',
                    {
                      staticClass:
                        'lg:block md:block hidden col-start-1 col-end-4 font-bold text-center rounded-lg',
                    },
                    [
                      t.$breakpoints.lMd
                        ? e('Filters', {
                            attrs: {
                              filters: t.filters,
                              'filter-state': t.filterState,
                            },
                            on: { change: t.updateFilters },
                          })
                        : t._e(),
                    ],
                    1,
                  ),
                  t._v(' '),
                  e(
                    'div',
                    {
                      staticClass:
                        'col-start-1 md:col-start-4 lg:col-start-4 col-end-13',
                    },
                    [
                      e('CategorySwiper', {
                        on: { selectCategory: t.findByCategory },
                      }),
                      t._v(' '),
                      e(
                        'h1',
                        {
                          staticClass:
                            'text-lg ml-4 mt-4 font-bold tracking-tight text-heading',
                        },
                        [t._v('\n        Productos\n      ')],
                      ),
                      t._v(' '),
                      e(
                        'div',
                        { staticClass: 'container pt-2 pb-4' },
                        [
                          e('productList', {
                            attrs: { columnCount: 5, products: t.products },
                          }),
                        ],
                        1,
                      ),
                    ],
                    1,
                  ),
                ]),
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
      installComponents(component, { FilterPanel: r(686).default });
    },
  },
]);
