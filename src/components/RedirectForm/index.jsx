import React from 'react';
import Field from '../../containers/Field';
import Form from '../Shared/Form';
import Input from '../Shared/Input';
import Label from '../Shared/Label';
import Button from '../Shared/Button';
import Section from './Section';

const RedirectForm = ({ onSubmit }) => (
  <Form onSubmit={onSubmit}>
    <Section>
      <Label>
        URL
      </Label>
      <Field name="url">
        {({ value, onChange }) => (
          <Input
            value={value}
            onChange={onChange}
          />
        )}
      </Field>
    </Section>
    <Section>
      <Button type="submit">
        Open app
      </Button>
    </Section>
  </Form>
)

export default RedirectForm;
