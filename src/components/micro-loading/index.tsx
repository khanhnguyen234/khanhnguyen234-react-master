import * as React from 'react';
import { Image, Grid } from '@khanhnguyen234/react-components';
import { LOADING_IMAGE_URL } from '../../lib/const';
import styles from './styles.scss';

const MicroLoading = ({ text }) => {
  return (
    <Grid container justifyContent="center" spacing={2}>
      <Grid item xs="auto">
        {text}
      </Grid>
      <Grid item xs="auto">
        <Image src={LOADING_IMAGE_URL} className={styles.img} />
      </Grid>
    </Grid>
  );
};

export default React.memo(MicroLoading);
