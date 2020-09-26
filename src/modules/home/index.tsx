import * as React from 'react';
import { Box, Grid, Loading } from '@khanhnguyen234/react-components';
import useHistory from '@khanhnguyen234/react-master/src/pwa/hooks/useHistory';
import ProductCard from '../../components/product-card';
import * as styles from './styles.scss';
import { useDispatch } from 'react-redux';
import { requestApiAction, STATUS } from '../../utils/fetcher';
import { actionType } from './dataSrc';
import useProductListing from './hooks/use-product-listing';
import useProductFlashSale from './hooks/use-product-flash-sale';
import { DEFAULT_PRODUCT_URL, INTERNAL_URLS } from './const';
import { BackdropVariant } from '../../../../khanhnguyen234-react-components/src/components/Loading';
import { LOADING_IMAGE_URL } from '../../lib/const';

const ProductListing = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { products: productListing, status } = useProductListing();
  const { products: productFlashSale } = useProductFlashSale();

  React.useEffect(() => {
    dispatch(
      requestApiAction(
        'http://localhost:7003/product',
        actionType.fetchProductList,
      ),
    );
    dispatch(
      requestApiAction(
        'http://localhost:7003/product/flash-sale?time=1601448417&limit=5&src=db',
        actionType.fetchProductFlashSale,
      ),
    );
  }, []);

  const handleClickCard = (id) => {
    history.push(`${INTERNAL_URLS.adminProductDetail.replace(':id', id)}`);
  };

  return (
    <Grid container spacing={6}>
      {status === STATUS.isLoading && (
        <Loading variant={BackdropVariant.grey} imageUrl={LOADING_IMAGE_URL} />
      )}
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
              xs={2}
              key={item.id}
              className={styles.card}
              onClick={() => handleClickCard(item.id)}
            >
              <ProductCard
                image={item.image_url || DEFAULT_PRODUCT_URL}
                name={item.name}
                price={item.price}
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
              xs={2}
              key={item.id}
              className={styles.card}
              onClick={() => handleClickCard(item.id)}
            >
              <ProductCard
                image={item.image_url || DEFAULT_PRODUCT_URL}
                name={item.name}
                price={item.price}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default React.memo(ProductListing);
