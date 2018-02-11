/* eslint-disable */

import React from 'react';
import { shallow } from 'enzyme';
import { MoviesDisplay, mapStateToProps, mapDispatchToProps } from './MoviesDisplay';
import { mockData } from '../../mockData'

describe('MoviesDisplay', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<MoviesDisplay movies={ mockData }/>);
  });

  it('should match snapshot',() => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should map to the store correctly', () => {
    const mockStore = {
      movies: mockData
    }
    const mapped = mapStateToProps(mockStore)

    expect(mapped).toEqual(mockStore)
  });

  it('should call the dispatch function when using a function from mapDispatchToProps', () => {
    const mockDispatch = jest.fn();
    const mapped = mapDispatchToProps(mockDispatch);

    mapped.loadMovies();
    mapped.showFavorites();

    expect(mockDispatch).toHaveBeenCalled();
  });
})