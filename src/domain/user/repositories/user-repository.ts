import { updateProfile, UserCredential } from 'firebase/auth'
import { FirebaseError } from 'firebase/app'
import { doc, setDoc } from 'firebase/firestore'
import { AccountModel } from '@/data/models'
import { COLLECTIONS, IFirebase } from '@/infra/firebase'
import { User } from '@/domain/user'
import { userRepoAdapter } from './user-adapter'

interface IUserRepoResponse {
  data: AccountModel | null
  error: FirebaseError | null | string
}

interface UserRepositoryDependencies {
  readonly database: IFirebase
}

export interface IUserRepository {
  save(
    credential: UserCredential | null,
    user: User,
  ): Promise<IUserRepoResponse>
}

export class UserRepository {
  private database: IFirebase
  private response: IUserRepoResponse
  private accessToken: string

  constructor(protected readonly dependencies: UserRepositoryDependencies) {
    this.database = dependencies.database
    this.accessToken = ''
    this.response = { data: null, error: null }
  }

  async save(
    credential: UserCredential | null,
    user: User,
  ): Promise<IUserRepoResponse> {
    await this.create(credential, user)
    return this.response
  }

  private async create(
    credential: UserCredential | null,
    user: User,
  ): Promise<void> {
    if (!credential) {
      this.response.error = 'Não foi possível cadastrar usuário'
      return
    }

    this.accessToken = await credential.user.getIdToken()

    await setDoc(
      doc(this.database.collection(COLLECTIONS.USERS), credential.user.uid),
      { ...user },
    )
      .then(() => {
        this.response.data = userRepoAdapter.userAdapter(user, this.accessToken)
      })
      .catch((error: unknown) => {
        if (error instanceof FirebaseError) {
          this.response.error = error
        }
      })

    await updateProfile(credential.user, {
      displayName: user.username,
    })
  }
}
