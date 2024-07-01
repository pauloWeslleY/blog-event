'use client'
import { Controller } from 'react-hook-form'
import { BsCloudUpload } from 'react-icons/bs'
import { Button, Select, TextArea, TextField } from '@radix-ui/themes'
import { FormGroup } from '@/app/components/ui'
import { useFormCreateEvent, useSelectEvent } from './hook'
import './styles.css'

const CreateEvents = () => {
  const { errors, control, register, handleSubmit, handleCreateEvent } =
    useFormCreateEvent()

  const { loadSelectTypeEvent } = useSelectEvent()

  return (
    <section className="form-wrapper">
      <h3 className="ui header">Cadastrar Eventos</h3>

      <form onSubmit={handleSubmit(handleCreateEvent)}>
        <FormGroup
          htmlFor="title"
          label="Titulo"
          error={!!errors.title?.message}
          helperText={errors.title?.message}
        >
          <TextField.Root
            {...register('title')}
            size="3"
            placeholder="Digite o titulo do evento"
          />
        </FormGroup>

        <FormGroup
          htmlFor="description"
          label="Descrição"
          error={!!errors.description?.message}
          helperText={errors.description?.message}
        >
          <TextArea
            {...register('description')}
            placeholder="Digite a descrição do evento"
            resize="both"
          />
        </FormGroup>

        <section>
          <FormGroup
            htmlFor="date"
            label="Data do evento"
            error={!!errors.dateEvent?.message}
            helperText={errors.dateEvent?.message}
          >
            <TextField.Root {...register('dateEvent')} type="date" />
          </FormGroup>

          <FormGroup
            htmlFor="hour"
            label="Hora do evento"
            error={!!errors.hourEvent?.message}
            helperText={errors.hourEvent?.message}
          >
            <TextField.Root {...register('hourEvent')} type="time" />
          </FormGroup>

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
        </section>

        <label htmlFor="file-upload" className="input-upload">
          <BsCloudUpload />
          <span>Clique para fazer upload</span>
          <h3 className="ui header">JPG, JPEG ou PNG (max. 3MB)</h3>

          <div className="input-hidden">
            <input id="file-upload" name="file-upload" type="file" />
          </div>
        </label>

        <Button type="submit" variant="soft" size="4">
          Cadastrar
        </Button>
      </form>
    </section>
  )
}

export default CreateEvents
