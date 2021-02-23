import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import RegisterPage from './pages/registerPage';
import LoginPage from './pages/loginPage';
import ShorterPage from './pages/shorterPage';
import LinkPage from './pages/linkPage';
import TodoPage from './pages/todoPage';

function Routes() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/auth/shorter">
            <ShorterPage />
          </Route>
          <Route path="/auth/login">
            <LoginPage />
          </Route>
          <Route path="/auth/register">
            <RegisterPage />
          </Route>
          <Route path="/link/:id" component={props => <LinkPage id={props.match.params.id} />} />
          <Route path="/todo">
            <TodoPage />
          </Route>
          <Route path="/">
            <Redirect to='/auth/login' />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Routes;


// problem : create a todo page
// step 1: create a todo page
// step 2: create action todo.js in actions
// step 3: add todoslice in reducers