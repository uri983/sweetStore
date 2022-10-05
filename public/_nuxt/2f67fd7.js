(window.webpackJsonp = window.webpackJsonp || []).push([
  [37],
  {
    787: function (t, e, r) {
      'use strict';
      r.r(e);
      r(12);
      var l = {
          props: { attribute: { type: Object, default: function () {} } },
        },
        n = r(3),
        component = Object(n.a)(
          l,
          function () {
            var t = this,
              e = t._self._c;
            return t.attribute
              ? e(
                  'div',
                  {
                    staticClass:
                      'flex-no-wrap flex border-b border-primary-med py-3',
                  },
                  [
                    Array.isArray(t.attribute.value)
                      ? [
                          e(
                            'strong',
                            { staticClass: 'w-1/4 pr-6 text-primary-darkest' },
                            [t._v(t._s(t.attribute.name))],
                          ),
                          t._v(' '),
                          e(
                            'div',
                            t._l(t.attribute.value, function (r) {
                              var l = r.file;
                              return e(
                                'a',
                                {
                                  key: l.id,
                                  staticClass:
                                    'mb-2 flex items-center font-normal last:mb-0',
                                  attrs: { href: l && l.url, download: '' },
                                },
                                [
                                  e('BaseIcon', {
                                    staticClass: 'mr-2 inline-block',
                                    attrs: {
                                      icon: 'uil:file-download',
                                      size: 'sm',
                                    },
                                  }),
                                  t._v(
                                    '\n        ' +
                                      t._s(l.filename) +
                                      '\n      ',
                                  ),
                                ],
                                1,
                              );
                            }),
                            0,
                          ),
                        ]
                      : [
                          e(
                            'strong',
                            { staticClass: 'w-1/4 pr-6 text-primary-darkest' },
                            [t._v(t._s(t.attribute.name))],
                          ),
                          t._v(' '),
                          e(
                            'a',
                            {
                              staticClass: 'flex items-center font-normal',
                              attrs: {
                                href:
                                  t.attribute.value.file &&
                                  t.attribute.value.file.url,
                                target: '_blank',
                                download: '',
                              },
                            },
                            [
                              e('BaseIcon', {
                                staticClass: 'mr-2 inline-block',
                                attrs: {
                                  icon: 'uil:file-download',
                                  size: 'sm',
                                },
                              }),
                              t._v(
                                '\n      ' +
                                  t._s(
                                    t.attribute.value.file &&
                                      t.attribute.value.file.filename,
                                  ) +
                                  '\n    ',
                              ),
                            ],
                            1,
                          ),
                        ],
                  ],
                  2,
                )
              : t._e();
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
  },
]);
