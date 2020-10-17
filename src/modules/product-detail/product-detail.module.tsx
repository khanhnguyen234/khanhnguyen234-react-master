import * as React from 'react';
import PWAModule from '@khanhnguyen234/react-core/src/pwa-module';
import ProductDetail from './product-detail.component';

function Placeholder() {
  return <div>SubModule placeholder</div>;
}

const Module = new PWAModule({
  name: 'ProductDetailModule',
  placeholder: Placeholder,
  factory: async (ctx) => {
    const [_s2] = (
      await Promise.allSettled([import('./product-detail.component')])
    ).map((pwaModule) => {
      pwaModule.status === 'rejected' && console.error(pwaModule.reason);
      return pwaModule.status === 'fulfilled' ? pwaModule.value.default : null;
    });
    return {
      layout: _s2,
      named: {},
      routing: [],
      subs: [],
    };
  },
});

export default Module;
