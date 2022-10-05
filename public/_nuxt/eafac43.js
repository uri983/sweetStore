(window.webpackJsonp = window.webpackJsonp || []).push([
  [9],
  {
    539: function (t, e, n) {
      'use strict';
      n.r(e);
      n(12), n(11), n(57);
      var l = {
          name: 'ProductOptionLabel',
          props: {
            id: { type: String, default: '' },
            name: { type: String, default: '' },
            description: { type: String, default: '' },
          },
          data: function () {
            return { isHintVisible: !1 };
          },
          methods: {
            toggleHint: function () {
              this.isHintVisible = !this.isHintVisible;
            },
          },
        },
        r = n(3),
        component = Object(r.a)(
          l,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              'div',
              { staticClass: 'mb-3 flex items-start justify-between' },
              [
                e('div', { staticClass: 'relative w-full' }, [
                  e('div', { staticClass: 'mr-6' }, [
                    e(
                      'label',
                      {
                        staticClass:
                          'label-xs-bold inline-block text-primary-dark',
                        attrs: {
                          id: 'option-'.concat(t.id, '-label'),
                          for: t.name,
                        },
                      },
                      [t._v(t._s(t.name))],
                    ),
                    t._v(' '),
                    t.description
                      ? e(
                          'a',
                          {
                            staticClass:
                              'relative -mt-1 -mb-1 ml-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary-light text-center',
                            attrs: { href: '#', title: 'More info' },
                            on: {
                              click: function (e) {
                                return (
                                  e.preventDefault(),
                                  t.toggleHint.apply(null, arguments)
                                );
                              },
                            },
                          },
                          [
                            e('BaseIcon', {
                              attrs: {
                                icon: 'fa-solid:question',
                                size: 'w-2 h-3',
                              },
                            }),
                            t._v(' '),
                            e('div', {
                              directives: [
                                {
                                  name: 'show',
                                  rawName: 'v-show',
                                  value: t.isHintVisible,
                                  expression: 'isHintVisible',
                                },
                              ],
                              staticClass: 'mini-triangle',
                            }),
                          ],
                          1,
                        )
                      : t._e(),
                  ]),
                  t._v(' '),
                  e(
                    'div',
                    {
                      directives: [
                        {
                          name: 'show',
                          rawName: 'v-show',
                          value: t.isHintVisible,
                          expression: 'isHintVisible',
                        },
                      ],
                      staticClass:
                        'absolute z-20 mt-1 -ml-2 w-64 rounded border border-primary-med bg-primary-lightest px-3 py-2 text-sm shadow-lg',
                    },
                    [t._v('\n      ' + t._s(t.description) + '\n    ')],
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
      installComponents(component, { BaseIcon: n(30).default });
    },
  },
]);
