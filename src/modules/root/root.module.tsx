import * as React from 'react';
import PWAModule from '@khanhnguyen234/react-core/src/pwa-module';
import { INTERNAL_URLS } from '@khanhnguyen234/react-common/src/lib/const';
import RootComponent from './root.component';

function Placeholder() {
  return <div>HomeModule placeholder</div>;
}

const Module = new PWAModule({
  name: 'RootMaster',
  placeholder: Placeholder,
  factory: async (ctx) => {
    const home = (await import('../home/home.module')).default;
    const layout = (await import('../layout/layout.module')).default;
    const tracking = (await import('../tracking/tracking.module')).default;
    const productDetail = (
      await import('../product-detail/product-detail.module')
    ).default;
    const admin = (await import('@khanhnguyen234/micro-react-admin/root'))
      .default;
    return {
      layout: RootComponent,
      named: {
        Layout: layout.getComponent(ctx),
      },
      routing: [
        {
          path: INTERNAL_URLS.admin,
          module: admin.getComponent(ctx),
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
      subs: [tracking.getComponent(ctx)],
    };
  },
});

export default Module;
