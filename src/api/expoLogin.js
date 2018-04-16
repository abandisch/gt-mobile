import Expo from 'expo';
import { FACEBOOK_APP_ID, GOOGLE_ANDROID_CLIENT_ID, GOOGLE_IOS_CLIENT_ID } from '../config';

export async function ExpoFacebookLogin() {
  return Expo.Facebook.logInWithReadPermissionsAsync(FACEBOOK_APP_ID, {
    permissions: ['public_profile', 'email'],
  });
}

export async function ExpoGoogleLogin() {
  return Expo.Google.logInAsync({
    androidClientId: GOOGLE_ANDROID_CLIENT_ID,
    iosClientId: GOOGLE_IOS_CLIENT_ID,
    scopes: ['profile', 'email'],
  });
}
