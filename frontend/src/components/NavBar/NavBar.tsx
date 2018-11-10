import * as React from 'react';
import { NavBarProps } from '../../../interfaces';
import Styles from './NavBar.styles';
import logo from './static/logo.svg';

const s = new Styles;

class NavBar extends React.Component<NavBarProps, {title: string, loggedin: boolean}> {

  constructor(props: NavBarProps) {
    super(props);
    this.state = {title: this.props.info.title, loggedin: this.props.status.loggedin}
  }

  public render() {
    return (
      <header className={s.main}>
        <img className={s.logo} src={logo} alt={this.state.title} />
        <nav className={s.nav}>
          <ul className={s.ul}>
            <li className={s.item}>
              <a className={s.link} href={"#"}>Home</a>
            </li>
            <li className={s.item}>
              <a className={s.link} href={"#"}>About</a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default NavBar;
