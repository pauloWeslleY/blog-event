import { FirebaseError } from 'firebase/app'
import { FirebaseErrorCode } from '@/data/error'

export namespace FirebaseErrors {
  class Errors extends FirebaseError {
    constructor(
      public code: FirebaseErrorCode,
      public message: string,
    ) {
      super(code, message)
    }
  }

  export class UserNotFound extends Errors {
    constructor() {
      super(
        FirebaseErrorCode.USER_NOT_FOUND,
        'Não existe nenhum registro de usuário correspondente.',
      )
    }
  }

  export class UnexpectedError extends Errors {
    constructor() {
      super(
        FirebaseErrorCode.UNEXPECTED_ERROR,
        'Algo de errado aconteceu. Tente novamente em breve',
      )
    }
  }

  export class EmailAlreadyInUse extends Errors {
    constructor() {
      super(
        FirebaseErrorCode.EMAIL_ALREADY_IN_USE,
        'O e-mail fornecido já está em uso.',
      )
    }
  }

  export class EmailAlreadyExistsError extends Errors {
    constructor() {
      super(
        FirebaseErrorCode.EMAIL_ALREADY_EXISTS,
        'O e-mail fornecido já está em uso por um usuário existente. Cada usuário deve ter um email exclusivo.',
      )
    }
  }

  export class InvalidCredentialError extends Errors {
    constructor() {
      super(FirebaseErrorCode.INVALID_CREDENTIAL, 'Credenciais inválida')
    }
  }

  export class InvalidEmailError extends Errors {
    constructor() {
      super(
        FirebaseErrorCode.INVALID_EMAIL,
        'O valor fornecido para a propriedade do usuário email é inválido. Deve ser um endereço de e-mail de string.',
      )
    }
  }

  export class InvalidPasswordWrongError extends Errors {
    constructor() {
      super(
        FirebaseErrorCode.INVALID_PASSWORD_WRONG,
        'Sua senha esta incorreta.',
      )
    }
  }

  export class InvalidPasswordWeakError extends Errors {
    constructor() {
      super(
        FirebaseErrorCode.INVALID_PASSWORD_WEAK,
        'Sua senha deve conter pelo menos 6 caracteres.',
      )
    }
  }

  export class InvalidPasswordError extends Errors {
    constructor() {
      super(
        FirebaseErrorCode.INVALID_PASSWORD,
        'O valor fornecido para a propriedade de usuário password é inválido. Deve ser uma string com pelo menos seis caracteres.',
      )
    }
  }

  export class TooManyRequestsError extends Errors {
    constructor() {
      super(
        FirebaseErrorCode.TOO_MANY_REQUESTS,
        'O número de solicitações excede o máximo permitido.',
      )
    }
  }
}
