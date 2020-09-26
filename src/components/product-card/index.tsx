import * as React from 'react';
import { Image, Grid, Box } from '@khanhnguyen234/react-components';
import * as styles from './styles.scss';

const Index = ({ image, name, price }) => {
  return (
    <Grid
      container
      justifyContent="space-between"
      className={styles.productCard}
    >
      <Grid item>
        <Image src={image} />
      </Grid>
      <Grid item container alignItem="flex-end">
        <Grid item container>
          <Box m={1} className={styles.info}>
            <Grid
              container
              alignItem="center"
              justifyContent="center"
              spacing={1}
            >
              <Grid item className={styles.name}>
                {name}
              </Grid>
              <Grid item className={styles.price}>
                {price}
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default React.memo(Index);
