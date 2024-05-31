import { Link } from "react-router-dom";


function Header() {
    return <nav className="orange lighten-3">
        <div className="container">
            <div className="nav-wrapper">
                <Link to="/" className="brand-logo">Spa React Project</Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </div>
        </div>    
    </nav>
}
export {Header};