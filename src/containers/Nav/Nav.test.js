/* eslint-disable */

import React from 'react';
import { shallow } from 'enzyme';
import { Nav, mapStateToProps, mapDispatchToProps } from './Nav';

describe('Nav', () => {
  let wrapper;

  beforeEach(() => {
    const mockUser = {
      name: 'Natalie'
    }
    wrapper = shallow(<Nav user={ mockUser }/>)
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should map to store correctly', () => {
    const mockStore = {
      current_user: {
        name: 'Natalie'
      }
    }
    const expected = {
      user: {
        name: 'Natalie'
      }
    }
    const mapped = mapStateToProps(mockStore);

    expect(mapped).toEqual(expected);
  });

  it('should call dispatch method when a function from mapDispatchToProps is called', () => {
    const mockDispatch = jest.fn();
    const mapped = mapDispatchToProps(mockDispatch);

    mapped.logOutUser();

    expect(mockDispatch).toHaveBeenCalled();
  });

});