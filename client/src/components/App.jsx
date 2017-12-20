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
          <div className="col-md-auto">
            <img src="../../yahoogle.jpg" alt="Yahoogle" height="200" width="400"/>
            <h1 className="row justify-content-md-center">Mail Service</h1>
            <EmailForm />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
