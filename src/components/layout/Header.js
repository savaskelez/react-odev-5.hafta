import { Link } from 'react-router-dom';
import './styles/header.css'

function Header() {
    return (
        <header className="header">
            <h1>TODO APP</h1>
            <span>
                <Link to="/" className="header__link">Ana Sayfa</Link> | <Link to="/completed" className="header__link">Başarılı</Link>
            </span>
        </header>
    )
}


export default Header;