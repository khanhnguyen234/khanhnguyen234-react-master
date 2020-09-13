import * as React from 'react';
import ProductCard from '../../components/product-card';
import * as styles from './styles.scss';
import { ButtonExt, Title } from '@khanhnguyen234/react-components';

const ProductDetail = () => {
  return (
    <div>
      <Title className={styles.title}>This is Product Detail Page</Title>
    </div>
  );
};

export default React.memo(ProductDetail);
