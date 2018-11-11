import { mount } from 'enzyme';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as sinon from 'sinon';
import { AppInfo, UserStatus } from '../../../interfaces';
import App from '../App';
import NavBar from '../NavBar';

describe('<App />', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<App />, div);
		ReactDOM.unmountComponentAtNode(div);
	});
	it('calls componentDidMount', () => {
		sinon.spy(App.prototype, 'componentDidMount');
		mount(<App />);
		expect(App.prototype.componentDidMount).toHaveProperty('callCount', 1);
	});
	it('calls NavBar', () => {
		let info: AppInfo;
		info = {title: "devlpcode"};
		let user: UserStatus;
		user = {loggedin: false};
		const wrapper = mount(<App />);
		expect(wrapper.contains(<NavBar status={user} info={info}/>)).toBe(true);
	});
});
