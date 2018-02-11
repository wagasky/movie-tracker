/* eslint-disable */

import React from 'react';
import { shallow } from 'enzyme';
import { FavoritesDisplay, mapStateToProps } from './FavoritesDisplay';
import mockData from '../../mockData';

describe('FavoritesDisplay', () => {
  let wrapper;

  beforeEach(() => {
    // const mockProps = {
    //   userId: 2,
    //   favorites: mockData
    // }
    // let mockLoadFavorites = jest.fn();
    // let mockGetFavorites = jest.fn();
    // let mockRenderFavorites = jest.fn();
    // window.fetch = jest.fn();

        // loadFavorite={ mockLoadFavorites }
        //                getFavorites={ mockGetFavorites }
        //                renderFavorites={ mockRenderFavorites }/>,

      // { disableLifecycleMethods: true }
    
    wrapper = shallow(<FavoritesDisplay />)
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should map to the store correctly', () => {
    const mockId = 0;
    const mockStore = {
      current_user: { 
        id: mockId 
      }
    }
    const mapped = mapStateToProps(mockStore)

    expect(mapped.userId).toEqual(mockStore.current_user.id);
  });
})