import './styles.css';
import React from 'react';

class Form extends React.Component {
  onSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(event.persist());
  }

  render() {
    return (
      <form
        className="form"
        onSubmit={this.onSubmit}
      >
        {this.props.children}
      </form>
    )
  }
}

export default Form;
