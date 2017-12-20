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
      <div className="container">
        <div className="row justify-content-md-center">
          <div class="col-md-auto">
            <h1>YahoogleMail</h1>
            <EmailForm />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
