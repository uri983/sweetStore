(window.webpackJsonp = window.webpackJsonp || []).push([
  [57],
  {
    576: function (t, e, o) {
      var content = o(608);
      content.__esModule && (content = content.default),
        'string' == typeof content && (content = [[t.i, content, '']]),
        content.locals && (t.exports = content.locals);
      (0, o(56).default)('f8d16634', content, !0, { sourceMap: !1 });
    },
    607: function (t, e, o) {
      'use strict';
      o(576);
    },
    608: function (t, e, o) {
      var n = o(55)(function (i) {
        return i[1];
      });
      n.push([
        t.i,
        '.radio-selector input:focus+label{--tw-shadow:0 0 0 3px hsla(200, 100%, 36%, 0.75);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.dropdown-enter-active,.dropdown-leave-active{transition:opacity .5s ease}.dropdown-enter-from,.dropdown-leave-to{opacity:0}',
        '',
      ]),
        (n.locals = {}),
        (t.exports = n);
    },
    617: function (t, e, o) {
      'use strict';
      o.r(e);
      o(42), o(11), o(57), o(50), o(6);
      var n = {
          name: 'ProductFrequencySelect',
          model: { prop: 'selected', event: 'select' },
          props: {
            selected: { type: String, default: '' },
            option: {
              type: Array,
              default: function () {
                return [];
              },
            },
            showValueDescription: { type: Boolean, default: !0 },
            validation: { type: Object, default: null },
          },
          data: function () {
            return { active: { uid: null }, dropdownIsActive: !1 };
          },
          computed: {
            currentValue: function () {
              var t = this;
              return this.option.find(function (e) {
                return e.id === t.selected;
              });
            },
          },
          mounted: function () {
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
              this.$emit('select', t.id), (this.dropdownIsActive = !1);
            },
            clickOutside: function (t) {
              this.$el.contains(t.target) || (this.dropdownIsActive = !1);
            },
          },
        },
        r = (o(607), o(3)),
        component = Object(r.a)(
          n,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              'div',
              [
                e('div', [
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
                            'focus:outline-none relative flex w-full cursor-pointer items-center rounded border border-primary-med p-2 font-semibold',
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
                          e('BaseIcon', {
                            staticClass: 'mr-2',
                            attrs: { icon: 'uil:sync', size: 'w-4 h-4' },
                          }),
                          t._v(' '),
                          e(
                            'span',
                            {
                              staticClass: 'font-normal first-letter:uppercase',
                            },
                            [
                              t._v(
                                t._s(
                                  t._f('formatSubscriptionToLabel')(
                                    t.currentValue,
                                  ),
                                ),
                              ),
                            ],
                          ),
                          t._v(' '),
                          e('div', { staticClass: 'ml-auto' }, [
                            e('span', { staticClass: 'font-semibold' }, [
                              t._v(
                                t._s(
                                  t._f('formatSubscriptionToPrice')(
                                    t.currentValue,
                                  ),
                                ),
                              ),
                            ]),
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
                            },
                            [
                              e('BaseIcon', {
                                attrs: { icon: 'uil:angle-down' },
                              }),
                            ],
                            1,
                          ),
                        ],
                        1,
                      ),
                      t._v(' '),
                      e('transition', { attrs: { name: 'dropdown' } }, [
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
                              'absolute z-10 -mt-px block max-h-34 w-full overflow-auto rounded border border-primary-med bg-primary-lightest py-2',
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
                          t._l(t.option, function (o) {
                            return e(
                              'li',
                              {
                                key: o.id,
                                staticClass:
                                  'mb-0 flex cursor-pointer items-center px-2 hover:bg-primary-lighter',
                                class: {
                                  'text-primary-med':
                                    o.id ===
                                    (t.currentValue && t.currentValue.id),
                                },
                                attrs: {
                                  id: 'value-'.concat(o.id),
                                  role: 'option',
                                },
                                on: {
                                  click: function (e) {
                                    return t.selectValue(o);
                                  },
                                },
                              },
                              [
                                e(
                                  'span',
                                  {
                                    staticClass:
                                      'm-2 font-semibold first-letter:uppercase',
                                  },
                                  [
                                    t._v(
                                      t._s(
                                        t._f('formatSubscriptionToLabel')(o),
                                      ),
                                    ),
                                  ],
                                ),
                                t._v(' '),
                                e('div', { staticClass: 'ml-auto' }, [
                                  e(
                                    'span',
                                    { staticClass: 'mr-2 font-semibold' },
                                    [
                                      t._v(
                                        t._s(
                                          t._f('formatSubscriptionToPrice')(o),
                                        ),
                                      ),
                                    ],
                                  ),
                                ]),
                              ],
                            );
                          }),
                          0,
                        ),
                      ]),
                    ],
                    1,
                  ),
                ]),
                t._v(' '),
                t.currentValue && t.showValueDescription
                  ? e(
                      'span',
                      {
                        staticClass:
                          'mt-4 inline-block text-xs font-semibold text-primary-dark',
                      },
                      [
                        t._v(
                          t._s(t.currentValue && t.currentValue.description),
                        ),
                      ],
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
      installComponents(component, { BaseIcon: o(30).default });
    },
  },
]);
