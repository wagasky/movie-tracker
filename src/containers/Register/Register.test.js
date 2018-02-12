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
  });

  it('should call dispatch method when using a function in mapDispatchToProps', () => {
    const mockDispatch = jest.fn();
    const mapped = mapDispatchToProps(mockDispatch);

    mapped.addNewUser();
    mapped.setUser();

    expect(mockDispatch).toHaveBeenCalled();
  });

  it.skip('should set state if registration is successful', async () => {
    wrapper = shallow(<Register />)
    const mockEvent = { preventDefault: jest.fn() };
  
    window.fetch = jest.fn().mockImplementationOnce(() => Promise.resolve({
      json: () => Promise.resolve({
        status: 'success'
      })
    }))

    await wrapper.instance().registerSubmit(mockEvent);
    wrapper.update()

    expect(wrapper.state('newAcctMessage')).toEqual("Registration successful. Please login.");
  });

  it('should set state if registration is not successful', async () => {
    wrapper = shallow(<Register />)
    const mockEvent = { preventDefault: jest.fn() };
  
    window.fetch = jest.fn().mockImplementationOnce(() => Promise.resolve({
      json: () => Promise.resolve({
        status: 'failure'
      })
    }))

    await wrapper.instance().registerSubmit(mockEvent);
    wrapper.update()

    expect(wrapper.state('errorMessage')).toEqual("That email is already registered. Please try again or login.");
  });
})