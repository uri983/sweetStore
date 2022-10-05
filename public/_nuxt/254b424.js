(window.webpackJsonp = window.webpackJsonp || []).push([
  [63],
  {
    692: function (e, t, n) {
      'use strict';
      n.r(t);
      n(38), n(46), n(26), n(86), n(11), n(57), n(63);
      var o = {
          email: 'mailto:%20?subject=@t&body=@u%0D%0A@d',
          facebook:
            'https://www.facebook.com/sharer/sharer.php?u=@u&title=@t&description=@d',
          pinterest:
            'https://pinterest.com/pin/create/button/?url=@u&media=@m&description=@t',
          twitter: 'https://twitter.com/intent/tweet?text=@t&url=@u',
        },
        r = 'undefined' != typeof window ? window : null,
        h = {
          name: 'SocialShare',
          props: {
            network: { type: String, default: 'facebook' },
            url: { type: String, default: null },
            title: { type: String, default: null },
            description: { type: String, default: null },
            media: { type: String, default: null },
          },
          data: function () {
            return {
              popup: { width: 620, height: 420 },
              popupTop: 0,
              popupLeft: 0,
              popupWindow: void 0,
              popupInterval: null,
            };
          },
          computed: {
            rawLink: function () {
              var e = navigator.userAgent.toLowerCase(),
                t = this.network.toLowerCase();
              return e.includes('ipad') > -1 ? o[t].replace(':?', ':&') : o[t];
            },
            shareLink: function () {
              var link = this.rawLink;
              if (link)
                return link
                  .replace(/@u/g, encodeURIComponent(this.url))
                  .replace(/@t/g, encodeURIComponent(this.title))
                  .replace(/@d/g, encodeURIComponent(this.description))
                  .replace(/@m/g, encodeURIComponent(this.media));
            },
          },
          methods: {
            handleShare: function () {
              'http' === this.rawLink.substring(0, 4)
                ? this.openSharePopup()
                : this.share();
            },
            resizePopup: function () {
              var e =
                  r.innerWidth ||
                  document.documentElement.clientWidth ||
                  r.screenX,
                t =
                  r.innerHeight ||
                  document.documentElement.clientHeight ||
                  r.screenY,
                n = e / r.screen.availWidth;
              (this.popupLeft =
                (e - this.popup.width) / 2 / n +
                (void 0 !== r.screenLeft ? r.screenLeft : r.screenX)),
                (this.popupTop =
                  (t - this.popup.height) / 2 / n +
                  (void 0 !== r.screenTop ? r.screenTop : r.screenY));
            },
            openSharePopup: function () {
              var e = this;
              this.resizePopup(),
                this.popupWindow &&
                  this.popupInterval &&
                  (clearInterval(this.popupInterval), this.popupWindow.close()),
                (this.popupWindow = r.open(
                  this.shareLink,
                  'sharer-' + this.network,
                  ',height=' +
                    this.popup.height +
                    ',width=' +
                    this.popup.width +
                    ',left=' +
                    this.popupLeft +
                    ',top=' +
                    this.popupTop +
                    ',screenX=' +
                    this.popupLeft +
                    ',screenY=' +
                    this.popupTop,
                )),
                this.popupWindow &&
                  (this.popupWindow.focus(),
                  (this.popupInterval = setInterval(function () {
                    (e.popupWindow && !e.popupWindow.closed) ||
                      (clearInterval(e.popupInterval), (e.popupWindow = null));
                  }, 500)));
            },
            share: function () {
              window.open(this.shareLink, '_blank');
            },
          },
        },
        l = n(3),
        component = Object(l.a)(
          h,
          function () {
            var e = this;
            return (0, e._self._c)(
              'a',
              {
                attrs: { href: '#' },
                on: {
                  click: function (t) {
                    return e.handleShare();
                  },
                },
              },
              [e._t('default')],
              2,
            );
          },
          [],
          !1,
          null,
          null,
          null,
        );
      t.default = component.exports;
    },
  },
]);
