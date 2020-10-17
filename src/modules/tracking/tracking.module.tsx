import * as React from 'react';
import PWAModule from '@khanhnguyen234/react-core/src/pwa-module';

function Placeholder() {
  return <div>Tracking placeholder</div>;
}

const HomeModule = new PWAModule({
  name: 'Tracking',
  placeholder: Placeholder,
  factory: async (ctx) => {
    const [_s2] = (
      await Promise.allSettled([import('./tracking.component')])
    ).map((pwaModule) => {
      pwaModule.status === 'rejected' && console.error(pwaModule.reason);
      return pwaModule.status === 'fulfilled' ? pwaModule.value.default : null;
    });
    return {
      layout: _s2,
      named: {},
      routing: [],
      subs: [],
      data: [].filter(Boolean),
    };
  },
});

export default HomeModule;
