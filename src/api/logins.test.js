import { processFacebookLogin, processGoogleLogin } from './logins';

jest.mock('./expoLogin');
const expo = require('./expoLogin');

describe('# processFacebookLogin - success', () => {
  it('should successfully login with Facebook', async () => {
    expo.ExpoFacebookLogin.mockImplementationOnce(() => ({ type: 'success', token: 'token-1234567890', expires: 'expires-1234567890' }));
    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json() {
          return ({
            id: 'testid-1234567890',
            picture: {
              data: {
                height: 50,
                width: 50,
                is_silhouette: false,
                url: '/path/to/image.jpg',
              },
            },
            name: 'Test Name',
            email: 'test@test.com',
          });
        },
      }));

    const expectedResult = {
      socialUserId: 'testid-1234567890',
      image: '/path/to/image.jpg',
      socialAppTokens:
     {
       type: 'Facebook',
       accessToken: 'token-1234567890',
       expires: 'expires-1234567890',
     },
      name: 'Test Name',
      email: 'test@test.com',
    };

    processFacebookLogin().then(result => expect(result).toEqual(expectedResult));
  });
});

describe('# processGoogleLogin - success', () => {
  it('should successfully login with Google', async () => {
    expo.ExpoGoogleLogin.mockImplementationOnce(() =>
      ({
        type: 'success',
        accessToken: 'accessToken-1234567890',
        idToken: 'idToken-1234567890',
        refreshToken: 'refreshToken-1234567890',
        serverAuthCode: 'serverAuthCode-1234567890',
        user: {
          id: 'userid-1234567890',
          email: 'test@test.com',
          familyName: 'Last',
          givenName: 'First',
          name: 'First Last Name',
          photoUrl: '/path/to/image.jpg',
        },
      }));
    const expectedResult = {
      socialUserId: 'userid-1234567890',
      image: '/path/to/image.jpg',
      email: 'test@test.com',
      name: 'First Last Name',
      socialAppTokens: {
        type: 'Google',
        accessToken: 'accessToken-1234567890',
        idToken: 'idToken-1234567890',
        refreshToken: 'refreshToken-1234567890',
        serverAuthCode: 'serverAuthCode-1234567890',
      },
    };

    processGoogleLogin().then(result => expect(result).toEqual(expectedResult));
  });
});

describe('# processFacebookLogin - fail', () => {
  it('should provide an error when user fails to login with Facebook', async () => {
    expo.ExpoFacebookLogin.mockImplementationOnce(() => ({ type: undefined }));
    processFacebookLogin()
      .catch(err => expect(err).toEqual('Error: Unable to login with Facebook'));
  });
});

describe('# processGoogleLogin - fail', () => {
  it('should provide an error when user fails to login with Google', async () => {
    expo.ExpoGoogleLogin.mockImplementationOnce(() => ({ type: undefined }));
    processGoogleLogin()
      .catch(err => expect(err).toEqual('Error: Failed to login with Google'));
  });
});

describe('# processFacebookLogin - cancel', () => {
  it('should provide an error when user cancels login with Facebook', async () => {
    expo.ExpoFacebookLogin.mockImplementationOnce(() => ({ type: 'cancel' }));
    processFacebookLogin()
      .catch(err => expect(err).toEqual('Error: User cancelled Facebook login'));
  });
});

describe('# processGoogleLogin - cancel', () => {
  it('should provide an error when user cancels login with Google', async () => {
    expo.ExpoGoogleLogin.mockImplementationOnce(() => ({ type: 'cancel' }));
    processGoogleLogin()
      .catch(err => expect(err).toEqual('Error: User cancelled Google login'));
  });
});
