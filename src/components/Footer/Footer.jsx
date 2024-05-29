import './Footer.css'

const Footer = () => {
    return (
        <footer>
            <div className="column">
                dogather
            </div>
            <div className="column">
                Product
                <a>Docs</a>
                <a>What's new</a>
            </div>
            <div className="column">
                Build
                <a>Templates</a>
                <a>API docs</a>
            </div>
            <div className="column">
                Get started
                <a>Login</a>
                <a>Sign up</a>
            </div>
            <div className="column">
                Resources
                <a>About us</a>
                <a>Email us</a>
            </div>
        </footer>
    )
}

export default Footer;