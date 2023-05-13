const {combineReducers} = require('@reduxjs/toolkit');
const {default: thunk} = require('redux-thunk');

const combineReducer = combineReducers({});
const rootReducer = (state, action) => {
  if (action.type === 'RESET') {
    state = undefined;
  }
  return combineReducer(state, action);
};
const store = configureStore({reducer: rootReducer}, applyMiddleware(thunk));
export default store;
