export const actionType = {
  fetchProductList: 'fetchProductList',
};

export default {
  name: 'product_list',
  initState: {
    data: {},
  },
  handlers: [
    {
      actions: {
        fetchProductList: 'fetcher.fetch need to dispatch',
      },
      handler: {
        type: actionType.fetchProductList,
        handler: (state, action) => {
          return { ...state, data: action.data, success: action.success };
        },
      },
    },
  ],
};
