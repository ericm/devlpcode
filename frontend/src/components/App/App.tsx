import * as React from 'react';
import { AppInfo, UserStatus } from '../../../interfaces';
import NavBar from '../NavBar';
import './App.css';

const info: AppInfo = {title: "devlpcode"};
let user: UserStatus;
user = {loggedin: false};

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <NavBar status={user} info={info} />
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
