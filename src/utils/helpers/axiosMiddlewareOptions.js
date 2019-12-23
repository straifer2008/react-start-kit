export default {
  onSuccess: ({ action, next, response }) => {
    next({
      type: `${action.type}_SUCCESS`,
      payload: response,
    });
  },
  onError: ({ action, next, error }) => {
    next({
      type: `${action.type}_FAIL`,
      payload: error,
    });
  },
};
