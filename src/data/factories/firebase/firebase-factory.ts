import { Auth, UserCredential } from 'firebase/auth'
import {
  IFirebase,
  ISignIn,
  ISignOut,
  ISignUp,
  RemoteAuthSignIn,
  RemoteAuthSignOut,
  RemoteAuthSignUp,
  RemoteFirebase,
} from '@/data/firebase'

export class DBFactory {
  public static database(): IFirebase {
    return new RemoteFirebase()
  }

  public static signUpAuth(): ISignUp<Auth, ISignUp.Model<UserCredential>> {
    return new RemoteAuthSignUp()
  }

  public static signInAuth(): ISignIn<Auth, ISignIn.Model<UserCredential>> {
    return new RemoteAuthSignIn()
  }

  public static signOutAuth(): ISignOut<Auth> {
    return new RemoteAuthSignOut()
  }
}
