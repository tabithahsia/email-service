import React from 'react';
import EmailForm from './EmailForm.jsx';
import Footer from './Footer.jsx';

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
            <a href="https://youtu.be/QH2-TGUlwu4" target="_blank"><img src="../../yahoogle.jpg" alt="Yahoogle" height="200" width="400"/></a>
            <h1 className="row justify-content-md-center">Mail Service</h1>
            <EmailForm />
            <Footer />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
