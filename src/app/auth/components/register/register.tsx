'use client'
import { Button } from '@radix-ui/themes'
import { LockKeyhole, Mail, User } from 'lucide-react'
import { Alert, FormError, Input } from '@/app/components/ui'
import Loading from '@/app/auth/loading'
import { useRegister } from './hook'

export function Register() {
  const {
    handleSubmit,
    handleSignUp,
    register,
    errors,
    isError,
    isPending,
    error,
    data,
  } = useRegister()

  if (isError && error) {
    return <Alert message={error?.message} />
  }

  if (isPending) {
    return (
      <div className="container-loader-login">
        <Loading />
      </div>
    )
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

      <FormError error={data} />

      <Button type="submit" size="3">
        Cadastrar
      </Button>
    </form>
  )
}
