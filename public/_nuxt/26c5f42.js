(window.webpackJsonp = window.webpackJsonp || []).push([
  [10, 9],
  {
    539: function (t, e, o) {
      'use strict';
      o.r(e);
      o(12), o(11), o(57);
      var n = {
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
        r = o(3),
        component = Object(r.a)(
          n,
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
      installComponents(component, { BaseIcon: o(30).default });
    },
    542: function (t, e, o) {
      'use strict';
      o.r(e);
      o(6), o(25), o(12), o(42), o(26), o(86), o(50), o(11), o(57);
      var n = {
          name: 'OptionInputSelect',
          props: {
            option: {
              type: Object,
              default: function () {
                return { values: [] };
              },
            },
            currentValue: { type: String, default: '' },
            showValueDescription: { type: Boolean, default: !0 },
            validation: { type: Object, default: null },
            appearance: { type: String, default: '' },
          },
          data: function () {
            return { active: { uid: null }, dropdownIsActive: !1 };
          },
          computed: {
            inputType: function () {
              var t = this.option.values;
              if (!t) return 'menu';
              if ('menu' === this.appearance) return 'menu';
              var e = t.reduce(function (t, e) {
                return t + (e.color ? 0 : e.name.replace(/[.,]/g, ''));
              }, 0);
              return t.length <= 5 || (t.length <= 15 && e < 25)
                ? 'radio'
                : 'menu';
            },
            valueDescription: function () {
              var t = this,
                e = (this.option.values || []).find(function (e) {
                  return e.name === t.currentValue;
                });
              if (e) return e.description || '';
            },
            swatchColor: function () {
              var t = this;
              if (this.currentValue)
                return this.option.values.find(function (e) {
                  return e.name === t.currentValue;
                }).color;
            },
          },
          mounted: function () {
            var t = this.option,
              e = t.name,
              o = t.values;
            !this.currentValue &&
              o &&
              o.length &&
              this.$emit('value-changed', { option: e, value: o[0].name }),
              window.addEventListener('click', this.clickOutside);
          },
          beforeDestroy: function () {
            window.removeEventListener('click', this.clickOutside);
          },
          methods: {
            toggleDropdown: function () {
              (this.dropdownIsActive = !this.dropdownIsActive),
                this.dropdownIsActive &&
                  this.$emit('dropdown-active', this._uid);
            },
            selectValue: function (t) {
              this.$emit('value-changed', {
                option: this.option.name,
                value: t.name,
              }),
                (this.dropdownIsActive = !1);
            },
            clickOutside: function (t) {
              this.$el.contains(t.target) || (this.dropdownIsActive = !1);
            },
          },
        },
        r = (o(741), o(3)),
        component = Object(r.a)(
          n,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              'div',
              [
                e(
                  'ProductOptionLabel',
                  t._b({}, 'ProductOptionLabel', t.option, !1),
                ),
                t._v(' '),
                'radio' === t.inputType
                  ? e(
                      'div',
                      {
                        staticClass: 'mt-3 -ml-1 flex flex-wrap',
                        attrs: { role: 'group' },
                      },
                      t._l(t.option.values, function (o) {
                        return e(
                          'div',
                          {
                            key: o.name,
                            staticClass:
                              'radio-selector relative mt-1 ml-1 inline-block text-center',
                            class: { 'flex-grow': t.option.values.length <= 2 },
                          },
                          [
                            e('input', {
                              staticClass: 'absolute inset-0 opacity-0',
                              attrs: {
                                id: o.id,
                                name: t.option.name,
                                disabled: o.disabled,
                                type: 'radio',
                              },
                              domProps: { value: o.name },
                              on: {
                                input: function (e) {
                                  return t.$emit('value-changed', {
                                    option: t.option.name,
                                    value: e.target.value,
                                  });
                                },
                              },
                            }),
                            t._v(' '),
                            e(
                              'label',
                              {
                                staticClass:
                                  'relative block w-full cursor-pointer rounded border border-primary-med text-sm font-semibold hover:border-primary-darkest focus:shadow-outline',
                                class: {
                                  'border-primary-darkest':
                                    o.name === t.currentValue,
                                  'text-primary-med': o.disabled,
                                },
                                attrs: { for: o.id },
                              },
                              [
                                o.color
                                  ? e('span', {
                                      staticClass:
                                        'm-1 block h-8 w-8 rounded-sm',
                                      style: 'background: '.concat(o.color),
                                    })
                                  : e(
                                      'span',
                                      { staticClass: 'block min-w-12 p-3' },
                                      [t._v(t._s(o.name))],
                                    ),
                              ],
                            ),
                          ],
                        );
                      }),
                      0,
                    )
                  : e('div', [
                      e(
                        'div',
                        {
                          staticClass:
                            'relative bg-primary-lightest text-sm hover:border-primary-darkest',
                        },
                        [
                          e(
                            'button',
                            {
                              staticClass:
                                'focus:outline-none relative flex w-full cursor-pointer items-center rounded border border-primary-med p-2 font-semibold focus:shadow-outline',
                              class: { 'rounded-b-none': t.dropdownIsActive },
                              attrs: {
                                id: 'option-'.concat(t.option.id, '-button'),
                                'aria-labelledby': 'option-'
                                  .concat(t.option.id, '-label option-')
                                  .concat(t.option.id, '-button'),
                                'aria-haspopup': 'listbox',
                              },
                              on: { click: t.toggleDropdown },
                            },
                            [
                              t.swatchColor
                                ? e('span', {
                                    staticClass:
                                      'mr-1 inline-block h-7 w-7 rounded-sm',
                                    style: 'background: '.concat(t.swatchColor),
                                  })
                                : t._e(),
                              t._v(' '),
                              e('span', { staticClass: 'my-1 ml-2' }, [
                                t._v(t._s(t.currentValue)),
                              ]),
                              t._v(' '),
                              e(
                                'div',
                                {
                                  directives: [
                                    {
                                      name: 'show',
                                      rawName: 'v-show',
                                      value: t.dropdownIsActive,
                                      expression: 'dropdownIsActive',
                                    },
                                  ],
                                  staticClass: 'absolute right-3 mt-px',
                                },
                                [
                                  e('BaseIcon', {
                                    attrs: { icon: 'uil:angle-up' },
                                  }),
                                ],
                                1,
                              ),
                              t._v(' '),
                              e(
                                'div',
                                {
                                  directives: [
                                    {
                                      name: 'show',
                                      rawName: 'v-show',
                                      value: !t.dropdownIsActive,
                                      expression: '!dropdownIsActive',
                                    },
                                  ],
                                  staticClass: 'absolute right-3 mt-px',
                                },
                                [
                                  e('BaseIcon', {
                                    attrs: { icon: 'uil:angle-down' },
                                  }),
                                ],
                                1,
                              ),
                            ],
                          ),
                          t._v(' '),
                          e(
                            'ul',
                            {
                              directives: [
                                {
                                  name: 'show',
                                  rawName: 'v-show',
                                  value: t.dropdownIsActive,
                                  expression: 'dropdownIsActive',
                                },
                              ],
                              staticClass:
                                'absolute z-10 -mt-px block max-h-25vh w-full overflow-auto rounded border border-primary-med bg-primary-lightest py-2',
                              class: { 'rounded-t-none': t.dropdownIsActive },
                              attrs: {
                                id: 'option-'.concat(t.option.id, '-menu'),
                                'aria-labelledby': 'option-'.concat(
                                  t.option.id,
                                  '-label',
                                ),
                                role: 'listbox',
                              },
                            },
                            t._l(t.option.values, function (o) {
                              return e(
                                'li',
                                {
                                  key: o.name,
                                  staticClass:
                                    'mb-0 flex cursor-pointer items-center px-2 hover:bg-primary-lighter',
                                  class: {
                                    'text-primary-med':
                                      o.name === t.currentValue,
                                  },
                                  attrs: {
                                    id: 'value-'.concat(o.name),
                                    role: 'option',
                                  },
                                  on: {
                                    click: function (e) {
                                      return t.selectValue(o);
                                    },
                                  },
                                },
                                [
                                  o.color
                                    ? e('span', {
                                        staticClass:
                                          'mr-1 inline-block h-7 w-7 rounded-sm',
                                        style: 'background: '.concat(
                                          t.swatchColor,
                                        ),
                                      })
                                    : t._e(),
                                  t._v(' '),
                                  e(
                                    'span',
                                    { staticClass: 'm-2 font-semibold' },
                                    [t._v(t._s(o.name))],
                                  ),
                                ],
                              );
                            }),
                            0,
                          ),
                        ],
                      ),
                    ]),
                t._v(' '),
                t.valueDescription && t.showValueDescription
                  ? e(
                      'span',
                      {
                        staticClass:
                          'mt-4 inline-block text-xs font-semibold text-primary-dark',
                      },
                      [t._v(t._s(t.valueDescription))],
                    )
                  : t._e(),
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
          null,
          null,
        );
      e.default = component.exports;
      installComponents(component, {
        ProductOptionLabel: o(539).default,
        BaseIcon: o(30).default,
      });
    },
    667: function (t, e, o) {
      var content = o(742);
      content.__esModule && (content = content.default),
        'string' == typeof content && (content = [[t.i, content, '']]),
        content.locals && (t.exports = content.locals);
      (0, o(56).default)('dc080842', content, !0, { sourceMap: !1 });
    },
    741: function (t, e, o) {
      'use strict';
      o(667);
    },
    742: function (t, e, o) {
      var n = o(55)(function (i) {
        return i[1];
      });
      n.push([
        t.i,
        '.radio-selector input:focus+label{--tw-shadow:0 0 0 3px hsla(200, 100%, 36%, 0.75);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}',
        '',
      ]),
        (n.locals = {}),
        (t.exports = n);
    },
  },
]);
