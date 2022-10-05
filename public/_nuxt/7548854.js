(window.webpackJsonp = window.webpackJsonp || []).push([
  [15, 23],
  {
    546: function (t, e, n) {
      'use strict';
      n.r(e);
      n(11), n(57);
      var l = {
          name: 'SectionUndefined',
          props: {
            heading: { type: String, default: 'New section' },
            description: { type: String, default: 'No type chosen' },
          },
        },
        r = n(3),
        component = Object(r.a)(
          l,
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
    697: function (t, e, n) {
      'use strict';
      n.r(e);
      n(11), n(57), n(66);
      var l = {
          name: 'SectionFullWidthMedia',
          props: {
            fetchIsPending: { type: Boolean, default: !0 },
            id: { type: String, default: '' },
            type: { type: String, default: '' },
            heading: { type: String, default: '' },
            description: { type: String, default: '' },
            image: {
              type: [Object, String],
              default: function () {
                return {};
              },
            },
            links: {
              type: Array,
              default: function () {
                return [];
              },
            },
            textColor: { type: String, default: 'light' },
            darkenBg: { type: Number, default: 0 },
            innerSpacing: { type: String, default: 'md' },
            outerSpacingX: { type: String, default: 'md' },
            outerSpacingY: { type: String, default: 'lg' },
            alignX: { type: String, default: 'left' },
            alignY: { type: String, default: 'top' },
            bgColor: { type: String, default: 'primary-lightest' },
          },
        },
        r = n(3),
        component = Object(r.a)(
          l,
          function () {
            var t = this,
              e = t._self._c;
            return t.heading || t.image
              ? t.fetchIsPending
                ? e(
                    'div',
                    {
                      staticClass:
                        'flex flex-col items-center justify-center bg-primary-lighter py-20',
                    },
                    [
                      e('div', { staticClass: 'loader-el mb-2 h-7 w-1/2' }),
                      t._v(' '),
                      e('div', { staticClass: 'loader-el mb-6 h-7 w-1/3' }),
                      t._v(' '),
                      e('div', { staticClass: 'loader-el mb-4 h-2 w-3/5' }),
                      t._v(' '),
                      e('div', { staticClass: 'loader-el mb-8 h-2 w-2/5' }),
                      t._v(' '),
                      e('div', { staticClass: 'loader-el h-10 w-40' }),
                    ],
                  )
                : e(
                    'div',
                    {
                      staticClass: 'overflow-auto',
                      class: 'bg-'.concat(t.bgColor),
                    },
                    [
                      e(
                        'section',
                        {
                          staticClass: 'relative overflow-hidden',
                          class: {
                            'mx-6 lg:mx-8 xl:mx-20': 'md' === t.outerSpacingX,
                            'my-6 lg:my-8 xl:my-20': 'md' === t.outerSpacingY,
                          },
                        },
                        [
                          t.image && (t.image.file || t.image.url)
                            ? e('VisualMedia', {
                                attrs: {
                                  source: t.image,
                                  'is-background': !0,
                                  sizes: '(min-resolution: 2dppx) 50vw, 80vw',
                                },
                              })
                            : t._e(),
                          t._v(' '),
                          'light' === t.textColor
                            ? e('div', {
                                staticClass:
                                  'inset absolute h-full w-full bg-primary-darkest',
                                style: { opacity: t.darkenBg / 100 },
                              })
                            : t._e(),
                          t._v(' '),
                          e(
                            'div',
                            {
                              staticClass: 'relative',
                              class: [
                                {
                                  'p-6 sm:p-7 lg:p-8 xl:p-20':
                                    'none' === t.outerSpacingX &&
                                    'md' === t.innerSpacing,
                                },
                                {
                                  'p-6 sm:p-7 lg:p-8 xl:p-20':
                                    'none' === t.outerSpacingX &&
                                    'sm' === t.innerSpacing,
                                },
                                {
                                  'p-8 sm:p-12 md:p-16 lg:p-20':
                                    'md' === t.outerSpacingX &&
                                    'md' === t.innerSpacing,
                                },
                                {
                                  'p-8 md:p-12 lg:p-16':
                                    'md' === t.outerSpacingX &&
                                    'sm' === t.innerSpacing,
                                },
                              ],
                            },
                            [
                              e(
                                'div',
                                {
                                  class: {
                                    'max-w-80 md:max-w-96': 'left' === t.alignX,
                                    'mx-auto max-w-112 text-center':
                                      'center' === t.alignX,
                                    'ml-auto max-w-80 md:max-w-96':
                                      'right' === t.alignX,
                                    'mt-4 mb-24 md:mt-0':
                                      'md' === t.innerSpacing &&
                                      'top' === t.alignY,
                                    'my-12':
                                      'md' === t.innerSpacing &&
                                      'center' === t.alignY,
                                    'mb-4 mt-24 md:mb-0':
                                      'md' === t.innerSpacing &&
                                      'bottom' === t.alignY,
                                  },
                                },
                                [
                                  e(
                                    'h2',
                                    {
                                      staticClass:
                                        'mb-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl',
                                      class: {
                                        'text-primary-lightest':
                                          'light' === t.textColor,
                                      },
                                    },
                                    [
                                      t._v(
                                        '\n          ' +
                                          t._s(t.heading) +
                                          '\n        ',
                                      ),
                                    ],
                                  ),
                                  t._v(' '),
                                  e('p', {
                                    staticClass: 'whitespace-pre-line',
                                    class: {
                                      'text-primary-lighter':
                                        'light' === t.textColor,
                                    },
                                    domProps: {
                                      innerHTML: t._s(t.description),
                                    },
                                  }),
                                  t._v(' '),
                                  e(
                                    'div',
                                    {
                                      staticClass: 'mx-3 mt-6',
                                      class: { '-ml-3': 'center' !== t.alignX },
                                    },
                                    t._l(t.links, function (link, n) {
                                      return e('BaseButton', {
                                        key: t.id + 'link' + n,
                                        staticClass: 'mx-3 mt-6',
                                        attrs: {
                                          type: link.style,
                                          fit: 'static',
                                          'text-color': t.textColor,
                                          link: link,
                                          label: link.label,
                                        },
                                      });
                                    }),
                                    1,
                                  ),
                                ],
                              ),
                            ],
                          ),
                        ],
                        1,
                      ),
                    ],
                  )
              : e('SectionUndefined', {
                  attrs: {
                    heading: 'Full width media',
                    description: 'No heading or media added',
                  },
                });
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
        BaseButton: n(84).default,
      });
    },
  },
]);
