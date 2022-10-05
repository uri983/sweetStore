(window.webpackJsonp = window.webpackJsonp || []).push([
  [36],
  {
    786: function (t, e, r) {
      'use strict';
      r.r(e);
      r(12);
      var n = {
          props: {
            attribute: { type: Object, default: function () {} },
            currency: { type: String, default: null },
          },
        },
        l = r(3),
        component = Object(l.a)(
          n,
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
                    e(
                      'strong',
                      { staticClass: 'w-1/4 pr-6 text-primary-darkest' },
                      [t._v(t._s(t.attribute.name))],
                    ),
                    t._v(' '),
                    e('span', { staticClass: 'w-3/4' }, [
                      t._v(
                        t._s(t.formatMoney(t.attribute.value, t.currency, !1)),
                      ),
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
      e.default = component.exports;
    },
  },
]);
