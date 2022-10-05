(window.webpackJsonp = window.webpackJsonp || []).push([
  [11, 9],
  {
    539: function (t, e, n) {
      'use strict';
      n.r(e);
      n(12), n(11), n(57);
      var r = {
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
        l = n(3),
        component = Object(l.a)(
          r,
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
    543: function (t, e, n) {
      'use strict';
      n.r(e);
      n(12);
      var r = {
          name: 'OptionInputText',
          props: {
            option: {
              type: Object,
              default: function () {
                return {};
              },
            },
            emitOnEnter: { type: Boolean, default: !1 },
            validation: { type: Object, default: null },
            currentValue: { type: String, default: '' },
          },
          data: function () {
            return { internalValue: null };
          },
          computed: {
            value: function () {
              return this.emitOnEnter ? this.internalValue : this.currentValue;
            },
          },
          methods: {
            emitValue: function (t) {
              var e = t.target.value;
              this.emitOnEnter
                ? (this.internalValue = e)
                : this.$emit('value-changed', {
                    option: this.option.name,
                    value: e,
                  });
            },
            emitValueOnEnter: function () {
              this.emitOnEnter &&
                this.$emit('value-changed', {
                  option: this.option.name,
                  value: this.internalValue,
                });
            },
          },
        },
        l = (n(743), n(3)),
        component = Object(l.a)(
          r,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              'div',
              {
                on: {
                  keyup: function (e) {
                    return !e.type.indexOf('key') &&
                      t._k(e.keyCode, 'enter', 13, e.key, 'Enter')
                      ? null
                      : t.emitValueOnEnter.apply(null, arguments);
                  },
                },
              },
              [
                e(
                  'ProductOptionLabel',
                  t._b({}, 'ProductOptionLabel', t.option, !1),
                ),
                t._v(' '),
                'short_text' === t.option.inputType
                  ? e('input', {
                      staticClass: 'text-input h-12 bg-primary-lightest',
                      attrs: { placeholder: t.option.inputHint },
                      domProps: { value: t.value },
                      on: { input: t.emitValue },
                    })
                  : e('textarea', {
                      staticClass: 'text-input',
                      attrs: { placeholder: t.option.inputHint },
                      domProps: { value: t.value },
                      on: { input: t.emitValue },
                    }),
                t._v(' '),
                t.validation
                  ? [
                      t.validation.$dirty && t.validation.$error
                        ? e('div', { staticClass: 'mt-2 text-error-default' }, [
                            t.validation.required
                              ? t._e()
                              : e(
                                  'span',
                                  {
                                    staticClass: 'label-sm text-error-default',
                                  },
                                  [
                                    t._v(
                                      t._s(
                                        t.$t('products.slug.options.required'),
                                      ),
                                    ),
                                  ],
                                ),
                          ])
                        : t._e(),
                    ]
                  : t._e(),
              ],
              2,
            );
          },
          [],
          !1,
          null,
          '1e95f852',
          null,
        );
      e.default = component.exports;
      installComponents(component, { ProductOptionLabel: n(539).default });
    },
    668: function (t, e, n) {
      var content = n(744);
      content.__esModule && (content = content.default),
        'string' == typeof content && (content = [[t.i, content, '']]),
        content.locals && (t.exports = content.locals);
      (0, n(56).default)('278c1cee', content, !0, { sourceMap: !1 });
    },
    743: function (t, e, n) {
      'use strict';
      n(668);
    },
    744: function (t, e, n) {
      var r = n(55)(function (i) {
        return i[1];
      });
      r.push([
        t.i,
        '.text-input[data-v-1e95f852]{width:100%;border-radius:0.25rem;border-width:1px;--tw-border-opacity:1;border-color:rgba(217, 213, 208, var(--tw-border-opacity));padding:1rem;font-size:.875rem}.text-input[data-v-1e95f852]:focus{--tw-shadow:0 0 0 3px hsla(200, 100%, 36%, 0.75);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}',
        '',
      ]),
        (r.locals = {}),
        (t.exports = r);
    },
  },
]);
