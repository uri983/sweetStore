(window.webpackJsonp = window.webpackJsonp || []).push([
  [17],
  {
    705: function (e, t, n) {
      'use strict';
      n.r(t);
      n(35);
      var l = n(13),
        r = n.n(l),
        c = {
          name: 'SectionInstagramFeed',
          functional: !0,
          props: {
            heading: { type: String, default: '' },
            username: { type: String, default: '' },
            posts: {
              type: Array,
              default: function () {
                return [];
              },
            },
            imageFrame: { type: String, default: 'md' },
            outerSpacingX: { type: String, default: 'lg' },
            outerSpacingY: { type: String, default: 'lg' },
          },
          render: function (e, t) {
            var n = t.props,
              l = n.heading,
              c = n.username,
              d = n.posts,
              o = { none: 'p-0', sm: 'p-1 lg:p-2', md: 'p-2 lg:p-4' }[
                n.imageFrame
              ];
            return e('section', { class: 'relative' }, [
              e('ul', { class: 'flex flex-wrap '.concat(o) }, [
                e('li', { class: 'm-0 w-1/2 md:w-1/4' }, [
                  e(
                    'a',
                    {
                      attrs: { href: '' },
                      class: 'flex h-full flex-col justify-between p-4',
                    },
                    [
                      e('div', [
                        e('svg', { class: 'mb-4 h-6 w-6' }, [
                          e('use', {
                            attrs: { 'xlink:href': '#icon-instagram' },
                          }),
                        ]),
                        e('p', { class: 'text-lg font-semibold md:text-xl' }, [
                          l,
                        ]),
                      ]),
                      e(
                        'p',
                        {
                          class: 'text-sm',
                          directives: [{ name: 'if', value: 'username' }],
                        },
                        ['@', c],
                      ),
                    ],
                  ),
                ]),
                d.map(function (t) {
                  return e('li', { class: 'm-0 w-1/2 md:w-1/4 '.concat(o) }, [
                    e('VisualMedia', {
                      attrs: { source: r()(t, 'media.url') },
                    }),
                  ]);
                }),
              ]),
            ]);
          },
        },
        d = n(3),
        component = Object(d.a)(c, undefined, undefined, !1, null, null, null);
      t.default = component.exports;
    },
  },
]);
