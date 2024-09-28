import { FirebaseError } from 'firebase/app'
import { IUserCreate } from '@/data/usecases'
import { IFirebase } from '@/infra/firebase'
import { User } from '../entities/user'
import { UserRepoFactory } from '../repositories/user-repo-factory'

interface RemoteCreateUserDependencies {
  readonly database: IFirebase
}

export class RemoteCreateUser implements IUserCreate {
  private database: IFirebase

  constructor(protected readonly dependencies: RemoteCreateUserDependencies) {
    this.database = dependencies.database
  }

  async create(params: IUserCreate.Params): Promise<RemoteCreateUser.Model> {
    const { credential, username } = params
    const user = new User({
      id: credential?.user.uid || '',
      email: credential?.user.email || '',
      username,
    })

    const response = UserRepoFactory.executeCreate(this.database)
    const { data, error } = await response.save(credential, user)

    return {
      data,
      error: error as FirebaseError,
    }
  }
}

namespace RemoteCreateUser {
  export type Model = IUserCreate.Model
}
