import { useRef } from 'react';
import { socialMedias, menuOptions } from '../../data/db';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import './Header.css';

function Header({setMenu}) {
    const headerContainer = useRef();

    useGSAP(() => {

        if (menuOptions.length > 0 || socialMedias.length > 0) {
            gsap.from(' a', {opacity: 0, duration: 1, stagger: 0.1, ease: 'power3.in'})
        }
    }, {scope: headerContainer, dependencies: [menuOptions, socialMedias]});


    return (
        <header className='header' ref={headerContainer}>
            <div className='logo_wrapper'>
                <a className='logo' href="#">
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
                        aria-label={socialMedia.name}
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