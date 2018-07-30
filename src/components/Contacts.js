import React, { Component } from 'react';
import Contact from './Contact';

export class Contacts extends Component {
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

  test = 'Costas';

  render() {
    const { contacts } = this.state;
    return (
      <React.Fragment>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </React.Fragment>
    );
  }
}

export default Contacts;
