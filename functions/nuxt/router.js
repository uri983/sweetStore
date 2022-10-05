import Vue from 'vue';
import Router from 'vue-router';
import { normalizeURL, decode } from 'ufo';
import { interopDefault } from './utils';
import scrollBehavior from './router.scrollBehavior.js';

const _0a1f4e17 = () =>
  interopDefault(
    import('..\\pages\\categorias\\Categorias.vue' /* webpackChunkName: "" */),
  );
const _c458f162 = () =>
  interopDefault(
    import(
      '..\\pages\\categories\\index.vue' /* webpackChunkName: "pages/categories/index" */
    ),
  );
const _013f093a = () =>
  interopDefault(
    import('..\\pages\\Checkout\\CheckOut.vue' /* webpackChunkName: "" */),
  );
const _3420f32e = () =>
  interopDefault(
    import(
      '..\\pages\\contact\\index.vue' /* webpackChunkName: "pages/contact/index" */
    ),
  );
const _17962bbe = () =>
  interopDefault(
    import('..\\pages\\error.vue' /* webpackChunkName: "pages/error" */),
  );
const _1542a972 = () =>
  interopDefault(
    import(
      '..\\pages\\products\\index.vue' /* webpackChunkName: "pages/products/index" */
    ),
  );
const _521d7bd2 = () =>
  interopDefault(
    import('..\\pages\\ubicacion\\ubicacion.vue' /* webpackChunkName: "" */),
  );
const _423c0fe8 = () =>
  interopDefault(
    import(
      '..\\pages\\account\\addresses.vue' /* webpackChunkName: "pages/account/addresses" */
    ),
  );
const _5120013c = () =>
  interopDefault(
    import(
      '..\\pages\\account\\create-account.vue' /* webpackChunkName: "pages/account/create-account" */
    ),
  );
const _1c0c4122 = () =>
  interopDefault(
    import(
      '..\\pages\\account\\forgot-password.vue' /* webpackChunkName: "pages/account/forgot-password" */
    ),
  );
const _5e372d5a = () =>
  interopDefault(
    import(
      '..\\pages\\account\\login.vue' /* webpackChunkName: "pages/account/login" */
    ),
  );
const _14cbf692 = () =>
  interopDefault(
    import(
      '..\\pages\\account\\orders\\index.vue' /* webpackChunkName: "pages/account/orders/index" */
    ),
  );
const _0c045633 = () =>
  interopDefault(
    import(
      '..\\pages\\account\\payments.vue' /* webpackChunkName: "pages/account/payments" */
    ),
  );
const _680c8fdf = () =>
  interopDefault(
    import(
      '..\\pages\\account\\reset-password.vue' /* webpackChunkName: "pages/account/reset-password" */
    ),
  );
const _6d3de422 = () =>
  interopDefault(
    import(
      '..\\pages\\account\\subscriptions\\index.vue' /* webpackChunkName: "pages/account/subscriptions/index" */
    ),
  );
const _68749f92 = () =>
  interopDefault(
    import(
      '..\\pages\\Checkout\\OrderDetail.vue' /* webpackChunkName: "pages/Checkout/OrderDetail" */
    ),
  );
const _0b5fbbaf = () =>
  interopDefault(
    import(
      '..\\pages\\mainStore\\HomePage.vue' /* webpackChunkName: "pages/mainStore/HomePage" */
    ),
  );
const _e2fd7530 = () =>
  interopDefault(
    import(
      '..\\pages\\account\\orders\\returns.vue' /* webpackChunkName: "pages/account/orders/returns" */
    ),
  );
const _667fc8df = () =>
  interopDefault(
    import(
      '..\\pages\\account\\orders\\_id.vue' /* webpackChunkName: "pages/account/orders/_id" */
    ),
  );
const _c6a4a390 = () =>
  interopDefault(
    import(
      '..\\pages\\account\\subscriptions\\_id\\index.vue' /* webpackChunkName: "pages/account/subscriptions/_id/index" */
    ),
  );
const _5583ce14 = () =>
  interopDefault(
    import(
      '..\\pages\\account\\subscriptions\\_id\\edit.vue' /* webpackChunkName: "pages/account/subscriptions/_id/edit" */
    ),
  );
const _c7c633f2 = () =>
  interopDefault(
    import(
      '..\\pages\\categories\\_slug.vue' /* webpackChunkName: "pages/categories/_slug" */
    ),
  );
const _18afec02 = () =>
  interopDefault(
    import(
      '..\\pages\\products\\_slug.vue' /* webpackChunkName: "pages/products/_slug" */
    ),
  );
const _a28faaba = () =>
  interopDefault(
    import('..\\pages\\_slug.vue' /* webpackChunkName: "pages/_slug" */),
  );

const emptyFn = () => {};

