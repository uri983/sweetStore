import Vue from 'vue';
import Vuex from 'vuex';
import Meta from 'vue-meta';
import ClientOnly from 'vue-client-only';
import NoSsr from 'vue-no-ssr';
import { createRouter } from './router.js';
import NuxtChild from './components/nuxt-child.js';
import NuxtError from '..\\layouts\\error.vue';
import Nuxt from './components/nuxt.js';
import App from './App.js';
import { setContext, getLocation, getRouteData, normalizeError } from './utils';
import { createStore } from './store.js';

/* Plugins */

import nuxt_plugin_plugin_450a9536 from 'nuxt_plugin_plugin_450a9536'; // Source: .\\components\\plugin.js (mode: 'all')
import nuxt_plugin_swellplugin_6342fb40 from 'nuxt_plugin_swellplugin_6342fb40'; // Source: .\\swell-plugin.js (mode: 'all')
import nuxt_plugin_swellmixin_5321d4fa from 'nuxt_plugin_swellmixin_5321d4fa'; // Source: .\\swell-mixin.js (mode: 'all')
import nuxt_plugin_nuxtbreakpoints_6cca5c87 from 'nuxt_plugin_nuxtbreakpoints_6cca5c87'; // Source: .\\nuxt-breakpoints.js (mode: 'all')
import nuxt_plugin_gtm_62ad9922 from 'nuxt_plugin_gtm_62ad9922'; // Source: .\\gtm.js (mode: 'all')
import nuxt_plugin_workbox_1aceed35 from 'nuxt_plugin_workbox_1aceed35'; // Source: .\\workbox.js (mode: 'client')
import nuxt_plugin_metaplugin_06a7dcb5 from 'nuxt_plugin_metaplugin_06a7dcb5'; // Source: .\\pwa\\meta.plugin.js (mode: 'all')
import nuxt_plugin_iconplugin_0b4f8229 from 'nuxt_plugin_iconplugin_0b4f8229'; // Source: .\\pwa\\icon.plugin.js (mode: 'all')
import nuxt_plugin_pluginutils_6628bd96 from 'nuxt_plugin_pluginutils_6628bd96'; // Source: .\\nuxt-i18n\\plugin.utils.js (mode: 'all')
import nuxt_plugin_pluginrouting_12ee9580 from 'nuxt_plugin_pluginrouting_12ee9580'; // Source: .\\nuxt-i18n\\plugin.routing.js (mode: 'all')
import nuxt_plugin_pluginmain_3efe3e2f from 'nuxt_plugin_pluginmain_3efe3e2f'; // Source: .\\nuxt-i18n\\plugin.main.js (mode: 'all')
import nuxt_plugin_deviceplugin_e5504e38 from 'nuxt_plugin_deviceplugin_e5504e38'; // Source: .\\device.plugin.js (mode: 'all')
import nuxt_plugin_globalscripts_1d20b1d4 from 'nuxt_plugin_globalscripts_1d20b1d4'; // Source: ..\\plugins\\global-scripts (mode: 'client')
import nuxt_plugin_vuecreditcardvalidation_54b82c9f from 'nuxt_plugin_vuecreditcardvalidation_54b82c9f'; // Source: ..\\plugins\\vue-credit-card-validation (mode: 'client')
import nuxt_plugin_directives_d0867c0c from 'nuxt_plugin_directives_d0867c0c'; // Source: ..\\plugins\\directives (mode: 'client')
import nuxt_plugin_swelllang_3d062f87 from 'nuxt_plugin_swelllang_3d062f87'; // Source: ..\\plugins\\swell-lang.js (mode: 'all')
import nuxt_plugin_filters_2dd71012 from 'nuxt_plugin_filters_2dd71012'; // Source: ..\\plugins\\filters.js (mode: 'all')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly);

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render(h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true;

      console.warn(
        '<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead',
      );
    }
    return NoSsr.render(h, ctx);
  },
});

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild);
Vue.component('NChild', NuxtChild);

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt);

