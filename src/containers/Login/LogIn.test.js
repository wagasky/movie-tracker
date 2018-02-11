/* eslint-disable */

import React from 'react';
import { shallow } from 'enzyme';
import { LogIn, mapDispatchToProps } from './LogIn';

describe.skip('LogIn', () => {
  let wrapper;

  beforeEach(() => {
    
    wrapper = shallow(<LogIn />)
  })

  it('should have a default state', () => {
    const expected = {
      email: '',
      password: '',
      errorMessage: null
    }
    console.log(wrapper.state())
  });

  it('should fetch user credentials from database', () => {
    const userCredentials = {
      "email": "tman2272@aol.com",
      "password": "password"
    }

    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        status: 200,
        json: () => Promise.resolve(userCredentials)
      })
    })
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

})