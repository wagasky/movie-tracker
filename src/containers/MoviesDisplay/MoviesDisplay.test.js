/* eslint-disable */

import React from 'react';
import { shallow } from 'enzyme';
import MovieDisplay from './MovieDisplay';

describe('MovieDisplay', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<MovieDisplay />);
  })

  it.skip('should match snapshot',() => {
    expect(wrapper).toMatchSnapshot();
  })
})