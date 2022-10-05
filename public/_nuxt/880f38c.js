(window.webpackJsonp = window.webpackJsonp || []).push([
  [52],
  {
    679: function (t, e, n) {
      'use strict';
      n.r(e);
      var r = n(9),
        l = n(0),
        o =
          (n(15),
          n(6),
          n(27),
          n(25),
          n(66),
          n(26),
          n(51),
          n(209),
          {
            name: 'productList',
            components: {
              productCard: n(680).default,
              VueGlide: function () {
                return Object(l.a)(
                  regeneratorRuntime.mark(function t() {
                    var e, r;
                    return regeneratorRuntime.wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.next = 2), n.e(0).then(n.t.bind(null, 756, 7))
                            );
                          case 2:
                            return (
                              (e = t.sent), (r = e.Glide), t.abrupt('return', r)
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
                    var e, r;
                    return regeneratorRuntime.wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.next = 2), n.e(0).then(n.t.bind(null, 756, 7))
                            );
                          case 2:
                            return (
                              (e = t.sent),
                              (r = e.GlideSlide),
                              t.abrupt('return', r)
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
                  var n, l, o, d, c;
                  return regeneratorRuntime.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (n = t.$swell),
                            (e.next = 3),
                            n.settings.get('productPreviews.aspectRatio', '1:1')
                          );
                        case 3:
                          return (
                            (t.aspectRatio = e.sent),
                            (e.next = 6),
                            n.settings.get('productPreviews.textAlign', 'left')
                          );
                        case 6:
                          return (
                            (t.globalAlignment = e.sent),
                            (e.next = 9),
                            n.settings.get('productList.enableQuickAdd')
                          );
                        case 9:
                          (t.quickAddIsEnabled = e.sent),
                            (l = t.aspectRatio.split(':')),
                            (o = Object(r.a)(l, 2)),
                            (d = o[0]),
                            (c = o[1]),
                            (t.ratioPadding = ''.concat((c / d) * 100, '%'));
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
        d = n(3),
        component = Object(d.a)(
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
                          t._l(t.products, function (n) {
                            return e(
                              'VueGlideSlide',
                              { key: n.id },
                              [
                                e('productCard', {
                                  attrs: {
                                    product: n,
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
                  : t._l(t.products, function (n) {
                      return e('productCard', {
                        key: n.id,
                        class: [
                          { 'w-1/2': 2 === t.columnCount },
                          { 'w-1/2 md:w-1/3': 3 === t.columnCount },
                          { 'w-1/2 md:w-1/4': 4 === t.columnCount },
                          { 'w-1/2 md:w-1/5': 5 === t.columnCount },
                          { 'w-1/2 md:w-1/6': 6 === t.columnCount },
                        ],
                        attrs: {
                          product: n,
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
      installComponents(component, { BaseIcon: n(30).default });
    },
  },
]);
