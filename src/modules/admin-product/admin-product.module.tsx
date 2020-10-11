import * as React from 'react';
import PWAModule from '../../pwa/pwa-module';
import _data from './dataSrc';
import _s2 from './admin-product.component';

function Placeholder() {
  return <div>Placeholder</div>;
}

const Module = new PWAModule({
  name: 'AdminProductModule',
  placeholder: Placeholder,
  factory: async (ctx) => {
    const [_data, _s2] = (
      await Promise.allSettled([
        import('./dataSrc'),
        import('./admin-product.component'),
      ])
    ).map((pwaModule) => {
      pwaModule.status === 'rejected' && console.error(pwaModule.reason);
      return pwaModule.status === 'fulfilled' ? pwaModule.value.default : null;
    });
    return {
      layout: _s2,
      named: {},
      routing: [],
      subs: [],
      data: [_data],
    };
  },
});

export default Module;
