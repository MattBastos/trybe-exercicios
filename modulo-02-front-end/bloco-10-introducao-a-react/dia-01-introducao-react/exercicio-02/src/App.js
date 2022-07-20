import React, { Component } from 'react';

const Task = (value) => {
  return (
    <li key={ value }>{ value }</li>
  );
}

const taskList = ['Code', 'Play Video Games', 'Cofee Time', 'Workout'];

class App extends Component {
  render () {
    return (
      <ul>{ taskList.map((task) => Task(task)) }</ul>
    )
  }
}

export default App;
