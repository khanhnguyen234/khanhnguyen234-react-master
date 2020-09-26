import * as React from 'react';
import { Grid, Box } from '@khanhnguyen234/react-components';
import useRoute from '@khanhnguyen234/react-master/src/pwa/hooks/useRoute';
import ProductForm from './components/product-form';
import useProduct from './hooks/use-product';
import { requestApiAction } from '../../utils/fetcher';
import { actionType } from './dataSrc';
import { useDispatch } from 'react-redux';
import { getUnixTime } from 'date-fns';
import { FORM_PROPS } from './const';

const AdminProductCreate = () => {
  const dispatch = useDispatch();
  const { product } = useProduct();
  const route = useRoute();
  const id = route.params?.id;
  const pathname = route.pathname;
  const [_product, setProduct] = React.useState();

  React.useEffect(() => {
    if (id) {
      dispatch(
        requestApiAction(
          `http://localhost:7003/product/detail/${id}`,
          actionType.fetchProduct,
        ),
      );
    }
  }, [pathname]);

  React.useEffect(() => {
    if (id) {
      setProduct(product);
    }
    if (!id) {
      setProduct(undefined);
    }
  }, [pathname, product]);

  const handleSubmit = (data) => {
    data[FORM_PROPS.price] = +data[FORM_PROPS.price];
    data[FORM_PROPS.flash_sale_unix_start] = getUnixTime(
      new Date(data[FORM_PROPS.flash_sale_unix_start]),
    );
    data[FORM_PROPS.flash_sale_unix_end] = getUnixTime(
      new Date(data[FORM_PROPS.flash_sale_unix_end]),
    );

    dispatch(
      requestApiAction(
        'http://localhost:7003/product',
        actionType.createProduct,
        {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json',
          },
        },
      ),
    );
  };

  return (
    <Grid>
      <ProductForm product={_product} handleSubmitForm={handleSubmit} />
    </Grid>
  );
};

export default React.memo(AdminProductCreate);
