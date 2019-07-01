import { createStore } from 'redux'; // TODO: can be used react-redux for create-store??
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from './reducer';

const store = createStore(reducer, composeWithDevTools());

export default store;
