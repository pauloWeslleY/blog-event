'use client'
import { Button } from '@radix-ui/themes'
import { LockKeyhole, Mail } from 'lucide-react'
import { Alert, FormError, Input, Loader } from '@/app/components/ui'

import { useLogin } from './hook'

export function Login() {
  const {
    handleSubmit,
    handleSignIn,
    register,
    errors,
    error,
    data,
    isPending,
    isError,
  } = useLogin()

  if (isError && error) {
    return <Alert message={error?.message} />
  }

  if (isPending) {
    return <Loader text="Autenticando" />
  }

  return (
    <form onSubmit={handleSubmit(handleSignIn)}>
      <Input
        {...register('email')}
        id="email"
        type="email"
        placeholder="Email"
        icon={Mail}
        error={!!errors.email?.message}
        helperText={errors.email?.message}
      />

      <Input
        {...register('password')}
        id="password"
        type="password"
        placeholder="Password"
        icon={LockKeyhole}
        error={!!errors.password?.message}
        helperText={errors.password?.message}
      />

      <FormError error={data} />

      <Button type="submit" size="3">
        Entrar
      </Button>
    </form>
  )
}
