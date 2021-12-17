/* eslint-disable @typescript-eslint/no-var-requires */
import { Auth } from 'aws-amplify'
import {
  SignUpParams,
  SignInOpts,
  SignOutOpts,
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
