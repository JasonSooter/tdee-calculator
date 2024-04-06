import React from 'react';
import { Field } from 'react-final-form';

export default () => (
  <div>
    <label>Gender</label>
    <Field name="gender" component="input" type="text" disabled />
  </div>
);
