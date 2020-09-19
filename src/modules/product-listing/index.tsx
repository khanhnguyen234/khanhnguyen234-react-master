import * as React from 'react';
import { Grid } from '@khanhnguyen234/react-components';
import useHistory from '@khanhnguyen234/react-master/src/pwa/hooks/useHistory';
import ProductCard from '../../components/product-card';
import PRODUCTS from './mock';
import * as styles from './styles.scss';
import { useDispatch } from 'react-redux';
import { fetcher } from '../../utils/fetcher';
import { actionType } from './dataSrc';

const ProductListing = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(
      fetcher(
        'https://jsonplaceholder.typicode.com/todos/1',
        actionType.fetchProductList,
      ),
    );
  }, []);

  const handleClickCard = (name) => {
    history.push('/detail');
  };

  return (
    <React.Fragment>
      <Grid item container spacing={2}>
        {PRODUCTS.map((item) => (
          <Grid
            item
            xs={2}
            key={item.id}
            className={styles.card}
            onClick={() => handleClickCard(item.name)}
          >
            <ProductCard
              image={item.image}
              name={item.name}
              price={item.price}
            />
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
};

export default React.memo(ProductListing);
