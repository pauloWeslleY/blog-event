import { AuthErrorCode } from '../interface'

export namespace AuthErrors {
  class AuthError extends Error {
    constructor(
      public code: AuthErrorCode,
      message: string,
    ) {
      super(message)
      this.name = 'AuthError'
    }
  }

  export class ClaimsTooLargeError extends AuthError {
    constructor() {
      super(
        AuthErrorCode.CLAIMS_TOO_LARGE,
        'A carga útil de declarações fornecida para setCustomUserClaims() excede o tamanho máximo permitido de 1.000 bytes.',
      )
    }
  }

  export class UserNotFound extends AuthError {
    constructor() {
      super(
        AuthErrorCode.USER_NOT_FOUND,
        'Não existe nenhum registro de usuário correspondente.',
      )
    }
  }

  export class EmailAlreadyInUse extends AuthError {
    constructor() {
      super(
        AuthErrorCode.EMAIL_ALREADY_IN_USE,
        'O e-mail fornecido já está em uso por um usuário existente.',
      )
    }
  }

  export class EmailAlreadyExistsError extends AuthError {
    constructor() {
      super(
        AuthErrorCode.EMAIL_ALREADY_EXISTS,
        'O e-mail fornecido já está em uso por um usuário existente. Cada usuário deve ter um email exclusivo.',
      )
    }
  }

  export class IdTokenExpiredError extends AuthError {
    constructor() {
      super(
        AuthErrorCode.ID_TOKEN_EXPIRED,
        'O token de ID do Firebase fornecido expirou.',
      )
    }
  }

  export class IdTokenRevokedError extends AuthError {
    constructor() {
      super(
        AuthErrorCode.ID_TOKEN_REVOKED,
        'O token de ID do Firebase foi revogado.',
      )
    }
  }

  export class InsufficientPermissionError extends AuthError {
    constructor() {
      super(
        AuthErrorCode.INSUFFICIENT_PERMISSION,
        'A credencial usada para inicializar o Admin SDK não tem permissão suficiente para acessar o recurso de autenticação solicitado.',
      )
    }
  }

  export class InternalError extends AuthError {
    constructor() {
      super(
        AuthErrorCode.INTERNAL_ERROR,
        'O servidor de autenticação encontrou um erro inesperado ao tentar processar a solicitação.',
      )
    }
  }

  export class InvalidArgumentError extends AuthError {
    constructor() {
      super(
        AuthErrorCode.INVALID_ARGUMENT,
        'Um argumento inválido foi fornecido a um método de autenticação.',
      )
    }
  }

  export class InvalidClaimsError extends AuthError {
    constructor() {
      super(
        AuthErrorCode.INVALID_CLAIMS,
        'Os atributos de declaração personalizada fornecidos para setCustomUserClaims() são inválidos.',
      )
    }
  }

  export class InvalidContinueUriError extends AuthError {
    constructor() {
      super(
        AuthErrorCode.INVALID_CONTINUE_URI,
        'O URL de continuação deve ser uma string de URL válida.',
      )
    }
  }

  export class InvalidCreationTimeError extends AuthError {
    constructor() {
      super(
        AuthErrorCode.INVALID_CREATION_TIME,
        'A hora de criação deve ser uma sequência de data UTC válida.',
      )
    }
  }

  export class InvalidCredentialError extends AuthError {
    constructor() {
      super(
        AuthErrorCode.INVALID_CREDENTIAL,
        'A credencial usada para autenticar os Admin SDKs não pode ser usada para executar a ação desejada.',
      )
    }
  }

  export class InvalidDisabledFieldError extends AuthError {
    constructor() {
      super(
        AuthErrorCode.INVALID_DISABLED_FIELD,
        'O valor fornecido para a propriedade do usuário disabled é inválido. Deve ser um booleano.',
      )
    }
  }

  export class InvalidDisplayNameError extends AuthError {
    constructor() {
      super(
        AuthErrorCode.INVALID_DISPLAY_NAME,
        'O valor fornecido para a propriedade do usuário displayName é inválido. Deve ser uma string não vazia.',
      )
    }
  }

  export class InvalidDynamicLinkDomainError extends AuthError {
    constructor() {
      super(
        AuthErrorCode.INVALID_DYNAMIC_LINK_DOMAIN,
        'O domínio de link dinâmico fornecido não está configurado ou autorizado para o projeto atual.',
      )
    }
  }

  export class InvalidEmailError extends AuthError {
    constructor() {
      super(
        AuthErrorCode.INVALID_EMAIL,
        'O valor fornecido para a propriedade do usuário email é inválido. Deve ser um endereço de e-mail de string.',
      )
    }
  }

  export class InvalidEmailVerifiedError extends AuthError {
    constructor() {
      super(
        AuthErrorCode.INVALID_EMAIL_VERIFIED,
        'O valor fornecido para a propriedade do usuário emailVerified é inválido. Deve ser um booleano.',
      )
    }
  }

