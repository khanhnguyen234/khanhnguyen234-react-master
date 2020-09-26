export const actionType = {
  fetchProduct: 'fetchProduct',
  createProduct: 'createProduct',
};

export default {
  name: 'admin-product',
  initState: {
    data: {},
  },
  handlers: [
    {
      actions: {
        [actionType.fetchProduct]: actionType.fetchProduct,
      },
      handler: {
        type: actionType.fetchProduct,
        handler: (state, action) => {
          return {
            ...state,
            data: action.data,
            status: action.status,
            success: action.success,
          };
        },
      },
    },
    {
      actions: {
        [actionType.createProduct]: actionType.createProduct,
      },
      handler: {
        type: actionType.createProduct,
        handler: (state, action) => {
          return {
            ...state,
            success: action?.success,
            status: action.status,
            error: action?.error?.error,
          };
        },
      },
    },
  ],
};
