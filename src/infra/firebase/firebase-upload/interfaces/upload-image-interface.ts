import { UploadTask } from 'firebase/storage'

export namespace IUploadImage {
  export type Params = {
    name: string
    file: File
  }

  export type Model = UploadTask
}

export interface IUploadImage {
  upload(params: IUploadImage.Params): IUploadImage.Model
}
