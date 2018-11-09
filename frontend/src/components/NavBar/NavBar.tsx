import * as React from 'react';
import { NavBarProps } from '../../../interfaces';
import * as s from './NavBar.css';
import logo from './static/logo.svg';


class NavBar extends React.Component<NavBarProps, {title: string, loggedin: boolean}> {

  constructor(props: NavBarProps) {
    super(props);
    this.state = {title: this.props.info.title, loggedin: this.props.status.loggedin}
  }

  public render() {
    return (
      <header>
        <img src={logo} alt={this.state.title} />
        <nav style={s.nav}>
          <ul>
            <li>
              <a href={"#"}>Home</a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default NavBar;
