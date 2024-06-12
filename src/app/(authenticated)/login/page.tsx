'use client'

import { Input } from '@/app/components/ui'
import { useUserAuthSignInStore } from '@/main/store'
import { useErrors, useUserAuth } from '@/app/hook'
import { useLogin } from './hook'
import './styles.css'

const Login = () => {
  const { handleSubmit, handleSignIn, register, errors } = useLogin()
  const { userAuthSignIn } = useUserAuthSignInStore()
  const { signIn } = useUserAuth()
  const { userNotFound, toManyRequests } = useErrors()

  return (
    <form className="ui form" onSubmit={handleSubmit(handleSignIn)}>
      <Input
        {...register('email')}
        label="Email"
        type="email"
        placeholder="Digite seu email"
        error={!!errors.email?.message}
        helperText={errors.email?.message}
      />

      <Input
        {...register('password')}
        label="Senha"
        type="password"
        placeholder="Digite sua senha"
        error={!!errors.password?.message}
        helperText={errors.password?.message}
      />

      {userAuthSignIn === userNotFound.message && (
        <div className="ui negative message">
          <div className="header">{userNotFound.message}</div>
        </div>
      )}

      {userAuthSignIn === toManyRequests.message && (
        <div className="ui negative message">
          <div className="header">{toManyRequests.message}</div>
        </div>
      )}

      {signIn.isPending ? (
        <div className="ui icon message">
          <i aria-hidden="true" className="circle notched loading icon"></i>
          <div className="content">
            <div className="header">Just one second</div>We are fetching that
            content for you.
          </div>
        </div>
      ) : (
        <button
          disabled={signIn.isPending}
          className={signIn.isPending ? 'ui button loading' : 'ui button'}
          type="submit"
        >
          Entrar
        </button>
      )}
    </form>
  )
}

export default Login
