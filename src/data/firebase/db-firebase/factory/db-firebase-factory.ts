import { Auth } from 'firebase/auth'
import {
  IAuth,
  IFirebase,
  initApp,
  ISignOut,
  RemoteAuthSignIn,
  RemoteAuthSignOut,
  RemoteAuthSignUp,
  RemoteFirebase,
} from '@/data/firebase'

export class DBFirebase {
  public static database(): IFirebase {
    return new RemoteFirebase(initApp.initializeApp())
  }

  public static signUpAuth(auth: Auth): IAuth.SignUpAuth {
    return new RemoteAuthSignUp(auth)
  }

  public static signInAuth(auth: Auth): IAuth.SignInAuth {
    return new RemoteAuthSignIn(auth)
  }

  public static signOutAuth(auth: Auth): ISignOut {
    return new RemoteAuthSignOut(auth)
  }
}
