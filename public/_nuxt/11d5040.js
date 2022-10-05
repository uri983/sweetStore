(window.webpackJsonp = window.webpackJsonp || []).push([
  [55],
  {
    693: function (t, e, r) {
      'use strict';
      r.r(e);
      var n = r(34),
        l = (r(12), r(16), r(11), r(14), r(6), r(20), r(17), r(21), r(4)),
        c = r(10);
      function o(object, t) {
        var e = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(object);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(object, t).enumerable;
            })),
            e.push.apply(e, r);
        }
        return e;
      }
      var m = {
          name: 'MegaNav',
          props: {
            items: {
              type: Array,
              default: function () {
                return [];
              },
            },
          },
          computed: (function (t) {
            for (var i = 1; i < arguments.length; i++) {
              var source = null != arguments[i] ? arguments[i] : {};
              i % 2
                ? o(Object(source), !0).forEach(function (e) {
                    Object(l.a)(t, e, source[e]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    t,
                    Object.getOwnPropertyDescriptors(source),
                  )
                : o(Object(source)).forEach(function (e) {
                    Object.defineProperty(
                      t,
                      e,
                      Object.getOwnPropertyDescriptor(source, e),
                    );
                  });
            }
            return t;
          })({}, Object(c.b)(['currency'])),
        },
        v = m,
        f = r(3),
        component = Object(f.a)(
          v,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              'div',
              {
                staticClass:
                  'w-full border-t border-primary-light bg-primary-lightest shadow-md',
              },
              [
                e('div', { staticClass: 'container' }, [
                  e(
                    'div',
                    { staticClass: '-mx-4 flex flex-wrap items-stretch pt-6' },
                    t._l(t.items, function (r, l) {
                      return e(
                        'ul',
                        {
                          key: 'megaNavCol' + l,
                          staticClass: 'mb-6 w-1/4 min-w-48 flex-initial px-4',
                        },
                        t._l(r.items, function (r, i) {
                          return e(
                            'li',
                            { key: 'megaNavItem' + i, staticClass: 'mb-0' },
                            [
                              'product' === r.type &&
                              'object' === Object(n.a)(r.value)
                                ? e(
                                    'NuxtLink',
                                    {
                                      staticClass: 'mt-1 block',
                                      attrs: {
                                        to: t.localePath(t.resolveUrl(r)),
                                      },
                                      nativeOn: {
                                        click: function (e) {
                                          return t.$emit('click');
                                        },
                                      },
                                    },
                                    [
                                      r.value.images
                                        ? e('VisualMedia', {
                                            staticClass: 'rounded',
                                            attrs: {
                                              source: r.value.images[0],
                                              sizes: '300px',
                                            },
                                          })
                                        : t._e(),
                                      t._v(' '),
                                      e('div', { staticClass: 'pt-4' }, [
                                        e('h4', [t._v(t._s(r.value.name))]),
                                        t._v(' '),
                                        r.value.price
                                          ? e(
                                              'p',
                                              {
                                                staticClass:
                                                  'text-primary-darker',
                                              },
                                              [
                                                t._v(
                                                  '\n                ' +
                                                    t._s(
                                                      t.formatMoney(
                                                        r.value.price,
                                                        t.currency,
                                                      ),
                                                    ) +
                                                    '\n              ',
                                                ),
                                              ],
                                            )
                                          : t._e(),
                                      ]),
                                    ],
                                    1,
                                  )
                                : 'heading' === r.type
                                ? e(
                                    'p',
                                    {
                                      staticClass: 'label-sm-faded mb-2',
                                      class: { 'mt-4': i > 0 },
                                    },
                                    [
                                      t._v(
                                        '\n            ' +
                                          t._s(r.name) +
                                          '\n          ',
                                      ),
                                    ],
                                  )
                                : 'callout' === r.type
                                ? e(
                                    'p',
                                    {
                                      staticClass: 'btn',
                                      class: { 'mt-4': i > 0 },
                                    },
                                    [
                                      t._v(
                                        '\n            ' +
                                          t._s(r.name) +
                                          '\n          ',
                                      ),
                                    ],
                                  )
                                : 'url' === r.type
                                ? e(
                                    'a',
                                    {
                                      staticClass:
                                        '-mx-1 block p-1 leading-tight',
                                      attrs: {
                                        rel: 'noreferrer noopener',
                                        href: r.value,
                                        target:
                                          'blank' === r.options.target
                                            ? '_blank'
                                            : '_self',
                                      },
                                    },
                                    [
                                      t._v(
                                        '\n            ' +
                                          t._s(r.name) +
                                          '\n          ',
                                      ),
                                    ],
                                  )
                                : e(
                                    'NuxtLink',
                                    {
                                      staticClass:
                                        '-mx-1 block p-1 leading-tight',
                                      attrs: {
                                        to: t.localePath(t.resolveUrl(r)),
                                      },
                                      nativeOn: {
                                        click: function (e) {
                                          return t.$emit('click');
                                        },
                                      },
                                    },
                                    [
                                      t._v(
                                        '\n            ' +
                                          t._s(r.name) +
                                          '\n          ',
                                      ),
                                    ],
                                  ),
                            ],
                            1,
                          );
                        }),
                        0,
                      );
                    }),
                    0,
                  ),
                ]),
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
  },
]);
