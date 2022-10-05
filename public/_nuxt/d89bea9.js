(window.webpackJsonp = window.webpackJsonp || []).push([
  [14],
  {
    696: function (e, t, l) {
      'use strict';
      l.r(t);
      l(11), l(57);
      var n = {
          name: 'SectionEmailSignup',
          props: {
            type: { type: String, default: null },
            id: { type: String, default: null },
            heading: { type: String, default: null },
            description: { type: String, default: null },
            image: { type: [Object, String], default: null },
            bgColor: { type: String, default: 'primary-lightest' },
            outerSpacingX: { type: String, default: 'md' },
            outerSpacingY: { type: String, default: 'lg' },
            alignX: { type: String, default: 'left' },
            textAlign: { type: String, default: 'left' },
          },
        },
        r = l(3),
        component = Object(r.a)(
          n,
          function () {
            var e = this,
              t = e._self._c;
            return t(
              'section',
              {
                staticClass: 'relative flex flex-wrap',
                class: [
                  'bg-'.concat(e.bgColor),
                  {
                    'flex-row-reverse': 'right' === e.alignX,
                    'justify-center': 'center' === e.alignX,
                    'text-center':
                      'center' === e.textAlign || 'center' === e.alignX,
                  },
                  {
                    'mx-0': 'none' === e.outerSpacingX,
                    'mx-2 lg:mx-4': 'sm' === e.outerSpacingX,
                    'mx-6 lg:mx-8': 'md' === e.outerSpacingX,
                    'mx-8 lg:mx-12 xl:mx-16': 'lg' === e.outerSpacingX,
                  },
                  {
                    'my-0': 'none' === e.outerSpacingY,
                    'my-2 lg:my-4': 'sm' === e.outerSpacingY,
                    'my-6 lg:my-8': 'md' === e.outerSpacingY,
                    'my-8 lg:my-12 xl:my-16': 'lg' === e.outerSpacingY,
                  },
                ],
              },
              [
                t(
                  'div',
                  {
                    staticClass:
                      'relative w-full px-6 py-20 md:w-1/2 md:px-12 md:py-16 lg:px-26 lg:py-32',
                  },
                  [
                    e.heading
                      ? t(
                          'h2',
                          {
                            staticClass:
                              'mb-3 text-3xl md:text-4xl lg:text-6xl',
                          },
                          [e._v('\n      ' + e._s(e.heading) + '\n    ')],
                        )
                      : e._e(),
                    e._v(' '),
                    e.description
                      ? t('div', {
                          directives: [
                            {
                              name: 'balance-text',
                              rawName: 'v-balance-text.children',
                              modifiers: { children: !0 },
                            },
                          ],
                          staticClass: 'mb-6',
                          domProps: { innerHTML: e._s(e.description) },
                        })
                      : e._e(),
                    e._v(' '),
                    t('EmailSignupForm', {
                      staticClass: 'max-w-96',
                      class: { 'mx-auto': 'center' === e.textAlign },
                    }),
                  ],
                  1,
                ),
                e._v(' '),
                'center' !== e.alignX
                  ? t(
                      'div',
                      { staticClass: 'relative w-full md:w-1/2' },
                      [
                        e.image
                          ? t('VisualMedia', {
                              attrs: {
                                source: e.image,
                                'is-background': !0,
                                sizes: '(min-width: 768px) 50vw, 100vw',
                              },
                            })
                          : e._e(),
                      ],
                      1,
                    )
                  : e._e(),
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
      installComponents(component, { EmailSignupForm: l(330).default });
    },
  },
]);
