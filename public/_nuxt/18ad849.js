(window.webpackJsonp = window.webpackJsonp || []).push([
  [21, 23],
  {
    546: function (t, e, n) {
      'use strict';
      n.r(e);
      n(11), n(57);
      var o = {
          name: 'SectionUndefined',
          props: {
            heading: { type: String, default: 'New section' },
            description: { type: String, default: 'No type chosen' },
          },
        },
        l = n(3),
        component = Object(l.a)(
          o,
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
    702: function (t, e, n) {
      'use strict';
      n.r(e);
      n(42), n(12);
      var o = {
          name: 'SectionPressMentions',
          props: {
            type: { type: String, default: null },
            id: { type: String, default: null },
            mentions: {
              type: Array,
              default: function () {
                return [];
              },
            },
          },
        },
        l = n(3),
        component = Object(l.a)(
          o,
          function () {
            var t = this,
              e = t._self._c;
            return t.mentions.length
              ? e('section', { staticClass: 'relative mx-6 my-8 lg:mx-8' }, [
                  e(
                    'div',
                    {
                      staticClass:
                        'container flex flex-row flex-wrap text-center text-sm',
                    },
                    t._l(t.mentions, function (n, o) {
                      return e(
                        'div',
                        {
                          key: ''.concat(t.id, 'mention').concat(o),
                          staticClass:
                            'group relative flex w-1/2 cursor-default items-center justify-center py-6 px-4 md:w-1/4 md:py-24',
                        },
                        [
                          e(
                            'div',
                            {
                              staticClass:
                                'transform transition-all duration-300 ease-in-out group-hover:-translate-y-4 group-hover:opacity-0',
                            },
                            [
                              n.logo && n.logo.file
                                ? e('img', {
                                    staticClass:
                                      'h-auto w-full max-w-full md:max-w-34',
                                    style: 'transform: scale('.concat(
                                      n.logoScale / 100,
                                      ')',
                                    ),
                                    attrs: {
                                      src: n.logo.file.url,
                                      alt: n.name,
                                    },
                                  })
                                : t._e(),
                            ],
                          ),
                          t._v(' '),
                          e(
                            'div',
                            {
                              staticClass: 'w-full md:px-4',
                              class: {
                                'absolute translate-y-4 transform opacity-0 transition-all duration-300 ease-in-out group-hover:translate-y-0 group-hover:opacity-100':
                                  n.logo,
                              },
                            },
                            [
                              e('p', {}, [t._v('“' + t._s(n.quote) + '”')]),
                              t._v(' '),
                              n.name
                                ? e(
                                    'span',
                                    { staticClass: 'mt-2 block font-semibold' },
                                    [t._v('— ' + t._s(n.name))],
                                  )
                                : t._e(),
                            ],
                          ),
                        ],
                      );
                    }),
                    0,
                  ),
                ])
              : e('SectionUndefined', {
                  attrs: {
                    heading: 'Multiple mentions',
                    description: 'No mentions added',
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
      installComponents(component, { SectionUndefined: n(546).default });
    },
  },
]);
