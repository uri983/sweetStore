(window.webpackJsonp = window.webpackJsonp || []).push([
  [23],
  {
    546: function (e, n, t) {
      'use strict';
      t.r(n);
      t(11), t(57);
      var r = {
          name: 'SectionUndefined',
          props: {
            heading: { type: String, default: 'New section' },
            description: { type: String, default: 'No type chosen' },
          },
        },
        d = t(3),
        component = Object(d.a)(
          r,
          function () {
            var e = this,
              n = e._self._c;
            return n(
              'div',
              { staticClass: 'm-6 border border-dashed py-32 text-center' },
              [
                n('h3', [e._v(e._s(e.heading))]),
                e._v(' '),
                n('p', [e._v(e._s(e.description))]),
              ],
            );
          },
          [],
          !1,
          null,
          null,
          null,
        );
      n.default = component.exports;
    },
  },
]);