Vue.use(Router);

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [
    {
      path: '/Categorias/',
      component: _0a1f4e17,
      name: 'Categorias___es-MX',
    },
    {
      path: '/categories/',
      component: _c458f162,
      pathToRegexpOptions: { strict: true },
      name: 'categories___es-MX',
    },
    {
      path: '/Checkout/',
      component: _013f093a,
      name: 'Checkout___es-MX',
    },
    {
      path: '/contact/',
      component: _3420f32e,
      pathToRegexpOptions: { strict: true },
      name: 'contact___es-MX',
    },
    {
      path: '/Contacto/',
      component: _3420f32e,
      name: 'Contact___es-MX',
    },
    {
      path: '/error/',
      component: _17962bbe,
      pathToRegexpOptions: { strict: true },
      name: 'error___es-MX',
    },
    {
      path: '/products/',
      component: _1542a972,
      pathToRegexpOptions: { strict: true },
      name: 'products___es-MX',
    },
    {
      path: '/Ubicacion/',
      component: _521d7bd2,
      name: 'Ubicacion___es-MX',
    },
    {
      path: '/account/addresses/',
      component: _423c0fe8,
      pathToRegexpOptions: { strict: true },
      name: 'account-addresses___es-MX',
    },
    {
      path: '/account/create-account/',
      component: _5120013c,
      pathToRegexpOptions: { strict: true },
      name: 'account-create-account___es-MX',
    },
    {
      path: '/account/forgot-password/',
      component: _1c0c4122,
      pathToRegexpOptions: { strict: true },
      name: 'account-forgot-password___es-MX',
    },
    {
      path: '/account/login/',
      component: _5e372d5a,
      pathToRegexpOptions: { strict: true },
      name: 'account-login___es-MX',
    },
    {
      path: '/account/orders/',
      component: _14cbf692,
      pathToRegexpOptions: { strict: true },
      name: 'account-orders___es-MX',
    },
    {
      path: '/account/payments/',
      component: _0c045633,
      pathToRegexpOptions: { strict: true },
      name: 'account-payments___es-MX',
    },
    {
      path: '/account/reset-password/',
      component: _680c8fdf,
      pathToRegexpOptions: { strict: true },
      name: 'account-reset-password___es-MX',
    },
    {
      path: '/account/subscriptions/',
      component: _6d3de422,
      pathToRegexpOptions: { strict: true },
      name: 'account-subscriptions___es-MX',
    },
    {
      path: '/categorias/Categorias/',
      component: _0a1f4e17,
      pathToRegexpOptions: { strict: true },
      name: 'categorias-Categorias___es-MX',
    },
    {
      path: '/Checkout/CheckOut/',
      component: _013f093a,
      pathToRegexpOptions: { strict: true },
      name: 'Checkout-CheckOut___es-MX',
    },
    {
      path: '/Checkout/OrderDetail/',
      component: _68749f92,
      pathToRegexpOptions: { strict: true },
      name: 'Checkout-OrderDetail___es-MX',
    },
    {
      path: '/mainStore/HomePage/',
      component: _0b5fbbaf,
      pathToRegexpOptions: { strict: true },
      name: 'mainStore-HomePage___es-MX',
    },
    {
      path: '/ubicacion/ubicacion/',
      component: _521d7bd2,
      pathToRegexpOptions: { strict: true },
      name: 'ubicacion-ubicacion___es-MX',
    },
    {
      path: '/account/orders/returns/',
      component: _e2fd7530,
      pathToRegexpOptions: { strict: true },
      name: 'account-orders-returns___es-MX',
    },
    {
      path: '/account/orders/:id/',
      component: _667fc8df,
      pathToRegexpOptions: { strict: true },
      name: 'account-orders-id___es-MX',
    },
    {
      path: '/account/subscriptions/:id/',
      component: _c6a4a390,
      pathToRegexpOptions: { strict: true },
      name: 'account-subscriptions-id___es-MX',
    },
    {
      path: '/account/subscriptions/:id/edit/',
      component: _5583ce14,
      pathToRegexpOptions: { strict: true },
      name: 'account-subscriptions-id-edit___es-MX',
    },
    {
      path: '/categories/:slug/',
      component: _c7c633f2,
      pathToRegexpOptions: { strict: true },
      name: 'categories-slug___es-MX',
    },
    {
      path: '/confirmation/:id/',
      component: _68749f92,
      name: 'OrderDetail___es-MX',
    },
    {
      path: '/products/:slug/',
      component: _18afec02,
      pathToRegexpOptions: { strict: true },
      name: 'products-slug___es-MX',
    },
    {
      path: '/',
      component: _0b5fbbaf,
      name: 'index___es-MX',
    },
    {
      path: '/:slug?/',
      component: _a28faaba,
      pathToRegexpOptions: { strict: true },
      name: 'slug___es-MX',
    },
  ],

  fallback: false,
};

export function createRouter(ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base;
  const router = new Router({ ...routerOptions, base });

  // TODO: remove in Nuxt 3
  const originalPush = router.push;
  router.push = function push(location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort);
  };

  const resolve = router.resolve.bind(router);
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to);
    }
    return resolve(to, current, append);
  };

  return router;
}
