import React from 'react';
import { Title, Grid, Loading } from '@khanhnguyen234/react-components';
import MicroLoading from '../../components/micro-loading';
const StatelessModule = React.lazy(() =>
  import('@khanhnguyen234/micro-react-admin/stateless-module'),
);
const MicroTitle = React.lazy(() =>
  import('@khanhnguyen234/micro-react-components/Title'),
);
import styles from './styles.scss';

const ProductDetail = () => {
  return (
    <Grid container className={styles.root}>
      <Grid item>
        <React.Suspense fallback={<MicroLoading text={'Loading Lazy Admin'} />}>
          <StatelessModule />
        </React.Suspense>
      </Grid>
      <Grid item>
        <React.Suspense
          fallback={<MicroLoading text={'Loading Lazy Components'} />}
        >
          <MicroTitle className={styles.titleMicro}>
            Title React.lazy('@khanhnguyen234/micro-react-components/Title')
          </MicroTitle>
        </React.Suspense>
      </Grid>
      <Grid item>
        <Title className={styles.title}>
          Title @khanhnguyen234/react-components
        </Title>
      </Grid>
    </Grid>
  );
};

export default React.memo(ProductDetail);
