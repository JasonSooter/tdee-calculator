import React from 'react';
import { Field } from 'react-final-form';

export default () => (
  <div>
    <label>Age</label>
    <Field name="age" component="input" type="number" placeholder="Years" />
  </div>
);