Object.defineProperty(Vue.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root.$options.$nuxt;
    if (process.client && !globalNuxt && typeof window !== 'undefined') {
      return window.$nuxt;
    }
    return globalNuxt;
  },
  configurable: true,
});

Vue.use(Meta, {
  keyName: 'head',
  attribute: 'data-n-head',
  ssrAttribute: 'data-n-head-ssr',
  tagIDKeyName: 'hid',
});

const defaultTransition = {
  name: 'page',
  mode: 'out-in',
  appear: false,
  appearClass: 'appear',
  appearActiveClass: 'appear-active',
  appearToClass: 'appear-to',
};

const originalRegisterModule = Vuex.Store.prototype.registerModule;

function registerModule(path, rawModule, options = {}) {
  const preserveState =
    process.client &&
    (Array.isArray(path)
      ? !!path.reduce(
          (namespacedState, path) => namespacedState && namespacedState[path],
          this.state,
        )
      : path in this.state);
  return originalRegisterModule.call(this, path, rawModule, {
    preserveState,
    ...options,
  });
}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext, config);

  const store = createStore(ssrContext);
  // Add this.$router into store actions/mutations
  store.$router = router;

  // Fix SSR caveat https://github.com/nuxt/nuxt.js/issues/3757#issuecomment-414689141
  store.registerModule = registerModule;

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {
      meta: [],
      link: [],
      style: [],
      script: [
        {
          hid: 'gtm-script',
          innerHTML:
            "if(!window._gtm_init){window._gtm_init=1;(function(w,n,d,m,e,p){w[d]=(w[d]==1||n[d]=='yes'||n[d]==1||n[m]==1||(w[e]&&w[e][p]&&w[e][p]()))?1:0})(window,navigator,'doNotTrack','msDoNotTrack','external','msTrackingProtectionEnabled');(function(w,d,s,l,x,y){w[x]={};w._gtm_inject=function(i){if(w.doNotTrack||w[x][i])return;w[x][i]=1;w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s);j.async=true;j.src='https:\u002F\u002Fwww.googletagmanager.com\u002Fgtm.js?id='+i;f.parentNode.insertBefore(j,f);}})(window,document,'script','dataLayer','_gtm_ids','_gtm_inject')}",
        },
      ],
      noscript: [{ hid: 'gtm-noscript', pbody: true, innerHTML: '' }],
      __dangerouslyDisableSanitizersByTagID: {
        'gtm-script': ['innerHTML'],
        'gtm-noscript': ['innerHTML'],
      },
    },

    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions(transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions];
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition;
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, {
              name: transition,
            });
          } else {
            transition = Object.assign({}, defaultTransition, transition);
          }
          return transition;
        });
        this.$options.nuxt.transitions = transitions;
        return transitions;
      },

      err: null,
      dateErr: null,
      error(err) {
        err = err || null;
        app.context._errored = Boolean(err);
        err = err ? normalizeError(err) : null;
        let nuxt = app.nuxt; // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt;
        }
        nuxt.dateErr = Date.now();
        nuxt.err = err;
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err;
        }
        return err;
      },
    },
    ...App,
  };

  // Make app available into store via this.app
  store.app = app;

  const next = ssrContext
    ? ssrContext.next
    : (location) => app.router.push(location);
  // Resolve route
  let route;
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route;
  } else {
    const path = getLocation(router.options.base, router.options.mode);
    route = router.resolve(path).route;
  }

  // Set context to app.context
  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext,
  });

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided');
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`);
    }

    key = '$' + key;
    // Add into app
    app[key] = value;
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value;
    }

    // Add into store
    store[key] = app[key];

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__';
    if (Vue[installKey]) {
      return;
    }
    Vue[installKey] = true;
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue.prototype, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get() {
            return this.$root.$options[key];
          },
        });
      }
    });
  }

  // Inject runtime config as $config
  inject('config', config);

  if (process.client) {
    // Replace store state before plugins execution
    if (window.__NUXT__ && window.__NUXT__.state) {
      store.replaceState(window.__NUXT__.state);
    }
  }

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData);
      inject('preview', previewData);
    };
  }
  // Plugin execution

  if (typeof nuxt_plugin_plugin_450a9536 === 'function') {
    await nuxt_plugin_plugin_450a9536(app.context, inject);
  }

  if (typeof nuxt_plugin_swellplugin_6342fb40 === 'function') {
    await nuxt_plugin_swellplugin_6342fb40(app.context, inject);
  }

  if (typeof nuxt_plugin_swellmixin_5321d4fa === 'function') {
    await nuxt_plugin_swellmixin_5321d4fa(app.context, inject);
  }

  if (typeof nuxt_plugin_nuxtbreakpoints_6cca5c87 === 'function') {
    await nuxt_plugin_nuxtbreakpoints_6cca5c87(app.context, inject);
  }

  if (typeof nuxt_plugin_gtm_62ad9922 === 'function') {
    await nuxt_plugin_gtm_62ad9922(app.context, inject);
  }

  if (process.client && typeof nuxt_plugin_workbox_1aceed35 === 'function') {
    await nuxt_plugin_workbox_1aceed35(app.context, inject);
  }

  if (typeof nuxt_plugin_metaplugin_06a7dcb5 === 'function') {
    await nuxt_plugin_metaplugin_06a7dcb5(app.context, inject);
  }

  if (typeof nuxt_plugin_iconplugin_0b4f8229 === 'function') {
    await nuxt_plugin_iconplugin_0b4f8229(app.context, inject);
  }

  if (typeof nuxt_plugin_pluginutils_6628bd96 === 'function') {
    await nuxt_plugin_pluginutils_6628bd96(app.context, inject);
  }

  if (typeof nuxt_plugin_pluginrouting_12ee9580 === 'function') {
    await nuxt_plugin_pluginrouting_12ee9580(app.context, inject);
  }

  if (typeof nuxt_plugin_pluginmain_3efe3e2f === 'function') {
    await nuxt_plugin_pluginmain_3efe3e2f(app.context, inject);
  }

  if (typeof nuxt_plugin_deviceplugin_e5504e38 === 'function') {
    await nuxt_plugin_deviceplugin_e5504e38(app.context, inject);
  }

  if (
    process.client &&
    typeof nuxt_plugin_globalscripts_1d20b1d4 === 'function'
  ) {
    await nuxt_plugin_globalscripts_1d20b1d4(app.context, inject);
  }

  if (
    process.client &&
    typeof nuxt_plugin_vuecreditcardvalidation_54b82c9f === 'function'
  ) {
    await nuxt_plugin_vuecreditcardvalidation_54b82c9f(app.context, inject);
  }

  if (process.client && typeof nuxt_plugin_directives_d0867c0c === 'function') {
    await nuxt_plugin_directives_d0867c0c(app.context, inject);
  }

  if (typeof nuxt_plugin_swelllang_3d062f87 === 'function') {
    await nuxt_plugin_swelllang_3d062f87(app.context, inject);
  }

  if (typeof nuxt_plugin_filters_2dd71012 === 'function') {
    await nuxt_plugin_filters_2dd71012(app.context, inject);
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.');
    };
  }

  // Wait for async component to be resolved first
  await new Promise((resolve, reject) => {
    // Ignore 404s rather than blindly replacing URL in browser
    if (process.client) {
      const { route } = router.resolve(app.context.route.fullPath);
      if (!route.matched.length) {
        return resolve();
      }
    }
    router.replace(app.context.route.fullPath, resolve, (err) => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err);
      if (err.type !== 2 /* NavigationFailureType.redirected */)
        return resolve();

      // navigated to a different route in router guard
      const unregister = router.afterEach(async (to, from) => {
        if (process.server && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath;
        }
        app.context.route = await getRouteData(to);
        app.context.params = to.params || {};
        app.context.query = to.query || {};
        unregister();
        resolve();
      });
    });
  });

  return {
    store,
    app,
    router,
  };
}

export { createApp, NuxtError };
