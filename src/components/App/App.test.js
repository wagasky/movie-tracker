/* eslint-disable */

import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import mockData from '../../mockData';
import App from './App';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

})

