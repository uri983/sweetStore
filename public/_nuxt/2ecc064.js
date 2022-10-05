(window.webpackJsonp = window.webpackJsonp || []).push([
  [35],
  {
    577: function (t, e, n) {
      'use strict';
      n.r(e);
      n(38), n(66);
      var r = {
          props: {
            status: { type: String, default: '' },
            interval: { type: String, default: '' },
            recurringTotal: { type: Number, default: null },
            dateTrialEnd: { type: String, default: null },
            dateCanceled: { type: String, default: null },
            datePaused: { type: String, default: null },
            datePauseEnd: { type: String, default: null },
            datePeriodEnd: { type: String, default: null },
            showMessage: { type: Boolean, default: !0 },
          },
          computed: {
            icon: function () {
              switch (this.status) {
                case 'active':
                  return 'sync';
                case 'paused':
                  return 'pause';
                case 'canceled':
                  return 'sync-slash';
                case 'trial':
                  return 'calender';
                default:
                  return '';
              }
            },
            statusTitle: function () {
              switch (this.status) {
                case 'active':
                  return this.$t(
                    'account.subscriptions.subscription.status.active',
                    {
                      date: this.formatDate(this.datePeriodEnd),
                      time: this.formatTime(this.datePeriodEnd),
                    },
                  );
                case 'paused':
                  return this.datePauseEnd
                    ? this.$t(
                        'account.subscriptions.subscription.status.pausedResumes',
                        {
                          date: this.formatDate(this.datePauseEnd),
                          time: this.formatTime(this.datePauseEnd),
                        },
                      )
                    : this.$t(
                        'account.subscriptions.subscription.status.paused',
                        { date: this.formatDate(this.datePaused) },
                      );
                case 'canceled':
                  return this.$t(
                    'account.subscriptions.subscription.status.canceled',
                    { date: this.formatDate(this.dateCanceled) },
                  );
                case 'trial':
                  return this.$t(
                    'account.subscriptions.subscription.status.trial',
                    {
                      date: this.formatDate(this.dateTrialEnd),
                      time: this.formatTime(this.dateTrialEnd),
                    },
                  );
                default:
                  return '';
              }
            },
            statusMessage: function () {
              switch (this.status) {
                case 'active':
                  return this.$t(
                    'account.subscriptions.subscription.status.activeMessage',
                  );
                case 'paused':
                  return this.datePauseEnd
                    ? this.$t(
                        'account.subscriptions.subscription.status.pausedResumesMessage',
                      )
                    : this.$t(
                        'account.subscriptions.subscription.status.pausedMessage',
                      );
                case 'canceled':
                  return this.$t(
                    'account.subscriptions.subscription.status.canceledMessage',
                  );
                case 'trial':
                  return ''.concat(
                    this.$t(
                      'account.subscriptions.subscription.status.trialMessage',
                    ),
                  );
                default:
                  return '';
              }
            },
          },
          methods: {
            formatTime: function (t) {
              return new Date(t).toLocaleString('en', {
                hour: 'numeric',
                minute: 'numeric',
                hour12: !0,
              });
            },
          },
        },
        c = n(3),
        component = Object(c.a)(
          r,
          function () {
            var t = this,
              e = t._self._c;
            return e('div', { staticClass: 'flex' }, [
              e(
                'div',
                {
                  staticClass:
                    'relative mr-2 h-6 w-6 flex-shrink-0 rounded-full bg-ok-default',
                  class: {
                    'bg-ok-default': 'active' === t.status,
                    'bg-primary-dark': 'canceled' === t.status,
                    'bg-warning-default': ['trial', 'paused'].includes(
                      t.status,
                    ),
                  },
                },
                [
                  e('BaseIcon', {
                    staticClass: 'center-xy absolute text-primary-lightest',
                    attrs: { icon: 'uil:'.concat(t.icon), size: 'w-4 h-4' },
                  }),
                ],
                1,
              ),
              t._v(' '),
              e('div', [
                e('p', [t._v('\n      ' + t._s(t.statusTitle) + '\n    ')]),
                t._v(' '),
                t.showMessage
                  ? e('p', { staticClass: 'text-sm text-primary-dark' }, [
                      t._v('\n      ' + t._s(t.statusMessage) + '\n    '),
                    ])
                  : t._e(),
              ]),
            ]);
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
