import {
  IAuth,
  IFirebase,
  initApp,
  RemoteAuthSignIn,
  RemoteAuthSignOut,
  RemoteAuthSignUp,
  RemoteFirebase,
} from '@/data/firebase'

export class DBFactory {
  public static database(): IFirebase {
    return new RemoteFirebase(initApp.initializeApp())
  }

  public static signUpAuth(): IAuth.SignUpAuth {
    return new RemoteAuthSignUp()
  }

  public static signInAuth(): IAuth.SignInAuth {
    return new RemoteAuthSignIn()
  }

  public static signOutAuth(): IAuth.SignOutAuth {
    return new RemoteAuthSignOut()
  }
}
