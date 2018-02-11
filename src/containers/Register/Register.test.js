/* eslint-disable */

import React from 'react';
import { shallow, mount } from 'enzyme';
import { Register, mapDispatchToProps } from './Register';
import { Link } from 'react-router-dom';

describe('Register', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Register />)
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should call dispatch method when using a function in mapDispatchToProps', () => {
    const mockDispatch = jest.fn();
    const mapped = mapDispatchToProps(mockDispatch);

    mapped.addNewUser();
    mapped.setUser();

    expect(mockDispatch).toHaveBeenCalled();
  })

  it.skip('should call registerSubmit when the form is submitted', () => {
    const mockRegisterSubmit = jest.fn();
    const mockEvent = { preventDefault: jest.fn() };
    wrapper = shallow(<Register registerSubmit={ mockRegisterSubmit } />)
  
    wrapper.instance().registerSubmit(mockEvent);

    expect(mockRegisterSubmit).toHaveBeenCalled();
  })
})