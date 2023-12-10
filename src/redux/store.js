import { createStore } from 'redux';
import tollReducer from './reducers';

const store = createStore(tollReducer);

export default store;