import * as React from 'react';
import createClientApp from './create-client-app';
import ProductDetail from './modules/product-detail';
import ProductListing from './modules/home';
import AdminProductCreate from './modules/admin-product-create';
import ProductListingData from './modules/home/dataSrc';

const ROUTES = [
  {
    path: '/admin/product/create',
    component: AdminProductCreate,
  },
  {
    path: '/:name',
    component: ProductDetail,
  },
  {
    path: '/',
    component: ProductListing,
  },
];

const reduxSources = [ProductListingData];

createClientApp({
  routes: ROUTES,
  reduxSources: reduxSources,
});
