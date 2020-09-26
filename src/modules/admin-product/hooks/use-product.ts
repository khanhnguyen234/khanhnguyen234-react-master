import { useSelector } from 'react-redux';
import ProductData from '../dataSrc';

const useProduct = () => {
  const store = useSelector((state: any) => state[ProductData.name]);
  const product = store?.data || {};
  const errMes = store?.error;

  return {
    product,
    errMes,
  };
};

export default useProduct;
