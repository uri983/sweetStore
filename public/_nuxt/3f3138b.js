(window.webpackJsonp = window.webpackJsonp || []).push([
  [38],
  {
    788: function (t, e, r) {
      'use strict';
      r.r(e);
      r(12), r(35);
      var l = {
          props: { attribute: { type: Object, default: function () {} } },
          data: function () {
            return { previewImage: null };
          },
          computed: {
            images: function () {
              var t;
              return null !== (t = this.attribute) && void 0 !== t && t.value
                ? Array.isArray(this.attribute.value)
                  ? this.attribute.value.map(function (t) {
                      return t.file;
                    })
                  : [this.attribute.value.file]
                : [];
            },
          },
          methods: {
            openPreview: function (image) {
              this.$store.commit('setState', {
                key: 'mediaPreview',
                value: image,
              }),
                this.$store.commit('setState', {
                  key: 'mediaPreviewIsVisible',
                  value: !0,
                });
            },
          },
        },
        o = r(3),
        component = Object(o.a)(
          l,
          function () {
            var t = this,
              e = t._self._c;
            return t.attribute
              ? e(
                  'div',
                  [
                    t.images.length > 3
                      ? e(
                          'AccordionItem',
                          { attrs: { heading: t.attribute.name } },
                          [
                            e(
                              'div',
                              { staticClass: 'grid grid-cols-3 gap-3 pb-3' },
                              t._l(t.images, function (image) {
                                return e(
                                  'button',
                                  {
                                    key: image.id,
                                    staticClass: 'relative',
                                    attrs: { 'aria-hidden': 'true' },
                                    on: {
                                      click: function (e) {
                                        return t.openPreview(image);
                                      },
                                    },
                                  },
                                  [
                                    e(
                                      'div',
                                      {
                                        staticClass:
                                          'group absolute z-10 h-full w-full',
                                      },
                                      [
                                        e('div', {
                                          staticClass:
                                            'duration-400 h-full w-full bg-primary-darker opacity-0 transition-opacity group-hover:opacity-50',
                                        }),
                                        t._v(' '),
                                        e('BaseIcon', {
                                          staticClass:
                                            'center-xy duration-400 absolute text-primary-lightest opacity-0 transition-opacity group-hover:opacity-100',
                                          attrs: { icon: 'uil:search-plus' },
                                        }),
                                      ],
                                      1,
                                    ),
                                    t._v(' '),
                                    e('VisualMedia', {
                                      staticClass: 'w-full',
                                      attrs: {
                                        source: image,
                                        alt: image.filename,
                                        sizes: '(min-width: 768px) 10vw, 20vw',
                                      },
                                    }),
                                  ],
                                  1,
                                );
                              }),
                              0,
                            ),
                          ],
                        )
                      : e(
                          'div',
                          {
                            staticClass:
                              'flex-no-wrap flex border-b border-primary-med py-3',
                          },
                          [
                            e(
                              'strong',
                              {
                                staticClass: 'w-1/4 pr-6 text-primary-darkest',
                              },
                              [t._v(t._s(t.attribute.name))],
                            ),
                            t._v(' '),
                            e(
                              'div',
                              { staticClass: 'grid w-3/4 grid-cols-3 gap-3' },
                              t._l(t.images, function (image) {
                                return e(
                                  'button',
                                  {
                                    key: image.id,
                                    staticClass: 'relative',
                                    attrs: { 'aria-hidden': 'true' },
                                    on: {
                                      click: function (e) {
                                        return t.openPreview(image);
                                      },
                                    },
                                  },
                                  [
                                    e(
                                      'div',
                                      {
                                        staticClass:
                                          'group absolute z-10 h-full w-full',
                                      },
                                      [
                                        e('div', {
                                          staticClass:
                                            'duration-400 h-full w-full bg-primary-darker opacity-0 transition-opacity group-hover:opacity-50',
                                        }),
                                        t._v(' '),
                                        e('BaseIcon', {
                                          staticClass:
                                            'center-xy duration-400 absolute text-primary-lightest opacity-0 transition-opacity group-hover:opacity-100',
                                          attrs: { icon: 'uil:search-plus' },
                                        }),
                                      ],
                                      1,
                                    ),
                                    t._v(' '),
                                    e('VisualMedia', {
                                      staticClass: 'w-full',
                                      attrs: {
                                        source: image,
                                        alt: image.filename,
                                        sizes: '(min-width: 768px) 10vw, 20vw',
                                      },
                                    }),
                                  ],
                                  1,
                                );
                              }),
                              0,
                            ),
                          ],
                        ),
                  ],
                  1,
                )
              : t._e();
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
        AccordionItem: r(321).default,
      });
    },
  },
]);
