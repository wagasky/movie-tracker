/* eslint-disable */

import usersReducer from './usersReducer';
import * as actions from '../../actions/index';

describe('usersReducer', () => {

  it('should return a default state', () => {
    const expected = {};

    expect(usersReducer(undefined, {})).toEqual(expected);
  })
}) 