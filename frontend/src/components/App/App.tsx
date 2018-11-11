import { createBrowserHistory } from 'history';
import * as React from 'react';
import { Route, Router } from 'react-router';

import { AppInfo, UserStatus } from '../../../interfaces';
import Home from '../Home';
import NavBar from '../NavBar';
import Styles from './App.styles';

const history = createBrowserHistory();
const s = new Styles;

const info: AppInfo = {title: "devlpcode"};

let user: UserStatus;
user = {loggedin: false};

class App extends React.Component<{}, {}> {
  public componentDidMount() {
    user = {loggedin: false};
  }
  public render() {
    return (
      <div className={s.body}>
        <NavBar status={user} info={info} />
        <Router history={history}>
          <Route exact={true} path="/" component={Home} />
        </Router>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
