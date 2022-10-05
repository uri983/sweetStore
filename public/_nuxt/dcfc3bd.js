(window.webpackJsonp = window.webpackJsonp || []).push([
  [26],
  {
    675: function (e, d, t) {
      'use strict';
      t.r(d);
      t(12);
      var n = {
          props: {
            address: { type: Object, default: null },
            isDefault: { type: Boolean, default: !1 },
          },
        },
        r = t(3),
        component = Object(r.a)(
          n,
          function () {
            var e = this,
              d = e._self._c;
            return d(
              'div',
              { staticClass: 'flex rounded bg-primary-lightest p-4 shadow-md' },
              [
                d('div', { staticClass: 'max-w-1/2' }, [
                  e.address.name
                    ? d('p', [
                        e._v('\n      ' + e._s(e.address.name) + '\n    '),
                      ])
                    : e._e(),
                  e._v(' '),
                  e.address.address1
                    ? d(
                        'p',
                        [
                          e.address.address2
                            ? [e._v(' ' + e._s(e.address.address2) + ', ')]
                            : e._e(),
                          e._v(
                            '\n      ' + e._s(e.address.address1) + '\n    ',
                          ),
                        ],
                        2,
                      )
                    : e._e(),
                  e._v(' '),
                  e.address.city
                    ? d(
                        'p',
                        [
                          e._v('\n      ' + e._s(e.address.city) + '\n      '),
                          e.address.zip
                            ? [
                                e._v(
                                  '\n        ' +
                                    e._s(e.address.zip) +
                                    '\n      ',
                                ),
                              ]
                            : e._e(),
                        ],
                        2,
                      )
                    : e._e(),
                  e._v(' '),
                  e.address.state
                    ? d(
                        'p',
                        [
                          e._v('\n      ' + e._s(e.address.state) + '\n      '),
                          e.address.country
                            ? [
                                e._v(
                                  '\n        ' +
                                    e._s(e.address.country) +
                                    '\n      ',
                                ),
                              ]
                            : e._e(),
                        ],
                        2,
                      )
                    : e._e(),
                ]),
                e._v(' '),
                d('div', { staticClass: 'ml-auto flex flex-col items-end' }, [
                  e.isDefault
                    ? d(
                        'div',
                        {
                          staticClass:
                            'label-xs-bold rounded bg-primary-light p-2',
                        },
                        [
                          e._v(
                            '\n      ' +
                              e._s(e.$t('account.addresses.default')) +
                              '\n    ',
                          ),
                        ],
                      )
                    : d(
                        'button',
                        {
                          staticClass: 'label-sm-bold normal-case',
                          on: {
                            click: function (d) {
                              return e.$emit('set-default', e.address.id);
                            },
                          },
                        },
                        [
                          e._v(
                            '\n      ' +
                              e._s(e.$t('account.addresses.useAsDefault')) +
                              '\n    ',
                          ),
                        ],
                      ),
                  e._v(' '),
                  d('div', { staticClass: 'label-sm mt-auto' }, [
                    e.isDefault
                      ? e._e()
                      : d(
                          'button',
                          {
                            staticClass: 'mr-2 px-2',
                            on: {
                              click: function (d) {
                                return e.$emit('delete-address', e.address.id);
                              },
                            },
                          },
                          [
                            e._v(
                              '\n        ' +
                                e._s(e.$t('account.addresses.remove')) +
                                '\n      ',
                            ),
                          ],
                        ),
                    e._v(' '),
                    d(
                      'button',
                      {
                        staticClass: 'px-2',
                        on: {
                          click: function (d) {
                            return e.$emit('click-open');
                          },
                        },
                      },
                      [
                        e._v(
                          '\n        ' +
                            e._s(e.$t('account.addresses.edit')) +
                            '\n      ',
                        ),
                      ],
                    ),
                  ]),
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
      d.default = component.exports;
    },
  },
]);
