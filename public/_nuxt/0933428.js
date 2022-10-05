(window.webpackJsonp = window.webpackJsonp || []).push([
  [53],
  {
    684: function (t, e, r) {
      'use strict';
      r.r(e);
      var o = {
          name: 'StickyBarFilter',
          data: function () {
            return {};
          },
        },
        n = r(3),
        component = Object(n.a)(
          o,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              'div',
              {
                staticClass:
                  'lg:hidden md:hidden sticky top-14 z-10 flex h-14 bg-white items-center justify-between border-t border-b border-border-200 bg-light py-3 px-5 md:top-16 md:h-16 lg:top-15 lg:px-7',
              },
              [
                e(
                  'button',
                  {
                    staticClass:
                      'flex h-8 items-center rounded border border-border-200 bg-gray-100 bg-opacity-90 py-1 px-3 text-sm font-semibold text-heading transition-colors duration-200 hover:border-accent-hover hover:bg-accent hover:text-light focus:border-accent-hover focus:bg-accent focus:text-light focus:outline-none md:h-10 md:py-1.5 md:px-4 md:text-base',
                    on: {
                      click: function (e) {
                        return t.$emit('filterButton');
                      },
                    },
                  },
                  [t._v('\n    Filtros\n  ')],
                ),
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
  },
]);
