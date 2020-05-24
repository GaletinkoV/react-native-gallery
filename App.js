import React from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './src/reducers';

import TabNavigator from './src/navigations/tab-navigators/TabNavigator';

const combinedReducers = combineReducers({ ...reducers });
const store = createStore(combinedReducers, composeWithDevTools(applyMiddleware(thunk)));

const App = () =>  {
  return (
      <Provider store={store}>
          <StatusBar barStyle='light-content'/>
          <TabNavigator />
      </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
