import React from 'react';
import Navigation from './src/navigation/routes';
import { Provider } from 'react-redux';
import store from './src/store';

export default App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};
