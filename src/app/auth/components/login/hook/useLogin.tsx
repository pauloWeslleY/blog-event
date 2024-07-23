import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { SignInProps } from '@/app/auth/components/login/types'
import { useAuth } from '@/app/auth/hook'
import { schemaAuthLogin } from '@/validation'
import { useLoaderStore } from '@/main/store'

function useLogin() {
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

  const { setLoader } = useLoaderStore()

  const {
    authSignIn: { mutate, isError, isPending, error, data },
  } = useAuth()

  useEffect(() => {
    setLoader(isPending)
  }, [setLoader, isPending])

  function handleSignIn(params: SignInProps) {
    mutate(params)
  }

  return {
    handleSignIn,
    handleSubmit,
    register,
    errors,
    isError,
    isPending,
    error,
    data,
  }
}

export { useLogin }
