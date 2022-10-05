(window.webpackJsonp = window.webpackJsonp || []).push([
  [60, 61, 62],
  {
    548: function (e, n) {
      var t = RegExp(
        '[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]',
      );
      e.exports = function (e) {
        return t.test(e);
      };
    },
    549: function (e, n, t) {
      var o = t(550),
        r = t(551),
        f = t(554),
        c = RegExp("['’]", 'g');
      e.exports = function (e) {
        return function (n) {
          return o(f(r(n).replace(c, '')), e, '');
        };
      };
    },
    550: function (e, n) {
      e.exports = function (e, n, t, o) {
        var r = -1,
          f = null == e ? 0 : e.length;
        for (o && f && (t = e[++r]); ++r < f; ) t = n(t, e[r], r, e);
        return t;
      };
    },
    551: function (e, n, t) {
      var o = t(552),
        r = t(308),
        f = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
        c = RegExp('[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]', 'g');
      e.exports = function (e) {
        return (e = r(e)) && e.replace(f, o).replace(c, '');
      };
    },
    552: function (e, n, t) {
      var o = t(553)({
        À: 'A',
        Á: 'A',
        Â: 'A',
        Ã: 'A',
        Ä: 'A',
        Å: 'A',
        à: 'a',
        á: 'a',
        â: 'a',
        ã: 'a',
        ä: 'a',
        å: 'a',
        Ç: 'C',
        ç: 'c',
        Ð: 'D',
        ð: 'd',
        È: 'E',
        É: 'E',
        Ê: 'E',
        Ë: 'E',
        è: 'e',
        é: 'e',
        ê: 'e',
        ë: 'e',
        Ì: 'I',
        Í: 'I',
        Î: 'I',
        Ï: 'I',
        ì: 'i',
        í: 'i',
        î: 'i',
        ï: 'i',
        Ñ: 'N',
        ñ: 'n',
        Ò: 'O',
        Ó: 'O',
        Ô: 'O',
        Õ: 'O',
        Ö: 'O',
        Ø: 'O',
        ò: 'o',
        ó: 'o',
        ô: 'o',
        õ: 'o',
        ö: 'o',
        ø: 'o',
        Ù: 'U',
        Ú: 'U',
        Û: 'U',
        Ü: 'U',
        ù: 'u',
        ú: 'u',
        û: 'u',
        ü: 'u',
        Ý: 'Y',
        ý: 'y',
        ÿ: 'y',
        Æ: 'Ae',
        æ: 'ae',
        Þ: 'Th',
        þ: 'th',
        ß: 'ss',
        Ā: 'A',
        Ă: 'A',
        Ą: 'A',
        ā: 'a',
        ă: 'a',
        ą: 'a',
        Ć: 'C',
        Ĉ: 'C',
        Ċ: 'C',
        Č: 'C',
        ć: 'c',
        ĉ: 'c',
        ċ: 'c',
        č: 'c',
        Ď: 'D',
        Đ: 'D',
        ď: 'd',
        đ: 'd',
        Ē: 'E',
        Ĕ: 'E',
        Ė: 'E',
        Ę: 'E',
        Ě: 'E',
        ē: 'e',
        ĕ: 'e',
        ė: 'e',
        ę: 'e',
        ě: 'e',
        Ĝ: 'G',
        Ğ: 'G',
        Ġ: 'G',
        Ģ: 'G',
        ĝ: 'g',
        ğ: 'g',
        ġ: 'g',
        ģ: 'g',
        Ĥ: 'H',
        Ħ: 'H',
        ĥ: 'h',
        ħ: 'h',
        Ĩ: 'I',
        Ī: 'I',
        Ĭ: 'I',
        Į: 'I',
        İ: 'I',
        ĩ: 'i',
        ī: 'i',
        ĭ: 'i',
        į: 'i',
        ı: 'i',
        Ĵ: 'J',
        ĵ: 'j',
        Ķ: 'K',
        ķ: 'k',
        ĸ: 'k',
        Ĺ: 'L',
        Ļ: 'L',
        Ľ: 'L',
        Ŀ: 'L',
        Ł: 'L',
        ĺ: 'l',
        ļ: 'l',
        ľ: 'l',
        ŀ: 'l',
        ł: 'l',
        Ń: 'N',
        Ņ: 'N',
        Ň: 'N',
        Ŋ: 'N',
        ń: 'n',
        ņ: 'n',
        ň: 'n',
        ŋ: 'n',
        Ō: 'O',
        Ŏ: 'O',
        Ő: 'O',
        ō: 'o',
        ŏ: 'o',
        ő: 'o',
        Ŕ: 'R',
        Ŗ: 'R',
        Ř: 'R',
        ŕ: 'r',
        ŗ: 'r',
        ř: 'r',
        Ś: 'S',
        Ŝ: 'S',
        Ş: 'S',
        Š: 'S',
        ś: 's',
        ŝ: 's',
        ş: 's',
        š: 's',
        Ţ: 'T',
        Ť: 'T',
        Ŧ: 'T',
        ţ: 't',
        ť: 't',
        ŧ: 't',
        Ũ: 'U',
        Ū: 'U',
        Ŭ: 'U',
        Ů: 'U',
        Ű: 'U',
        Ų: 'U',
        ũ: 'u',
        ū: 'u',
        ŭ: 'u',
        ů: 'u',
        ű: 'u',
        ų: 'u',
        Ŵ: 'W',
        ŵ: 'w',
        Ŷ: 'Y',
        ŷ: 'y',
        Ÿ: 'Y',
        Ź: 'Z',
        Ż: 'Z',
        Ž: 'Z',
        ź: 'z',
        ż: 'z',
        ž: 'z',
        Ĳ: 'IJ',
        ĳ: 'ij',
        Œ: 'Oe',
        œ: 'oe',
        ŉ: "'n",
        ſ: 's',
      });
      e.exports = o;
    },
    553: function (e, n) {
      e.exports = function (object) {
        return function (e) {
          return null == object ? void 0 : object[e];
        };
      };
    },
    554: function (e, n, t) {
      var o = t(555),
        r = t(556),
        f = t(308),
        c = t(557);
      e.exports = function (e, pattern, n) {
        return (
          (e = f(e)),
          void 0 === (pattern = n ? void 0 : pattern)
            ? r(e)
              ? c(e)
              : o(e)
            : e.match(pattern) || []
        );
      };
    },
    555: function (e, n) {
      var t = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
      e.exports = function (e) {
        return e.match(t) || [];
      };
    },
    556: function (e, n) {
      var t =
        /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
      e.exports = function (e) {
        return t.test(e);
      };
    },
    557: function (e, n) {
      var t = '\\u2700-\\u27bf',
        o = 'a-z\\xdf-\\xf6\\xf8-\\xff',
        r = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
        f =
          '\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
        c = '[' + f + ']',
        d = '\\d+',
        l = '[\\u2700-\\u27bf]',
        x = '[' + o + ']',
        v = '[^\\ud800-\\udfff' + f + d + t + o + r + ']',
        h = '(?:\\ud83c[\\udde6-\\uddff]){2}',
        S = '[\\ud800-\\udbff][\\udc00-\\udfff]',
        m = '[' + r + ']',
        A = '(?:' + x + '|' + v + ')',
        E = '(?:' + m + '|' + v + ')',
        O = "(?:['’](?:d|ll|m|re|s|t|ve))?",
        I = "(?:['’](?:D|LL|M|RE|S|T|VE))?",
        j =
          '(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?',
        y = '[\\ufe0e\\ufe0f]?',
        C =
          y +
          j +
          ('(?:\\u200d(?:' +
            ['[^\\ud800-\\udfff]', h, S].join('|') +
            ')' +
            y +
            j +
            ')*'),
        L = '(?:' + [l, h, S].join('|') + ')' + C,
        U = RegExp(
          [
            m + '?' + x + '+' + O + '(?=' + [c, m, '$'].join('|') + ')',
            E + '+' + I + '(?=' + [c, m + A, '$'].join('|') + ')',
            m + '?' + A + '+' + O,
            m + '+' + I,
            '\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])',
            '\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])',
            d,
            L,
          ].join('|'),
          'g',
        );
      e.exports = function (e) {
        return e.match(U) || [];
      };
    },
    567: function (e, n, t) {
      var o = t(568);
      e.exports = function (e, n, t) {
        var r = e.length;
        return (t = void 0 === t ? r : t), !n && t >= r ? e : o(e, n, t);
      };
    },
    568: function (e, n) {
      e.exports = function (e, n, t) {
        var o = -1,
          r = e.length;
        n < 0 && (n = -n > r ? 0 : r + n),
          (t = t > r ? r : t) < 0 && (t += r),
          (r = n > t ? 0 : (t - n) >>> 0),
          (n >>>= 0);
        for (var f = Array(r); ++o < r; ) f[o] = e[o + n];
        return f;
      };
    },
    569: function (e, n, t) {
      var o = t(570),
        r = t(548),
        f = t(571);
      e.exports = function (e) {
        return r(e) ? f(e) : o(e);
      };
    },
    570: function (e, n) {
      e.exports = function (e) {
        return e.split('');
      };
    },
    571: function (e, n) {
      var t = '[\\ud800-\\udfff]',
        o = '[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]',
        r = '\\ud83c[\\udffb-\\udfff]',
        f = '[^\\ud800-\\udfff]',
        c = '(?:\\ud83c[\\udde6-\\uddff]){2}',
        d = '[\\ud800-\\udbff][\\udc00-\\udfff]',
        l = '(?:' + o + '|' + r + ')' + '?',
        x = '[\\ufe0e\\ufe0f]?',
        v =
          x + l + ('(?:\\u200d(?:' + [f, c, d].join('|') + ')' + x + l + ')*'),
        h = '(?:' + [f + o + '?', o, c, d, t].join('|') + ')',
        S = RegExp(r + '(?=' + r + ')|' + h + v, 'g');
      e.exports = function (e) {
        return e.match(S) || [];
      };
    },
    580: function (e, n, t) {
      'use strict';
      t.r(n);
      var o = t(3),
        component = Object(o.a)(
          {},
          function () {
            return (0, this._self._c)(
              'div',
              { staticClass: 'm-6 border border-dashed py-32 text-center' },
              [this._v('\n  Loading section component...\n')],
            );
          },
          [],
          !1,
          null,
          null,
          null,
        );
      n.default = component.exports;
    },
    581: function (e, n, t) {
      'use strict';
      t.r(n);
      var o = t(3),
        component = Object(o.a)(
          {},
          function () {
            return (0, this._self._c)('div', { staticClass: 'px-6 py-12' }, [
              this._v("Couldn't load section component"),
            ]);
          },
          [],
          !1,
          null,
          null,
          null,
        );
      n.default = component.exports;
    },
    618: function (e, n, t) {
      'use strict';
      t.r(n);
      t(42), t(45), t(66), t(6), t(27), t(25);
      var o = t(649),
        r = t.n(o),
        f = t(580),
        c = t(581),
        d = {
          name: 'SectionAsyncLoader',
          props: {
            section: {
              type: Object,
              default: function () {
                return {};
              },
              required: !0,
            },
            collectionFieldId: { type: String, default: 'sections' },
            collectionIndex: { type: Number, default: 0 },
            fetchIsPending: { type: Boolean, default: !0 },
          },
          computed: {
            component: function () {
              var e = this;
              return function () {
                return {
                  component: t(653)(
                    './Section'.concat(
                      ((n = String(e.section.type)),
                      n.charAt(0).toUpperCase() + r()(n.slice(1))),
                      '.vue',
                    ),
                  ),
                  loading: f.default,
                  error: c.default,
                };
                var n;
              };
            },
          },
        },
        l = t(3),
        x = Object(l.a)(
          d,
          function () {
            var e = this,
              n = e._self._c;
            return n(
              'keep-alive',
              [
                n(
                  e.component,
                  e._b(
                    {
                      tag: 'component',
                      attrs: {
                        'fetch-is-pending': e.fetchIsPending,
                        'data-sw-path': ''
                          .concat(e.collectionFieldId, '.')
                          .concat(e.collectionIndex),
                      },
                    },
                    'component',
                    e.section,
                    !1,
                  ),
                ),
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
      n.default = x.exports;
    },
    649: function (e, n, t) {
      var o = t(650),
        r = t(549)(function (e, n, t) {
          return (n = n.toLowerCase()), e + (t ? o(n) : n);
        });
      e.exports = r;
    },
    650: function (e, n, t) {
      var o = t(308),
        r = t(651);
      e.exports = function (e) {
        return r(o(e).toLowerCase());
      };
    },
    651: function (e, n, t) {
      var o = t(652)('toUpperCase');
      e.exports = o;
    },
    652: function (e, n, t) {
      var o = t(567),
        r = t(548),
        f = t(569),
        c = t(308);
      e.exports = function (e) {
        return function (n) {
          n = c(n);
          var t = r(n) ? f(n) : void 0,
            d = t ? t[0] : n.charAt(0),
            l = t ? o(t, 1).join('') : n.slice(1);
          return d[e]() + l;
        };
      };
    },
    653: function (e, n, t) {
      var map = {
        './SectionAsyncLoader.vue': [618],
        './SectionCollectionPreview.vue': [616, 12],
        './SectionCustomerReviews.vue': [695, 13],
        './SectionEmailSignup.vue': [696, 14],
        './SectionError.vue': [581],
        './SectionFullWidthMedia.vue': [697, 15],
        './SectionHeadingWithText.vue': [698, 16],
        './SectionInstagramFeed.vue': [705, 17],
        './SectionLargeMedia.vue': [699, 18],
        './SectionLoader.vue': [580],
        './SectionMultiFeature.vue': [700, 19],
        './SectionMultiPanel.vue': [701, 20],
        './SectionPressMentions.vue': [702, 21],
        './SectionRelatedProducts.vue': [703, 22],
        './SectionUndefined.vue': [546, 23],
      };
      function o(e) {
        if (!t.o(map, e))
          return Promise.resolve().then(function () {
            var n = new Error("Cannot find module '" + e + "'");
            throw ((n.code = 'MODULE_NOT_FOUND'), n);
          });
        var n = map[e],
          o = n[0];
        return Promise.all(n.slice(1).map(t.e)).then(function () {
          return t(o);
        });
      }
      (o.keys = function () {
        return Object.keys(map);
      }),
        (o.id = 653),
        (e.exports = o);
    },
  },
]);
