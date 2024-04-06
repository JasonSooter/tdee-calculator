import defaultTo from 'ramda/es/defaultTo';
import head from 'ramda/es/head';
import join from 'ramda/es/join';
import map from 'ramda/es/map';
import min from 'ramda/es/min';
import pipe from 'ramda/es/pipe';
import reject from 'ramda/es/reject';
import replace from 'ramda/es/replace';
import split from 'ramda/es/split';
import tail from 'ramda/es/tail';
import take from 'ramda/es/take';

const trimDims = pipe(split(''), take(5), join(''), replace('_', 0), Number);
const rmr = ({ weight, height, age }) =>
  9.99 * (weight * 0.453592) + 6.25 * (height * 2.54) - 4.92 * age - 161;

const trimFeetInches = pipe(
  split(''),
  map(parseInt),
  reject(Number.isNaN),
  (arr) =>
    head(arr) * 12 + defaultTo(0)(min(11))(parseInt(join('', tail(arr)), 10))
);

export { rmr, trimDims, trimFeetInches };
