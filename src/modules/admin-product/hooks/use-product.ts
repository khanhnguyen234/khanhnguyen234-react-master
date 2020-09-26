import { useSelector } from 'react-redux';
import ProductData from '../dataSrc';

const useProduct = () => {
  const store = useSelector((state: any) => state[ProductData.name]);
  const product = store?.data || {};

  return {
    product,
  };
};

export default useProduct;
