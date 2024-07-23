import {
  EventDetailRepo,
  EventRepo,
  EventUpdated,
  IEventDetailRepo,
  IEventRepo,
  IEventUpdateRepo,
} from '@/data/factories/firestore'

export namespace EventFactory {
  export class Info implements ICreate<IEventRepo.Model, IEventRepo> {
    create(params: IEventRepo.Model): IEventRepo {
      return new EventRepo(params)
    }
  }

  export class Details
    // eslint-disable-next-line prettier/prettier
    implements ICreate<IEventDetailRepo.Params, IEventDetailRepo> {
    create(params: IEventDetailRepo.Params): IEventDetailRepo {
      return new EventDetailRepo(params)
    }
  }

  export class Updated
    // eslint-disable-next-line prettier/prettier
    implements ICreate<IEventUpdateRepo.Params, IEventUpdateRepo> {
    create(params: IEventUpdateRepo.Params): IEventUpdateRepo {
      return new EventUpdated(params)
    }
  }
}
