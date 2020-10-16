import React from 'react';
import { Title, Grid, Loading } from '@khanhnguyen234/react-components';
import MicroLoading from '../../components/micro-loading';

import styles from './styles.scss';

const ProductDetail = () => {
  return (
    <Grid container className={styles.root}>
      @khanhnguyen234 admin product detail
    </Grid>
  );
};

export default React.memo(ProductDetail);
