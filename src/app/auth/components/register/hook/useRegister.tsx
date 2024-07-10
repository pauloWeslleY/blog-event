import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { SignUpProps } from '@/app/auth/components/register/types'
import { useAuth } from '@/app/auth/hook'
import { schemaAuthRegister } from '@/validation'

const useRegister = () => {
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

  const {
    authSignUp: { mutate, isError, isPending, error, data },
  } = useAuth()

  const handleSignUp = (params: SignUpProps) => {
    mutate(params)
  }

  return {
    handleSignUp,
    handleSubmit,
    register,
    errors,
    isError,
    isPending,
    error,
    data,
  }
}

export { useRegister }
