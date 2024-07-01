const useDataTableEvents = () => {
  const loadEventsHeader = () => [
    { id: Math.random(), title: 'Nome do Evento' },
    { id: Math.random(), title: 'Organizador do Evento' },
    { id: Math.random(), title: 'Data do Evento' },
    { id: Math.random(), title: 'Ações' },
  ]

  const loadEvents = () => {
    return Array.from({ length: 10 }).map(() => ({
      id: Math.random(),
      title: `Event`,
      owner: 'johndoe@gmail.com',
      createdAt: '2024-06-19T02:23:38.127Z',
    }))
  }

  return { loadEvents, loadEventsHeader }
}

export { useDataTableEvents }
