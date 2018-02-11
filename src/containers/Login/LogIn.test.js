/* eslint-disable */

import React from 'react';
import { shallow } from 'enzyme';
import { LogIn, mapDispatchToProps } from './LogIn';

describe('LogIn', () => {
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
    
    expect(wrapper.state()).toEqual(expected)
  });


  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call dispatch method when using function from mapDispatchToProps', () => {
    const mockDispatch = jest.fn();
    const mapped = mapDispatchToProps(mockDispatch);

    mapped.setUser();

    expect(mockDispatch).toHaveBeenCalled();
  });

})
