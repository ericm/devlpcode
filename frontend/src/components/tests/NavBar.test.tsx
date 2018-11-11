import { mount } from 'enzyme';
import * as React from 'react';
// import * as sinon from 'sinon';
import { AppInfo, UserStatus } from '../../../interfaces';
import NavBar from '../NavBar';

describe ('<NavBar />', () => {
    it('accepts props', () => {
        const info: AppInfo = {title: "devlpcode"};
		let user: UserStatus;
		user = {loggedin: false};
		const wrapper = mount(<NavBar status={user} info={info}/>);
		expect(wrapper.props().info).toBe(info);
		expect(wrapper.props().status).toBe(user);
		
		user = {loggedin: true};
		wrapper.setProps({status: user});
		expect(wrapper.props().status).toBe(user);
    });
});