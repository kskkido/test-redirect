import React from 'react';
import { FormConsumer } from '../Context/Form';

class Field extends React.Component {
  onChange = (value) => {
    this.props.setFormValue({ [this.props.name]: value });
  }

  getValue() {
    return this.props.values[this.props.name] || '';
  }

  render() {
    return this.props.children({
      value: this.getValue(),
      onChange: this.onChange,
    })
  }
}

export default props => (
  <FormConsumer>
    {contextProps => (
      <Field
        {...props}
        {...contextProps}
      />
    )}
  </FormConsumer>
);
