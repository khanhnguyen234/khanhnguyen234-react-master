import React from 'react';
import MicroLoading from '../../components/micro-loading';
const LazyComponent = React.lazy(() => import('./product-detail.component'));

export default () => {
  return (
    <>
      <React.Suspense fallback={<MicroLoading text={'Loading Lazy Admin'} />}>
        <LazyComponent />
      </React.Suspense>
    </>
  );
};
