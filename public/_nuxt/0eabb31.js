(window.webpackJsonp = window.webpackJsonp || []).push([
  [19, 23],
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
    700: function (t, e, n) {
      'use strict';
      n.r(e);
      var l = {
          name: 'SectionMultiFeature',
          props: {
            type: { type: String, default: null },
            id: { type: String, default: null },
            heading: { type: String, default: '' },
            features: {
              type: Array,
              default: function () {
                return [];
              },
            },
            columnWidth: { type: String, default: 'sm' },
          },
        },
        r = n(3),
        component = Object(r.a)(
          l,
          function () {
            var t = this,
              e = t._self._c;
            return t.heading || t.features.length
              ? e(
                  'section',
                  { staticClass: 'px-6 py-16 text-center lg:px-8 xl:px-20' },
                  [
                    e('h3', { staticClass: 'mx-auto mt-6' }, [
                      t._v('\n    ' + t._s(t.heading) + '\n  '),
                    ]),
                    t._v(' '),
                    e(
                      'div',
                      { staticClass: 'mt-6 flex flex-wrap justify-center' },
                      t._l(t.features, function (n, l) {
                        return e(
                          'div',
                          {
                            key: t.id + 'multiFeature' + l,
                            staticClass: 'mx-3 my-6 lg:mx-5',
                            class: { 'w-48': 'sm' === t.columnWidth },
                          },
                          [
                            n
                              ? e(
                                  'div',
                                  {
                                    staticClass:
                                      'relative mx-auto h-16 w-16 rounded-full bg-primary-light',
                                  },
                                  [
                                    e('BaseIcon', {
                                      staticClass: 'center-xy absolute',
                                      attrs: { icon: n.icon, size: 'lg' },
                                    }),
                                  ],
                                  1,
                                )
                              : t._e(),
                            t._v(' '),
                            n
                              ? e('p', { staticClass: 'mt-4 text-lg' }, [
                                  t._v(
                                    '\n        ' + t._s(n.label) + '\n      ',
                                  ),
                                ])
                              : t._e(),
                          ],
                        );
                      }),
                      0,
                    ),
                  ],
                )
              : e('SectionUndefined', {
                  attrs: {
                    heading: 'Multiple features',
                    description: 'No heading or features added',
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
        BaseIcon: n(30).default,
      });
    },
  },
]);
