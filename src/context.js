import React, { Component } from 'react';

const Context = React.createContext();

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: 'John Doe',
        email: ' jdoe@gmail.com',
        phone: ' 444-555-555'
      },
      {
        id: 3,
        name: 'Eleni Doe',
        email: ' eleni@gmail.com',
        phone: ' 222-555-555'
      },
      {
        id: 4,
        name: 'Alex Doe',
        email: ' alex@gmail.com',
        phone: ' 333-555-555'
      }
    ]
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
