import * as React from 'react';
import PWAModule from '@khanhnguyen234/react-core/src/pwa-module';

function Placeholder() {
  return <div>Layout placeholder</div>;
}

const HomeModule = new PWAModule({
  name: 'Layout',
  placeholder: Placeholder,
  factory: async (ctx) => {
    const [_s2] = (
      await Promise.allSettled([import('./layout.component')])
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
