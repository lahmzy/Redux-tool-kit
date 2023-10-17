const redux = require("redux");
const bindActionCreators = redux.bindActionCreators;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;

const createStore = redux.createStore;

const reduxLogger = require("redux-logger");
const logger = reduxLogger.createLogger();

const CAKE_ORDERED = "CAKE_ORDERED";
const RESTOCK_CAKE = "RESTOCK_CAKE";

const ICECREAM_ORDERED = "ICECREAM_ORDERED";
const ICECREAM_RESTOCKED = "ICECREAM_RESTOCKED";

function orderCake() {
  return {
    type: CAKE_ORDERED,
    quantity: 1,
  };
}

function cakeRestocked(qty = 1) {
  return {
    type: RESTOCK_CAKE,
    payload: qty,
  };
}

function orderedIcecream() {
  return {
    type: ICECREAM_ORDERED,
    payload: 1,
  };
}

function restockedIcecream(qty = 1) {
  return {
    type: ICECREAM_RESTOCKED,
    payload: qty,
  };
}

const initialCakeState = {
  numberOfCakes: 10,
};

const InitialIceCreamState = {
  numberOfIceCreams: 20,
};

const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes - 1,
      };
    case RESTOCK_CAKE:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes + action.payload,
      };
    default:
      return state;
  }
};

const iceCreamReducer = (state = InitialIceCreamState, action) => {
  switch (action.type) {
    case ICECREAM_ORDERED:
      return {
        ...state,
        numberOfIceCreams: state.numberOfIceCreams - 1,
      };
    case ICECREAM_RESTOCKED:
      return {
        ...state,
        numberOfIceCreams: state.numberOfIceCreams + action.payload,
      };
    case CAKE_ORDERED:
      return {
        ...state,
        numberOfIceCreams: state.numberOfIceCreams - 1,
      };
  }
  return state;
};

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

const store = createStore(rootReducer);
console.log("initial state", store.getState());

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

const actions = bindActionCreators(
  { cakeRestocked, orderCake, orderedIcecream, restockedIcecream },
  store.dispatch
);

actions.orderCake();
actions.orderCake();
actions.orderCake();
actions.cakeRestocked(5);
actions.orderedIcecream();
actions.orderedIcecream();
actions.restockedIcecream(5);

unsubscribe();

console.log("final state", store.getState());
