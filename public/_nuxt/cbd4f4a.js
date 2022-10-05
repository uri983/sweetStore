(window.webpackJsonp = window.webpackJsonp || []).push([
  [22],
  {
    703: function (t, e, n) {
      'use strict';
      n.r(e);
      var l = {
          name: 'SectionRelatedProducts',
          props: {
            heading: { type: String, default: 'Other items you may like' },
            products: {
              type: Array,
              default: function () {
                return [];
              },
            },
          },
        },
        r = n(3),
        component = Object(r.a)(
          l,
          function () {
            var t = this,
              e = t._self._c;
            return e('section', { staticClass: 'container py-10' }, [
              e(
                'div',
                {
                  staticClass:
                    'flex-no-wrap mb-4 flex items-center justify-between',
                },
                [
                  e('h2', {}, [t._v('\n      ' + t._s(t.heading) + '\n    ')]),
                  t._v(' '),
                  e('div', { staticClass: 'ml-4 flex-shrink-0' }, [
                    e(
                      'div',
                      {
                        staticClass:
                          'inline-block rounded bg-primary-light p-2',
                      },
                      [e('BaseIcon', { attrs: { icon: 'uil:angle-left' } })],
                      1,
                    ),
                    t._v(' '),
                    e(
                      'div',
                      {
                        staticClass:
                          'inline-block rounded bg-primary-light p-2',
                      },
                      [e('BaseIcon', { attrs: { icon: 'uil:angle-right' } })],
                      1,
                    ),
                  ]),
                ],
              ),
              t._v(' '),
              e(
                'div',
                { staticClass: 'flex-no-wrap -mx-4 flex overflow-hidden' },
                t._l(t.products, function (n) {
                  return e(
                    'div',
                    { key: n.id, staticClass: 'mx-4 w-1/2' },
                    [e('ProductPreview', t._b({}, 'ProductPreview', n, !1))],
                    1,
                  );
                }),
                0,
              ),
            ]);
          },
          [],
          !1,
          null,
          null,
          null,
        );
      e.default = component.exports;
      installComponents(component, { BaseIcon: n(30).default });
    },
  },
]);
