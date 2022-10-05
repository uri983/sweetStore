(window.webpackJsonp = window.webpackJsonp || []).push([
  [16, 23],
  {
    546: function (t, e, n) {
      'use strict';
      n.r(e);
      n(11), n(57);
      var l = {
          name: 'SectionUndefined',
          props: {
            heading: { type: String, default: 'New section' },
            description: { type: String, default: 'No type chosen' },
          },
        },
        o = n(3),
        component = Object(o.a)(
          l,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              'div',
              { staticClass: 'm-6 border border-dashed py-32 text-center' },
              [
                e('h3', [t._v(t._s(t.heading))]),
                t._v(' '),
                e('p', [t._v(t._s(t.description))]),
              ],
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
    670: function (t, e, n) {
      var content = n(748);
      content.__esModule && (content = content.default),
        'string' == typeof content && (content = [[t.i, content, '']]),
        content.locals && (t.exports = content.locals);
      (0, n(56).default)('2a42c593', content, !0, { sourceMap: !1 });
    },
    698: function (t, e, n) {
      'use strict';
      n.r(e);
      n(11), n(57), n(38), n(46);
      var l = {
          name: 'SectionHeadingWithText',
          props: {
            type: { type: String, default: null },
            id: { type: String, default: null },
            label: { type: String, default: null },
            heading: { type: String, default: null },
            description: { type: String, default: null },
            bgColor: { type: String, default: 'primary-lightest' },
            headingPosition: { type: String, default: 'top-center' },
            textColumns: { type: String, default: 'dual' },
            textColumnWidth: { type: String, default: 'compact' },
          },
        },
        o = (n(747), n(3)),
        component = Object(o.a)(
          l,
          function () {
            var t = this,
              e = t._self._c;
            return t.heading || t.description
              ? e('section', { class: 'bg-'.concat(t.bgColor) }, [
                  e(
                    'div',
                    {
                      staticClass: 'container py-16 lg:py-24 xl:py-32',
                      class: { 'md:flex': 'left' === t.headingPosition },
                    },
                    [
                      e(
                        'div',
                        {
                          staticClass: 'max-w-2/3 md:mb-0',
                          class: {
                            'md:w-1/3': 'left' === t.headingPosition,
                            'mx-auto text-center':
                              'top-center' === t.headingPosition,
                            'mx-auto':
                              'compact' === t.textColumnWidth &&
                              'single' === t.textColumns,
                          },
                        },
                        [
                          t.label
                            ? e(
                                'span',
                                { staticClass: 'label-xs-bold mb-4 block' },
                                [t._v(t._s(t.label))],
                              )
                            : t._e(),
                          t._v(' '),
                          e(
                            'h2',
                            { staticClass: 'm-0 md:text-5xl xl:text-7xl' },
                            [t._v('\n        ' + t._s(t.heading) + '\n      ')],
                          ),
                        ],
                      ),
                      t._v(' '),
                      t.description
                        ? e('div', {
                            staticClass: 'lg:text-lg',
                            class: {
                              'mx-auto md:w-2/3':
                                'compact' === t.textColumnWidth &&
                                'single' === t.textColumns,
                              'sw-multi-column':
                                t.headingPosition.includes('top') &&
                                'dual' === t.textColumns,
                              'mt-8 lg:mt-10 xl:mt-12':
                                t.headingPosition.includes('top'),
                              'mt-1 md:w-2/3 md:pl-12 lg:pl-16 xl:pl-20':
                                'left' === t.headingPosition,
                            },
                            domProps: { innerHTML: t._s(t.description) },
                          })
                        : t._e(),
                    ],
                  ),
                ])
              : e('SectionUndefined', {
                  attrs: {
                    heading: 'Heading with text',
                    description: 'No heading or text added',
                  },
                });
          },
          [],
          !1,
          null,
          '37879cee',
          null,
        );
      e.default = component.exports;
      installComponents(component, { SectionUndefined: n(546).default });
    },
    747: function (t, e, n) {
      'use strict';
      n(670);
    },
    748: function (t, e, n) {
      var l = n(55)(function (i) {
        return i[1];
      });
      l.push([
        t.i,
        '.sw-multi-column[data-v-37879cee]{@media (min-width: 768px){-moz-column-count:2;column-count:2;-moz-column-gap:2rem;column-gap:2rem}}',
        '',
      ]),
        (l.locals = {}),
        (t.exports = l);
    },
  },
]);
