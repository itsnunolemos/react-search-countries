
/**
 * Module dependencies.
 */

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCountries, getCountry, resetCountry } from '../../redux/actions/country-actions';
import CountryBlock from '../../components/block/country-block';

/**
 * `PageHomepage`.
 */

class PageHomepage extends Component {
  /**
   * Component did mount.
   */

  componentDidMount() {
    const { getCountries: allCountries } = this.props;

    allCountries();
  }

  /**
   * Handle search.
   */

  handleSearch = (event) => {
    const { getCountry: findCountry, resetCountry: clearCountry } = this.props;

    if (event.target.value.length > 0) {
      findCountry(event.target.value);
    } else {
      clearCountry();
    }
  }

  /**
   * Render.
   */

  render() {
    const { countries: { item, loading } } = this.props;

    return (
      <>
        <div className="container">
          <div className="content">
            <h1>
              <span role="img" aria-label="world">🌎</span>
              Countries
            </h1>
            <h2>Get information about countries</h2>

            <div className="fake-search">
              <span role="img" aria-label="magnifying glass">🔎</span>
              <input
                className="search"
                placeholder="Insert a country name"
                onChange={this.handleSearch}
                type="text"
              />
            </div>

            {loading && (
              <div className="loading">
                Loading ...
              </div>
            )}

            {!loading && item && item.map((country) => (
              <CountryBlock
                item={country}
                key={country.alpha3Code}
              />
            ))}
          </div>

          <footer>
            made with
            <span role="img" aria-label="heart">💙</span>
            by itsnunolemos

            <div>
              <span role="img" aria-label="link">🔗</span>
              api by
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://restcountries.eu/"
              >
                restcountries.eu
              </a>
            </div>

            <div>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.twitter.com/itsnunolemos/"
              >
                Twitter
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.medium.com/@itsnunolemos/"
              >
                Medium
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/nunorlemos/"
              >
                Linkedin
              </a>
            </div>
          </footer>
        </div>
      </>
    );
  }
}

/**
 * Prop types.
 */

PageHomepage.propTypes = {
  countries: PropTypes.shape({
    error: PropTypes.object,
    item: PropTypes.array,
    items: PropTypes.array,
    loading: PropTypes.bool
  }).isRequired,
  getCountries: PropTypes.func,
  getCountry: PropTypes.func,
  resetCountry: PropTypes.func
};

PageHomepage.defaultProps = {
  getCountries: null,
  getCountry: null,
  resetCountry: null
};

/**
 * State and dispatch props.
 */

const mapStateToProps = (state) => ({
  countries: state.countries
});

const mapDispatchToProps = (dispatch) => ({
  getCountries: () => dispatch(getCountries()),
  getCountry: (name) => dispatch(getCountry(name)),
  resetCountry: () => dispatch(resetCountry())
});

/**
 * Export `PageHomepage`.
 */

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PageHomepage);
