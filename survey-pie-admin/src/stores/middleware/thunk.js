const thunk = (store) => (next) => (action) => {
  //logic
  //thunk

  if (typeof action === "function") {
    action(store.dispatch, store.getState);
  } else {
    next(action);
  }
};

export default thunk;
