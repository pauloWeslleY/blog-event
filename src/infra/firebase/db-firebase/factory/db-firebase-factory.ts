import { Auth, UserCredential } from 'firebase/auth'
import {
  IFirebase,
  initApp,
  ISignIn,
  ISignOut,
  ISignUp,
  RemoteAuthSignIn,
  RemoteAuthSignOut,
  RemoteAuthSignUp,
  RemoteFirebase,
} from '@/infra/firebase'

export class DBFirebase {
  public static database(): IFirebase {
    return new RemoteFirebase(initApp.initializeApp())
  }

  public static signUpAuth(auth: Auth): ISignUp<UserCredential> {
    return new RemoteAuthSignUp(auth)
  }

  public static signInAuth(auth: Auth): ISignIn<UserCredential> {
    return new RemoteAuthSignIn(auth)
  }

  public static signOutAuth(auth: Auth): ISignOut {
    return new RemoteAuthSignOut(auth)
  }
}
