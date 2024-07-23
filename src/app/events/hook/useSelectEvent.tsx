import { SelectOptionsProps } from '@/app/components/types'

export function useSelectEvent() {
  const loadSelectTypeEvent = (): SelectOptionsProps[] => [
    { label: 'Festa', value: 'FESTA' },
    { label: 'Show', value: 'SHOW' },
    { label: 'Teatro', value: 'TEATRO' },
    { label: 'Concerto de Rock', value: 'CONCERTO_ROCK' },
    { label: 'Feira de Livros', value: 'FEIRA_LIVROS' },
    { label: 'Exposição de Arte', value: 'EXPOSICAO_ARTES' },
    { label: 'Festival de Cinema', value: 'FESTIVAL_CINEMA' },
    { label: 'Next Level Week', value: 'NLW' },
  ]

  return { loadSelectTypeEvent }
}
