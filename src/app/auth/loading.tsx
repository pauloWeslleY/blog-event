import { Loader } from '@/app/components/ui'
import './styles.css'

export default function Loading() {
  return (
    <div className="loader-wrapper">
      <Loader />
      <span>Carregando</span>
    </div>
  )
}
