/* eslint-disable */

import React from 'react';
import { shallow } from 'enzyme';
import FavoritesDisplay from './FavoritesDisplay';

describe('FavoritesDisplay', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<FavoritesDisplay />);
  })

  it.skip('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})