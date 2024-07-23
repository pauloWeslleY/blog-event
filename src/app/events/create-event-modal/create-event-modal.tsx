'use client'
import { Button, Dialog, Flex, IconButton } from '@radix-ui/themes'
import { Plus, X } from 'lucide-react'
import { FormCreateEvent } from './form-create-event'
import './styles.css'

export function CreateEventModal() {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button>
          <Plus />
          Novo Evento
        </Button>
      </Dialog.Trigger>

      <Dialog.Content maxWidth="640px">
        <Flex as="div" align="center" justify="between">
          <div>
            <Dialog.Title>Cadastrar Evento</Dialog.Title>
            <Dialog.Description size="2" mb="4">
              Informações do cadastro do evento
            </Dialog.Description>
          </div>

          <Dialog.Close>
            <IconButton variant="soft" color="gray">
              <X />
            </IconButton>
          </Dialog.Close>
        </Flex>

        <div className="form-create-event--wrapper">
          <FormCreateEvent />
        </div>
      </Dialog.Content>
    </Dialog.Root>
  )
}
