import React, { useState } from 'react';
import { Image, Grid, Box } from '@khanhnguyen234/react-components';
import ThreeDots from '../../lib/images/three-dots.icon.svg';
import styles from './styles.scss';

const Index = ({ image, name, price, onClickCard, onClickDot }) => {
  const [clickCardAble, setClickCardAble] = useState(true);

  const onMouseEnterDot = () => {
    setClickCardAble(false);
  };

  const onMouseLeaveDot = () => {
    setClickCardAble(true);
  };

  return (
    <Grid
      container
      justifyContent="space-between"
      className={styles.productCard}
      onClick={clickCardAble ? onClickCard : undefined}
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
            <div
              className={styles.adminDetail}
              onClick={onClickDot}
              onMouseEnter={onMouseEnterDot}
              onMouseLeave={onMouseLeaveDot}
            >
              <ThreeDots />
            </div>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default React.memo(Index);
