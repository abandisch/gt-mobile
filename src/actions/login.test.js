import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as login from './login';
import * as types from './types';
import * as expoLogin from '../api/logins';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

jest.mock('./index', () => ({
  fetchJWT: jest.fn(() => () => Promise.resolve()),
}));

describe('login async actions', () => {
  describe('loginWithGoogle', () => {
    it('creates a LOGIN_GOOGLE_SUCCESS when logging in a user with Google', () => {
      const mockUser = {
        socialUserId: 'test',
        image: 'image.jpg',
        email: 'test@test.com',
        name: 'test',
        socialAppTokens: { type: 'Google' },
      };

      expoLogin.processGoogleLogin = jest.fn(() => Promise.resolve({ ...mockUser }));

      const expectedActions = [
        { type: types.LOGIN_GOOGLE_REQUEST },
        { type: types.LOGIN_GOOGLE_SUCCESS, user: { ...mockUser } },
      ];

      const store = mockStore({ user: {}, loading: false });

      return store.dispatch(login.loginWithGoogle()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    it('creates a LOGIN_GOOGLE_FAILURE when failing to login with Google', () => {
      expoLogin.processGoogleLogin = jest.fn(() => Promise.reject(new Error('Failed to login with Google')));

      const expectedActions = [
        { type: types.LOGIN_GOOGLE_REQUEST },
        { type: types.LOGIN_GOOGLE_FAILURE, error: 'Failed to login with Google' },
      ];

      const store = mockStore({ user: {}, loading: false });

      return store.dispatch(login.loginWithGoogle()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });

  describe('loginWithFacebook', () => {
    it('creates a LOGIN_FACEBOOK_SUCCESS when logging in a user with Facebook', () => {
      const mockUser = {
        socialUserId: 'test',
        image: 'image.jpg',
        email: 'test@test.com',
        name: 'test',
        socialAppTokens: { type: 'Facebook' },
      };

      expoLogin.processFacebookLogin = jest.fn(() => Promise.resolve({ ...mockUser }));

      const expectedActions = [
        { type: types.LOGIN_FACEBOOK_REQUEST },
        { type: types.LOGIN_FACEBOOK_SUCCESS, user: { ...mockUser } },
      ];

      const store = mockStore({ user: {}, loading: false });

      return store.dispatch(login.loginWithFacebook()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    it('creates a LOGIN_FACEBOOK_FAILURE when failing to login with Facebook', () => {
      expoLogin.processFacebookLogin = jest.fn(() => Promise.reject(new Error('Failed to login with Facebook')));

      const expectedActions = [
        { type: types.LOGIN_FACEBOOK_REQUEST },
        { type: types.LOGIN_FACEBOOK_FAILURE, error: 'Failed to login with Facebook' },
      ];

      const store = mockStore({ user: {}, loading: false });

      return store.dispatch(login.loginWithFacebook()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
});
