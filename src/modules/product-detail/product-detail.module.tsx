import * as React from 'react';
import MicroModule from '@khanhnguyen234/react-core/src/micro-module';
import ProductDetail from './product-detail.component';

function Placeholder() {
  return <div>SubModule placeholder</div>;
}

const Module = new MicroModule({
  name: 'ProductDetailModule',
  placeholder: Placeholder,
  factory: async (ctx) => {
    const [_s2] = (
      await Promise.allSettled([import('./product-detail.component')])
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
    };
  },
});

export default Module;
