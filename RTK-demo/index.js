const store = require("./app/store");
const cakeActions = require("./app/features/cake/cakeSlice").cakeActions;
const iceCreamActions =
  require("./app/features/iceCream/iceCreamSlice").iceCreamActions;
const fetchActions = require("./app/features/user/userslice").fetchActions;

console.log("initial state", store.getState());
const unsubscribe = store.subscribe(() => {});

store.dispatch(fetchActions());

// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.restocked(3));

// store.dispatch(iceCreamActions.ordered());
// store.dispatch(iceCreamActions.ordered());
// store.dispatch(iceCreamActions.restocked(2));

// unsubscribe();
