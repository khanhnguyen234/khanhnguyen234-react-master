import { useSelector } from 'react-redux';
import ProdictListingData from "../dataSrc"

const useProductFlashSale = () => {
  const store = useSelector((state: any) =>
    state[ProdictListingData.name],
  );

  const products = store?.data?.productFlashSale?.result || []
  
  return {
    products
  }
}

export default useProductFlashSale