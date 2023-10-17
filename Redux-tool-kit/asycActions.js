const redux = require("redux");
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware
const thunkMiddleware = require ("redux-thunk").default
const axios = require("axios")


const initialState = {
  loading: false,
  users: [],
  error: "",
};

const FETCH_USERS_REQUESTED = "FETCH_USERS_REQUESTED ";
const FETCH_USERS_SUCCEDED = " FETCH_USERS_SUCCEDED ";
const FETCH_USERS_FAILED = " FETCH_USERS_FAILED ";

const requestedUsers = () => {
  return {
    type: FETCH_USERS_REQUESTED,
  };
};

const succededUsers = (users) => {
  return {
    type: FETCH_USERS_SUCCEDED,
    payload: users,
  };
};

const failedUsers = (error) => {
  return {
    type: FETCH_USERS_FAILED,
    payload: error,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUESTED:
      return {
        ...state,
        loading: true,
      };

    case FETCH_USERS_SUCCEDED:
      return {
        ...state,
        loading: false,
        users: action.payload,
       
      };

    case FETCH_USERS_FAILED:
      return {
        loading: false,
        users: [],
        error: action.payload,
      };

    default:
      state;
  }
};

const fetchUsers = () => {
  return function (dispatch){
    dispatch(requestedUsers())
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(response => {
      const users = response.data.map((user) => user.id)
      dispatch(succededUsers(users))
    })
    .catch(error => {
      dispatch(failedUsers(error.message))
    })
  }
}

const store = createStore(reducer, applyMiddleware(thunkMiddleware))

store.subscribe( () => console.log(store.getState()))
store.dispatch(fetchUsers())
