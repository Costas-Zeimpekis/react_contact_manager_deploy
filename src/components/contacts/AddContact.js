import React, { Component } from 'react';

class AddContact extends Component {
  state = {
    name: '',
    email: '',
    phone: ''
  };

  onSubmit(e) {
    e.preventDefault();
    console.log(this.state);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { name, email, phone } = this.state;
    return (
      <div className="card mb-3">
        <div className="card-header">Add Contact</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit.bind(this)}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                className="form-control form-control-lg"
                placeholder="Enter Name..."
                value={name}
                onChange={this.onChange.bind(this)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                className="form-control form-control-lg"
                placeholder="Enter Email..."
                value={email}
                onChange={this.onChange.bind(this)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="name">Phone</label>
              <input
                type="text"
                name="phone"
                className="form-control form-control-lg"
                placeholder="Enter Phone..."
                value={phone}
                onChange={this.onChange.bind(this)}
              />
            </div>
            <button type="submit" className="btn btn-block btn-light">
              Add Contact
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default AddContact;
