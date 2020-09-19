import { useSelector } from 'react-redux';
import ProdictListingData from "../dataSrc"

const useProductListing = () => {
  const store = useSelector((state: any) =>
    state[ProdictListingData.name],
  );

  const products = store?.data?.productList?.result || []
  
  return {
    products
  }
}

export default useProductListing