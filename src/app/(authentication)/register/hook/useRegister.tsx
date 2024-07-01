import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { SignUpProps } from '@/app/(authentication)/register/types'
import { useUserAuth } from '@/app/hook'
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

  const { signUp } = useUserAuth()

  const handleSignUp = (data: SignUpProps) => {
    signUp(data)
  }

  return { handleSignUp, register, handleSubmit, errors }
}

export { useRegister }
