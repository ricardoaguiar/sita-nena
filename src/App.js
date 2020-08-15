import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { Home } from './containers/Home/Home';
import { PickGamePage } from './containers/PickGamePage/PickGamePage.component';
import { PickLevelPage } from './containers/PickLevelPage/PickLevelPage.component';
import { GamePage } from './containers/GamePage/GamePage.component';
import { RecipePage } from './containers/RecipePage/RecipePage.component';
import { VoucherPage } from './containers/VoucherPage/VoucherPage.component';
// import  Game  from './components/Game/Game.js';
import { ErrorPage } from './containers/404Page/404Page.component';
// import Timer from './components/Timer/Timer.js';

function App() {
  return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/game-page">
            <GamePage />
          </Route>
          <Route exact path="/pick-game-page">
            <PickGamePage />
          </Route>
          <Route exact path="/pick-level-page">
            <PickLevelPage />
          </Route>
          <Route exact path="/recipe-page">
            <RecipePage />
          </Route>
          <Route exact path="/voucher-page">
            <VoucherPage />
          </Route>
          <Route exact path="/404-page">
            <ErrorPage />
          </Route>
          <Redirect to="/404-page" />
        </Switch>
      </Router>
  
  );
}
export default App;
