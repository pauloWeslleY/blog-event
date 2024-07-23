import Image from 'next/image'
import { Button, Callout, Progress } from '@radix-ui/themes'
import { CircleCheck } from 'lucide-react'
import { Controller } from 'react-hook-form'
import { HelperText, Input, Loader, Select, Switch } from '@/app/components/ui'
import { useSelectEvent } from '@/app/events/hook'
import { useUploadProgressStore } from '@/main/store'
import { useFormEditEvent } from './hook'
import './styles.css'

export function FormEditEvent() {
  const {
    data,
    isSuccess,
    isPending,
    errors,
    control,
    register,
    handleSubmit,
    handleUpdatedEvent,
  } = useFormEditEvent()

  const { loadSelectTypeEvent } = useSelectEvent()
  const { progress } = useUploadProgressStore()

  return (
    <div className="form-edit-event__wrapper">
      <div className="form-edit-event__banner">
        {isPending && <Loader />}

        {!isPending && (
          <Image
            src={data?.photoUrl || ''}
            alt="Banner"
            width={1300}
            height={300}
          />
        )}
      </div>

      {isSuccess && (
        <div className="form-edit-event__status-message">
          <Callout.Root color="green" size="3">
            <Callout.Icon>
              <CircleCheck />
            </Callout.Icon>
            <Callout.Text>Evento atualizado!</Callout.Text>
          </Callout.Root>
        </div>
      )}

      <div className="form-edit-event__header-wrapper">
        <h3 className="form-edit-event__title">Editar Evento</h3>
        <div className="form-edit-event__separator" />
      </div>

      {progress !== null && (
        <div className="form-edit-event__progress-wrapper">
          <Progress value={progress} size="3" duration="30s" />
        </div>
      )}

      <form onSubmit={handleSubmit(handleUpdatedEvent)}>
        <Input
          {...register('title')}
          placeholder="Titulo"
          type="text"
          error={!!errors.title?.message}
          helperText={errors.title?.message}
        />

        <Input
          {...register('description')}
          placeholder="Descrição"
          type="text"
          error={!!errors.description?.message}
          helperText={errors.description?.message}
        />

        <div className="form-edit-event__section">
          <Input
            {...register('dateEvent')}
            type="date"
            error={!!errors.dateEvent?.message}
            helperText={errors.dateEvent?.message}
            className="form-edit-event__input-date-event"
          />

          <Input
            {...register('hourEvent')}
            type="time"
            error={!!errors.hourEvent?.message}
            helperText={errors.hourEvent?.message}
            className="form-edit-event__input-hour-event"
          />

          <Controller
            name="typeEvent"
            control={control}
            render={({ field: { value, onChange } }) => (
              <div className="form-edit-event__select-wrapper">
                <Select
                  value={value}
                  onValueChange={onChange}
                  defaultValue={data?.type}
                  placeholder="Selecione o tipo de evento"
                  options={loadSelectTypeEvent()}
                />
                <HelperText
                  error={!!errors.typeEvent?.message}
                  helperText={errors.typeEvent?.message}
                />
              </div>
            )}
          />
        </div>

        <Input
          {...register('image')}
          className="form-edit-event__input-file"
          type="file"
          accept="image/*"
          error={!!errors.image?.message}
          helperText={errors.image?.message}
        />

        <Controller
          name="public"
          control={control}
          render={({ field: { value, onChange } }) => (
            <div className="form-edit-event__switch-wrapper">
              <Switch
                labelLeft="Publico"
                checked={value}
                onCheckedChange={onChange}
              />
            </div>
          )}
        />

        <div className="form-edit-event__footer">
          <Button type="submit" size="3" loading={isPending}>
            Atualizar
          </Button>
        </div>
      </form>
    </div>
  )
}
