import * as React from 'react';
import MicroModule from '@khanhnguyen234/react-core/src/micro-module';

function Placeholder() {
  return <div>Layout placeholder</div>;
}

const HomeModule = new MicroModule({
  name: 'Layout',
  placeholder: Placeholder,
  factory: async (ctx) => {
    const [_s2] = (
      await Promise.allSettled([import('./layout.component')])
    ).map((microModule) => {
      microModule.status === 'rejected' && console.error(microModule.reason);
      return microModule.status === 'fulfilled'
        ? microModule.value.default
        : null;
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
