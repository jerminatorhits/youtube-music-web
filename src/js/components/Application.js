import React from 'react';
import Header from './Header';
import TodoList from './TodoList';
export default class Application extends React.Component {

  componentDidMount() {
  }

  render() {
    return(
      <div>
        <Header />
        <TodoList />
      </div>
    );
  }
}