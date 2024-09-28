import { AlertDialog, Button, Flex } from '@radix-ui/themes'
import { useDeleteEventModal } from './hook/useDeleteEventModal'

interface DeleteEventModalProps {
  eventId: string
}

export function DeleteEventModal({ eventId }: DeleteEventModalProps) {
  const { handlerDeleteEvent, isLoading } = useDeleteEventModal()

  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger>
        <Button color="red">Excluir</Button>
      </AlertDialog.Trigger>
      <AlertDialog.Content maxWidth="450px">
        <AlertDialog.Title>Excluir Evento</AlertDialog.Title>
        <AlertDialog.Description size="2">
          Deseja realmente excluir esse evento?
        </AlertDialog.Description>

        <Flex gap="3" mt="4" justify="end">
          <AlertDialog.Cancel>
            <Button variant="soft" color="gray">
              Cancelar
            </Button>
          </AlertDialog.Cancel>
          <AlertDialog.Action>
            <Button
              variant="solid"
              color="red"
              onClick={() => handlerDeleteEvent({ eventId })}
              loading={isLoading}
            >
              Excluir
            </Button>
          </AlertDialog.Action>
        </Flex>
      </AlertDialog.Content>
    </AlertDialog.Root>
  )
}
