import { useState } from 'react'
import './link-item.css'
import { FiX, FiClipboard, FiCheck } from 'react-icons/fi'

export default function LinkItem({ closeModal, content }) {
  const [copied, setCopied] = useState(false)

  async function copyLink() {
    await navigator.clipboard.writeText(content.link)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className='modal-overlay' onClick={closeModal}>
      <div className='modal-container' onClick={e => e.stopPropagation()}>
        <div className='modal-header'>
          <h2>Link Encurtado</h2>
          <button onClick={closeModal}>
            <FiX size={15} color='rgba(255,255,255,0.6)' />
          </button>
        </div>

        <span title={content.long_url}>{content.long_url}</span>

        <button className='modal-link' onClick={copyLink}>
          <span>{content.link}</span>
          {copied
            ? <FiCheck size={17} color='#fff' />
            : <FiClipboard size={17} color='rgba(255,255,255,0.7)' />
          }
        </button>

        <p className='copy-feedback'>{copied ? 'Copiado!' : 'Clique para copiar'}</p>
      </div>
    </div>
  )
}
