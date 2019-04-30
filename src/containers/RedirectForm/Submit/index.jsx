import React from 'react';
import Link from '../../../components/Shared/Link';
import Visible from '../../../components/Shared/Visible';
import FieldValueSelector from '../../FieldValueSelector';

const Submit = React.forwardRef(
  (_, ref) => (
    <FieldValueSelector name="url">
      {({ value }) => (
        <Visible hidden={true}>
          <Link
            to={value}
            ref={ref}
          />
        </Visible>
      )}
    </FieldValueSelector>
  )
)

export default Submit;
