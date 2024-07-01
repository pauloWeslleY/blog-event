const useSelectEvent = () => {
  const loadSelectTypeEvent = () => [
    { label: 'Festa', value: 'FESTA' },
    { label: 'Show', value: 'SHOW' },
    { label: 'Teatro', value: 'TEATRO' },
    { label: 'Concerto de Rock', value: 'CONCERTO_ROCK' },
    { label: 'Feira de Livros', value: 'FEIRA_LIVROS' },
    { label: 'Exposição de Arte', value: 'EXPOSICAO_ARTES' },
    { label: 'Festival de Cinema', value: 'FESTIVAL_CINEMA' },
  ]

  return { loadSelectTypeEvent }
}

export { useSelectEvent }