  export class InvalidHashAlgorithmError extends AuthError {
    constructor() {
      super(
        AuthErrorCode.INVALID_HASH_ALGORITHM,
        'O algoritmo hash deve corresponder a uma das strings na lista de algoritmos suportados.',
      )
    }
  }

  export class InvalidHashBlockSizeError extends AuthError {
    constructor() {
      super(
        AuthErrorCode.INVALID_HASH_BLOCK_SIZE,
        'O tamanho do bloco hash deve ser um número válido.',
      )
    }
  }

  export class InvalidHashDerivedKeyLengthError extends AuthError {
    constructor() {
      super(
        AuthErrorCode.INVALID_HASH_DERIVED_KEY_LENGTH,
        'O comprimento da chave derivada de hash deve ser um número válido.',
      )
    }
  }

  export class InvalidHashKeyError extends AuthError {
    constructor() {
      super(
        AuthErrorCode.INVALID_HASH_KEY,
        'A chave hash deve ter um buffer de bytes válido.',
      )
    }
  }

  export class InvalidHashMemoryCostError extends AuthError {
    constructor() {
      super(
        AuthErrorCode.INVALID_HASH_MEMORY_COST,
        'O custo da memória hash deve ser um número válido.',
      )
    }
  }

  export class InvalidHashParallelizationError extends AuthError {
    constructor() {
      super(
        AuthErrorCode.INVALID_HASH_PARALLELIZATION,
        'A paralelização de hash deve ser um número válido.',
      )
    }
  }

  export class InvalidHashRoundsError extends AuthError {
    constructor() {
      super(
        AuthErrorCode.INVALID_HASH_ROUNDS,
        'As rodadas de hash devem ser um número válido.',
      )
    }
  }

  export class InvalidHashSaltSeparatorError extends AuthError {
    constructor() {
      super(
        AuthErrorCode.INVALID_HASH_SALT_SEPARATOR,
        'O campo separador de sal do algoritmo de hash deve ser um buffer de bytes válido.',
      )
    }
  }

  export class InvalidIdTokenError extends AuthError {
    constructor() {
      super(
        AuthErrorCode.INVALID_ID_TOKEN,
        'O token de ID fornecido não é um token de ID válido do Firebase.',
      )
    }
  }

  export class InvalidLastSignInTimeError extends AuthError {
    constructor() {
      super(
        AuthErrorCode.INVALID_LAST_SIGN_IN_TIME,
        'A hora do último login deve ser uma string de data UTC válida.',
      )
    }
  }

  export class InvalidPageTokenError extends AuthError {
    constructor() {
      super(
        AuthErrorCode.INVALID_PAGE_TOKEN,
        'O token da próxima página fornecido em listUsers() é inválido. Deve ser uma string válida e não vazia.',
      )
    }
  }

  export class InvalidPasswordWrongError extends AuthError {
    constructor() {
      super(AuthErrorCode.INVALID_PASSWORD_WRONG, 'Sua senha esta incorreta.')
    }
  }

  export class InvalidPasswordWeakError extends AuthError {
    constructor() {
      super(
        AuthErrorCode.INVALID_PASSWORD_WEAK,
        'Sua senha deve conter pelo menos 6 caracteres.',
      )
    }
  }

  export class InvalidPasswordError extends AuthError {
    constructor() {
      super(
        AuthErrorCode.INVALID_PASSWORD,
        'O valor fornecido para a propriedade de usuário password é inválido. Deve ser uma string com pelo menos seis caracteres.',
      )
    }
  }

  export class InvalidPasswordHashError extends AuthError {
    constructor() {
      super(
        AuthErrorCode.INVALID_PASSWORD_HASH,
        'O hash da senha deve ser um buffer de bytes válido.',
      )
    }
  }

  export class InvalidPasswordSaltError extends AuthError {
    constructor() {
      super(
        AuthErrorCode.INVALID_PASSWORD_SALT,
        'A senha salt deve ser um buffer de bytes válido.',
      )
    }
  }

  export class InvalidPhoneNumberError extends AuthError {
    constructor() {
      super(
        AuthErrorCode.INVALID_PHONE_NUMBER,
        'O valor fornecido para phoneNumber é inválido. Deve ser uma sequência de identificadores não vazia e compatível com o padrão E.164.',
      )
    }
  }

  export class InvalidPhotoUrlError extends AuthError {
    constructor() {
      super(
        AuthErrorCode.INVALID_PHOTO_URL,
        'O valor fornecido para a propriedade do usuário photoURL é inválido. Deve ser um URL de string.',
      )
    }
  }

  export class InvalidProviderDataError extends AuthError {
    constructor() {
      super(
        AuthErrorCode.INVALID_PROVIDER_DATA,
        'O ProvideData deve ser uma matriz válida de objetos UserInfo.',
      )
    }
  }

  export class InvalidProviderIdError extends AuthError {
    constructor() {
      super(
        AuthErrorCode.INVALID_PROVIDER_ID,
        'O ProvideId deve ser uma string de identificador de provedor compatível e válida.',
      )
    }
  }

