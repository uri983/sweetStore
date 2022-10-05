(window.webpackJsonp = window.webpackJsonp || []).push([
  [39],
  {
    789: function (t, e, n) {
      'use strict';
      n.r(e);
      n(12);
      var o = {
          props: { attribute: { type: Object, default: function () {} } },
        },
        r = n(3),
        component = Object(r.a)(
          o,
          function () {
            var t = this,
              e = t._self._c;
            return t.attribute
              ? e('AccordionItem', { attrs: { heading: t.attribute.name } }, [
                  e('div', {
                    staticClass: 'pb-3',
                    domProps: { innerHTML: t._s(t.attribute.value) },
                  }),
                ])
              : t._e();
          },
          [],
          !1,
          null,
          null,
          null,
        );
      e.default = component.exports;
      installComponents(component, { AccordionItem: n(321).default });
    },
  },
]);
