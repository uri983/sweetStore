(window.webpackJsonp = window.webpackJsonp || []).push([
  [13, 23, 59],
  {
    546: function (e, t, n) {
      'use strict';
      n.r(t);
      n(11), n(57);
      var r = {
          name: 'SectionUndefined',
          props: {
            heading: { type: String, default: 'New section' },
            description: { type: String, default: 'No type chosen' },
          },
        },
        l = n(3),
        component = Object(l.a)(
          r,
          function () {
            var e = this,
              t = e._self._c;
            return t(
              'div',
              { staticClass: 'm-6 border border-dashed py-32 text-center' },
              [
                t('h3', [e._v(e._s(e.heading))]),
                e._v(' '),
                t('p', [e._v(e._s(e.description))]),
              ],
            );
          },
          [],
          !1,
          null,
          null,
          null,
        );
      t.default = component.exports;
    },
    694: function (e, t, n) {
      'use strict';
      n.r(t);
      var r = n(85),
        l =
          (n(66),
          n(6),
          n(25),
          {
            name: 'ReviewStars',
            props: {
              score: { type: Number, default: 0 },
              size: { type: String, default: 'sm' },
            },
            computed: {
              stars: function () {
                var e = Object(r.a)(Array(Math.floor(this.score)).keys());
                return this.score - e.length && e.push('half'), e;
              },
            },
          }),
        c = n(3),
        component = Object(c.a)(
          l,
          function () {
            var e = this,
              t = e._self._c;
            return t(
              'div',
              {
                staticClass: 'flex',
                attrs: {
                  role: 'img',
                  'aria-label': ''.concat(e.score, ' of 5 stars'),
                },
              },
              e._l(e.stars, function (n) {
                return t(
                  'div',
                  {
                    key: 'reviewStar' + n,
                    staticClass: 'text-accent-default last:mr-0',
                    class: {
                      'mr-2': 'base' === e.size,
                      'mr-1': 'sm' === e.size,
                    },
                    attrs: { 'aria-hidden': 'true' },
                  },
                  [
                    t(
                      'BaseIcon',
                      'half' === n
                        ? { attrs: { icon: 'mdi:star-half', size: e.size } }
                        : { attrs: { icon: 'mdi:star', size: e.size } },
                    ),
                  ],
                  1,
                );
              }),
              0,
            );
          },
          [],
          !1,
          null,
          null,
          null,
        );
      t.default = component.exports;
      installComponents(component, { BaseIcon: n(30).default });
    },
    695: function (e, t, n) {
      'use strict';
      n.r(t);
      n(12);
      var r = {
          name: 'SectionCustomerReviews',
          props: {
            type: { type: String, default: null },
            id: { type: String, default: null },
            heading: { type: String, default: 'What our customers say' },
            reviews: {
              type: Array,
              default: function () {
                return [];
              },
            },
          },
          data: function () {
            return { currentReviewIndex: 0, animationDirection: null };
          },
          computed: {
            currentReview: function () {
              return this.reviews[this.currentReviewIndex];
            },
          },
          mounted: function () {
            this.setMaxElHeight();
          },
          methods: {
            nextReview: function () {
              var e = this.reviews;
              e &&
                ((this.animationDirection = 'left'),
                this.currentReviewIndex < e.length - 1
                  ? this.currentReviewIndex++
                  : (this.currentReviewIndex = 0));
            },
            prevReview: function () {
              var e = this.reviews;
              e &&
                ((this.animationDirection = 'right'),
                this.currentReviewIndex > 0
                  ? this.currentReviewIndex--
                  : (this.currentReviewIndex = e.length - 1));
            },
            setMaxElHeight: function (e) {
              var t = this;
              this.$nextTick(function () {
                var e = t.$refs.quote,
                  content = t.$refs.quoteContent;
                content &&
                  (e.style.height = ''.concat(content.offsetHeight, 'px'));
              });
            },
          },
        },
        l = n(3),
        component = Object(l.a)(
          r,
          function () {
            var e = this,
              t = e._self._c;
            return e.heading || e.reviews.length
              ? t(
                  'section',
                  { staticClass: 'container relative my-14 lg:my-16' },
                  [
                    t('div', { staticClass: 'flex flex-col justify-center' }, [
                      e.heading
                        ? t(
                            'h2',
                            { staticClass: 'mb-12 text-center lg:text-4xl' },
                            [e._v('\n      ' + e._s(e.heading) + '\n    ')],
                          )
                        : e._e(),
                      e._v(' '),
                      e.currentReview
                        ? t(
                            'div',
                            {
                              ref: 'quote',
                              staticClass:
                                'relative w-full transition-all duration-300 ease-in-out',
                            },
                            [
                              e.reviews.length > 1
                                ? t(
                                    'div',
                                    {
                                      staticClass:
                                        'absolute inset-0 flex items-center justify-between',
                                    },
                                    [
                                      t(
                                        'button',
                                        {
                                          staticClass:
                                            'rounded-full bg-primary-lighter p-2',
                                          attrs: { title: 'Previous review' },
                                          on: {
                                            click: function (t) {
                                              return (
                                                t.preventDefault(),
                                                e.prevReview.apply(
                                                  null,
                                                  arguments,
                                                )
                                              );
                                            },
                                          },
                                        },
                                        [
                                          t('BaseIcon', {
                                            attrs: {
                                              icon: 'uil:angle-left',
                                              size: 'lg',
                                            },
                                          }),
                                        ],
                                        1,
                                      ),
                                      e._v(' '),
                                      t(
                                        'button',
                                        {
                                          staticClass:
                                            'rounded-full bg-primary-lighter p-2',
                                          attrs: { title: 'Next review' },
                                          on: {
                                            click: function (t) {
                                              return (
                                                t.preventDefault(),
                                                e.nextReview.apply(
                                                  null,
                                                  arguments,
                                                )
                                              );
                                            },
                                          },
                                        },
                                        [
                                          t('BaseIcon', {
                                            attrs: {
                                              icon: 'uil:angle-right',
                                              size: 'lg',
                                            },
                                          }),
                                        ],
                                        1,
                                      ),
                                    ],
                                  )
                                : e._e(),
                              e._v(' '),
                              t(
                                'transition',
                                {
                                  attrs: {
                                    'enter-active-class':
                                      'transition-all duration-200 ease-out',
                                    'enter-class':
                                      'left' === e.animationDirection
                                        ? 'opacity-0 translate-x-5'
                                        : 'opacity-0 -translate-x-5',
                                    'enter-to-class': 'opacity-100',
                                    'leave-active-class':
                                      'transition-all duration-200 ease-in',
                                    'leave-class': 'opacity-100',
                                    'leave-to-class':
                                      'left' === e.animationDirection
                                        ? 'opacity-0 -translate-x-5'
                                        : 'opacity-0 translate-x-5',
                                    mode: 'out-in',
                                  },
                                  on: { 'before-enter': e.setMaxElHeight },
                                },
                                [
                                  t(
                                    'div',
                                    {
                                      key: e.currentReview.id,
                                      ref: 'quoteContent',
                                    },
                                    [
                                      t(
                                        'div',
                                        {
                                          staticClass:
                                            'flex flex-col items-center justify-center px-16 text-center md:px-28 lg:px-48',
                                        },
                                        [
                                          e.currentReview.score
                                            ? t('ReviewStars', {
                                                staticClass: 'mb-4',
                                                attrs: {
                                                  score: e.currentReview.score,
                                                },
                                              })
                                            : e._e(),
                                          e._v(' '),
                                          t(
                                            'p',
                                            {
                                              staticClass:
                                                'mx-auto mb-4 max-w-128 whitespace-pre-line',
                                            },
                                            [
                                              e._v(
                                                '\n              ' +
                                                  e._s(
                                                    e.currentReview.quote ||
                                                      'No quote added',
                                                  ) +
                                                  '\n            ',
                                              ),
                                            ],
                                          ),
                                          e._v(' '),
                                          t(
                                            'p',
                                            { staticClass: 'label-sm-faded' },
                                            [
                                              t('span', [
                                                e._v(
                                                  e._s(e.currentReview.name),
                                                ),
                                              ]),
                                              e.currentReview.location
                                                ? t('span', [
                                                    e._v(
                                                      ', ' +
                                                        e._s(
                                                          e.currentReview
                                                            .location,
                                                        ),
                                                    ),
                                                  ])
                                                : e._e(),
                                            ],
                                          ),
                                        ],
                                        1,
                                      ),
                                    ],
                                  ),
                                ],
                              ),
                            ],
                            1,
                          )
                        : e._e(),
                    ]),
                  ],
                )
              : t('SectionUndefined', {
                  attrs: {
                    heading: 'Customer reviews',
                    description: 'No heading or reviews added',
                  },
                });
          },
          [],
          !1,
          null,
          null,
          null,
        );
      t.default = component.exports;
      installComponents(component, {
        SectionUndefined: n(546).default,
        BaseIcon: n(30).default,
        ReviewStars: n(694).default,
      });
    },
  },
]);
