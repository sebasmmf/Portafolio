import { Link, useNavigate } from 'react-router-dom'
import { menuOptions, socialMedias } from '../../data/db'
import './ToggleMenu.css'

const ToggleMenu = ({menu, setMenu}) => {

    const navigate = useNavigate()

    return (
        <div className='toggle-menu' style={{width: `${menu ? '100vw' : '0vw'}`}}>

            <button
                className='btn-close-menu'
                onClick={() => setMenu(false)}
            >
                <img
                    src="/close-menu.svg"
                    alt="close-menu"
                />
            </button>

            <nav className='navbar'>
                {menuOptions.map((option) => (
                    <button 
                        key={option}
                        onClick={() => setMenu(false)}
                    >
                        <a href={`#${option}`}>{option}</a>
                    </button>
                ))}
            </nav>

            <div className='social-medias'>
                {socialMedias.map(socialMedia => (
                    <a
                        key={socialMedia.name}
                        href={socialMedia.url}
                        target='_blank'
                    >
                        <img src={socialMedia.image_src} alt={socialMedia.image_alt} />
                    </a>
                ))}
            </div>
            
        </div>
    )
}

export default ToggleMenu