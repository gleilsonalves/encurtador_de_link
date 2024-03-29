import './menu.css'
import { BsYoutube, BsInstagram, BsLinkedin, BsGithub } from 'react-icons/bs'
import { Link } from 'react-router-dom'

export default function Menu(){
    return(
        <div className='menu'>
            <a className='social' href='https://youtube.com/gleilsonalves'>
                <BsYoutube color='#fff' size={24} />
            </a>
            <a className='social' href='https://instagram.com/gleilsonalves'>
                <BsInstagram color='#fff' size={24} />
            </a>
            <a className='social' href='https://www.linkedin.com/in/gleilsonalves'>
                <BsLinkedin color='#fff' size={24} />
            </a>
            <a className='social' href='https://github.com/gleilsonalves'>
                <BsGithub color='#fff' size={24} />
            </a>
            <Link className='menu-item' to="/links">
                Meus Links
            </Link>
        </div>
    )
}