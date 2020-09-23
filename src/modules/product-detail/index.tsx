import * as React from 'react';
import ReactPlayer from 'react-player';
import ProductCard from '../../components/product-card';
import * as styles from './styles.scss';
import { ButtonExt, Title } from '@khanhnguyen234/react-components';
import { JAV_URL, YOUTUBE_URL } from './mock';

const ProductDetail = () => {
  return (
    <div>
      <Title className={styles.title}>This is Product Detail Page</Title>
      <ReactPlayer url={JAV_URL} controls loop playing muted />
    </div>
  );
};

export default React.memo(ProductDetail);
