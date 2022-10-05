(window.webpackJsonp = window.webpackJsonp || []).push([
  [68, 23, 60, 61, 62],
  {
    545: function (t, e, n) {
      'use strict';
      e.a = {
        mounted: function () {
          this.$store.state.refetchCurrency && this.$fetch();
        },
      };
    },
    546: function (t, e, n) {
      'use strict';
      n.r(e);
      n(11), n(57);
      var r = {
          name: 'SectionUndefined',
          props: {
            heading: { type: String, default: 'New section' },
            description: { type: String, default: 'No type chosen' },
          },
        },
        o = n(3),
        component = Object(o.a)(
          r,
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
    548: function (t, e) {
      var n = RegExp(
        '[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]',
      );
      t.exports = function (t) {
        return n.test(t);
      };
    },
    549: function (t, e, n) {
      var r = n(550),
        o = n(551),
        c = n(554),
        f = RegExp("['’]", 'g');
      t.exports = function (t) {
        return function (e) {
          return r(c(o(e).replace(f, '')), t, '');
        };
      };
    },
    550: function (t, e) {
      t.exports = function (t, e, n, r) {
        var o = -1,
          c = null == t ? 0 : t.length;
        for (r && c && (n = t[++o]); ++o < c; ) n = e(n, t[o], o, t);
        return n;
      };
    },
    551: function (t, e, n) {
      var r = n(552),
        o = n(308),
        c = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
        f = RegExp('[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]', 'g');
      t.exports = function (t) {
        return (t = o(t)) && t.replace(c, r).replace(f, '');
      };
    },
    552: function (t, e, n) {
      var r = n(553)({
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
      t.exports = r;
    },
    553: function (t, e) {
      t.exports = function (object) {
        return function (t) {
          return null == object ? void 0 : object[t];
        };
      };
    },
    554: function (t, e, n) {
      var r = n(555),
        o = n(556),
        c = n(308),
        f = n(557);
      t.exports = function (t, pattern, e) {
        return (
          (t = c(t)),
          void 0 === (pattern = e ? void 0 : pattern)
            ? o(t)
              ? f(t)
              : r(t)
            : t.match(pattern) || []
        );
      };
    },
    555: function (t, e) {
      var n = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
      t.exports = function (t) {
        return t.match(n) || [];
      };
    },
    556: function (t, e) {
      var n =
        /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
      t.exports = function (t) {
        return n.test(t);
      };
    },
    557: function (t, e) {
      var n = '\\u2700-\\u27bf',
        r = 'a-z\\xdf-\\xf6\\xf8-\\xff',
        o = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
        c =
          '\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
        f = '[' + c + ']',
        d = '\\d+',
        l = '[\\u2700-\\u27bf]',
        v = '[' + r + ']',
        h = '[^\\ud800-\\udfff' + c + d + n + r + o + ']',
        m = '(?:\\ud83c[\\udde6-\\uddff]){2}',
        x = '[\\ud800-\\udbff][\\udc00-\\udfff]',
        y = '[' + o + ']',
        S = '(?:' + v + '|' + h + ')',
        O = '(?:' + y + '|' + h + ')',
        w = "(?:['’](?:d|ll|m|re|s|t|ve))?",
        _ = "(?:['’](?:D|LL|M|RE|S|T|VE))?",
        j =
          '(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?',
        A = '[\\ufe0e\\ufe0f]?',
        C =
          A +
          j +
          ('(?:\\u200d(?:' +
            ['[^\\ud800-\\udfff]', m, x].join('|') +
            ')' +
            A +
            j +
            ')*'),
        E = '(?:' + [l, m, x].join('|') + ')' + C,
        k = RegExp(
          [
            y + '?' + v + '+' + w + '(?=' + [f, y, '$'].join('|') + ')',
            O + '+' + _ + '(?=' + [f, y + S, '$'].join('|') + ')',
            y + '?' + S + '+' + w,
            y + '+' + _,
            '\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])',
            '\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])',
            d,
            E,
          ].join('|'),
          'g',
        );
      t.exports = function (t) {
        return t.match(k) || [];
      };
    },
    566: function (t, e, n) {
      'use strict';
      var r = n(0),
        o = (n(15), n(42), n(12), n(11), n(57), n(200), n(13)),
        c = n.n(o),
        f = function (t) {
          var e = Array.isArray(t) ? c()(t, '0.file.url') : c()(t, 'file.url'),
            n = 1200,
            r = 630;
          return e
            ? ''.concat(e, '?w=').concat(n, '&h=').concat(r, '&q=100&fit=fill')
            : '';
        };
      e.a = {
        asyncData: function (t) {
          return Object(r.a)(
            regeneratorRuntime.mark(function e() {
              var n, r, o;
              return regeneratorRuntime.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (n = t.$swell),
                        (e.next = 3),
                        n.settings.get('store.name')
                      );
                    case 3:
                      return (
                        (r = e.sent), (e.next = 6), n.settings.get('store.url')
                      );
                    case 6:
                      return (
                        (o = e.sent),
                        e.abrupt('return', { storeName: r, storeUrl: o })
                      );
                    case 8:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            }),
          )();
        },
        computed: {
          pageMeta: function () {
            var t = this.$route,
              e = this.category,
              n = this.categories,
              r = this.product,
              o = this.products,
              d = this.page,
              l = this.storeName,
              v = this.storeUrl,
              h = function (t) {
                return t + ' - ' + l;
              },
              meta = {
                storeName: l,
                url: v + t.path,
                title: l,
                description: '',
                image: {},
                link: [],
              };
            if (c()(this, '$fetchState.pending')) meta.title = 'Loading...';
            else if (e) {
              var title = e.metaTitle || e.name;
              (meta.title = h(title)),
                (meta.description = e.metaDescription || ''),
                (meta.image = f(e.images));
            } else if (n)
              (meta.title = h('Categories')),
                (meta.image = f(c()(n, '0.images')));
            else if (r) {
              var m = r.metaTitle || r.name;
              (meta.title = h(m)),
                (meta.description = r.metaDescription || ''),
                (meta.image = f(r.images));
            } else if (o)
              (meta.title = h('Products')),
                (meta.image = f(c()(o, '0.images')));
            else if (d) {
              var x = d.metaTitle || d.name;
              (meta.title = h(x)), (meta.description = d.metaDescription || '');
            }
            return meta;
          },
          structuredData: function () {
            var t = this.product;
            if (t) {
              var e = t.stockStatus || 'inStock';
              return {
                '@context': 'http://schema.org',
                '@type': 'Product',
                name: t.name,
                image: f(c()(this, 'product.images[0]')),
                description: t.description,
                offers: {
                  '@type': 'Offer',
                  price: t.price,
                  priceCurrency: t.currency,
                  availability: 'http://schema.org/'.concat(
                    {
                      inStock: 'InStock',
                      limitedAvailability: 'LimitedAvailability',
                      preorder: 'PreOrder',
                      outOfStock: 'OutOfStock',
                      soldOut: 'SoldOut',
                    }[e],
                  ),
                },
              };
            }
          },
        },
        head: function () {
          var t = this.pageMeta,
            e = this.structuredData,
            n = t.storeName,
            r = t.url,
            title = t.title,
            o = t.description,
            image = t.image,
            link = t.link,
            script = [];
          return (
            e &&
              script.push({
                innerHTML: JSON.stringify(e),
                type: 'application/ld+json',
              }),
            {
              __dangerouslyDisableSanitizers: ['script'],
              script: script,
              title: title,
              link: link,
              meta: [
                { hid: 'description', name: 'description', content: o },
                { hid: 'og:site_name', property: 'og:site_name', content: n },
                { hid: 'og:title', property: 'og:title', content: title },
                {
                  hid: 'og:description',
                  property: 'og:description',
                  content: o,
                },
                { hid: 'og:url', property: 'og:url', content: r },
                { hid: 'og:image', property: 'og:image', content: image },
                { property: 'twitter:card', content: 'summary_large_image' },
                { property: 'twitter:title', content: title },
                { property: 'twitter:description', content: o },
                { property: 'twitter:image', content: image },
              ],
            }
          );
        },
      };
    },
    567: function (t, e, n) {
      var r = n(568);
      t.exports = function (t, e, n) {
        var o = t.length;
        return (n = void 0 === n ? o : n), !e && n >= o ? t : r(t, e, n);
      };
    },
    568: function (t, e) {
      t.exports = function (t, e, n) {
        var r = -1,
          o = t.length;
        e < 0 && (e = -e > o ? 0 : o + e),
          (n = n > o ? o : n) < 0 && (n += o),
          (o = e > n ? 0 : (n - e) >>> 0),
          (e >>>= 0);
        for (var c = Array(o); ++r < o; ) c[r] = t[r + e];
        return c;
      };
    },
    569: function (t, e, n) {
      var r = n(570),
        o = n(548),
        c = n(571);
      t.exports = function (t) {
        return o(t) ? c(t) : r(t);
      };
    },
    570: function (t, e) {
      t.exports = function (t) {
        return t.split('');
      };
    },
    571: function (t, e) {
      var n = '[\\ud800-\\udfff]',
        r = '[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]',
        o = '\\ud83c[\\udffb-\\udfff]',
        c = '[^\\ud800-\\udfff]',
        f = '(?:\\ud83c[\\udde6-\\uddff]){2}',
        d = '[\\ud800-\\udbff][\\udc00-\\udfff]',
        l = '(?:' + r + '|' + o + ')' + '?',
        v = '[\\ufe0e\\ufe0f]?',
        h =
          v + l + ('(?:\\u200d(?:' + [c, f, d].join('|') + ')' + v + l + ')*'),
        m = '(?:' + [c + r + '?', r, f, d, n].join('|') + ')',
        x = RegExp(o + '(?=' + o + ')|' + m + h, 'g');
      t.exports = function (t) {
        return t.match(x) || [];
      };
    },
    580: function (t, e, n) {
      'use strict';
      n.r(e);
      var r = n(3),
        component = Object(r.a)(
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
      e.default = component.exports;
    },
    581: function (t, e, n) {
      'use strict';
      n.r(e);
      var r = n(3),
        component = Object(r.a)(
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
      e.default = component.exports;
    },
    618: function (t, e, n) {
      'use strict';
      n.r(e);
      n(42), n(45), n(66), n(6), n(27), n(25);
      var r = n(649),
        o = n.n(r),
        c = n(580),
        f = n(581),
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
              var t = this;
              return function () {
                return {
                  component: n(653)(
                    './Section'.concat(
                      ((e = String(t.section.type)),
                      e.charAt(0).toUpperCase() + o()(e.slice(1))),
                      '.vue',
                    ),
                  ),
                  loading: c.default,
                  error: f.default,
                };
                var e;
              };
            },
          },
        },
        l = n(3),
        v = Object(l.a)(
          d,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              'keep-alive',
              [
                e(
                  t.component,
                  t._b(
                    {
                      tag: 'component',
                      attrs: {
                        'fetch-is-pending': t.fetchIsPending,
                        'data-sw-path': ''
                          .concat(t.collectionFieldId, '.')
                          .concat(t.collectionIndex),
                      },
                    },
                    'component',
                    t.section,
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
      e.default = v.exports;
    },
    649: function (t, e, n) {
      var r = n(650),
        o = n(549)(function (t, e, n) {
          return (e = e.toLowerCase()), t + (n ? r(e) : e);
        });
      t.exports = o;
    },
    650: function (t, e, n) {
      var r = n(308),
        o = n(651);
      t.exports = function (t) {
        return o(r(t).toLowerCase());
      };
    },
    651: function (t, e, n) {
      var r = n(652)('toUpperCase');
      t.exports = r;
    },
    652: function (t, e, n) {
      var r = n(567),
        o = n(548),
        c = n(569),
        f = n(308);
      t.exports = function (t) {
        return function (e) {
          e = f(e);
          var n = o(e) ? c(e) : void 0,
            d = n ? n[0] : e.charAt(0),
            l = n ? r(n, 1).join('') : e.slice(1);
          return d[t]() + l;
        };
      };
    },
    653: function (t, e, n) {
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
      function r(t) {
        if (!n.o(map, t))
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + t + "'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          });
        var e = map[t],
          r = e[0];
        return Promise.all(e.slice(1).map(n.e)).then(function () {
          return n(r);
        });
      }
      (r.keys = function () {
        return Object.keys(map);
      }),
        (r.id = 653),
        (t.exports = r);
    },
    666: function (t, e, n) {
      var content = n(740);
      content.__esModule && (content = content.default),
        'string' == typeof content && (content = [[t.i, content, '']]),
        content.locals && (t.exports = content.locals);
      (0, n(56).default)('2fa3b76a', content, !0, { sourceMap: !1 });
    },
    739: function (t, e, n) {
      'use strict';
      n(666);
    },
    740: function (t, e, n) {
      var r = n(55)(function (i) {
        return i[1];
      });
      r.push([
        t.i,
        '.page-section-move{transition-property:transform;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;transition-duration:500ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}',
        '',
      ]),
        (r.locals = {}),
        (t.exports = r);
    },
    785: function (t, e, n) {
      'use strict';
      n.r(e);
      n(42), n(12);
      var r = n(4),
        o = n(0),
        c = (n(6), n(17), n(16), n(11), n(14), n(20), n(21), n(15), n(13)),
        f = n.n(c),
        d = n(566),
        l = n(545);
      function v(object, t) {
        var e = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(object);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(object, t).enumerable;
            })),
            e.push.apply(e, n);
        }
        return e;
      }
      var h = {
          name: 'StandardPage',
          mixins: [d.a, l.a],
          data: function () {
            return { page: null, sections: [], loaded: !1 };
          },
          fetch: function () {
            return Object(o.a)(
              regeneratorRuntime.mark(function t() {
                return regeneratorRuntime.wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                      case 'end':
                        return t.stop();
                    }
                }, t);
              }),
            )();
          },
          methods: {
            setSections: function (t) {
              var e = this,
                n = f()(t, 'sections');
              if (Array.isArray(n) && Array.isArray(this.sections)) {
                var o = n.length === this.sections.length;
                this.$swellEditor && o
                  ? n.forEach(function (section, t) {
                      if (
                        JSON.stringify(section) !==
                        JSON.stringify(e.sections[t])
                      ) {
                        var n = (function (t) {
                          for (var i = 1; i < arguments.length; i++) {
                            var source =
                              null != arguments[i] ? arguments[i] : {};
                            i % 2
                              ? v(Object(source), !0).forEach(function (e) {
                                  Object(r.a)(t, e, source[e]);
                                })
                              : Object.getOwnPropertyDescriptors
                              ? Object.defineProperties(
                                  t,
                                  Object.getOwnPropertyDescriptors(source),
                                )
                              : v(Object(source)).forEach(function (e) {
                                  Object.defineProperty(
                                    t,
                                    e,
                                    Object.getOwnPropertyDescriptor(source, e),
                                  );
                                });
                          }
                          return t;
                        })({}, section);
                        delete n.$locale, e.$set(e.sections, t, n);
                      }
                    })
                  : (this.sections = n);
              }
            },
          },
        },
        m = h,
        x = (n(739), n(3)),
        component = Object(x.a)(
          m,
          function () {
            var t = this,
              e = t._self._c;
            return t.sections.length
              ? e(
                  'div',
                  [
                    e(
                      'transition-group',
                      { attrs: { name: 'page-section' } },
                      t._l(t.sections, function (section, n) {
                        return e(
                          'div',
                          { key: ''.concat(n, '.').concat(section.type) },
                          [
                            section
                              ? e('SectionAsyncLoader', {
                                  attrs: {
                                    section: section,
                                    'collection-index': n,
                                    'fetch-is-pending':
                                      !t.loaded && t.$fetchState.pending,
                                  },
                                })
                              : t._e(),
                          ],
                          1,
                        );
                      }),
                      0,
                    ),
                  ],
                  1,
                )
              : t.$fetchState.pending
              ? e(
                  'div',
                  {
                    staticClass:
                      'flex flex-col items-center justify-center py-32 md:container',
                  },
                  [
                    e('div', {
                      staticClass: 'mb-2 h-7 w-1/2 bg-primary-light',
                    }),
                    t._v(' '),
                    e('div', {
                      staticClass: 'mb-6 h-7 w-1/3 bg-primary-light',
                    }),
                    t._v(' '),
                    e('div', {
                      staticClass: 'mb-4 h-2 w-3/5 bg-primary-light',
                    }),
                    t._v(' '),
                    e('div', {
                      staticClass: 'mb-8 h-2 w-4/5 bg-primary-light',
                    }),
                    t._v(' '),
                    e('div', { staticClass: 'h-10 w-40 bg-primary-light' }),
                  ],
                )
              : e('SectionUndefined', {
                  attrs: {
                    heading: ''.concat(
                      t.page ? t.page.name : 'Standard',
                      ' page',
                    ),
                    description: 'No sections added',
                  },
                });
          },
          [],
          !1,
          null,
          null,
          null,
        );
      e.default = component.exports;
      installComponents(component, {
        SectionAsyncLoader: n(618).default,
        SectionUndefined: n(546).default,
      });
    },
  },
]);
