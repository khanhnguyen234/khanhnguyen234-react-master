import * as React from 'react';
import createClientApp from './create-client-app';
import Home from './modules/home/home.module';
import AdminProductCreate from './modules/admin-product/admin-product.module';
import ProductDetail from './modules/product-detail/product-detail.module';

import ProductListingData from './modules/home/dataSrc';
import AdminProductCreateData from './modules/admin-product/dataSrc';
import { INTERNAL_URLS } from './lib/const';

const ROUTES = [
  {
    path: INTERNAL_URLS.adminProductCreate,
    component: AdminProductCreate,
  },
  {
    path: INTERNAL_URLS.adminProductDetail,
    component: AdminProductCreate,
  },
  {
    path: INTERNAL_URLS.productDetail,
    component: ProductDetail,
  },
  {
    path: INTERNAL_URLS.home,
    component: Home,
  },
];

const reduxSources = [ProductListingData, AdminProductCreateData];

createClientApp({
  routes: ROUTES,
  reduxSources: reduxSources,
});
