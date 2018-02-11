/* eslint-disable */

import React from 'react';
import { shallow } from 'enzyme';
import { Movie, mapStateToProps, mapDispatchToProps } from './Movie';
import mockData from '../../mockData';

describe('Movie', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Movie />);


  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

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
  })

  it('should call checkFavorite when the favorite button is selected and favoriteHandler is called', () => {
    const mockFavoriteHandler = jest.fn();
    const mockCheckFavorite = jest.fn();
    const mockCurrentUser = {
      "id": 1,
      "name": "Taylor",
      "password": "password",
      "email": "tman2272@aol.com"
    }
    const wrapper = shallow(<Movie favoriteHandler={mockFavoriteHandler} 
                                   checkFavorite={mockCheckFavorite} 
                                   current_user={mockCurrentUser}

                                   /> );

    wrapper.instance().favoriteHandler();

    expect(mockFavoriteHandler).toHaveBeenCalled();
  })


})