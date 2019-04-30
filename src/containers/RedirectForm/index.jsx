import React from 'react';
import { ZXING_URL } from '../../constants/url';
import { FormProvider } from '../Context/Form';
import RedirectFormComponent from '../../components/RedirectForm';
import Submit from './Submit';

class RedirectForm extends React.Component {
  ref = React.createRef();

  onSubmit = () => {
    if (this.ref.current){
      this.ref.current.click();
    }
  }

  render() {
    return (
      <FormProvider initialValues={{ url: ZXING_URL }}>
        <Submit ref={this.ref} />
        <RedirectFormComponent onSubmit={this.onSubmit} />
      </FormProvider>
    )
  }
}

export default RedirectForm;
