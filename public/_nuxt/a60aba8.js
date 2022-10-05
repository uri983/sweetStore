(window.webpackJsonp = window.webpackJsonp || []).push([
  [41],
  {
    619: function (t, e, n) {
      'use strict';
      n.r(e);
      n(200), n(26), n(72);
      var r = {
          name: 'BaseLink',
          props: {
            link: { type: [Object, String], required: !0 },
            target: { type: String, default: '_blank' },
          },
          computed: {
            attributes: function () {
              var t = this.resolveUrl(this.link);
              return t.match(/^(http(s)?|ftp):\/\//)
                ? { is: 'a', href: t, target: this.target, rel: 'noopener' }
                : { is: 'nuxt-link', to: this.localePath(t) };
            },
          },
        },
        l = n(3),
        component = Object(l.a)(
          r,
          function () {
            var t = this;
            return (0, t._self._c)(
              null,
              t._b(
                { tag: 'component', attrs: { title: t.link.title || '' } },
                'component',
                t.attributes,
                !1,
              ),
              [t._t('default')],
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
    },
  },
]);
