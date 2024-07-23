import { IEventUpdateRepo } from '@/data/factories'
import { makeFormatted } from '@/validation/factories'

export class EventUpdated implements IEventUpdateRepo {
  public eventUpdate: IEventUpdateRepo.Model
  private format = makeFormatted()

  constructor(params: IEventUpdateRepo.Params) {
    this.eventUpdate = {
      ...params,
      createdAt: this.format.transformarParaTimestamp(params.createdAt),
      updatedAt: params.updatedAt,
    }
  }
}
