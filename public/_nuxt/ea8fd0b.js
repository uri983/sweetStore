(window.webpackJsonp = window.webpackJsonp || []).push([
  [40],
  {
    790: function (t, r, e) {
      'use strict';
      e.r(r);
      e(12), e(105);
      var n = {
          props: { attribute: { type: Object, default: function () {} } },
        },
        l = e(3),
        component = Object(l.a)(
          n,
          function () {
            var t = this,
              r = t._self._c;
            return t.attribute
              ? r(
                  'div',
                  {
                    staticClass:
                      'flex-no-wrap flex border-b border-primary-med py-3',
                  },
                  [
                    r(
                      'strong',
                      { staticClass: 'w-1/4 pr-6 text-primary-darkest' },
                      [t._v(t._s(t.attribute.name))],
                    ),
                    t._v(' '),
                    Array.isArray(t.attribute.value)
                      ? r('span', { staticClass: 'w-3/4' }, [
                          t._v(
                            '\n    ' +
                              t._s(t.attribute.value.join(', ')) +
                              '\n  ',
                          ),
                        ])
                      : r('span', { staticClass: 'w-3/4' }, [
                          t._v(t._s(t.attribute.value)),
                        ]),
                  ],
                )
              : t._e();
          },
          [],
          !1,
          null,
          null,
          null,
        );
      r.default = component.exports;
    },
  },
]);
