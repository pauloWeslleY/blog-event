import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { schemaLogin } from '@/app/(authenticated)/login/schema'
import { SignInProps } from '@/app/(authenticated)/login/types'
import { useUserAuth } from '@/app/hook'

const useLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInProps>({
    mode: 'all',
    reValidateMode: 'onChange',
    resolver: zodResolver(schemaLogin),
  })

  const { signIn } = useUserAuth()

  const handleSignIn = (data: SignInProps) => signIn.mutate(data)

  return { handleSignIn, register, handleSubmit, errors }
}

export { useLogin }
