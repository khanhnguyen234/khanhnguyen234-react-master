import { useSelector } from 'react-redux';
import ProductData from '../dataSrc';

const useProduct = () => {
  const store = useSelector((state: any) => state[ProductData.name]);
  const product = store?.data || {};
  const errMes = store?.error;
  const status = store?.status;

  return {
    product,
    errMes,
    status,
  };
};

export default useProduct;
