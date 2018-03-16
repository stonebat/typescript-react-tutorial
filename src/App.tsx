import * as React from 'react';
import './App.css';
import Profile from './components/Profile';
import CounterContainer from './containers/CounterContainer';
import TodoListContainer from './containers/TodoListContainer';

class App extends React.Component {
  render() {
    return (
      <div>
        <Profile
          name="Stone Bat"
          job="Programmer"
        />
        <CounterContainer/>
        <TodoListContainer/>
      </div>
    );
  }
}

export default App;
