import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { SignUpProps } from '@/app/auth/components/register/types/register-props'
import { schemaAuthRegister } from '@/validation'
import { useAddAccount } from './useAddAccount'

export function useRegister() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpProps>({
    mode: 'all',
    reValidateMode: 'onChange',
    resolver: zodResolver(schemaAuthRegister),
    defaultValues: {
      username: '',
      email: '',
      password: '',
    },
  })

  const { handlerAddAccount, error, isError, isLoading } = useAddAccount()

  async function handleSignUp(params: SignUpProps) {
    await handlerAddAccount(params)
  }

  return {
    handleSignUp,
    handleSubmit,
    register,
    errors,
    isError,
    isLoading,
    error,
  }
}