  export class InvalidOauthResponsetypeError extends AuthError {
    constructor() {
      super(
        AuthErrorCode.INVALID_OAUTH_RESPONSETYPE,
        'Somente exatamente um responseType do OAuth deve ser definido como verdadeiro.',
      )
    }
  }

  export class InvalidSessionCookieDurationError extends AuthError {
    constructor() {
      super(
        AuthErrorCode.INVALID_SESSION_COOKIE_DURATION,
        'A duração do cookie da sessão deve ser um número válido em milissegundos entre 5 minutos e 2 semanas.',
      )
    }
  }

  export class InvalidUidError extends AuthError {
    constructor() {
      super(
        AuthErrorCode.INVALID_UID,
        'O uid fornecido deve ser uma string não vazia com no máximo 128 caracteres.',
      )
    }
  }

  export class InvalidUserImportError extends AuthError {
    constructor() {
      super(
        AuthErrorCode.INVALID_USER_IMPORT,
        'O registro do usuário a ser importado é inválido.',
      )
    }
  }

  export class MaximumUserCountExceededError extends AuthError {
    constructor() {
      super(
        AuthErrorCode.MAXIMUM_USER_COUNT_EXCEEDED,
        'O número máximo permitido de usuários para importação foi excedido.',
      )
    }
  }

  export class MissingAndroidPkgNameError extends AuthError {
    constructor() {
      super(
        AuthErrorCode.MISSING_ANDROID_PKG_NAME,
        'Um nome de pacote Android deverá ser fornecido se o aplicativo Android precisar ser instalado.',
      )
    }
  }

  export class MissingContinueUriError extends AuthError {
    constructor() {
      super(
        AuthErrorCode.MISSING_CONTINUE_URI,
        'Um URL de continuação válido deve ser fornecido na solicitação.',
      )
    }
  }

  export class MissingHashAlgorithmError extends AuthError {
    constructor() {
      super(
        AuthErrorCode.MISSING_HASH_ALGORITHM,
        'A importação de usuários com hashes de senha requer que o algoritmo de hash e seus parâmetros sejam fornecidos.',
      )
    }
  }

  export class MissingIosBundleIdError extends AuthError {
    constructor() {
      super(
        AuthErrorCode.MISSING_IOS_BUNDLE_ID,
        'A solicitação não possui um ID de pacote.',
      )
    }
  }

  export class MissingUidError extends AuthError {
    constructor() {
      super(
        AuthErrorCode.MISSING_UID,
        'Um identificador uid é necessário para a operação atual.',
      )
    }
  }

  export class MissingOauthClientSecretError extends AuthError {
    constructor() {
      super(
        AuthErrorCode.MISSING_OAUTH_CLIENT_SECRET,
        'O segredo do cliente de configuração OAuth é necessário para ativar o fluxo de código OIDC.',
      )
    }
  }

  export class OperationNotAllowedError extends AuthError {
    constructor() {
      super(
        AuthErrorCode.OPERATION_NOT_ALLOWED,
        'O provedor de login fornecido está desativado para seu projeto do Firebase.',
      )
    }
  }

  export class PhoneNumberAlreadyExistsError extends AuthError {
    constructor() {
      super(
        AuthErrorCode.PHONE_NUMBER_ALREADY_EXISTS,
        'O phoneNumber fornecido já está em uso por um usuário existente. Cada usuário deve ter um phoneNumber exclusivo.',
      )
    }
  }

  export class ProjectNotFoundError extends AuthError {
    constructor() {
      super(
        AuthErrorCode.PROJECT_NOT_FOUND,
        'Nenhum projeto do Firebase foi encontrado para a credencial usada para inicializar os SDKs Admin.',
      )
    }
  }

  export class ReservedClaimsError extends AuthError {
    constructor() {
      super(
        AuthErrorCode.RESERVED_CLAIMS,
        'Uma ou mais declarações de usuário personalizadas fornecidas para setCustomUserClaims() são reservadas.',
      )
    }
  }

  export class SessionCookieExpiredError extends AuthError {
    constructor() {
      super(
        AuthErrorCode.SESSION_COOKIE_EXPIRED,
        'O cookie de sessão do Firebase fornecido expirou.',
      )
    }
  }

  export class SessionCookieRevokedError extends AuthError {
    constructor() {
      super(
        AuthErrorCode.SESSION_COOKIE_REVOKED,
        'O cookie de sessão do Firebase foi revogado.',
      )
    }
  }

  export class TooManyRequestsError extends AuthError {
    constructor() {
      super(
        AuthErrorCode.TOO_MANY_REQUESTS,
        'O número de solicitações excede o máximo permitido.',
      )
    }
  }

  export class UidAlreadyExistsError extends AuthError {
    constructor() {
      super(
        AuthErrorCode.UID_ALREADY_EXISTS,
        'O uid fornecido já está em uso por um usuário existente. Cada usuário deve ter um uid exclusivo.',
      )
    }
  }

  export class UnauthorizedContinueUriError extends AuthError {
    constructor() {
      super(
        AuthErrorCode.UNAUTHORIZED_CONTINUE_URI,
        'O domínio do URL de continuação não está na lista de permissões.',
      )
    }
  }
}
