import React from 'react';
import { Provider } from 'react-redux';

import store from './Modules/store';
import Form from './Components/Form';


function App() {
  return (
    <Provider store={store}>
      <Form />
    </Provider>
  );
}

store.subscribe(App);

export default App;
