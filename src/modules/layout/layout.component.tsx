import { Grid, Title } from '@khanhnguyen234/react-components';
import { Button } from '@material-ui/core';
import styles from './styles.scss';
import * as React from 'react';
import { scrollToOffset } from '@khanhnguyen234/react-common/src/utils/window';
import { INTERNAL_URLS } from '@khanhnguyen234/react-common/src/lib/const';
import useHistory from '@khanhnguyen234/react-core/src/hooks/useHistory';

const Component = () => {
  const history = useHistory();

  const goHome = () => {
    scrollToOffset({ top: 0 });
    history.push(INTERNAL_URLS.home);
  };

  const goCreateProduct = () => {
    history.push(INTERNAL_URLS.adminProductCreate);
  };
  return (
    <Grid item container spacing={4}>
      <Grid item>
        <Grid item container alignItem="center" spacing={2}>
          <Grid item xs="auto">
            <Button
              variant="contained"
              color="secondary"
              size="large"
              onClick={goHome}
            >
              Home
            </Button>
          </Grid>
          <Grid item xs="auto">
            <Button
              variant="contained"
              color="secondary"
              size="large"
              onClick={goCreateProduct}
            >
              Create
            </Button>
          </Grid>
          <Grid item xs={true}>
            <Title className={styles.title}>Master Named</Title>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default React.memo(Component);
