import './menu.css'
import { BsYoutube, BsInstagram, BsLinkedin, BsGithub } from 'react-icons/bs'
import { Link } from 'react-router-dom'

export default function Menu() {
  return (
    <nav className='menu'>
      <a className='social' href='https://youtube.com/gleilsonalves' target='_blank' rel='noreferrer' aria-label='YouTube'>
        <BsYoutube size={18} color='rgba(255,255,255,0.8)' />
      </a>
      <a className='social' href='https://instagram.com/gleilsonalves' target='_blank' rel='noreferrer' aria-label='Instagram'>
        <BsInstagram size={18} color='rgba(255,255,255,0.8)' />
      </a>
      <a className='social' href='https://www.linkedin.com/in/gleilsonalves' target='_blank' rel='noreferrer' aria-label='LinkedIn'>
        <BsLinkedin size={18} color='rgba(255,255,255,0.8)' />
      </a>
      <a className='social' href='https://github.com/gleilsonalves' target='_blank' rel='noreferrer' aria-label='GitHub'>
        <BsGithub size={18} color='rgba(255,255,255,0.8)' />
      </a>
      <Link className='menu-item' to='/links'>
        Meus Links
      </Link>
    </nav>
  )
}
