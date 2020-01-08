
/**
 * Module dependencies.
 */

import './country-block.scss';
import PropTypes from 'prop-types';
import React from 'react';

/**
 * `CountryBlock`.
 */

const CountryBlock = ({ item }) => {
  const {
    capital, currencies, languages, name
  } = item;

  return (
    <div className="country-block">
      <h3>{name}</h3>
      <div className="country-block__divide">
        <span role="img" aria-label="capital">📍</span>
        {capital}
      </div>
      <div className="country-block__divide">
        <span role="img" aria-label="currency">💶</span>
        {currencies.map((i, k) => (
          `${(k ? ',' : '')} ${i.name} (${i.symbol})`
        ))}
      </div>
      <div className="country-block__divide">
        <span role="img" aria-label="language">💬</span>
        {languages.map((i, k) => (
          `${(k ? ',' : '')} ${i.name}`
        ))}
      </div>
    </div>
  );
};

/**
   * Prop types.
   */

CountryBlock.propTypes = {
  item: PropTypes.shape({
    capital: PropTypes.string,
    currencies: PropTypes.array,
    languages: PropTypes.array,
    name: PropTypes.string
  }).isRequired
};

/**
 * Export `CountryBlock`.
 */

export default CountryBlock;
