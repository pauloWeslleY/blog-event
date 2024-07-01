import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { SignInProps } from '@/app/(authentication)/login/types'
import { useUserAuth } from '@/app/hook'
import { schemaAuthLogin } from '@/validation'

const useLogin = () => {
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

  const { signIn } = useUserAuth()

  const handleSignIn = async (data: SignInProps) => {
    await signIn(data)
  }

  return { handleSignIn, register, handleSubmit, errors }
}

export { useLogin }
