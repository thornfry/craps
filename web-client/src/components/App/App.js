import { Container } from '@material-ui/core';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import { Landing } from '../Landing/Landing';
import { JoinGame } from '../JoinGame/JoinGame';
import { CreateGame } from '../CreateGame/CreateGame';
import { PlayArea } from '../PlayArea/PlayArea';

const App = () => {
  return (
      <div className="App">
        <Container maxWidth='md'>
          <Router>
            <Switch>
              <Route exact={true} path='/' component={Landing} />
              <Route path='/landing' component={Landing} />
              <Route path='/create' component={CreateGame} />
              <Route path='/join' component={JoinGame} />
              <Route path='/solo' component={Landing} />
              <Route path='/play' component={PlayArea} />
            </Switch>
          </Router>
        </Container>
      </div>
  );
}

export default App;
