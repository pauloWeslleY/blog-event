export interface IAuthToken {
  loadAuthToken(): Promise<string>
}
