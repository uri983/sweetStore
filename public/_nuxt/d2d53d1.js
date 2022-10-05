(window.webpackJsonp = window.webpackJsonp || []).push([
  [20, 23, 41],
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
    619: function (t, e, n) {
      'use strict';
      n.r(e);
      n(200), n(26), n(72);
      var l = {
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
        r = n(3),
        component = Object(r.a)(
          l,
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
    701: function (t, e, n) {
      'use strict';
      n.r(e);
      n(11), n(57);
      var l = {
          name: 'SectionMultiPanel',
          props: {
            type: { type: String, default: null },
            id: { type: String, default: null },
            panels: {
              type: Array,
              default: function () {
                return [];
              },
            },
            textAlign: { type: String, default: null },
            bgColor: { type: String, default: 'primary-lightest' },
          },
        },
        r = n(3),
        component = Object(r.a)(
          l,
          function () {
            var t = this,
              e = t._self._c;
            return t.panels.length
              ? e(
                  'section',
                  { staticClass: 'relative flex flex-wrap' },
                  t._l(t.panels, function (n, l) {
                    return e(
                      'div',
                      {
                        key: t.id + 'multiPanel' + l,
                        staticClass:
                          'relative min-h-72 w-full md:w-1/2 lg:min-h-96',
                        class: [
                          'bg-'.concat(t.bgColor),
                          {
                            'px-6 py-20 md:px-12 md:py-16 lg:px-26 lg:py-32':
                              'text' === n.type && n.heading,
                            'text-left': 'left' === t.textAlign,
                            'text-right': 'right' === t.textAlign,
                            'text-center': 'center' === t.textAlign,
                          },
                        ],
                      },
                      [
                        n.type
                          ? n.image || n.heading
                            ? 'image' === n.type
                              ? [
                                  n.url
                                    ? e(
                                        'BaseLink',
                                        { attrs: { link: n.url } },
                                        [
                                          e('VisualMedia', {
                                            attrs: {
                                              source: n.image,
                                              'is-background': !0,
                                              sizes:
                                                '(min-width: 768px) 50vw, 100vw',
                                            },
                                          }),
                                        ],
                                        1,
                                      )
                                    : e('VisualMedia', {
                                        attrs: {
                                          source: n.image,
                                          'is-background': !0,
                                          sizes:
                                            '(min-width: 768px) 50vw, 100vw',
                                        },
                                      }),
                                ]
                              : 'text' === n.type
                              ? [
                                  e('h2', [t._v(t._s(n.heading))]),
                                  t._v(' '),
                                  e('div', {
                                    directives: [
                                      {
                                        name: 'balance-text',
                                        rawName: 'v-balance-text.children',
                                        modifiers: { children: !0 },
                                      },
                                    ],
                                    staticClass: 'mt-4 whitespace-pre-line',
                                    domProps: {
                                      innerHTML: t._s(n.description),
                                    },
                                  }),
                                  t._v(' '),
                                  e(
                                    'div',
                                    {
                                      class: {
                                        '-ml-3': 'center' !== n.textAlign,
                                      },
                                    },
                                    t._l(n.links, function (link, i) {
                                      return e(
                                        'div',
                                        {
                                          key: 'link-'.concat(i),
                                          class: {
                                            'inline-block': n.links.length < 3,
                                          },
                                        },
                                        [
                                          e('BaseButton', {
                                            staticClass:
                                              'mx-3 mt-6 inline-block',
                                            attrs: {
                                              type: link.style,
                                              link: link.url,
                                              label: link.label,
                                              fit: 'auto',
                                            },
                                          }),
                                        ],
                                        1,
                                      );
                                    }),
                                    0,
                                  ),
                                ]
                              : t._e()
                            : e(
                                'div',
                                {
                                  staticClass:
                                    'm-6 border border-dashed py-32 text-center',
                                },
                                [
                                  e('h3', [t._v('Panel ' + t._s(l + 1))]),
                                  t._v(' '),
                                  e('p', [t._v('No content added')]),
                                ],
                              )
                          : e(
                              'div',
                              {
                                staticClass:
                                  'm-6 border border-dashed py-32 text-center',
                              },
                              [
                                e('h3', [t._v('Panel ' + t._s(l + 1))]),
                                t._v(' '),
                                e('p', [t._v('No type chosen')]),
                              ],
                            ),
                      ],
                      2,
                    );
                  }),
                  0,
                )
              : e('SectionUndefined', {
                  attrs: {
                    heading: 'Multiple panels',
                    description: 'No panels added',
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
        BaseButton: n(84).default,
      });
    },
  },
]);
