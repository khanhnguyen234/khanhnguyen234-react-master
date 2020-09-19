export const actionType = {
  fetchProductList: 'fetchProductList',
  fetchProductFlashSale: 'fetchProductFlashSale',
};

export default {
  name: 'product_home',
  initState: {
    data: {},
  },
  handlers: [
    {
      actions: {
        [actionType.fetchProductList]: actionType.fetchProductList,
      },
      handler: {
        type: actionType.fetchProductList,
        handler: (state, action) => {
          return {
            ...state,
            data: {
              ...state.data,
              productList: action.data,
            },
            success: action.success,
          };
        },
      },
    },
    {
      actions: {
        [actionType.fetchProductFlashSale]: actionType.fetchProductFlashSale,
      },
      handler: {
        type: actionType.fetchProductFlashSale,
        handler: (state, action) => {
          return {
            ...state,
            data: {
              ...state.data,
              productFlashSale: action.data,
            },
            success: action.success,
          };
        },
      },
    },
  ],
};
