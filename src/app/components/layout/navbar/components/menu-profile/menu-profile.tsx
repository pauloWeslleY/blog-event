import { Avatar, Button, DropdownMenu } from '@radix-ui/themes'
import { MenuOptionsProps } from '@/app/components/layout/navbar/types'
import { useUserStore } from '@/main/store'

export function MenuProfile({ options }: { options: MenuOptionsProps[] }) {
  const { user } = useUserStore()

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <Button size="3">
          <Avatar
            src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
            fallback="A"
            size="2"
            radius="full"
          />

          {user?.username}

          <DropdownMenu.TriggerIcon />
        </Button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Content>
        {options.map((props) => (
          <DropdownMenu.Item
            key={props.key}
            onClick={props.action}
            style={{ cursor: 'pointer' }}
          >
            {props.text}
          </DropdownMenu.Item>
        ))}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  )
}
