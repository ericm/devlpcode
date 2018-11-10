import * as React from 'react';
import { AppInfo, UserStatus } from '../../../interfaces';
import NavBar from '../NavBar';
import Styles from './App.styles';

const s = new Styles;

const info: AppInfo = {title: "devlpcode"};

let user: UserStatus;
user = {loggedin: false};

class App extends React.Component<{}, {}> {
  public render() {
    return (
      <div className={s.body}>
        <NavBar status={user} info={info} />
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
