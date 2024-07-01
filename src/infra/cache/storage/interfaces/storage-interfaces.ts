export namespace IStorage {
  export interface Set {
    set(key: string, value: object): void
  }

  export interface Get {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    get(key: string): any
  }

  export interface Delete {
    delete(key: string): void
  }
}
