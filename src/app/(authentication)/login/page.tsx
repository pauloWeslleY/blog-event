'use client'
import { Button } from '@radix-ui/themes'
import { useUserAuthSignInStore } from '@/main/store'
import { FormError } from '@/app/components/ui'
import { useLogin } from './hook'

const Login = () => {
  const { handleSubmit, handleSignIn, register, errors } = useLogin()
  const { userAuthSignIn } = useUserAuthSignInStore()

  return (
    <form onSubmit={handleSubmit(handleSignIn)}>
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

      <FormError error={userAuthSignIn} />

      <Button type="submit" size="3" style={{ width: '100%' }}>
        Entrar
      </Button>
    </form>
  )
}

export default Login
