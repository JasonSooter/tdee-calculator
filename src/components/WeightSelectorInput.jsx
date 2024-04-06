import React from 'react';
import { Field } from 'react-final-form';

export default () => (
  <div style={{ justifyContent: 'flex-end' }}>
    <label>
      <Field name="weightType" component="input" type="radio" value="lbs" /> Lbs
    </label>
    <label>
      <Field name="weightType" component="input" type="radio" value="kg" /> Kg
    </label>
  </div>
);
