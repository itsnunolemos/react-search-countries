
/**
 * Module dependencies.
 */

import { Switch, Route } from 'react-router-dom';
import React from 'react';
import PageHomepage from '../pages/homepage/page-homepage';

/**
 * Export `Routes`.
 */

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={PageHomepage} />
    </Switch>
  );
}
