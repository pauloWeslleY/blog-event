'use client'

import { IconButton, Table } from '@radix-ui/themes'
import { FiEye } from 'react-icons/fi'
import { useDataTableEvents } from './hook'
import './styles.css'

const TableEvents = () => {
  const { loadEvents, loadEventsHeader } = useDataTableEvents()

  return (
    <Table.Root variant="surface">
      <Table.Header>
        <Table.Row>
          {loadEventsHeader().map((props) => (
            <Table.ColumnHeaderCell key={props.id}>
              {props.title}
            </Table.ColumnHeaderCell>
          ))}
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {loadEvents().map((props) => (
          <Table.Row key={props.id}>
            <Table.RowHeaderCell>{props.title}</Table.RowHeaderCell>
            <Table.Cell>{props.owner}</Table.Cell>
            <Table.Cell>{props.createdAt}</Table.Cell>
            <Table.Cell>
              <IconButton variant="outline">
                <FiEye size={20} />
              </IconButton>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  )
}

export { TableEvents }
