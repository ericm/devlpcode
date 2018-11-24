import { createBrowserHistory } from 'history';
import * as React from 'react';
import { Route, Router } from 'react-router';

import { AppInfo, UserStatus } from '../../../interfaces';
import Users from '../../data/queries/users'
import Home from '../Home';
import NavBar from '../NavBar';
import Playground from '../Playground';
import Styles from './App.styles';

const history = createBrowserHistory();
const s = new Styles;

let info: AppInfo = {title: "loading"};

// TODO: get this info from ../data/queries/users.ts
let user: UserStatus;
user = new Users("eric").user;

class App extends React.Component<{}, {user: UserStatus, info: AppInfo}> {
  constructor(props: any) {
    super(props);
    this.state = {user, info};
  }
  public componentDidMount() {
    info = {title: "devlpcode"};
    this.setState({user, info});
  }
  
  public render() {
    return (
      <div className={s.body}>
        <NavBar status={user} info={info} />
        <Router history={history}>
        
          <div>
            <Route exact={true} path="/" component={Home} />
            <Route path="/edit" component={Playground} />
          </div>

        </Router>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
