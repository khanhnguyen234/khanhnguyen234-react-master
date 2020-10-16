import * as React from 'react';
import PWAModule from '@khanhnguyen234/react-core/src/pwa-module';
import _data from './dataSrc';
import _s2 from './home.component';

function Placeholder() {
  return <div>HomeModule placeholder</div>;
}

const HomeModule = new PWAModule({
  name: 'HomeModule',
  placeholder: Placeholder,
  factory: async (ctx) => {
    const [_data, _s2] = (
      await Promise.allSettled([
        import('./dataSrc'),
        import('./home.component'),
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
      data: [_data].filter(Boolean),
    };
  },
});

export default HomeModule;
