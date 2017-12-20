import React from 'react';
import axios from 'axios';

class EmailForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      from: '',
      to: '',
      subject: '',
      message: ''
    };

    this.sendEmail = this.sendEmail.bind(this);
  }

  sendEmail(e){
    e.preventDefault();
    console.log('sendEmail has been called');
    axios.post('/sendemail', {
      from: this.state.from,
      to: this.state.to,
      subject: this.state.subject,
      message: this.state.message
    }).then(function (response) {
      console.log('response: ', response);
    })
    .catch(function (error) {
      console.log('error in sendEmail(): ', error);
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.sendEmail}>
          <label>
            From
            <br />
            <input type="email" placeholder="email@email.com" value={this.state.from} onChange={e => this.setState({from: e.target.value})} />
          </label>
          <br />
          <label>
            To
            <br />
            <input type="email" placeholder="email@email.com" value={this.state.to} onChange={e => this.setState({to: e.target.value})} />
          </label>
          <br />
          <label>
            Subject
            <br />
            <input type="text" value={this.state.subject} onChange={e => this.setState({subject: e.target.value})} />
          </label>
          <br />
          <label>
            Message:
            <br />
            <textarea value={this.state.message} onChange={e => this.setState({message: e.target.value})} />
          </label>
          <br />
          <input type="submit" value="Submit" className="btn btn-lg btn-warning" />

        </form>

      </div>
    )
  }
}

export default EmailForm;
