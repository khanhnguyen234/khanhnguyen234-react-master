import * as React from 'react';
import ProductCard from '../../components/product-card';
import useHistory from '@khanhnguyen234/react-master/src/pwa/hooks/useHistory';
import PRODUCTS from "./mock"
import * as styles from './styles.scss';

const ProductListing = () => {

  const history = useHistory();
  const handleClickCard = (name) => {
    history.push('/detail');
  };

  return (
    <React.Fragment>
      <div className={styles.productListing}>
        {PRODUCTS.map((item) => (
          <div
            key={item.id}
            className={styles.card}
            onClick={() => handleClickCard(item.name)}
          >
            <ProductCard
              image={item.image}
              name={item.name}
              price={item.price}
            />
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default React.memo(ProductListing);
