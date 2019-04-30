import './styles.css';
import React from 'react';
import Container from './Container';

class Input extends React.Component {
  onChange = ({ target }) => {
    this.props.onChange(target.value);
  }

  render() {
    return (
      <Container>
        <input
          {...this.props}
          className="input"
          onChange={this.onChange}
        />
      </Container>
    )
  }
}

export default Input;
