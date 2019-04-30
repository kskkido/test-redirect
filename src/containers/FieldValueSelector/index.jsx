import React from 'react';
import Field from '../Field';

const FieldValueSelector = ({ children, name }) => (
  <Field name={name}>
    {({ value }) => children({ value })}
  </Field>
)

export default FieldValueSelector;
