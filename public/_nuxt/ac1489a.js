(window.webpackJsonp = window.webpackJsonp || []).push([
  [59],
  {
    694: function (t, e, r) {
      'use strict';
      r.r(e);
      var n = r(85),
        l =
          (r(66),
          r(6),
          r(25),
          {
            name: 'ReviewStars',
            props: {
              score: { type: Number, default: 0 },
              size: { type: String, default: 'sm' },
            },
            computed: {
              stars: function () {
                var t = Object(n.a)(Array(Math.floor(this.score)).keys());
                return this.score - t.length && t.push('half'), t;
              },
            },
          }),
        c = r(3),
        component = Object(c.a)(
          l,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              'div',
              {
                staticClass: 'flex',
                attrs: {
                  role: 'img',
                  'aria-label': ''.concat(t.score, ' of 5 stars'),
                },
              },
              t._l(t.stars, function (r) {
                return e(
                  'div',
                  {
                    key: 'reviewStar' + r,
                    staticClass: 'text-accent-default last:mr-0',
                    class: {
                      'mr-2': 'base' === t.size,
                      'mr-1': 'sm' === t.size,
                    },
                    attrs: { 'aria-hidden': 'true' },
                  },
                  [
                    e(
                      'BaseIcon',
                      'half' === r
                        ? { attrs: { icon: 'mdi:star-half', size: t.size } }
                        : { attrs: { icon: 'mdi:star', size: t.size } },
                    ),
                  ],
                  1,
                );
              }),
              0,
            );
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
