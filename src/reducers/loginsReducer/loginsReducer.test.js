/* eslint-disable */

import { loginsReducer } from './loginsReducer';
import * as actions from '../../actions/index';

describe('loginsReducer', () => {

  let mockUser;

  beforeEach(() => {
    mockUser = {
      email: "test@gmail.com",
      id: 0,
      name: "bob",
      password: "9999"
    };
  });

  it('should return a default state', () => {
    const expected = {};

    expect(loginsReducer(undefined, {})).toEqual(expected);
  })

  it('SET_USER should return state with the current user', () => {
    const action = actions.setUser(mockUser);
    const expected = mockUser;
    expect(loginsReducer(undefined, action)).toEqual(expected);
  })

  it('LOG_OUT_USER should remove the current user from state', () => {
    const action = actions.logOutUser(mockUser);
    const state = mockUser;
    const expected = {};

    expect(loginsReducer(state, action)).toEqual(expected);
  })
}) 