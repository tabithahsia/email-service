import React from 'react';
import EmailForm from './EmailForm.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };

  }

  render() {
    return (
      <div>
        <h1>YahoogleMail</h1>
        <EmailForm />
      </div>
    )
  }
}

export default App;
