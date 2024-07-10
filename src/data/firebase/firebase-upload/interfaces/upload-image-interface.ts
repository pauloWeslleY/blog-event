export namespace IUploadImage {
  export type Params = {
    username: string
    image: File | null
  }

  export type Model = {
    imageURL: string
    progress: number
    error: string
  }
}

export interface IUploadImage {
  upload(params: IUploadImage.Params): Promise<IUploadImage.Model>
}
