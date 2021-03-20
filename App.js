import React from 'react';
import { Provider } from 'react-redux';
import Calculation from './Component';
import store from './storage/Store';

export default function App() {
  return (
    <Provider store={store}>
      <Calculation />
    </Provider>

  );
}


