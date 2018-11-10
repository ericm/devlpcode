import * as React from 'react';
import Styles from './Home.styles';

const s = new Styles;

class Home extends React.Component<{}, {}> {

  public render() {
    return (
      <main className={s.main}>
        <h1>Home</h1>
      </main>
    );
  }
}

export default Home;
