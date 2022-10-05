(window.webpackJsonp = window.webpackJsonp || []).push([
  [70],
  {
    770: function (e, t, c) {
      'use strict';
      c.r(t);
      var r = c(0),
        n = (c(15), c(62)),
        l = c(36),
        o = {
          mixins: [n.validationMixin],
          data: function () {
            return {
              email: '',
              password: '',
              firstName: '',
              lastName: '',
              isProcessing: !1,
              errorMessage: '',
            };
          },
          head: function () {
            return { title: this.$t('account.createAccount.title') };
          },
          activated: function () {
            this.$v.$reset();
          },
          methods: {
            createAccount: function () {
              var e = this;
              return Object(r.a)(
                regeneratorRuntime.mark(function t() {
                  var c, r, n, l, o;
                  return regeneratorRuntime.wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            if (((t.prev = 0), e.$v.$touch(), !e.$v.$invalid)) {
                              t.next = 4;
                              break;
                            }
                            return t.abrupt('return');
                          case 4:
                            return (
                              (e.isProcessing = !0),
                              (c = e.email),
                              (r = e.firstName),
                              (n = e.lastName),
                              (l = e.password),
                              (t.next = 8),
                              e.$swell.account.create({
                                email: c,
                                firstName: r,
                                lastName: n,
                                password: l,
                                emailOptin: !0,
                              })
                            );
                          case 8:
                            (o = t.sent),
                              (e.isProcessing = !1),
                              o.id
                                ? ((e.isProcessing = !1),
                                  e.$store.commit('setState', {
                                    key: 'customerLoggedIn',
                                    value: !0,
                                  }),
                                  e.$store.dispatch('showNotification', {
                                    message: e.$t(
                                      'account.createAccount.success',
                                    ),
                                  }),
                                  e.$router.push(
                                    e.localePath('/account/orders/'),
                                  ))
                                : o.email &&
                                  'UNIQUE' === o.email.code &&
                                  e.$store.dispatch('showNotification', {
                                    message: e.$t(
                                      'account.createAccount.alreadyExists',
                                    ),
                                    type: 'error',
                                  }),
                              (t.next = 16);
                            break;
                          case 13:
                            (t.prev = 13),
                              (t.t0 = t.catch(0)),
                              e.$store.dispatch('showNotification', {
                                message:
                                  t.t0.message ||
                                  e.$t('account.createAccount.error'),
                                type: 'error',
                              });
                          case 16:
                          case 'end':
                            return t.stop();
                        }
                    },
                    t,
                    null,
                    [[0, 13]],
                  );
                }),
              )();
            },
          },
          validations: {
            firstName: {
              required: l.required,
              maxLength: Object(l.maxLength)(40),
            },
            lastName: {
              required: l.required,
              maxLength: Object(l.maxLength)(40),
            },
            email: { required: l.required, email: l.email },
            password: {
              required: l.required,
              minLength: Object(l.minLength)(6),
            },
          },
        },
        m = c(3),
        component = Object(m.a)(
          o,
          function () {
            var e = this,
              t = e._self._c;
            return t(
              'div',
              {
                staticClass:
                  'container relative pt-6 pb-24 md:max-w-112 md:pt-24',
                on: {
                  keyup: function (t) {
                    return !t.type.indexOf('key') &&
                      e._k(t.keyCode, 'enter', 13, t.key, 'Enter')
                      ? null
                      : e.createAccount.apply(null, arguments);
                  },
                },
              },
              [
                t('h2', { staticClass: 'pb-6' }, [
                  e._v(e._s(e.$t('account.createAccount.title'))),
                ]),
                e._v(' '),
                t(
                  'div',
                  { staticClass: 'mb-6' },
                  [
                    t('InputText', {
                      staticClass: 'mb-2',
                      attrs: {
                        label: e.$t('account.createAccount.firstName.label'),
                        name: 'fname',
                        autocomplete: 'given-name',
                      },
                      model: {
                        value: e.firstName,
                        callback: function (t) {
                          e.firstName = t;
                        },
                        expression: 'firstName',
                      },
                    }),
                    e._v(' '),
                    e.$v.firstName.$dirty
                      ? [
                          e.$v.firstName.required
                            ? e._e()
                            : t(
                                'span',
                                { staticClass: 'label-sm text-error-default' },
                                [
                                  e._v(
                                    e._s(
                                      e.$t(
                                        'account.createAccount.firstName.required',
                                      ),
                                    ),
                                  ),
                                ],
                              ),
                          e._v(' '),
                          e.$v.firstName.maxLength
                            ? e._e()
                            : t(
                                'span',
                                { staticClass: 'label-sm text-error-default' },
                                [
                                  e._v(
                                    e._s(
                                      e.$t(
                                        'account.createAccount.firstName.maxLength',
                                        { n: 40 },
                                      ),
                                    ),
                                  ),
                                ],
                              ),
                        ]
                      : e._e(),
                  ],
                  2,
                ),
                e._v(' '),
                t(
                  'div',
                  { staticClass: 'mb-6' },
                  [
                    t('InputText', {
                      staticClass: 'mb-2',
                      attrs: {
                        label: e.$t('account.createAccount.lastName.label'),
                        name: 'lastName',
                        autocomplete: 'family-name',
                      },
                      model: {
                        value: e.lastName,
                        callback: function (t) {
                          e.lastName = t;
                        },
                        expression: 'lastName',
                      },
                    }),
                    e._v(' '),
                    e.$v.lastName.$dirty
                      ? [
                          e.$v.lastName.required
                            ? e._e()
                            : t(
                                'span',
                                { staticClass: 'label-sm text-error-default' },
                                [
                                  e._v(
                                    e._s(
                                      e.$t(
                                        'account.createAccount.lastName.required',
                                      ),
                                    ),
                                  ),
                                ],
                              ),
                          e._v(' '),
                          e.$v.lastName.maxLength
                            ? e._e()
                            : t(
                                'span',
                                { staticClass: 'label-sm text-error-default' },
                                [
                                  e._v(
                                    e._s(
                                      e.$t(
                                        'account.createAccount.lastName.maxLength',
                                        { n: 40 },
                                      ),
                                    ),
                                  ),
                                ],
                              ),
                        ]
                      : e._e(),
                  ],
                  2,
                ),
                e._v(' '),
                t(
                  'div',
                  { staticClass: 'mb-6' },
                  [
                    t('InputText', {
                      staticClass: 'mb-2',
                      attrs: {
                        label: e.$t('account.createAccount.email.label'),
                        placeholder: e.$t(
                          'account.createAccount.email.placeholder',
                        ),
                        name: 'email',
                        autocomplete: 'email',
                      },
                      model: {
                        value: e.email,
                        callback: function (t) {
                          e.email = t;
                        },
                        expression: 'email',
                      },
                    }),
                    e._v(' '),
                    e.$v.email.$dirty
                      ? [
                          e.$v.email.email
                            ? e.$v.email.required
                              ? e._e()
                              : t(
                                  'span',
                                  {
                                    staticClass: 'label-sm text-error-default',
                                  },
                                  [
                                    e._v(
                                      e._s(
                                        e.$t(
                                          'account.createAccount.email.required',
                                        ),
                                      ),
                                    ),
                                  ],
                                )
                            : t(
                                'span',
                                { staticClass: 'label-sm text-error-default' },
                                [
                                  e._v(
                                    e._s(
                                      e.$t(
                                        'account.createAccount.email.format',
                                      ),
                                    ),
                                  ),
                                ],
                              ),
                        ]
                      : e._e(),
                  ],
                  2,
                ),
                e._v(' '),
                t(
                  'div',
                  { staticClass: 'mb-6' },
                  [
                    t('InputText', {
                      staticClass: 'mb-2',
                      attrs: {
                        label: e.$t('account.createAccount.password.label'),
                        type: 'password',
                        hint: e.$t('account.createAccount.password.hint', {
                          n: 6,
                        }),
                        placeholder: e.$t(
                          'account.createAccount.password.placeholder',
                        ),
                        name: 'newPassword',
                        autocomplete: 'new-password',
                      },
                      model: {
                        value: e.password,
                        callback: function (t) {
                          e.password = t;
                        },
                        expression: 'password',
                      },
                    }),
                    e._v(' '),
                    e.$v.password.$dirty
                      ? [
                          e.$v.password.minLength
                            ? e._e()
                            : t(
                                'span',
                                { staticClass: 'label-sm text-error-default' },
                                [
                                  e._v(
                                    e._s(
                                      e.$t(
                                        'account.createAccount.password.minLength',
                                        { n: 6 },
                                      ),
                                    ),
                                  ),
                                ],
                              ),
                          e._v(' '),
                          e.$v.password.required
                            ? e._e()
                            : t(
                                'span',
                                { staticClass: 'label-sm text-error-default' },
                                [
                                  e._v(
                                    e._s(
                                      e.$t(
                                        'account.createAccount.password.required',
                                      ),
                                    ),
                                  ),
                                ],
                              ),
                        ]
                      : e._e(),
                  ],
                  2,
                ),
                e._v(' '),
                t('BaseButton', {
                  staticClass: 'mt-6 mb-4',
                  attrs: {
                    appearance: 'dark',
                    label: e.$t('account.createAccount.button.label'),
                    'loading-label': e.$t(
                      'account.createAccount.button.loadingLabel',
                    ),
                    'is-loading': e.isProcessing,
                  },
                  nativeOn: {
                    click: function (t) {
                      return e.createAccount();
                    },
                  },
                }),
                e._v(' '),
                t('BaseButton', {
                  attrs: {
                    appearance: 'light',
                    label: e.$t('account.createAccount.logIn'),
                    link: e.localePath('/account/login'),
                  },
                }),
              ],
              1,
            );
          },
          [],
          !1,
          null,
          null,
          null,
        );
      t.default = component.exports;
      installComponents(component, {
        InputText: c(309).default,
        BaseButton: c(84).default,
      });
    },
  },
]);
