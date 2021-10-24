import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AppCard } from './pages/AppCard';
import { CreateCard } from './pages/CreateCard';
import { Login } from './pages/Login';
import { MainApp } from './pages/MainApp';
import { PlayCardByDesk } from './pages/PlayCardByDesk';
import { Register } from './pages/Register';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <MainApp />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/cards/:desk_name">
            <AppCard />
          </Route>
          <Route path="/create/cards/:card_id">
            <CreateCard />
          </Route>
          <Route path="/play/:desk_name">
            <PlayCardByDesk />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
