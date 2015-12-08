import React from 'react';
import ReactDOM from 'react-dom'; 

class Hello extends React.Component {              
  render() {
    return <p>Hello, world!</p>;
  }
} 

ReactDOM.render(<Hello />, document.body );
