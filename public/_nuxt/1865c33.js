(window.webpackJsonp = window.webpackJsonp || []).push([
  [18, 23, 41],
  {
    546: function (t, e, n) {
      'use strict';
      n.r(e);
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
    619: function (t, e, n) {
      'use strict';
      n.r(e);
      n(200), n(26), n(72);
      var r = {
          name: 'BaseLink',
          props: {
            link: { type: [Object, String], required: !0 },
            target: { type: String, default: '_blank' },
          },
          computed: {
            attributes: function () {
              var t = this.resolveUrl(this.link);
              return t.match(/^(http(s)?|ftp):\/\//)
                ? { is: 'a', href: t, target: this.target, rel: 'noopener' }
                : { is: 'nuxt-link', to: this.localePath(t) };
            },
          },
        },
        l = n(3),
        component = Object(l.a)(
          r,
          function () {
            var t = this;
            return (0, t._self._c)(
              null,
              t._b(
                { tag: 'component', attrs: { title: t.link.title || '' } },
                'component',
                t.attributes,
                !1,
              ),
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
    699: function (t, e, n) {
      'use strict';
      n.r(e);
      n(11), n(57), n(125);
      var r = {
          name: 'SectionLargeMedia',
          props: {
            heading: { type: String, default: null },
            description: { type: String, default: null },
            image: {
              type: [Object, String],
              default: function () {
                return {};
              },
            },
            bgColor: { type: String, default: 'primary-lighter' },
            url: { type: String, default: null },
            caption: { type: String, default: null },
          },
        },
        l = n(3),
        component = Object(l.a)(
          r,
          function () {
            var t = this,
              e = t._self._c;
            return !t.image ||
              t.heading ||
              t.description ||
              Object.entries(t.image).length
              ? e(
                  'section',
                  {
                    staticClass: 'py-16 text-center lg:py-24 xl:py-28',
                    class: ['bg-'.concat(t.bgColor)],
                  },
                  [
                    e('div', { staticClass: 'container' }, [
                      e('h2', { staticClass: 'mx-auto max-w-160 px-4' }, [
                        t._v('\n      ' + t._s(t.heading) + '\n    '),
                      ]),
                      t._v(' '),
                      t.description
                        ? e('div', {
                            directives: [
                              {
                                name: 'balance-text',
                                rawName: 'v-balance-text.children',
                                modifiers: { children: !0 },
                              },
                            ],
                            domProps: { innerHTML: t._s(t.description) },
                          })
                        : t._e(),
                      t._v(' '),
                      t.image
                        ? e(
                            'div',
                            { staticClass: 'relative xl:mx-12' },
                            [
                              t.url
                                ? e(
                                    'BaseLink',
                                    { attrs: { link: t.url } },
                                    [
                                      e('VisualMedia', {
                                        staticClass: 'overflow-hidden rounded',
                                        class: {
                                          'mt-10 lg:mt-12':
                                            t.description || t.heading,
                                        },
                                        attrs: {
                                          source: t.image,
                                          'aspect-ratio': '16:9',
                                          sizes:
                                            '(min-width: 375px) 80vw, (min-width: 1440px) 70vw, 90vw',
                                        },
                                      }),
                                    ],
                                    1,
                                  )
                                : e('VisualMedia', {
                                    staticClass: 'overflow-hidden rounded',
                                    class: {
                                      'mt-10 lg:mt-12':
                                        t.description || t.heading,
                                    },
                                    attrs: {
                                      source: t.image,
                                      'aspect-ratio': '16:9',
                                      sizes:
                                        '(min-width: 1200px) 1120px, 100vw',
                                    },
                                  }),
                            ],
                            1,
                          )
                        : t._e(),
                      t._v(' '),
                      t.caption
                        ? e(
                            'span',
                            { staticClass: 'label-sm mt-3 inline-block' },
                            [t._v(t._s(t.caption))],
                          )
                        : t._e(),
                    ]),
                  ],
                )
              : e('SectionUndefined', {
                  attrs: {
                    heading: 'Large media',
                    description: 'No heading or description added',
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
        BaseLink: n(619).default,
      });
    },
  },
]);
