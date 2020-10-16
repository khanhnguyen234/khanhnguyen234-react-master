import * as React from 'react';
import {
  Box,
  Grid,
  Loading,
  BackdropVariant,
  Title,
} from '@khanhnguyen234/react-components';
import useHistory from '@khanhnguyen234/react-core/src/hooks/useHistory';
import ProductCard from '../../components/product-card';
import styles from './styles.scss';
import { useDispatch } from 'react-redux';
import { requestApiAction, STATUS } from '../../utils/fetcher';
import { actionType } from './dataSrc';
import useProductListing from './hooks/use-product-listing';
import useProductFlashSale from './hooks/use-product-flash-sale';
import {
  LOADING_IMAGE_URL,
  DEFAULT_PRODUCT_URL,
  INTERNAL_URLS,
  CONFIG,
} from '@khanhnguyen234/react-common/src/lib/const';
import { Button } from '@material-ui/core';
import { scrollToOffset } from '@khanhnguyen234/react-common';

const HomeComponent = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { products: productListing, status } = useProductListing();
  const { products: productFlashSale } = useProductFlashSale();

  React.useEffect(() => {
    dispatch(
      requestApiAction(
        `${CONFIG.API_DOMAIN}product`,
        actionType.fetchProductList,
      ),
    );
    dispatch(
      requestApiAction(
        `${CONFIG.API_DOMAIN}product/flash-sale?time=1601448417&limit=12&src=db`,
        actionType.fetchProductFlashSale,
      ),
    );
  }, []);

  const handleClickCard = (e, name) => {
    history.push(`${INTERNAL_URLS.productDetail.replace(':name', name)}`);
  };

  const handleClickDot = (e, id) => {
    history.push(`${INTERNAL_URLS.adminProductDetail.replace(':id', id)}`);
  };

  const goHome = () => {
    scrollToOffset({ top: 0 });
    history.push('/');
  };

  const goCreateProduct = () => {
    history.push('/admin/product/create');
  };

  return (
    <Grid container spacing={6}>
      {status === STATUS.isLoading && (
        <Loading variant={BackdropVariant.grey} imageUrl={LOADING_IMAGE_URL} />
      )}

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
              <Title className={styles.title}>
                React + Typescript + Webpack + Workbox
              </Title>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item container>
        <Box marginBottom={5}>
          <Grid item className={styles.header} alignItem="center">
            <Box mx={5} py={3} className={styles.text}>
              Flash Sale
            </Box>
          </Grid>
        </Box>
        <Grid item container spacing={2}>
          {productFlashSale.map((item) => (
            <Grid
              item
              xs={6}
              sm={4}
              md={2}
              key={item._id}
              className={styles.card}
            >
              <ProductCard
                image={item.image_url || DEFAULT_PRODUCT_URL}
                name={item.name}
                price={item.price}
                onClickCard={(e) => handleClickCard(e, item.name)}
                onClickDot={(e) => handleClickDot(e, item.id)}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item container>
        <Box marginBottom={5}>
          <Grid item className={styles.header} alignItem="center">
            <Box mx={5} py={3} className={styles.text}>
              Dành riêng cho bạn
            </Box>
          </Grid>
        </Box>
        <Grid item container spacing={2}>
          {productListing.map((item) => (
            <Grid
              item
              xs={6}
              sm={4}
              md={2}
              key={item._id}
              className={styles.card}
            >
              <ProductCard
                image={item.image_url || DEFAULT_PRODUCT_URL}
                name={item.name}
                price={item.price}
                onClickCard={(e) => handleClickCard(e, item.name)}
                onClickDot={(e) => handleClickDot(e, item.id)}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default React.memo(HomeComponent);
