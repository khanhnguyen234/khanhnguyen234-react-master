import * as React from 'react';
import MicroModule from '@khanhnguyen234/react-core/src/micro-module';
import _data from './dataSrc';
import _s2 from './home.component';

function Placeholder() {
  return <div>HomeModule placeholder</div>;
}

const HomeModule = new MicroModule({
  name: 'HomeModule',
  placeholder: Placeholder,
  factory: async (ctx) => {
    const [_data, _s2] = (
      await Promise.allSettled([
        import('./dataSrc'),
        import('./home.component'),
      ])
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
      data: [_data].filter(Boolean),
    };
  },
});

export default HomeModule;
