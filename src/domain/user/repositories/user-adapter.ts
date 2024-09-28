import { AccountModel } from '@/data/models'
import { IUser } from '@/domain/user'

const userAdapter = (user: IUser, token: string): AccountModel => ({
  id: user.id,
  username: user.username,
  email: user.email,
  accessToken: token,
})

export const userRepoAdapter = { userAdapter }
