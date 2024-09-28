'use client'
import { Button } from '@radix-ui/themes'
import { LockKeyhole, Mail } from 'lucide-react'
import { Alert, Input, Loader } from '@/app/components/ui'
import { useLogin } from './hook/useLogin'

export function Login() {
  const {
    handleSubmit,
    handleSignIn,
    register,
    errors,
    error,
    isLoading,
    isError,
  } = useLogin()

  if (isLoading) {
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

      {isError && error && <Alert message={error} />}

      <Button type="submit" size="3">
        Entrar
      </Button>
    </form>
  )
}
