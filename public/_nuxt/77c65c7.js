/*! For license information please see LICENSES */
(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    756: function (t, e) {
      t.exports = (function (t) {
        var e = {};
        function n(r) {
          if (e[r]) return e[r].exports;
          var o = (e[r] = { i: r, l: !1, exports: {} });
          return t[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
        }
        return (
          (n.m = t),
          (n.c = e),
          (n.d = function (t, e, r) {
            n.o(t, e) ||
              Object.defineProperty(t, e, { enumerable: !0, get: r });
          }),
          (n.r = function (t) {
            'undefined' != typeof Symbol &&
              Symbol.toStringTag &&
              Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
              Object.defineProperty(t, '__esModule', { value: !0 });
          }),
          (n.t = function (t, e) {
            if ((1 & e && (t = n(t)), 8 & e)) return t;
            if (4 & e && 'object' == typeof t && t && t.__esModule) return t;
            var r = Object.create(null);
            if (
              (n.r(r),
              Object.defineProperty(r, 'default', { enumerable: !0, value: t }),
              2 & e && 'string' != typeof t)
            )
              for (var o in t)
                n.d(
                  r,
                  o,
                  function (e) {
                    return t[e];
                  }.bind(null, o),
                );
            return r;
          }),
          (n.n = function (t) {
            var e =
              t && t.__esModule
                ? function () {
                    return t.default;
                  }
                : function () {
                    return t;
                  };
            return n.d(e, 'a', e), e;
          }),
          (n.o = function (object, t) {
            return Object.prototype.hasOwnProperty.call(object, t);
          }),
          (n.p = ''),
          n((n.s = 'fb15'))
        );
      })({
        '4d21': function (t, e, n) {},
        f6fd: function (t, e) {
          !(function (t) {
            var e = 'currentScript',
              n = t.getElementsByTagName('script');
            e in t ||
              Object.defineProperty(t, e, {
                get: function () {
                  try {
                    throw new Error();
                  } catch (e) {
                    var i,
                      t = (/.*at [^\(]*\((.*):.+:.+\)$/gi.exec(e.stack) || [
                        !1,
                      ])[1];
                    for (i in n)
                      if (n[i].src == t || 'interactive' == n[i].readyState)
                        return n[i];
                    return null;
                  }
                },
              });
          })(document);
        },
        fb15: function (t, e, n) {
          'use strict';
          var i;
          (n.r(e), 'undefined' != typeof window) &&
            (n('f6fd'),
            (i = window.document.currentScript) &&
              (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)) &&
              (n.p = i[1]));
          var r = {
            type: 'slider',
            startAt: 0,
            perView: 1,
            focusAt: 0,
            gap: 10,
            autoplay: !1,
            hoverpause: !0,
            keyboard: !0,
            bound: !1,
            swipeThreshold: 80,
            dragThreshold: 120,
            perTouch: !1,
            touchRatio: 0.5,
            touchAngle: 45,
            animationDuration: 400,
            rewind: !0,
            rewindDuration: 800,
            animationTimingFunc: 'cubic-bezier(.165, .840, .440, 1)',
            throttle: 10,
            direction: 'ltr',
            peek: 0,
            breakpoints: {},
            classes: {
              direction: { ltr: 'glide--ltr', rtl: 'glide--rtl' },
              slider: 'glide--slider',
              carousel: 'glide--carousel',
              swipeable: 'glide--swipeable',
              dragging: 'glide--dragging',
              cloneSlide: 'glide__slide--clone',
              activeNav: 'glide__bullet--active',
              activeSlide: 'glide__slide--active',
              disabledArrow: 'glide__arrow--disabled',
            },
          };
          function o(t) {
            console.error('[Glide warn]: ' + t);
          }
          var l =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      'function' == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? 'symbol'
                      : typeof t;
                  },
            c = function (t, e) {
              if (!(t instanceof e))
                throw new TypeError('Cannot call a class as a function');
            },
            d = (function () {
              function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                  var n = e[i];
                  (n.enumerable = n.enumerable || !1),
                    (n.configurable = !0),
                    'value' in n && (n.writable = !0),
                    Object.defineProperty(t, n.key, n);
                }
              }
              return function (e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e;
              };
            })(),
            f =
              Object.assign ||
              function (t) {
                for (var i = 1; i < arguments.length; i++) {
                  var source = arguments[i];
                  for (var e in source)
                    Object.prototype.hasOwnProperty.call(source, e) &&
                      (t[e] = source[e]);
                }
                return t;
              },
            h = function t(object, e, n) {
              null === object && (object = Function.prototype);
              var desc = Object.getOwnPropertyDescriptor(object, e);
              if (void 0 === desc) {
                var r = Object.getPrototypeOf(object);
                return null === r ? void 0 : t(r, e, n);
              }
              if ('value' in desc) return desc.value;
              var o = desc.get;
              return void 0 !== o ? o.call(n) : void 0;
            },
            v = function (t, e) {
              if (!t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return !e || ('object' != typeof e && 'function' != typeof e)
                ? t
                : e;
            };
          function m(t) {
            return parseInt(t);
          }
          function y(t) {
            return 'string' == typeof t;
          }
          function w(t) {
            var e = void 0 === t ? 'undefined' : l(t);
            return 'function' === e || ('object' === e && !!t);
          }
          function _(t) {
            return 'function' == typeof t;
          }
          function k(t) {
            return void 0 === t;
          }
          function S(t) {
            return t.constructor === Array;
          }
          function T(t, e, n) {
            var r = {};
            for (var l in e)
              _(e[l])
                ? (r[l] = e[l](t, r, n))
                : o('Extension must be a function');
            for (var c in r) _(r[c].mount) && r[c].mount();
            return r;
          }
          function x(t, e, n) {
            Object.defineProperty(t, e, n);
          }
          function O(t, e) {
            var n = f({}, t, e);
            return (
              e.hasOwnProperty('classes') &&
                ((n.classes = f({}, t.classes, e.classes)),
                e.classes.hasOwnProperty('direction') &&
                  (n.classes.direction = f(
                    {},
                    t.classes.direction,
                    e.classes.direction,
                  ))),
              e.hasOwnProperty('breakpoints') &&
                (n.breakpoints = f({}, t.breakpoints, e.breakpoints)),
              n
            );
          }
          var H = (function () {
              function t() {
                var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
                c(this, t), (this.events = e), (this.hop = e.hasOwnProperty);
              }
              return (
                d(t, [
                  {
                    key: 'on',
                    value: function (t, e) {
                      if (S(t))
                        for (var i = 0; i < t.length; i++) this.on(t[i], e);
                      this.hop.call(this.events, t) || (this.events[t] = []);
                      var n = this.events[t].push(e) - 1;
                      return {
                        remove: function () {
                          delete this.events[t][n];
                        },
                      };
                    },
                  },
                  {
                    key: 'emit',
                    value: function (t, e) {
                      if (S(t))
                        for (var i = 0; i < t.length; i++) this.emit(t[i], e);
                      this.hop.call(this.events, t) &&
                        this.events[t].forEach(function (t) {
                          t(e || {});
                        });
                    },
                  },
                ]),
                t
              );
            })(),
            C = (function () {
              function t(e) {
                var n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
                c(this, t),
                  (this._c = {}),
                  (this._t = []),
                  (this._e = new H()),
                  (this.disabled = !1),
                  (this.selector = e),
                  (this.settings = O(r, n)),
                  (this.index = this.settings.startAt);
              }
              return (
                d(t, [
                  {
                    key: 'mount',
                    value: function () {
                      var t =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : {};
                      return (
                        this._e.emit('mount.before'),
                        w(t)
                          ? (this._c = T(this, t, this._e))
                          : o('You need to provide a object on `mount()`'),
                        this._e.emit('mount.after'),
                        this
                      );
                    },
                  },
                  {
                    key: 'mutate',
                    value: function () {
                      var t =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : [];
                      return (
                        S(t)
                          ? (this._t = t)
                          : o('You need to provide a array on `mutate()`'),
                        this
                      );
                    },
                  },
                  {
                    key: 'update',
                    value: function () {
                      var t =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : {};
                      return (
                        (this.settings = O(this.settings, t)),
                        t.hasOwnProperty('startAt') && (this.index = t.startAt),
                        this._e.emit('update'),
                        this
                      );
                    },
                  },
                  {
                    key: 'go',
                    value: function (pattern) {
                      return this._c.Run.make(pattern), this;
                    },
                  },
                  {
                    key: 'move',
                    value: function (t) {
                      return (
                        this._c.Transition.disable(), this._c.Move.make(t), this
                      );
                    },
                  },
                  {
                    key: 'destroy',
                    value: function () {
                      return this._e.emit('destroy'), this;
                    },
                  },
                  {
                    key: 'play',
                    value: function () {
                      var t =
                        arguments.length > 0 &&
                        void 0 !== arguments[0] &&
                        arguments[0];
                      return (
                        t && (this.settings.autoplay = t),
                        this._e.emit('play'),
                        this
                      );
                    },
                  },
                  {
                    key: 'pause',
                    value: function () {
                      return this._e.emit('pause'), this;
                    },
                  },
                  {
                    key: 'disable',
                    value: function () {
                      return (this.disabled = !0), this;
                    },
                  },
                  {
                    key: 'enable',
                    value: function () {
                      return (this.disabled = !1), this;
                    },
                  },
                  {
                    key: 'on',
                    value: function (t, e) {
                      return this._e.on(t, e), this;
                    },
                  },
                  {
                    key: 'isType',
                    value: function (t) {
                      return this.settings.type === t;
                    },
                  },
                  {
                    key: 'settings',
                    get: function () {
                      return this._o;
                    },
                    set: function (t) {
                      w(t)
                        ? (this._o = t)
                        : o('Options must be an `object` instance.');
                    },
                  },
                  {
                    key: 'index',
                    get: function () {
                      return this._i;
                    },
                    set: function (i) {
                      this._i = m(i);
                    },
                  },
                  {
                    key: 'type',
                    get: function () {
                      return this.settings.type;
                    },
                  },
                  {
                    key: 'disabled',
                    get: function () {
                      return this._d;
                    },
                    set: function (t) {
                      this._d = !!t;
                    },
                  },
                ]),
                t
              );
            })();
          function j() {
            return new Date().getTime();
          }
          function A(t, e, n) {
            var r = void 0,
              o = void 0,
              l = void 0,
              c = void 0,
              d = 0;
            n || (n = {});
            var f = function () {
                (d = !1 === n.leading ? 0 : j()),
                  (r = null),
                  (c = t.apply(o, l)),
                  r || (o = l = null);
              },
              h = function () {
                var h = j();
                d || !1 !== n.leading || (d = h);
                var v = e - (h - d);
                return (
                  (o = this),
                  (l = arguments),
                  v <= 0 || v > e
                    ? (r && (clearTimeout(r), (r = null)),
                      (d = h),
                      (c = t.apply(o, l)),
                      r || (o = l = null))
                    : r || !1 === n.trailing || (r = setTimeout(f, v)),
                  c
                );
              };
            return (
              (h.cancel = function () {
                clearTimeout(r), (d = 0), (r = o = l = null);
              }),
              h
            );
          }
          var M = {
            ltr: ['marginLeft', 'marginRight'],
            rtl: ['marginRight', 'marginLeft'],
          };
          function E(t) {
            if (t && t.parentNode) {
              for (
                var e = t.parentNode.firstChild, n = [];
                e;
                e = e.nextSibling
              )
                1 === e.nodeType && e !== t && n.push(e);
              return n;
            }
            return [];
          }
          function P(t) {
            return !!(t && t instanceof window.HTMLElement);
          }
          var N = '[data-glide-el="track"]';
          var L = (function () {
            function t() {
              var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
              c(this, t), (this.listeners = e);
            }
            return (
              d(t, [
                {
                  key: 'on',
                  value: function (t, e, n) {
                    var r =
                      arguments.length > 3 &&
                      void 0 !== arguments[3] &&
                      arguments[3];
                    y(t) && (t = [t]);
                    for (var i = 0; i < t.length; i++)
                      (this.listeners[t[i]] = n),
                        e.addEventListener(t[i], this.listeners[t[i]], r);
                  },
                },
                {
                  key: 'off',
                  value: function (t, e) {
                    var n =
                      arguments.length > 2 &&
                      void 0 !== arguments[2] &&
                      arguments[2];
                    y(t) && (t = [t]);
                    for (var i = 0; i < t.length; i++)
                      e.removeEventListener(t[i], this.listeners[t[i]], n);
                  },
                },
                {
                  key: 'destroy',
                  value: function () {
                    delete this.listeners;
                  },
                },
              ]),
              t
            );
          })();
          var B = ['ltr', 'rtl'],
            z = { '>': '<', '<': '>', '=': '=' };
          function R(t, e) {
            return {
              modify: function (t) {
                return e.Direction.is('rtl') ? -t : t;
              },
            };
          }
          function $(t, e) {
            return {
              modify: function (n) {
                return n + e.Gaps.value * t.index;
              },
            };
          }
          function D(t, e) {
            return {
              modify: function (t) {
                return t + e.Clones.grow / 2;
              },
            };
          }
          function G(t, e) {
            return {
              modify: function (n) {
                if (t.settings.focusAt >= 0) {
                  var r = e.Peek.value;
                  return w(r) ? n - r.before : n - r;
                }
                return n;
              },
            };
          }
          function V(t, e) {
            return {
              modify: function (n) {
                var r = e.Gaps.value,
                  o = e.Sizes.width,
                  l = t.settings.focusAt,
                  c = e.Sizes.slideWidth;
                return 'center' === l ? n - (o / 2 - c / 2) : n - c * l - r * l;
              },
            };
          }
          var W = !1;
          try {
            var I = Object.defineProperty({}, 'passive', {
              get: function () {
                W = !0;
              },
            });
            window.addEventListener('testPassive', null, I),
              window.removeEventListener('testPassive', null, I);
          } catch (t) {}
          var F = W,
            X = ['touchstart', 'mousedown'],
            Y = ['touchmove', 'mousemove'],
            J = ['touchend', 'touchcancel', 'mouseup', 'mouseleave'],
            U = ['mousedown', 'mousemove', 'mouseup', 'mouseleave'];
          function K(t) {
            return w(t)
              ? ((e = t),
                Object.keys(e)
                  .sort()
                  .reduce(function (t, n) {
                    return (t[n] = e[n]), t[n], t;
                  }, {}))
              : (o('Breakpoints option must be an object'), {});
            var e;
          }
          var Q = {
              Html: function (t, e) {
                var n = {
                  mount: function () {
                    (this.root = t.selector),
                      (this.track = this.root.querySelector(N)),
                      (this.slides = Array.prototype.slice
                        .call(this.wrapper.children)
                        .filter(function (e) {
                          return !e.classList.contains(
                            t.settings.classes.cloneSlide,
                          );
                        }));
                  },
                };
                return (
                  x(n, 'root', {
                    get: function () {
                      return n._r;
                    },
                    set: function (t) {
                      y(t) && (t = document.querySelector(t)),
                        P(t)
                          ? (n._r = t)
                          : o('Root element must be a existing Html node');
                    },
                  }),
                  x(n, 'track', {
                    get: function () {
                      return n._t;
                    },
                    set: function (t) {
                      P(t)
                        ? (n._t = t)
                        : o(
                            'Could not find track element. Please use ' +
                              N +
                              ' attribute.',
                          );
                    },
                  }),
                  x(n, 'wrapper', {
                    get: function () {
                      return n.track.children[0];
                    },
                  }),
                  n
                );
              },
              Translate: function (t, e, n) {
                var r = {
                  set: function (n) {
                    var r = (function (t, e, n) {
                      var r = [$, D, G, V].concat(t._t, [R]);
                      return {
                        mutate: function (l) {
                          for (var i = 0; i < r.length; i++) {
                            var c = r[i];
                            _(c) && _(c().modify)
                              ? (l = c(t, e, n).modify(l))
                              : o(
                                  'Transformer should be a function that returns an object with `modify()` method',
                                );
                          }
                          return l;
                        },
                      };
                    })(t, e).mutate(n);
                    e.Html.wrapper.style.transform =
                      'translate3d(' + -1 * r + 'px, 0px, 0px)';
                  },
                  remove: function () {
                    e.Html.wrapper.style.transform = '';
                  },
                };
                return (
                  n.on('move', function (o) {
                    var l = e.Gaps.value,
                      c = e.Sizes.length,
                      d = e.Sizes.slideWidth;
                    return t.isType('carousel') && e.Run.isOffset('<')
                      ? (e.Transition.after(function () {
                          n.emit('translate.jump'), r.set(d * (c - 1));
                        }),
                        r.set(-d - l * c))
                      : t.isType('carousel') && e.Run.isOffset('>')
                      ? (e.Transition.after(function () {
                          n.emit('translate.jump'), r.set(0);
                        }),
                        r.set(d * c + l * c))
                      : r.set(o.movement);
                  }),
                  n.on('destroy', function () {
                    r.remove();
                  }),
                  r
                );
              },
              Transition: function (t, e, n) {
                var r = !1,
                  o = {
                    compose: function (e) {
                      var n = t.settings;
                      return r
                        ? e + ' 0ms ' + n.animationTimingFunc
                        : e +
                            ' ' +
                            this.duration +
                            'ms ' +
                            n.animationTimingFunc;
                    },
                    set: function () {
                      var t =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : 'transform';
                      e.Html.wrapper.style.transition = this.compose(t);
                    },
                    remove: function () {
                      e.Html.wrapper.style.transition = '';
                    },
                    after: function (t) {
                      setTimeout(function () {
                        t();
                      }, this.duration);
                    },
                    enable: function () {
                      (r = !1), this.set();
                    },
                    disable: function () {
                      (r = !0), this.set();
                    },
                  };
                return (
                  x(o, 'duration', {
                    get: function () {
                      var n = t.settings;
                      return t.isType('slider') && e.Run.offset
                        ? n.rewindDuration
                        : n.animationDuration;
                    },
                  }),
                  n.on('move', function () {
                    o.set();
                  }),
                  n.on(
                    ['build.before', 'resize', 'translate.jump'],
                    function () {
                      o.disable();
                    },
                  ),
                  n.on('run', function () {
                    o.enable();
                  }),
                  n.on('destroy', function () {
                    o.remove();
                  }),
                  o
                );
              },
              Direction: function (t, e, n) {
                var r = {
                  mount: function () {
                    this.value = t.settings.direction;
                  },
                  resolve: function (pattern) {
                    var t = pattern.slice(0, 1);
                    return this.is('rtl')
                      ? pattern.split(t).join(z[t])
                      : pattern;
                  },
                  is: function (t) {
                    return this.value === t;
                  },
                  addClass: function () {
                    e.Html.root.classList.add(
                      t.settings.classes.direction[this.value],
                    );
                  },
                  removeClass: function () {
                    e.Html.root.classList.remove(
                      t.settings.classes.direction[this.value],
                    );
                  },
                };
                return (
                  x(r, 'value', {
                    get: function () {
                      return r._v;
                    },
                    set: function (t) {
                      B.indexOf(t) > -1
                        ? (r._v = t)
                        : o('Direction value must be `ltr` or `rtl`');
                    },
                  }),
                  n.on(['destroy', 'update'], function () {
                    r.removeClass();
                  }),
                  n.on('update', function () {
                    r.mount();
                  }),
                  n.on(['build.before', 'update'], function () {
                    r.addClass();
                  }),
                  r
                );
              },
              Peek: function (t, e, n) {
                var r = {
                  mount: function () {
                    this.value = t.settings.peek;
                  },
                };
                return (
                  x(r, 'value', {
                    get: function () {
                      return r._v;
                    },
                    set: function (t) {
                      w(t)
                        ? ((t.before = m(t.before)), (t.after = m(t.after)))
                        : (t = m(t)),
                        (r._v = t);
                    },
                  }),
                  x(r, 'reductor', {
                    get: function () {
                      var e = r.value,
                        n = t.settings.perView;
                      return w(e) ? e.before / n + e.after / n : (2 * e) / n;
                    },
                  }),
                  n.on(['resize', 'update'], function () {
                    r.mount();
                  }),
                  r
                );
              },
              Sizes: function (t, e, n) {
                var r = {
                  setupSlides: function () {
                    for (
                      var t = this.slideWidth + 'px', n = e.Html.slides, i = 0;
                      i < n.length;
                      i++
                    )
                      n[i].style.width = t;
                  },
                  setupWrapper: function (t) {
                    e.Html.wrapper.style.width = this.wrapperSize + 'px';
                  },
                  remove: function () {
                    for (var t = e.Html.slides, i = 0; i < t.length; i++)
                      t[i].style.width = '';
                    e.Html.wrapper.style.width = '';
                  },
                };
                return (
                  x(r, 'length', {
                    get: function () {
                      return e.Html.slides.length;
                    },
                  }),
                  x(r, 'width', {
                    get: function () {
                      return e.Html.root.offsetWidth;
                    },
                  }),
                  x(r, 'wrapperSize', {
                    get: function () {
                      return (
                        r.slideWidth * r.length + e.Gaps.grow + e.Clones.grow
                      );
                    },
                  }),
                  x(r, 'slideWidth', {
                    get: function () {
                      return (
                        r.width / t.settings.perView -
                        e.Peek.reductor -
                        e.Gaps.reductor
                      );
                    },
                  }),
                  n.on(['build.before', 'resize', 'update'], function () {
                    r.setupSlides(), r.setupWrapper();
                  }),
                  n.on('destroy', function () {
                    r.remove();
                  }),
                  r
                );
              },
              Gaps: function (t, e, n) {
                var r = {
                  apply: function (t) {
                    for (var i = 0, n = t.length; i < n; i++) {
                      var style = t[i].style,
                        r = e.Direction.value;
                      (style[M[r][0]] = 0 !== i ? this.value / 2 + 'px' : ''),
                        i !== t.length - 1
                          ? (style[M[r][1]] = this.value / 2 + 'px')
                          : (style[M[r][1]] = '');
                    }
                  },
                  remove: function (t) {
                    for (var i = 0, e = t.length; i < e; i++) {
                      var style = t[i].style;
                      (style.marginLeft = ''), (style.marginRight = '');
                    }
                  },
                };
                return (
                  x(r, 'value', {
                    get: function () {
                      return m(t.settings.gap);
                    },
                  }),
                  x(r, 'grow', {
                    get: function () {
                      return r.value * (e.Sizes.length - 1);
                    },
                  }),
                  x(r, 'reductor', {
                    get: function () {
                      var e = t.settings.perView;
                      return (r.value * (e - 1)) / e;
                    },
                  }),
                  n.on(
                    ['build.after', 'update'],
                    A(function () {
                      r.apply(e.Html.wrapper.children);
                    }, 30),
                  ),
                  n.on('destroy', function () {
                    r.remove(e.Html.wrapper.children);
                  }),
                  r
                );
              },
              Move: function (t, e, n) {
                var r = {
                  mount: function () {
                    this._o = 0;
                  },
                  make: function () {
                    var t = this,
                      r =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : 0;
                    (this.offset = r),
                      n.emit('move', { movement: this.value }),
                      e.Transition.after(function () {
                        n.emit('move.after', { movement: t.value });
                      });
                  },
                };
                return (
                  x(r, 'offset', {
                    get: function () {
                      return r._o;
                    },
                    set: function (t) {
                      r._o = k(t) ? 0 : m(t);
                    },
                  }),
                  x(r, 'translate', {
                    get: function () {
                      return e.Sizes.slideWidth * t.index;
                    },
                  }),
                  x(r, 'value', {
                    get: function () {
                      var t = this.offset,
                        n = this.translate;
                      return e.Direction.is('rtl') ? n + t : n - t;
                    },
                  }),
                  n.on(['build.before', 'run'], function () {
                    r.make();
                  }),
                  r
                );
              },
              Clones: function (t, e, n) {
                var r = {
                  mount: function () {
                    (this.items = []),
                      t.isType('carousel') && (this.items = this.collect());
                  },
                  collect: function () {
                    for (
                      var n =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : [],
                        r = e.Html.slides,
                        o = t.settings,
                        l = o.perView,
                        c = o.classes,
                        d = +!!t.settings.peek,
                        f = l + d,
                        h = r.slice(0, f),
                        v = r.slice(-f),
                        m = 0;
                      m < Math.max(1, Math.floor(l / r.length));
                      m++
                    ) {
                      for (var i = 0; i < h.length; i++) {
                        var y = h[i].cloneNode(!0);
                        y.classList.add(c.cloneSlide), n.push(y);
                      }
                      for (var w = 0; w < v.length; w++) {
                        var _ = v[w].cloneNode(!0);
                        _.classList.add(c.cloneSlide), n.unshift(_);
                      }
                    }
                    return n;
                  },
                  append: function () {
                    for (
                      var t = this.items,
                        n = e.Html,
                        r = n.wrapper,
                        o = n.slides,
                        l = Math.floor(t.length / 2),
                        c = t.slice(0, l).reverse(),
                        d = t.slice(l, t.length),
                        f = e.Sizes.slideWidth + 'px',
                        i = 0;
                      i < d.length;
                      i++
                    )
                      r.appendChild(d[i]);
                    for (var h = 0; h < c.length; h++)
                      r.insertBefore(c[h], o[0]);
                    for (var v = 0; v < t.length; v++) t[v].style.width = f;
                  },
                  remove: function () {
                    for (var t = this.items, i = 0; i < t.length; i++)
                      e.Html.wrapper.removeChild(t[i]);
                  },
                };
                return (
                  x(r, 'grow', {
                    get: function () {
                      return (
                        (e.Sizes.slideWidth + e.Gaps.value) * r.items.length
                      );
                    },
                  }),
                  n.on('update', function () {
                    r.remove(), r.mount(), r.append();
                  }),
                  n.on('build.before', function () {
                    t.isType('carousel') && r.append();
                  }),
                  n.on('destroy', function () {
                    r.remove();
                  }),
                  r
                );
              },
              Resize: function (t, e, n) {
                var r = new L(),
                  o = {
                    mount: function () {
                      this.bind();
                    },
                    bind: function () {
                      r.on(
                        'resize',
                        window,
                        A(function () {
                          n.emit('resize');
                        }, t.settings.throttle),
                      );
                    },
                    unbind: function () {
                      r.off('resize', window);
                    },
                  };
                return (
                  n.on('destroy', function () {
                    o.unbind(), r.destroy();
                  }),
                  o
                );
              },
              Build: function (t, e, n) {
                var r = {
                  mount: function () {
                    n.emit('build.before'),
                      this.typeClass(),
                      this.activeClass(),
                      n.emit('build.after');
                  },
                  typeClass: function () {
                    e.Html.root.classList.add(
                      t.settings.classes[t.settings.type],
                    );
                  },
                  activeClass: function () {
                    var n = t.settings.classes,
                      r = e.Html.slides[t.index];
                    r &&
                      (r.classList.add(n.activeSlide),
                      E(r).forEach(function (t) {
                        t.classList.remove(n.activeSlide);
                      }));
                  },
                  removeClasses: function () {
                    var n = t.settings.classes;
                    e.Html.root.classList.remove(n[t.settings.type]),
                      e.Html.slides.forEach(function (t) {
                        t.classList.remove(n.activeSlide);
                      });
                  },
                };
                return (
                  n.on(['destroy', 'update'], function () {
                    r.removeClasses();
                  }),
                  n.on(['resize', 'update'], function () {
                    r.mount();
                  }),
                  n.on('move.after', function () {
                    r.activeClass();
                  }),
                  r
                );
              },
              Run: function (t, e, n) {
                var r = {
                  mount: function () {
                    this._o = !1;
                  },
                  make: function (r) {
                    var o = this;
                    t.disabled ||
                      (t.disable(),
                      (this.move = r),
                      n.emit('run.before', this.move),
                      this.calculate(),
                      n.emit('run', this.move),
                      e.Transition.after(function () {
                        o.isStart() && n.emit('run.start', o.move),
                          o.isEnd() && n.emit('run.end', o.move),
                          (o.isOffset('<') || o.isOffset('>')) &&
                            ((o._o = !1), n.emit('run.offset', o.move)),
                          n.emit('run.after', o.move),
                          t.enable();
                      }));
                  },
                  calculate: function () {
                    var e = this.move,
                      n = this.length,
                      r = e.steps,
                      l = e.direction,
                      c = 'number' == typeof m(r) && 0 !== m(r);
                    switch (l) {
                      case '>':
                        '>' === r
                          ? (t.index = n)
                          : this.isEnd()
                          ? (t.isType('slider') && !t.settings.rewind) ||
                            ((this._o = !0), (t.index = 0))
                          : c
                          ? (t.index += Math.min(n - t.index, -m(r)))
                          : t.index++;
                        break;
                      case '<':
                        '<' === r
                          ? (t.index = 0)
                          : this.isStart()
                          ? (t.isType('slider') && !t.settings.rewind) ||
                            ((this._o = !0), (t.index = n))
                          : c
                          ? (t.index -= Math.min(t.index, m(r)))
                          : t.index--;
                        break;
                      case '=':
                        t.index = r;
                        break;
                      default:
                        o(
                          'Invalid direction pattern [' +
                            l +
                            r +
                            '] has been used',
                        );
                    }
                  },
                  isStart: function () {
                    return 0 === t.index;
                  },
                  isEnd: function () {
                    return t.index === this.length;
                  },
                  isOffset: function (t) {
                    return this._o && this.move.direction === t;
                  },
                };
                return (
                  x(r, 'move', {
                    get: function () {
                      return this._m;
                    },
                    set: function (t) {
                      var e = t.substr(1);
                      this._m = {
                        direction: t.substr(0, 1),
                        steps: e ? (m(e) ? m(e) : e) : 0,
                      };
                    },
                  }),
                  x(r, 'length', {
                    get: function () {
                      var n = t.settings,
                        r = e.Html.slides.length;
                      return t.isType('slider') &&
                        'center' !== n.focusAt &&
                        n.bound
                        ? r - 1 - (m(n.perView) - 1) + m(n.focusAt)
                        : r - 1;
                    },
                  }),
                  x(r, 'offset', {
                    get: function () {
                      return this._o;
                    },
                  }),
                  r
                );
              },
              Swipe: function (t, e, n) {
                var r = new L(),
                  o = 0,
                  l = 0,
                  c = 0,
                  d = !1,
                  f = !!F && { passive: !0 },
                  h = {
                    mount: function () {
                      this.bindSwipeStart();
                    },
                    start: function (e) {
                      if (!d && !t.disabled) {
                        this.disable();
                        var r = this.touches(e);
                        (o = null),
                          (l = m(r.pageX)),
                          (c = m(r.pageY)),
                          this.bindSwipeMove(),
                          this.bindSwipeEnd(),
                          n.emit('swipe.start');
                      }
                    },
                    move: function (r) {
                      if (!t.disabled) {
                        var d = t.settings,
                          f = d.touchAngle,
                          h = d.touchRatio,
                          v = d.classes,
                          y = this.touches(r),
                          w = m(y.pageX) - l,
                          _ = m(y.pageY) - c,
                          k = Math.abs(w << 2),
                          S = Math.abs(_ << 2),
                          T = Math.sqrt(k + S),
                          x = Math.sqrt(S);
                        if (!((180 * (o = Math.asin(x / T))) / Math.PI < f))
                          return !1;
                        r.stopPropagation(),
                          e.Move.make(w * parseFloat(h)),
                          e.Html.root.classList.add(v.dragging),
                          n.emit('swipe.move');
                      }
                    },
                    end: function (r) {
                      if (!t.disabled) {
                        var c = t.settings,
                          d = this.touches(r),
                          f = this.threshold(r),
                          h = d.pageX - l,
                          v = (180 * o) / Math.PI,
                          y = Math.round(h / e.Sizes.slideWidth);
                        this.enable(),
                          h > f && v < c.touchAngle
                            ? (c.perTouch && (y = Math.min(y, m(c.perTouch))),
                              e.Direction.is('rtl') && (y = -y),
                              e.Run.make(e.Direction.resolve('<' + y)))
                            : h < -f && v < c.touchAngle
                            ? (c.perTouch && (y = Math.max(y, -m(c.perTouch))),
                              e.Direction.is('rtl') && (y = -y),
                              e.Run.make(e.Direction.resolve('>' + y)))
                            : e.Move.make(),
                          e.Html.root.classList.remove(c.classes.dragging),
                          this.unbindSwipeMove(),
                          this.unbindSwipeEnd(),
                          n.emit('swipe.end');
                      }
                    },
                    bindSwipeStart: function () {
                      var n = this,
                        o = t.settings;
                      o.swipeThreshold &&
                        r.on(
                          X[0],
                          e.Html.wrapper,
                          function (t) {
                            n.start(t);
                          },
                          f,
                        ),
                        o.dragThreshold &&
                          r.on(
                            X[1],
                            e.Html.wrapper,
                            function (t) {
                              n.start(t);
                            },
                            f,
                          );
                    },
                    unbindSwipeStart: function () {
                      r.off(X[0], e.Html.wrapper, f),
                        r.off(X[1], e.Html.wrapper, f);
                    },
                    bindSwipeMove: function () {
                      var n = this;
                      r.on(
                        Y,
                        e.Html.wrapper,
                        A(function (t) {
                          n.move(t);
                        }, t.settings.throttle),
                        f,
                      );
                    },
                    unbindSwipeMove: function () {
                      r.off(Y, e.Html.wrapper, f);
                    },
                    bindSwipeEnd: function () {
                      var t = this;
                      r.on(J, e.Html.wrapper, function (e) {
                        t.end(e);
                      });
                    },
                    unbindSwipeEnd: function () {
                      r.off(J, e.Html.wrapper);
                    },
                    touches: function (t) {
                      return U.indexOf(t.type) > -1
                        ? t
                        : t.touches[0] || t.changedTouches[0];
                    },
                    threshold: function (e) {
                      var n = t.settings;
                      return U.indexOf(e.type) > -1
                        ? n.dragThreshold
                        : n.swipeThreshold;
                    },
                    enable: function () {
                      return (d = !1), e.Transition.enable(), this;
                    },
                    disable: function () {
                      return (d = !0), e.Transition.disable(), this;
                    },
                  };
                return (
                  n.on('build.after', function () {
                    e.Html.root.classList.add(t.settings.classes.swipeable);
                  }),
                  n.on('destroy', function () {
                    h.unbindSwipeStart(),
                      h.unbindSwipeMove(),
                      h.unbindSwipeEnd(),
                      r.destroy();
                  }),
                  h
                );
              },
              Images: function (t, e, n) {
                var r = new L(),
                  o = {
                    mount: function () {
                      this.bind();
                    },
                    bind: function () {
                      r.on('dragstart', e.Html.wrapper, this.dragstart);
                    },
                    unbind: function () {
                      r.off('dragstart', e.Html.wrapper);
                    },
                    dragstart: function (t) {
                      t.preventDefault();
                    },
                  };
                return (
                  n.on('destroy', function () {
                    o.unbind(), r.destroy();
                  }),
                  o
                );
              },
              Anchors: function (t, e, n) {
                var r = new L(),
                  o = !1,
                  l = !1,
                  c = {
                    mount: function () {
                      (this._a = e.Html.wrapper.querySelectorAll('a')),
                        this.bind();
                    },
                    bind: function () {
                      r.on('click', e.Html.wrapper, this.click);
                    },
                    unbind: function () {
                      r.off('click', e.Html.wrapper);
                    },
                    click: function (t) {
                      l && (t.stopPropagation(), t.preventDefault());
                    },
                    detach: function () {
                      if (((l = !0), !o)) {
                        for (var i = 0; i < this.items.length; i++)
                          (this.items[i].draggable = !1),
                            this.items[i].setAttribute(
                              'data-href',
                              this.items[i].getAttribute('href'),
                            ),
                            this.items[i].removeAttribute('href');
                        o = !0;
                      }
                      return this;
                    },
                    attach: function () {
                      if (((l = !1), o)) {
                        for (var i = 0; i < this.items.length; i++)
                          (this.items[i].draggable = !0),
                            this.items[i].setAttribute(
                              'href',
                              this.items[i].getAttribute('data-href'),
                            );
                        o = !1;
                      }
                      return this;
                    },
                  };
                return (
                  x(c, 'items', {
                    get: function () {
                      return c._a;
                    },
                  }),
                  n.on('swipe.move', function () {
                    c.detach();
                  }),
                  n.on('swipe.end', function () {
                    e.Transition.after(function () {
                      c.attach();
                    });
                  }),
                  n.on('destroy', function () {
                    c.attach(), c.unbind(), r.destroy();
                  }),
                  c
                );
              },
              Controls: function (t, e, n) {
                var r = new L(),
                  o = !!F && { passive: !0 },
                  l = {
                    mount: function () {
                      (this._n = e.Html.root.querySelectorAll(
                        '[data-glide-el="controls[nav]"]',
                      )),
                        (this._c = e.Html.root.querySelectorAll(
                          '[data-glide-el^="controls"]',
                        )),
                        this.addBindings();
                    },
                    setActive: function () {
                      for (var i = 0; i < this._n.length; i++)
                        this.addClass(this._n[i].children);
                    },
                    removeActive: function () {
                      for (var i = 0; i < this._n.length; i++)
                        this.removeClass(this._n[i].children);
                    },
                    addClass: function (e) {
                      var n = t.settings,
                        r = e[t.index];
                      r &&
                        (r.classList.add(n.classes.activeNav),
                        E(r).forEach(function (t) {
                          t.classList.remove(n.classes.activeNav);
                        }));
                    },
                    removeClass: function (e) {
                      var n = e[t.index];
                      n && n.classList.remove(t.settings.classes.activeNav);
                    },
                    addBindings: function () {
                      for (var i = 0; i < this._c.length; i++)
                        this.bind(this._c[i].children);
                    },
                    removeBindings: function () {
                      for (var i = 0; i < this._c.length; i++)
                        this.unbind(this._c[i].children);
                    },
                    bind: function (t) {
                      for (var i = 0; i < t.length; i++)
                        r.on('click', t[i], this.click),
                          r.on('touchstart', t[i], this.click, o);
                    },
                    unbind: function (t) {
                      for (var i = 0; i < t.length; i++)
                        r.off(['click', 'touchstart'], t[i]);
                    },
                    click: function (t) {
                      t.preventDefault(),
                        e.Run.make(
                          e.Direction.resolve(
                            t.currentTarget.getAttribute('data-glide-dir'),
                          ),
                        );
                    },
                  };
                return (
                  x(l, 'items', {
                    get: function () {
                      return l._c;
                    },
                  }),
                  n.on(['mount.after', 'move.after'], function () {
                    l.setActive();
                  }),
                  n.on('destroy', function () {
                    l.removeBindings(), l.removeActive(), r.destroy();
                  }),
                  l
                );
              },
              Keyboard: function (t, e, n) {
                var r = new L(),
                  o = {
                    mount: function () {
                      t.settings.keyboard && this.bind();
                    },
                    bind: function () {
                      r.on('keyup', document, this.press);
                    },
                    unbind: function () {
                      r.off('keyup', document);
                    },
                    press: function (t) {
                      39 === t.keyCode && e.Run.make(e.Direction.resolve('>')),
                        37 === t.keyCode &&
                          e.Run.make(e.Direction.resolve('<'));
                    },
                  };
                return (
                  n.on(['destroy', 'update'], function () {
                    o.unbind();
                  }),
                  n.on('update', function () {
                    o.mount();
                  }),
                  n.on('destroy', function () {
                    r.destroy();
                  }),
                  o
                );
              },
              Autoplay: function (t, e, n) {
                var r = new L(),
                  o = {
                    mount: function () {
                      this.start(), t.settings.hoverpause && this.bind();
                    },
                    start: function () {
                      var n = this;
                      t.settings.autoplay &&
                        k(this._i) &&
                        (this._i = setInterval(function () {
                          n.stop(), e.Run.make('>'), n.start();
                        }, this.time));
                    },
                    stop: function () {
                      this._i = clearInterval(this._i);
                    },
                    bind: function () {
                      var t = this;
                      r.on('mouseover', e.Html.root, function () {
                        t.stop();
                      }),
                        r.on('mouseout', e.Html.root, function () {
                          t.start();
                        });
                    },
                    unbind: function () {
                      r.off(['mouseover', 'mouseout'], e.Html.root);
                    },
                  };
                return (
                  x(o, 'time', {
                    get: function () {
                      var n = e.Html.slides[t.index].getAttribute(
                        'data-glide-autoplay',
                      );
                      return m(n || t.settings.autoplay);
                    },
                  }),
                  n.on(['destroy', 'update'], function () {
                    o.unbind();
                  }),
                  n.on(
                    ['run.before', 'pause', 'destroy', 'swipe.start', 'update'],
                    function () {
                      o.stop();
                    },
                  ),
                  n.on(['run.after', 'play', 'swipe.end'], function () {
                    o.start();
                  }),
                  n.on('update', function () {
                    o.mount();
                  }),
                  n.on('destroy', function () {
                    r.destroy();
                  }),
                  o
                );
              },
              Breakpoints: function (t, e, n) {
                var r = new L(),
                  o = t.settings,
                  l = K(o.breakpoints),
                  c = f({}, o),
                  d = {
                    match: function (t) {
                      if (void 0 !== window.matchMedia)
                        for (var e in t)
                          if (
                            t.hasOwnProperty(e) &&
                            window.matchMedia('(max-width: ' + e + 'px)')
                              .matches
                          )
                            return t[e];
                      return c;
                    },
                  };
                return (
                  f(o, d.match(l)),
                  r.on(
                    'resize',
                    window,
                    A(function () {
                      t.settings = O(o, d.match(l));
                    }, t.settings.throttle),
                  ),
                  n.on('update', function () {
                    (l = K(l)), (c = f({}, o));
                  }),
                  n.on('destroy', function () {
                    r.off('resize', window);
                  }),
                  d
                );
              },
            },
            Z = (function (t) {
              function e() {
                return (
                  c(this, e),
                  v(
                    this,
                    (e.__proto__ || Object.getPrototypeOf(e)).apply(
                      this,
                      arguments,
                    ),
                  )
                );
              }
              return (
                (function (t, e) {
                  if ('function' != typeof e && null !== e)
                    throw new TypeError(
                      'Super expression must either be null or a function, not ' +
                        typeof e,
                    );
                  (t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                      value: t,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0,
                    },
                  })),
                    e &&
                      (Object.setPrototypeOf
                        ? Object.setPrototypeOf(t, e)
                        : (t.__proto__ = e));
                })(e, t),
                d(e, [
                  {
                    key: 'mount',
                    value: function () {
                      var t =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : {};
                      return h(
                        e.prototype.__proto__ ||
                          Object.getPrototypeOf(e.prototype),
                        'mount',
                        this,
                      ).call(this, f({}, Q, t));
                    },
                  },
                ]),
                e
              );
            })(C),
            tt = Z,
            et =
              (n('4d21'),
              [
                'build.after',
                'build.before',
                'mount.after',
                'mount.before',
                'move.after',
                'move',
                'pause',
                'play',
                'resize',
                'run.after',
                'run.before',
                'run.end',
                'run.offset',
                'run.start',
                'run',
                'swipe.end',
                'swipe.move',
                'swipe.start',
                'translate.jump',
                'update',
              ]),
            nt = {
              name: 'VueGlide',
              model: { prop: 'active', event: 'change' },
              props: {
                type: { type: String, default: 'slider' },
                startAt: { type: Number, default: 0 },
                perView: { type: Number, default: 3 },
                focusAt: { type: [String, Number], default: 0 },
                gap: { type: Number, default: 10 },
                autoplay: { type: [Number, Boolean], default: !1 },
                hoverpause: { type: Boolean, default: !0 },
                keyboard: { type: Boolean, default: !0 },
                bound: { type: Boolean, default: !1 },
                swipeThreshold: { type: [Number, Boolean], default: 80 },
                dragThreshold: { type: [Number, Boolean], default: 120 },
                perTouch: { type: [Number, Boolean], default: !1 },
                touchRatio: { type: Number, default: 0.5 },
                touchAngle: { type: Number, default: 45 },
                animationDuration: { type: Number, default: 400 },
                rewind: { type: Boolean, default: !0 },
                rewindDuration: { type: Number, default: 800 },
                animationTimingFunc: {
                  type: String,
                  default: 'cubic-bezier(0.165, 0.840, 0.440, 1.000)',
                },
                direction: { type: String, default: 'ltr' },
                peek: { type: [Number, Object], default: 0 },
                breakpoints: { type: Object, default: function () {} },
                classes: { type: Object, default: function () {} },
                throttle: { type: Number, default: 25 },
                toSlideByClick: { type: Boolean, default: !1 },
                bullet: { type: Boolean, default: !1 },
                options: { type: Object, default: function () {} },
                active: { type: Number, default: null },
              },
              data: function () {
                return { glide: void 0 };
              },
              render: function (t) {
                var e,
                  n,
                  r = [],
                  o = this.$slots.default.filter(function (t) {
                    var e = !1;
                    return (
                      t.componentOptions &&
                        (e =
                          'VueGlideSlide' === t.componentOptions.tag ||
                          'vue-glide-slide' === t.componentOptions.tag),
                      e
                    );
                  });
                if (
                  (this.$slots.control &&
                    this.$slots.control.length &&
                    (e = t('div', { attrs: { 'data-glide-el': 'controls' } }, [
                      this.$slots.control,
                    ])),
                  this.bullet)
                ) {
                  for (var i = 0; i < this.slidesCount; i++)
                    r.push(
                      t('button', {
                        key: i,
                        attrs: {
                          'data-glide-dir': '=' + i,
                          class: 'glide__bullet',
                        },
                      }),
                    );
                  n = t(
                    'div',
                    {
                      class: 'glide__bullets',
                      attrs: { 'data-glide-el': 'controls[nav]' },
                    },
                    [r],
                  );
                }
                return t('div', { class: 'glide' }, [
                  t(
                    'div',
                    {
                      class: 'glide__track',
                      attrs: { 'data-glide-el': 'track' },
                    },
                    [t('ul', { class: 'glide__slides' }, [o])],
                  ),
                  e,
                  n,
                ]);
              },
              watch: {
                active: function () {
                  this.changeSlideByModel();
                },
              },
              computed: {
                currentSlide: function () {
                  return this.glide.index;
                },
                slidesCount: function () {
                  return this.$slots.default.filter(function (t) {
                    return (
                      t.componentOptions &&
                      'vue-glide-slide' === t.componentOptions.tag
                    );
                  }).length;
                },
              },
              mounted: function () {
                this.init();
              },
              methods: {
                init: function () {
                  var t = Object.assign({}, this.$props);
                  delete t.options,
                    (t.classes = Object.assign(
                      {
                        direction: { ltr: 'glide--ltr', rtl: 'glide--rtl' },
                        slider: 'glide--slider',
                        carousel: 'glide--carousel',
                        swipeable: 'glide--swipeable',
                        dragging: 'glide--dragging',
                        cloneSlide: 'glide__slide--clone',
                        activeNav: 'glide__bullet--active',
                        activeSlide: 'glide__slide--active',
                        disabledArrow: 'glide__arrow--disabled',
                      },
                      this.classes,
                    ));
                  var e = Object.assign(t, this.options);
                  this.toSlideByClick && this.goToSlideByClick(),
                    (this.glide = new tt(this.$el, e)),
                    this.eventConnector(et),
                    this.glide.mount(),
                    this.addEventListenerToSlide(),
                    this.bindModel(),
                    this.changeSlideByModel();
                },
                go: function (pattern) {
                  this.glide.go(pattern);
                },
                goToSlideByClick: function () {
                  var t = this;
                  this.$on('glide:slide-click', function (e) {
                    return t.go('='.concat(e));
                  });
                },
                eventConnector: function (t) {
                  var e = this;
                  t.map(function (t) {
                    e.glide.on(t, function (n) {
                      var r = t.replace(/\./, '-');
                      e.$emit('glide:'.concat(r), n);
                    });
                  });
                },
                bindModel: function () {
                  var t = this;
                  this.$on('glide:move', function () {
                    t.$emit('change', t.currentSlide);
                  });
                },
                changeSlideByModel: function () {
                  if (null !== this.active)
                    return this.active > this.slidesCount - 1
                      ? this.go('='.concat(this.slidesCount - 1))
                      : this.active < 0
                      ? this.go('=0')
                      : void this.go('='.concat(this.active));
                },
                addEventListenerToSlide: function () {
                  var t = this,
                    e = document.querySelectorAll('.glide__slide');
                  (e = Array.from(e)).forEach(function (e) {
                    e.addEventListener('click', function (e) {
                      e.target.classList.contains('glide__slide') ||
                        (function e(n) {
                          var r = n.parentNode;
                          if (r.classList.contains('glide__slide'))
                            return t.$emit(
                              'glide:slide-click',
                              Number(r.dataset.glideIndex),
                            );
                          e(r);
                        })(e.target),
                        t.$emit(
                          'glide:slide-click',
                          Number(e.target.dataset.glideIndex),
                        );
                    });
                  });
                },
              },
            };
          var component = (function (t, e, n, r, o, l, c, d) {
              var f,
                h = 'function' == typeof t ? t.options : t;
              if (
                (e &&
                  ((h.render = e), (h.staticRenderFns = n), (h._compiled = !0)),
                r && (h.functional = !0),
                l && (h._scopeId = 'data-v-' + l),
                c
                  ? ((f = function (t) {
                      (t =
                        t ||
                        (this.$vnode && this.$vnode.ssrContext) ||
                        (this.parent &&
                          this.parent.$vnode &&
                          this.parent.$vnode.ssrContext)) ||
                        'undefined' == typeof __VUE_SSR_CONTEXT__ ||
                        (t = __VUE_SSR_CONTEXT__),
                        o && o.call(this, t),
                        t &&
                          t._registeredComponents &&
                          t._registeredComponents.add(c);
                    }),
                    (h._ssrRegister = f))
                  : o &&
                    (f = d
                      ? function () {
                          o.call(this, this.$root.$options.shadowRoot);
                        }
                      : o),
                f)
              )
                if (h.functional) {
                  h._injectStyles = f;
                  var v = h.render;
                  h.render = function (t, e) {
                    return f.call(e), v(t, e);
                  };
                } else {
                  var m = h.beforeCreate;
                  h.beforeCreate = m ? [].concat(m, f) : [f];
                }
              return { exports: t, options: h };
            })(
              {
                name: 'VueGlideSlide',
                computed: {
                  index: function () {
                    var t = this;
                    return this.$parent.$children.findIndex(function (e) {
                      return e._uid === t._uid;
                    });
                  },
                },
              },
              function () {
                var t = this,
                  e = t.$createElement;
                return (t._self._c || e)(
                  'li',
                  {
                    staticClass: 'glide__slide',
                    attrs: { 'data-glide-index': t.index },
                  },
                  [t._t('default')],
                  2,
                );
              },
              [],
              !1,
              null,
              null,
              null,
            ),
            it = component.exports,
            ot = {
              install: function (t, e) {
                t.component(nt.name, nt), t.component(it.name, it);
              },
            };
          n.d(e, 'Glide', function () {
            return nt;
          }),
            n.d(e, 'GlideSlide', function () {
              return it;
            });
          e.default = ot;
        },
      });
    },
  },
]);
