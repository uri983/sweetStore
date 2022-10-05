(window.webpackJsonp = window.webpackJsonp || []).push([
  [30],
  {
    690: function (t, e, n) {
      'use strict';
      n.r(e);
      n(12), n(38), n(46), n(35), n(6), n(25), n(27);
      var o = n(62),
        l = n(36),
        r = n(76),
        c = {
          mixins: [o.validationMixin],
          props: {
            heading: { type: String, default: '' },
            text: { type: String, default: '' },
            acceptLabel: { type: String, default: 'Save' },
            refuseLabel: { type: String, default: 'Go back' },
            loadingLabel: { type: String, default: 'Saving' },
            options: {
              type: Array,
              default: function () {
                return [];
              },
            },
            optionState: { type: [Object, Array], default: function () {} },
            isUpdating: { type: Boolean, default: !1 },
          },
          computed: {
            visibleOptionIds: function () {
              var t = this.optionState;
              return Object(r.a)(this.options, t).map(function (t) {
                return t.id;
              });
            },
            optionInputs: function () {
              return this.options
                ? this.options.reduce(function (t, option) {
                    var e;
                    switch (option.inputType) {
                      case 'short_text':
                      case 'long_text':
                        e = 'Text';
                        break;
                      case 'toggle':
                        e = 'Checkbox';
                        break;
                      default:
                        e = 'Select';
                    }
                    return (
                      (option.subscription && option.values.length < 2) ||
                        t.push({
                          option: option,
                          component: function () {
                            return n(162)('./ProductOption'.concat(e, '.vue'));
                          },
                        }),
                      t
                    );
                  }, [])
                : {};
            },
          },
          methods: {
            emitValue: function (t) {
              this.$emit('value-changed', t);
            },
            update: function () {
              this.$emit('update', this.optionState);
            },
          },
          validations: function () {
            return {
              optionState: this.options.reduce(function (t, option) {
                return (
                  option.required &&
                    (t[option.name] = { required: l.required }),
                  t
                );
              }, {}),
            };
          },
        },
        d = n(3),
        component = Object(d.a)(
          c,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              'transition',
              { attrs: { name: 'popup', duration: 700, appear: '' } },
              [
                e('div', { staticClass: 'fixed inset-0 z-40' }, [
                  e('div', {
                    staticClass:
                      'overlay absolute h-full w-full bg-primary-darker opacity-50',
                    on: {
                      click: function (e) {
                        return t.$emit('click-close');
                      },
                    },
                  }),
                  t._v(' '),
                  e(
                    'div',
                    {
                      staticClass:
                        'panel h-vh-gap md:center-xy absolute bottom-0 w-full overflow-auto rounded-t bg-primary-lighter md:relative md:h-auto md:max-h-80vh md:w-128 md:rounded',
                    },
                    [
                      e(
                        'div',
                        { staticClass: 'container py-6' },
                        [
                          e('div', { staticClass: 'mb-5 flex' }, [
                            t.heading
                              ? e('h3', [
                                  t._v(
                                    '\n            ' +
                                      t._s(t.heading) +
                                      '\n          ',
                                  ),
                                ])
                              : t._e(),
                            t._v(' '),
                            e(
                              'button',
                              {
                                staticClass: 'ml-auto',
                                on: {
                                  click: function (e) {
                                    return (
                                      e.preventDefault(), t.$emit('click-close')
                                    );
                                  },
                                },
                              },
                              [
                                e('BaseIcon', {
                                  attrs: { icon: 'uil:multiply', size: 'sm' },
                                }),
                              ],
                              1,
                            ),
                          ]),
                          t._v(' '),
                          t.text
                            ? e('p', [
                                t._v(
                                  '\n          ' + t._s(t.text) + '\n        ',
                                ),
                              ])
                            : t._e(),
                          t._v(' '),
                          t._l(t.optionInputs, function (input) {
                            return e(
                              'div',
                              { key: input.name, staticClass: 'my-4' },
                              [
                                t.visibleOptionIds.includes(input.option.id)
                                  ? e(input.component, {
                                      tag: 'component',
                                      attrs: {
                                        option: input.option,
                                        'current-value':
                                          t.optionState[input.option.name],
                                        validation:
                                          t.$v.optionState[input.option.name],
                                      },
                                      on: { 'value-changed': t.emitValue },
                                    })
                                  : t._e(),
                              ],
                              1,
                            );
                          }),
                          t._v(' '),
                          e(
                            'div',
                            { staticClass: 'mt-16 block md:flex' },
                            [
                              e('BaseButton', {
                                staticClass:
                                  'mb-4 md:order-2 md:ml-4 md:mb-0 md:w-1/2',
                                attrs: {
                                  appearance: 'dark',
                                  label: t.acceptLabel,
                                  'loading-label': t.loadingLabel,
                                  'is-loading': t.isUpdating,
                                },
                                nativeOn: {
                                  click: function (e) {
                                    return t.update();
                                  },
                                },
                              }),
                              t._v(' '),
                              e('BaseButton', {
                                staticClass: 'md:order-1 md:mb-0 md:w-1/2',
                                attrs: {
                                  appearance: 'light',
                                  label: t.refuseLabel,
                                },
                                nativeOn: {
                                  click: function (e) {
                                    return t.$emit('click-close');
                                  },
                                },
                              }),
                            ],
                            1,
                          ),
                        ],
                        2,
                      ),
                    ],
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
      installComponents(component, {
        BaseIcon: n(30).default,
        BaseButton: n(84).default,
      });
    },
  },
]);
