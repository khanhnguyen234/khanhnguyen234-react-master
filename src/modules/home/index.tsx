import * as React from 'react';
import { Grid, Box } from '@khanhnguyen234/react-components';
import useHistory from '@khanhnguyen234/react-master/src/pwa/hooks/useHistory';
import ProductCard from '../../components/product-card';
import * as styles from './styles.scss';
import { useDispatch } from 'react-redux';
import { fetcher } from '../../utils/fetcher';
import { actionType } from './dataSrc';
import useProductListing from './hooks/use-product-listing';
import useProductFlashSale from './hooks/use-product-flash-sale';

const ProductListing = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { products: productListing } = useProductListing();
  const { products: productFlashSale } = useProductFlashSale();

  React.useEffect(() => {
    dispatch(
      fetcher('http://localhost:7003/product', actionType.fetchProductList),
    );
    dispatch(
      fetcher(
        'http://localhost:7003/product/flash-sale?time=1601448417&limit=5',
        actionType.fetchProductFlashSale,
      ),
    );
  }, []);

  const handleClickCard = (name) => {
    history.push(`${name}`);
  };

  return (
    <Grid container spacing={6}>
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
              onClick={() => handleClickCard(item.name)}
            >
              <ProductCard
                image={item.image_url}
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
              onClick={() => handleClickCard(item.name)}
            >
              <ProductCard
                image={item.image_url}
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
