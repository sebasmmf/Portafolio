
import { socialMedias, menuOptions } from '../../data/db';
import './Header.css';

function Header({setMenu}) {

    return (
        <header className='header'>
            <div className='logo_wrapper'>
                <a className='logo' href="">
                    <img src="/logo_sebastian.svg" alt="logo personal" />
                </a>
            </div>

            <nav className='navbar'>
                {menuOptions.map((option) => (
                    <a
                        href={`#${option}`}
                        key={option}
                    >
                        <button>
                            {option}
                        </button>
                    </a>
                ))}
            </nav>

            <div className='social_medias'>
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

            <button className='menu' onClick={() => setMenu(true)}>
                <img src="/menu_icon.svg" alt="menu icon" />
            </button>
        </header>
    );
}

export default Header;