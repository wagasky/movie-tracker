/* eslint-disable */

import React from 'react';
import { shallow } from 'enzyme';
import { Movie, mapStateToProps, mapDispatchToProps } from './Movie';
import { mockData } from '../../mockData';

describe('Movie', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Movie />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should map to the store correctly', () => {
    const mockCurrentUser = {
      "id": 1,
      "name": "Taylor",
      "password": "password",
      "email": "tman2272@aol.com"
    }
    const mockMovie = mockData;
    const mockStore = {
      current_user: mockCurrentUser,
      movies: mockMovie
    }
    const mapped = mapStateToProps(mockStore);

    expect(mapped).toEqual(mockStore)
  });

  it('should call checkFavorite when favoriteHandler is called', () => {
    const mockCheckFavorite = jest.fn();
    const mockCurrentUser = {
      "id": 1,
      "name": "Taylor",
      "password": "password",
      "email": "tman2272@aol.com"
    }
    const wrapper = shallow(<Movie current_user={ mockCurrentUser } /> );
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve({
        data: mockData
      })
    }))

    wrapper.instance().favoriteHandler();

    expect(window.fetch).toHaveBeenCalled();
  });

})