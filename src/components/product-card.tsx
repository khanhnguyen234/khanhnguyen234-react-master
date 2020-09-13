import * as React from 'react';
import { Image } from '@khanhnguyen234/react-components';
import * as styles from './styles.scss';

const ProductCard = ({ image, name, price }) => {
  return (
    <div className={styles.productCard}>
      <div>
        <Image src={image} />
      </div>
      <div className={styles.info}>
        <div className={styles.name}>
          <span>{name}</span>
        </div>
        <div className={styles.price}>
          <span>{price}</span>
        </div>
      </div>
    </div>
  );
};

export default React.memo(ProductCard);
