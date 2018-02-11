/* eslint-disable */

import React from 'react';
import { shallow } from 'enzyme';
import Splash from './Splash';
import LogIn from '../../containers/LogIn/LogIn';
import Register from '../../containers/Register/Register';

describe('Splash', () => {
  let wrapper;

 it('should render the LogIn component', () => {
    const mockLocation = {
      pathname: '/login'
    }
    wrapper = shallow(<Splash location={ mockLocation }/>);

    expect(wrapper.find(LogIn).length).toEqual(1);
    expect(wrapper).toMatchSnapshot();
  });

 it('should render the Register component', () => {
  const mockLocation = {
      pathname: '/register'
    }
    wrapper = shallow(<Splash location={ mockLocation }/>);

    expect(wrapper.find(Register).length).toEqual(1);
    expect(wrapper).toMatchSnapshot();
 });
})