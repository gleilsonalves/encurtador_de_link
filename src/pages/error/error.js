import './error.css'
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

export default function Error() {
  return (
    <div className='container-error'>
      <div className='error-code'>404</div>
      <h1>Página não encontrada</h1>
      <p>O endereço que você tentou acessar não existe.</p>
      <Link to='/'>
        <FiArrowLeft size={16} />
        Voltar para Home
      </Link>
    </div>
  )
}
