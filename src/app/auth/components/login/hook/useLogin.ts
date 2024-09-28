import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { SignInProps } from '@/app/auth/components/login/types/login-props'
import { schemaAuthLogin } from '@/validation'
import { useAuthentication } from './useAuthentication'

export function useLogin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInProps>({
    mode: 'all',
    reValidateMode: 'onChange',
    resolver: zodResolver(schemaAuthLogin),
    defaultValues: {
      email: '',
      password: '',
    },
  })
  const { error, isError, isLoading, handlerAuthentication } =
    useAuthentication()

  async function handleSignIn(params: SignInProps) {
    await handlerAuthentication(params)
  }

  return {
    error,
    errors,
    isError,
    isLoading,
    register,
    handleSignIn,
    handleSubmit,
  }
}
