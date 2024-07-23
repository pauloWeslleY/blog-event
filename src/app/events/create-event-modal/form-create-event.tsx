'use client'
import { Controller } from 'react-hook-form'
import { CircleCheckBig } from 'lucide-react'
import { Button, Callout, Progress } from '@radix-ui/themes'
import { HelperText, Input, Select } from '@/app/components/ui'
import { useSelectEvent } from '@/app/events/hook'
import { useUploadProgressStore } from '@/main/store'
import { useFormCreateEvent } from './hook'
import './styles.css'

export function FormCreateEvent() {
  const {
    isSuccess,
    isPending,
    errors,
    control,
    register,
    handleSubmit,
    handleCreateEvent,
  } = useFormCreateEvent()

  const { loadSelectTypeEvent } = useSelectEvent()
  const { progress } = useUploadProgressStore()

  if (isSuccess) {
    return (
      <Callout.Root color="green" size="3">
        <Callout.Icon>
          <CircleCheckBig />
        </Callout.Icon>
        <Callout.Text>Novo Evento foi criado!</Callout.Text>
      </Callout.Root>
    )
  }

  if (progress !== null) {
    return (
      <div className="form-create-event__progress-wrapper">
        <Progress value={progress} size="3" duration="30s" />
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(handleCreateEvent)}>
      <Input
        {...register('title')}
        type="text"
        placeholder="Digite o titulo do evento"
        error={!!errors.title?.message}
        helperText={errors.title?.message}
      />

      <Input
        {...register('description')}
        type="text"
        placeholder="Digite a descrição do evento"
        error={!!errors.description?.message}
        helperText={errors.description?.message}
      />

      <section className="form-group-create-event--wrapper">
        <Input
          {...register('dateEvent')}
          type="date"
          error={!!errors.dateEvent?.message}
          helperText={errors.dateEvent?.message}
        />

        <Input
          {...register('hourEvent')}
          type="time"
          error={!!errors.hourEvent?.message}
          helperText={errors.hourEvent?.message}
        />
      </section>

      <Input
        {...register('image')}
        className="event-input--file"
        type="file"
        accept="image/*"
        error={!!errors.image?.message}
        helperText={errors.image?.message}
      />

      <Controller
        name="typeEvent"
        control={control}
        render={({ field: { value, onChange } }) => (
          <div className="form-create-event--select-wrapper">
            <Select
              value={value}
              onValueChange={onChange}
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

      <Button type="submit" variant="solid" size="4" loading={isPending}>
        Cadastrar
      </Button>
    </form>
  )
}
