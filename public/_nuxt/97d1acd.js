(window.webpackJsonp = window.webpackJsonp || []).push([
  [8],
  {
    541: function (e, t, r) {
      'use strict';
      r.r(t);
      r(6), r(25), r(12), r(16), r(11), r(14), r(20), r(17), r(21);
      var n = r(4),
        c = r(10);
      function o(object, e) {
        var t = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(object);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(object, e).enumerable;
            })),
            t.push.apply(t, r);
        }
        return t;
      }
      var l = {
          name: 'OptionInputCheckbox',
          props: {
            option: {
              type: Object,
              default: function () {
                return {};
              },
            },
            currentValue: { type: String, default: '' },
          },
          computed: (function (e) {
            for (var i = 1; i < arguments.length; i++) {
              var source = null != arguments[i] ? arguments[i] : {};
              i % 2
                ? o(Object(source), !0).forEach(function (t) {
                    Object(n.a)(e, t, source[t]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(source),
                  )
                : o(Object(source)).forEach(function (t) {
                    Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(source, t),
                    );
                  });
            }
            return e;
          })({}, Object(c.b)(['currency'])),
        },
        f = l,
        O = r(3),
        component = Object(O.a)(
          f,
          function () {
            var e = this,
              t = e._self._c;
            return t(
              'div',
              e._l(e.option.values, function (r) {
                return t(
                  'div',
                  {
                    key: r.name,
                    staticClass: 'checkbox relative flex w-full cursor-pointer',
                  },
                  [
                    t('input', {
                      attrs: { id: r.name, type: 'checkbox' },
                      on: {
                        input: function (t) {
                          return e.$emit('value-changed', {
                            option: r.name,
                            value: t.target.checked ? r.name : '',
                          });
                        },
                      },
                    }),
                    e._v(' '),
                    t(
                      'label',
                      {
                        staticClass: 'label-xs-bold w-full text-primary-dark',
                        attrs: { for: r.name },
                      },
                      [
                        t('p', [e._v(e._s(r.name))]),
                        e._v(' '),
                        t('div', { staticClass: 'ml-auto flex items-center' }, [
                          r.price
                            ? t('span', { staticClass: 'mr-2' }, [
                                e._v(
                                  '+' +
                                    e._s(e.formatMoney(r.price, e.currency)),
                                ),
                              ])
                            : e._e(),
                          e._v(' '),
                          t(
                            'div',
                            { staticClass: 'indicator ml-auto' },
                            [
                              t('BaseIcon', {
                                staticClass: 'text-primary-lighter',
                                attrs: { icon: 'uil:check', size: 'sm' },
                              }),
                            ],
                            1,
                          ),
                        ]),
                      ],
                    ),
                  ],
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
      t.default = component.exports;
      installComponents(component, { BaseIcon: r(30).default });
    },
  },
]);
