import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import UserList from './components/UserList';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>User Todos</h1>
        <UserList />
      </div>
    </Provider>
  );
};

export default App;