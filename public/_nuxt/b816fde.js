(window.webpackJsonp = window.webpackJsonp || []).push([
  [71],
  {
    771: function (t, e, o) {
      'use strict';
      o.r(e);
      var n = o(0),
        r = (o(15), o(62)),
        l = o(36),
        c = {
          mixins: [r.validationMixin],
          data: function () {
            return { email: '', isProcessing: !1 };
          },
          head: function () {
            return { title: this.$t('account.forgotPassword.title') };
          },
          activated: function () {
            this.$v.$reset();
          },
          methods: {
            sendPasswordReset: function () {
              var t = this;
              return Object(n.a)(
                regeneratorRuntime.mark(function e() {
                  var o;
                  return regeneratorRuntime.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (((e.prev = 0), t.$v.$touch(), !t.$v.$invalid)) {
                              e.next = 4;
                              break;
                            }
                            return e.abrupt('return');
                          case 4:
                            return (
                              (t.isProcessing = !0),
                              (e.next = 7),
                              t.$swell.account.recover({
                                email: t.email,
                                reset_url: ''.concat(
                                  window.location.origin,
                                  '/account/reset-password/?key={key}',
                                ),
                              })
                            );
                          case 7:
                            (o = e.sent),
                              (t.isProcessing = !1),
                              o.success &&
                                ((t.flow = 'login'),
                                t.$store.dispatch('showNotification', {
                                  message: t.$t(
                                    'account.forgotPassword.success',
                                  ),
                                })),
                              (e.next = 15);
                            break;
                          case 12:
                            (e.prev = 12),
                              (e.t0 = e.catch(0)),
                              t.$store.dispatch('showNotification', {
                                message: t.$t('account.forgotPassword.error'),
                                type: 'error',
                              });
                          case 15:
                          case 'end':
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 12]],
                  );
                }),
              )();
            },
          },
          validations: { email: { required: l.required, email: l.email } },
        },
        d = o(3),
        component = Object(d.a)(
          c,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              'div',
              {
                staticClass:
                  'container relative pt-6 pb-24 md:max-w-112 md:pt-24',
                on: {
                  keyup: function (e) {
                    return !e.type.indexOf('key') &&
                      t._k(e.keyCode, 'enter', 13, e.key, 'Enter')
                      ? null
                      : t.endPasswordReset.apply(null, arguments);
                  },
                },
              },
              [
                e('h2', { staticClass: 'pb-6' }, [
                  t._v(t._s(t.$t('account.forgotPassword.title'))),
                ]),
                t._v(' '),
                e('p', { staticClass: 'mb-10 text-sm' }, [
                  t._v(
                    '\n    ' +
                      t._s(t.$t('account.forgotPassword.infoText')) +
                      '\n  ',
                  ),
                ]),
                t._v(' '),
                e(
                  'div',
                  { staticClass: 'mb-6' },
                  [
                    e('InputText', {
                      staticClass: 'mb-2',
                      attrs: {
                        label: t.$t('account.forgotPassword.email.label'),
                        placeholder: t.$t(
                          'account.forgotPassword.email.placeholder',
                        ),
                        name: 'email',
                        autocomplete: 'email',
                      },
                      model: {
                        value: t.email,
                        callback: function (e) {
                          t.email = e;
                        },
                        expression: 'email',
                      },
                    }),
                    t._v(' '),
                    t.$v.email.$dirty
                      ? [
                          t.$v.email.email
                            ? t.$v.email.required
                              ? t._e()
                              : e(
                                  'span',
                                  {
                                    staticClass: 'label-sm text-error-default',
                                  },
                                  [
                                    t._v(
                                      t._s(
                                        t.$t(
                                          'account.forgotPassword.email.required',
                                        ),
                                      ),
                                    ),
                                  ],
                                )
                            : e(
                                'span',
                                { staticClass: 'label-sm text-error-default' },
                                [
                                  t._v(
                                    t._s(
                                      t.$t(
                                        'account.forgotPassword.email.format',
                                      ),
                                    ),
                                  ),
                                ],
                              ),
                        ]
                      : t._e(),
                  ],
                  2,
                ),
                t._v(' '),
                e('BaseButton', {
                  staticClass: 'mt-6 mb-4',
                  attrs: {
                    appearance: 'dark',
                    label: t.$t('account.forgotPassword.button.label'),
                    'loading-label': t.$t(
                      'account.forgotPassword.button.loadingLabel',
                    ),
                    'is-loading': t.isProcessing,
                  },
                  nativeOn: {
                    click: function (e) {
                      return t.sendPasswordReset();
                    },
                  },
                }),
                t._v(' '),
                e('BaseButton', {
                  attrs: {
                    appearance: 'light',
                    label: t.$t('account.forgotPassword.logIn'),
                    link: {
                      url: t.localePath('/account/login/'),
                      title: 'Log in',
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
      e.default = component.exports;
      installComponents(component, {
        InputText: o(309).default,
        BaseButton: o(84).default,
      });
    },
  },
]);
