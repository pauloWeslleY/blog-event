import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { schemaRegister } from '@/app/(authenticated)/register/schema'
import { SignUpProps } from '@/app/(authenticated)/register/types'
import { useUserAuth } from '@/app/hook'

const useRegister = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpProps>({
    mode: 'all',
    reValidateMode: 'onChange',
    resolver: zodResolver(schemaRegister),
  })

  const { signUp } = useUserAuth()

  const handleSignUp = (data: SignUpProps) => {
    signUp.mutate(data)
  }

  return { handleSignUp, register, handleSubmit, errors }
}

export { useRegister }
