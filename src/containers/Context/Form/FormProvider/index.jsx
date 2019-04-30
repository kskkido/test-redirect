import React from 'react';
import { Provider } from '../Factory';

class FormProvider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      values: props.initialValues || {},
      setFormValue: this.setFormValue,
    }
  }

  setFormValue = (values) => {
    this.setState({ values });
  }

  render() {
    return (
      <Provider value={this.state}>
        {this.props.children}
      </Provider>
    )
  }
}

export default FormProvider;
