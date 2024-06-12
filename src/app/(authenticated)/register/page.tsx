/* eslint-disable prettier/prettier */
'use client'

import { ReactNode } from 'react'
import { Input } from '@/app/components/ui'
import { useErrors, useUserAuth } from '@/app/hook'
import { useUserAuthStore } from '@/main/store'
import { useRegister } from './hook'
import './styles.css'

const Register = () => {
  const { handleSubmit, handleSignUp, register, errors } = useRegister()
  const { signUp } = useUserAuth()
  const { userAuth } = useUserAuthStore()
  const { emailAlreadyInUse } = useErrors()

  return (
    <form className="ui form" onSubmit={handleSubmit(handleSignUp)}>
      <Input
        {...register('username')}
        label="Username"
        type="text"
        placeholder="Digite seu username"
        error={!!errors.username?.message}
        helperText={errors.username?.message}
      />

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

      {signUp.isPending && (
        <div className="ui icon message">
          <i aria-hidden="true" className="circle notched loading icon"></i>
          <div className="content">
            <div className="header">Just one second</div>We are fetching that
            content for you.
          </div>
        </div>
      )}

      {userAuth === emailAlreadyInUse.message && (
        <div className="ui negative message">
          <div className="header">{userAuth as ReactNode}</div>
        </div>
      )}

      <button
        disabled={signUp.isPending}
        className={signUp.isPending ? 'ui button loading' : 'ui button'}
        type="submit"
      >
        Cadastrar
      </button>
    </form>
  )
}

export default Register
