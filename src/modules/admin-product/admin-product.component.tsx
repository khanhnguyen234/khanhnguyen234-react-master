import * as React from 'react';
import { Grid, Loading } from '@khanhnguyen234/react-components';
import useRoute from '../../pwa/hooks/useRoute';
import ProductForm from './components/product-form';
import useProduct from './hooks/use-product';
import { requestApiAction, STATUS } from '../../utils/fetcher';
import { actionType } from './dataSrc';
import { useDispatch } from 'react-redux';
import { FORM_PROPS } from './const';
import { datetimeLocalToUnix } from '../../utils/date';
import { CONFIG } from '../../lib/const';

const AdminProductCreate = () => {
  const dispatch = useDispatch();
  const { product, errMes, status } = useProduct();
  const route = useRoute();
  const id = route.params?.id;
  const pathname = route.pathname;
  const [_product, setProduct] = React.useState();

  React.useEffect(() => {
    if (id) {
      dispatch(
        requestApiAction(
          `${CONFIG.API_DOMAIN}product/detail/${id}`,
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
    setProduct(data);

    data[FORM_PROPS.price] = +data[FORM_PROPS.price];
    data[FORM_PROPS.flash_sale_unix_start] = datetimeLocalToUnix(
      new Date(data[FORM_PROPS.flash_sale_unix_start]),
    );
    data[FORM_PROPS.flash_sale_unix_end] = datetimeLocalToUnix(
      new Date(data[FORM_PROPS.flash_sale_unix_end]),
    );

    dispatch(
      requestApiAction(
        `${CONFIG.API_DOMAIN}product`,
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
      {status === STATUS.isLoading && (
        <Loading imageUrl="https://scontent.fsgn5-7.fna.fbcdn.net/v/t1.0-9/120242670_756487215198042_6677672543451741224_n.jpg?_nc_cat=1&_nc_sid=825194&_nc_ohc=FR6klChG_0QAX9qvNus&_nc_ht=scontent.fsgn5-7.fna&oh=8aaf973e011ddb9d081940730fa32ec2&oe=5F96814C" />
      )}
      <ProductForm
        product={_product}
        errMes={errMes}
        handleSubmitForm={handleSubmit}
      />
    </Grid>
  );
};

export default React.memo(AdminProductCreate);
