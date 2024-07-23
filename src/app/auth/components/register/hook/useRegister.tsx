import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { SignUpProps } from '@/app/auth/components/register/types'
import { useAuth } from '@/app/auth/hook'
import { schemaAuthRegister } from '@/validation'
import { useLoaderStore } from '@/main/store'

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

  const { setLoader } = useLoaderStore()

  const {
    authSignUp: { mutate, isError, isPending, error, data },
  } = useAuth()

  useEffect(() => {
    setLoader(isPending)
  }, [setLoader, isPending])

  function handleSignUp(params: SignUpProps) {
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
