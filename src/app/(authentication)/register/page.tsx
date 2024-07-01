'use client'

import { Button } from '@radix-ui/themes'
import { useUserAuthStore } from '@/main/store'
import { FormError } from '@/app/components/ui'
import { useRegister } from './hook'

const Register = () => {
  const { handleSubmit, handleSignUp, register, errors } = useRegister()
  const { userAuth } = useUserAuthStore()

  return (
    <form onSubmit={handleSubmit(handleSignUp)}>
      <fieldset className="Fieldset">
        <label className="Label" htmlFor="Username">
          Username
        </label>
        <input
          {...register('username')}
          id="username"
          type="Username"
          placeholder="Username"
          className="Input"
        />
        {errors.username?.message && <span>{errors.username?.message}</span>}
      </fieldset>

      <fieldset className="Fieldset">
        <label className="Label" htmlFor="email">
          Email
        </label>
        <input
          {...register('email')}
          id="email"
          type="email"
          placeholder="Email"
          className="Input"
        />
        {errors.email?.message && <span>{errors.email?.message}</span>}
      </fieldset>

      <fieldset className="Fieldset">
        <label className="Label" htmlFor="password">
          Password
        </label>
        <input
          {...register('password')}
          id="password"
          type="password"
          placeholder="Password"
          className="Input"
        />
        {errors.password?.message && <span>{errors.password?.message}</span>}
      </fieldset>

      <FormError error={userAuth} />

      <Button type="submit" size="3" style={{ width: '100%' }}>
        Cadastrar
      </Button>
    </form>
  )
}

export default Register
