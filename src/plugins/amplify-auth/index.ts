/* eslint-disable @typescript-eslint/no-var-requires */
import { Auth } from 'aws-amplify'
import {
  SignUpParams,
  SignInOpts,
  SignOutOpts,
  CurrentUserOpts,
  // ClientMetaData,
} from '@aws-amplify/auth/lib-esm/types'
import { CognitoUser } from 'amazon-cognito-identity-js'
// import { Authenticator } from '@aws-amplify/ui-react'

/**
 * amplify sign up function.
 * @return {Promise<CognitoUser>}
 */
export async function amplifySignUp(): Promise<CognitoUser> {
  try {
    const { user } = await Auth.signUp({
      username: '',
      password: '',
      attributes: {
        email: '', // optional
        phone_number: '', // optional - E.164 number convention
        // other custom attributes
      },
    } as SignUpParams)

    console.log('success signing up:', JSON.stringify(user, null, 2))
    return user
  } catch (error: unknown) {
    console.log('error signing up:', error)
    throw error as never
  }
}

/**
 * amplify sign in function.
 * @param {string} username
 * @param {string} password
 * @return {Promise<CognitoUser>}
 */
export async function amplifySignIn(
  username: string,
  password: string
): Promise<CognitoUser> {
  try {
    const user: CognitoUser = await Auth.signIn({
      username,
      password,
    } as SignInOpts)

    console.log('success signing in:', JSON.stringify(user, null, 2))
    return user
  } catch (error: unknown) {
    console.log('error signing in:', error)
    throw error as never
  }
}

/**
 * amplify sign out function.
 * @description global sign out: if `global` is `true` in parameter, you sign out users from all devices.
 * @param {Record<'global', boolean | undefined>} options
 * @return {Promise<boolean>}
 */
export async function amplifySignOut(
  options?: Record<'global', boolean | undefined>
): Promise<boolean> {
  try {
    const response = await Auth.signOut(options as SignOutOpts)

    console.log('success signing out:', JSON.stringify(response, null, 2))
    return true
  } catch (error: unknown) {
    console.log('error signing out:', error)
    throw error as never
  }
}

/* Password & user management */

/**
 * amplify current authenticated user function.
 * @param {boolean} bypassCache - true, this call will send a request to Cognito to get the latest user data
 * @return {Promise<CognitoUser>}
 */
export async function amplifyCurrentUser(
  bypassCache = false
): Promise<CognitoUser> {
  try {
    const user: CognitoUser = await Auth.currentAuthenticatedUser({
      bypassCache,
    } as CurrentUserOpts)

    console.log('success current user:', JSON.stringify(user, null, 2))
    return user
  } catch (error: unknown) {
    console.log('error current user:', error)
    throw error as never
  }
}

/**
 * amplify change password function.
 * @param {string} oldPassword
 * @param {string} newPassword
 * @return {Promise<CognitoUser>}
 */
export async function amplifyChangePassword(
  oldPassword: string,
  newPassword: string
): Promise<boolean> {
  try {
    return await Auth.currentAuthenticatedUser()
      .then((user: CognitoUser) => {
        return Auth.changePassword(user, oldPassword, newPassword).then(() => {
          return true
        })
      })
      .catch((error: unknown) => {
        console.log('error change password:', error)
        throw error as never
      })
  } catch (error: unknown) {
    console.log('error current user:', error)
    throw error as never
  }
}

/**
 * amplify forgot password function.
 * @param {string} username
 * @return {Promise<boolean>}
 */
export async function amplifyForgotPassword(
  username: string
): Promise<boolean> {
  try {
    // Send confirmation code to user's email
    await Auth.forgotPassword(username).then((res: any) => {
      console.log('success forgot password:', res)
    })
    return true
  } catch (error: unknown) {
    console.log('error forgot password:', error)
    throw error as never
  }
}

/**
 * amplify forgot password submit function.
 * @param {string} username
 * @param {string} code - confirmation code
 * @param {string} newPassword
 * @return {Promise<boolean>}
 */
export async function amplifyForgotPasswordSubmit(
  username: string,
  code: string,
  newPassword: string
): Promise<boolean> {
  try {
    // Collect confirmation code and new password, then
    await Auth.forgotPasswordSubmit(username, code, newPassword).then(
      (res: string) => {
        console.log('success forgot password submit:', res)
      }
    )
    return true
  } catch (error: unknown) {
    console.log('error forgot password submit:', error)
    throw error as never
  }
}

/**
 * amplify complete change  to new password function.
 * @param {string} username
 * @param {string} newPassword
 * @return {Promise<CognitoUser>}
 */
export async function amplifyCompleteNewPassword(
  username: string,
  newPassword: string
): Promise<boolean> {
  return await Auth.signIn(username, newPassword)
    .then((user: CognitoUser) => {
      /* if (user.cha) {
      } */
      return true
    })
    .catch((error: unknown) => {
      console.log('error current user:', error)
      throw error as never
    })
}
