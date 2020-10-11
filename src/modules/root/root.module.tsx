import { PWAModule } from '../../pwa/pwa-module';
import * as React from 'react';
import RootComponent from './root.component';
import { INTERNAL_URLS } from '../../lib/const';

function Placeholder() {
  return <div>HomeModule placeholder</div>;
}

const Module = new PWAModule({
  name: 'RootModule',
  placeholder: Placeholder,
  factory: async (ctx) => {
    const home = (await import('../home/home.module')).default;
    const productDetail = (
      await import('../product-detail/product-detail.module')
    ).default;
    const adminProduct = (await import('../admin-product/admin-product.module'))
      .default;
    return {
      layout: RootComponent,
      named: {},
      routing: [
        {
          path: INTERNAL_URLS.adminProductCreate,
          module: adminProduct.getComponent(ctx),
        },
        {
          path: INTERNAL_URLS.adminProductDetail,
          module: adminProduct.getComponent(ctx),
        },
        {
          path: INTERNAL_URLS.productDetail,
          module: productDetail.getComponent(ctx),
        },
        {
          path: INTERNAL_URLS.home,
          module: home.getComponent(ctx),
        },
      ],
      subs: [],
    };
  },
});

export default Module;
