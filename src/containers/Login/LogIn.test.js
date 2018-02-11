/* eslint-disable */

import React from 'react';
import { shallow } from 'enzyme';
import LogIn from './LogIn';

describe('LogIn', () => {
  let wrapper;

  beforeEach((), => {
    wrapper = shallow(<LogIn />)
  })

  it('should set state of email and password', () => {

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
    }))
  })

  it.skip('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

})