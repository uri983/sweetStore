(window.webpackJsonp = window.webpackJsonp || []).push([
  [77],
  {
    775: function (e, t, r) {
      'use strict';
      r.r(t);
      var o = r(0),
        n = (r(15), r(62)),
        c = r(36),
        d = {
          mixins: [n.validationMixin],
          data: function () {
            return {
              resetKey: null,
              password: null,
              confirmPassword: null,
              isProcessing: !1,
            };
          },
          head: function () {
            return { title: this.$t('account.resetPassword.title') };
          },
          created: function () {
            (this.resetKey = this.$route.query.key),
              this.resetKey || this.$router.push(this.localePath('/'));
          },
          methods: {
            changePassword: function () {
              var e = this;
              return Object(o.a)(
                regeneratorRuntime.mark(function t() {
                  var r, o, n;
                  return regeneratorRuntime.wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            if ((e.$v.$touch(), !e.$v.$invalid)) {
                              t.next = 3;
                              break;
                            }
                            return t.abrupt('return');
                          case 3:
                            return (
                              (e.isProcessing = !0),
                              (t.prev = 4),
                              (r = e.resetKey),
                              (o = e.password),
                              (t.next = 8),
                              e.$swell.account.recover({
                                resetKey: r,
                                password: o,
                              })
                            );
                          case 8:
                            (n = t.sent),
                              (e.isProcessing = !1),
                              n.success &&
                                (e.$store.dispatch('showNotification', {
                                  message: e.$t(
                                    'account.resetPassword.success',
                                  ),
                                }),
                                e.$router.push(e.localePath('/'))),
                              (t.next = 17);
                            break;
                          case 13:
                            (t.prev = 13),
                              (t.t0 = t.catch(4)),
                              (e.isProcessing = !1),
                              e.$store.dispatch('showNotification', {
                                message: e.$t('account.resetPassword.error'),
                                type: 'error',
                              });
                          case 17:
                          case 'end':
                            return t.stop();
                        }
                    },
                    t,
                    null,
                    [[4, 13]],
                  );
                }),
              )();
            },
          },
          validations: {
            password: {
              required: c.required,
              minLength: Object(c.minLength)(6),
            },
            confirmPassword: {
              required: c.required,
              sameAsPassword: Object(c.sameAs)('password'),
            },
          },
        },
        l = r(3),
        component = Object(l.a)(
          d,
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
                      : e.changePassword.apply(null, arguments);
                  },
                },
              },
              [
                t('h2', { staticClass: 'pb-6' }, [
                  e._v(e._s(e.$t('account.resetPassword.title'))),
                ]),
                e._v(' '),
                t('p', { staticClass: 'mb-10 text-sm' }, [
                  e._v(e._s(e.$t('account.resetPassword.infoText'))),
                ]),
                e._v(' '),
                t(
                  'div',
                  { staticClass: 'mb-6' },
                  [
                    t('InputText', {
                      staticClass: 'mb-2',
                      attrs: {
                        label: e.$t('account.resetPassword.password.label'),
                        type: 'password',
                        hint: e.$t('account.resetPassword.password.hint', {
                          n: 6,
                        }),
                        placeholder: e.$t(
                          'account.resetPassword.password.placeholder',
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
                                        'account.resetPassword.password.minLength',
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
                                        'account.resetPassword.password.required',
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
                        type: 'password',
                        placeholder: e.$t(
                          'account.resetPassword.confirmPassword.placeholder',
                        ),
                      },
                      model: {
                        value: e.confirmPassword,
                        callback: function (t) {
                          e.confirmPassword = t;
                        },
                        expression: 'confirmPassword',
                      },
                    }),
                    e._v(' '),
                    e.$v.confirmPassword.$dirty
                      ? [
                          e.$v.confirmPassword.sameAsPassword
                            ? e._e()
                            : t(
                                'span',
                                { staticClass: 'label-sm text-error-default' },
                                [
                                  e._v(
                                    e._s(
                                      e.$t(
                                        'account.resetPassword.confirmPassword.notMatch',
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
                  attrs: {
                    appearance: 'dark',
                    label: e.$t('account.resetPassword.button.label'),
                    'loading-label': e.$t(
                      'account.resetPassword.button.loadingLabel',
                    ),
                    'is-loading': e.isProcessing,
                  },
                  nativeOn: {
                    click: function (t) {
                      return e.changePassword();
                    },
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
        InputText: r(309).default,
        BaseButton: r(84).default,
      });
    },
  },
]);
