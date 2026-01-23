import './Footer.css'

function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer>
            <p>
                &copy; {year} - Powered by React <img src="./react.svg" alt="react icon" /> and lots of caffeine.
            </p>
        </footer>
    );
}

export default Footer;