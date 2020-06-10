import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch } from 'react-router';

export const wrapInRouter = (component) => {
  return (
    <Router>
      <Switch>
        {component}
      </Switch>
    </Router>
  )
}