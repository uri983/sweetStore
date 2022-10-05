(window.webpackJsonp = window.webpackJsonp || []).push([
  [75],
  {
    779: function (t, e, r) {
      'use strict';
      r.r(e);
      var o = r(0),
        n =
          (r(15),
          {
            layout: 'account',
            data: function () {
              return { previousOrderRoute: '', shopLink: null };
            },
            fetch: function () {
              var t = this;
              return Object(o.a)(
                regeneratorRuntime.mark(function e() {
                  var r;
                  return regeneratorRuntime.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (r = t.$swell),
                            (e.next = 3),
                            r.settings.get('/', '/')
                          );
                        case 3:
                          t.shopLink = e.sent;
                        case 4:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              )();
            },
            watch: {
              $route: function (t, e) {
                e.params.id && (this.previousOrderRoute = e.path);
              },
            },
            mounted: function () {
              var t = this.$nuxt.context.from;
              t && (this.previousOrderRoute = t.path);
            },
          }),
        c = r(3),
        component = Object(c.a)(
          n,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              'div',
              { staticClass: 'container' },
              [
                t.previousOrderRoute
                  ? e(
                      'NuxtLink',
                      {
                        staticClass: 'mb-6 flex cursor-pointer items-center',
                        attrs: {
                          to: t.localePath(
                            t.previousOrderRoute
                              ? t.previousOrderRoute
                              : '/account/orders/',
                          ),
                        },
                      },
                      [
                        e('BaseIcon', {
                          attrs: { icon: 'uil:angle-left', size: 'sm' },
                        }),
                        t._v(' '),
                        e('span', { staticClass: 'ml-1' }, [
                          t._v(
                            t._s(
                              t.$tc(
                                'account.orders.returns.backToOrders',
                                t.previousOrderRoute ? 1 : 2,
                              ),
                            ),
                          ),
                        ]),
                      ],
                      1,
                    )
                  : t._e(),
                t._v(' '),
                e('div', { staticClass: 'mb-16' }, [
                  e('h1', { staticClass: 'text-2xl' }, [
                    t._v(
                      '\n      ' +
                        t._s(t.$t('account.orders.returns.title')) +
                        '\n    ',
                    ),
                  ]),
                  t._v(' '),
                  e('p', {
                    staticClass: 'text-sm',
                    domProps: {
                      innerHTML: t._s(t.$t('account.orders.returns.infoText')),
                    },
                  }),
                ]),
                t._v(' '),
                t.previousOrderRoute
                  ? e('BaseButton', {
                      staticClass: 'mb-6 block w-full',
                      attrs: {
                        fit: 'auto',
                        appearance: 'light',
                        label: t.$tc('account.orders.returns.backToOrders', 2),
                        link: t.localePath('/account/orders/'),
                      },
                    })
                  : t._e(),
                t._v(' '),
                t.previousOrderRoute
                  ? t._e()
                  : e('BaseButton', {
                      staticClass: 'block w-full',
                      attrs: {
                        fit: 'auto',
                        appearance: 'dark',
                        icon: 'shopping-bag',
                        label: t.$t('account.orders.backToProducts'),
                        link: t.shopLink,
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
        BaseIcon: r(30).default,
        BaseButton: r(84).default,
      });
    },
  },
]);
