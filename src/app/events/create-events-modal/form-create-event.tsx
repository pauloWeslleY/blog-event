'use client'
import { Controller } from 'react-hook-form'
import { Button, Select, TextField } from '@radix-ui/themes'
import { FormGroup } from '@/app/components/ui'
import { useFormCreateEvent, useSelectEvent } from './hook'
import './styles.css'

export function FormCreateEvent() {
  const {
    isPending,
    errors,
    control,
    register,
    handleSubmit,
    handleCreateEvent,
  } = useFormCreateEvent()

  const { loadSelectTypeEvent } = useSelectEvent()

  return (
    <form onSubmit={handleSubmit(handleCreateEvent)}>
      <FormGroup
        htmlFor="title"
        label="Titulo"
        error={!!errors.title?.message}
        helperText={errors.title?.message}
      >
        <TextField.Root
          {...register('title')}
          placeholder="Digite o titulo do evento"
        />
      </FormGroup>

      <FormGroup
        htmlFor="description"
        label="Descrição"
        error={!!errors.description?.message}
        helperText={errors.description?.message}
      >
        <TextField.Root
          {...register('description')}
          placeholder="Digite a descrição do evento"
        />
      </FormGroup>

      <section className="input-date-hour">
        <FormGroup
          htmlFor="date"
          label="Data do evento"
          error={!!errors.dateEvent?.message}
          helperText={errors.dateEvent?.message}
          className="date"
        >
          <TextField.Root {...register('dateEvent')} type="date" />
        </FormGroup>

        <FormGroup
          htmlFor="hour"
          label="Hora do evento"
          error={!!errors.hourEvent?.message}
          helperText={errors.hourEvent?.message}
          className="hour"
        >
          <TextField.Root {...register('hourEvent')} type="time" />
        </FormGroup>
      </section>

      <FormGroup
        htmlFor="typeEvent"
        label="Tipo do evento"
        error={!!errors.typeEvent?.message}
        helperText={errors.typeEvent?.message}
      >
        <Controller
          name="typeEvent"
          control={control}
          render={({ field }) => (
            <Select.Root value={field.value} onValueChange={field.onChange}>
              <Select.Trigger
                variant="surface"
                placeholder="Selecione o tipo do evento"
              />
              <Select.Content>
                <Select.Group>
                  <Select.Label>Selecione o tipo de evento</Select.Label>
                  {loadSelectTypeEvent().map((props) => (
                    <Select.Item key={props.value} value={props.value}>
                      {props.label}
                    </Select.Item>
                  ))}
                </Select.Group>
              </Select.Content>
            </Select.Root>
          )}
        />
      </FormGroup>

      <FormGroup
        error={!!errors.image?.message}
        helperText={errors.image?.message}
      >
        <input
          {...register('image')}
          accept="image/*"
          id="file-upload"
          type="file"
        />
      </FormGroup>

      <Button type="submit" variant="solid" size="4" loading={isPending}>
        Cadastrar
      </Button>
    </form>
  )
}
