(window.webpackJsonp = window.webpackJsonp || []).push([
  [51],
  {
    572: function (t, e, n) {
      var content = n(584);
      content.__esModule && (content = content.default),
        'string' == typeof content && (content = [[t.i, content, '']]),
        content.locals && (t.exports = content.locals);
      (0, n(56).default)('35a76948', content, !0, { sourceMap: !1 });
    },
    583: function (t, e, n) {
      'use strict';
      n(572);
    },
    584: function (t, e, n) {
      var o = n(55)(function (i) {
        return i[1];
      });
      o.push([
        t.i,
        '.loader[data-v-6a016c1a]{border-top-color:#3498db;-webkit-animation:spinner-6a016c1a 1.5s linear infinite;animation:spinner-6a016c1a 1.5s linear infinite}@-webkit-keyframes spinner-6a016c1a{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes spinner-6a016c1a{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}',
        '',
      ]),
        (o.locals = {}),
        (t.exports = o);
    },
    610: function (t, e, n) {
      'use strict';
      n.r(e);
      var o = {
          name: 'LoaderProcess',
          components: {},
          data: function () {
            return {};
          },
          props: { loading: { type: Boolean, default: !1 } },
          methods: {},
          mounted: function () {},
        },
        r = (n(583), n(3)),
        component = Object(r.a)(
          o,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              'div',
              {
                directives: [
                  {
                    name: 'show',
                    rawName: 'v-show',
                    value: t.loading,
                    expression: 'loading',
                  },
                ],
                staticClass:
                  'fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-700 opacity-75 flex flex-col items-center justify-center',
              },
              [
                e('div', {
                  staticClass:
                    'loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4',
                }),
                t._v(' '),
                e(
                  'h2',
                  {
                    staticClass: 'text-center text-white text-xl font-semibold',
                  },
                  [t._v('Procesando')],
                ),
                t._v(' '),
                e('p', { staticClass: 'w-1/3 text-center text-white' }, [
                  t._v('Esto pude tardar unos minutos.'),
                ]),
              ],
            );
          },
          [],
          !1,
          null,
          '6a016c1a',
          null,
        );
      e.default = component.exports;
    },
  },
]);
