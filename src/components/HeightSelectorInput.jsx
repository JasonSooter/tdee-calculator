import React from 'react';
import { Field } from 'react-final-form';

export default () => (
  <div style={{ justifyContent: 'flex-end' }}>
    <label>
      <Field
        name="heightType"
        component="input"
        type="radio"
        value="feetInches"
      />
      Feet/Inches
    </label>
    <label>
      <Field
        name="heightType"
        component="input"
        type="radio"
        value="centimeters"
      />
      Centimeters
    </label>
  </div>
);
