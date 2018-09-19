import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import base from './base';

class App extends Component {
  state = {
    result: null,
    error: null,
  };
  componentDidMount() {
    base('Backlog')
      .select()
      .firstPage((error, records) => {
        if (error) return this.setState({ error });
        const result = records.map(record => {
          console.log(record);
          return {
            storyName: record.get('Story Name'),
            priority: record.get('Priority'),
            useCase: record.get('Use Case'),
            sprintReleaseDate: record.get('Sprint Release Date'),
            status: record.get('Status'),
          };
        });
        this.setState({ result });
      });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>
          <h2>Backlog</h2>
          <table>
            <thead>
              <tr>
                <th>Story Name</th>
                <th>Status</th>
                <th>Priority</th>
                <th>Use Case</th>
                <th>Sprint Release Date</th>
              </tr>
            </thead>
            <tbody>
              {this.state.result &&
                this.state.result.map((record, index) => {
                  return (
                    <tr key={index}>
                      <td>{record.storyName}</td>
                      <td>{record.status}</td>
                      <td>{record.priority}</td>
                      <td>{record.useCase}</td>
                      <td>{record.sprintReleaseDate}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
