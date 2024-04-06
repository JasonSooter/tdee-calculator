import React from 'react';
import { Field } from 'react-final-form';

export default () => (
  <div>
    <label>Activity Level</label> <br />
    <Field name="activityLevel" component="select" size="4">
      <option value={250}>Sedentary - little to no exercise</option>
      <option value={500}>Light - 30min exercise 1-3x/wk</option>
      <option value={650}>Moderate - 30min exercise 3-5x/wk</option>
      <option value={800}>High - 60min exercise 5-7x/wk</option>
    </Field>
  </div>
);
