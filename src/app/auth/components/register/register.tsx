'use client'
import { Button } from '@radix-ui/themes'
import { LockKeyhole, Mail, User } from 'lucide-react'
import { Alert, Input, Loader } from '@/app/components/ui'
import { useRegister } from './hook/useRegister'

export function Register() {
  const {
    handleSubmit,
    handleSignUp,
    register,
    errors,
    isError,
    isLoading,
    error,
  } = useRegister()

  if (isError && error) {
    return <Alert message={error} />
  }

  if (isLoading) {
    return <Loader text="Carregando" />
  }

  return (
    <form onSubmit={handleSubmit(handleSignUp)}>
      <Input
        {...register('username')}
        id="username"
        type="username"
        placeholder="Username"
        icon={User}
        error={!!errors.username?.message}
        helperText={errors.username?.message}
      />

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
        Cadastrar
      </Button>
    </form>
  )
}
