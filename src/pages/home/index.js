import { useState } from 'react'
import { FiLink } from 'react-icons/fi'
import './home.css'
import Menu from '../../components/Menu'
import LinkItem from '../../components/LinkItem'
import api from '../../services/api'
import { saveLink } from '../../services/storeLinks'

export default function Home() {
  const [link, setLink] = useState('')
  const [data, setData] = useState({})
  const [showModal, setShowModal] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleShortLink() {
    if (!link.trim() || loading) return
    setLoading(true)
    try {
      const response = await api.post('/shorten', { long_url: link })
      setData(response.data)
      setShowModal(true)
      saveLink('@encurtaLink', response.data)
      setLink('')
    } catch {
      alert('Ops, parece que algo deu errado...')
      setLink('')
    } finally {
      setLoading(false)
    }
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') handleShortLink()
  }

  return (
    <div className="container-home">
      <div className="logo">
        <img src="/Link.png" alt="logo do projeto" />
        <h1>Encurtador de Links</h1>
        <span>Cole seu link abaixo e encurte em segundos</span>
      </div>

      <div className="area-input">
        <div className="input-wrapper">
          <FiLink size={18} color="rgba(255,255,255,0.4)" />
          <input
            placeholder="https://seu-link-longo.com/aqui..."
            value={link}
            onChange={(e) => setLink(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>
        <button onClick={handleShortLink} disabled={loading}>
          {loading ? 'Encurtando...' : 'Encurtar Link'}
        </button>
      </div>

      <Menu />

      {showModal && (
        <LinkItem
          closeModal={() => setShowModal(false)}
          content={data}
        />
      )}
    </div>
  )
}
