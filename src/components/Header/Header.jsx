import './Header.css'
import UFU from '../../assets/UFU.png'
import {Link} from "react-router-dom";

export default function Header() {
    return (
        <header className="header">
            <Link to='/'>
                <img className='header__img' alt='Логотип ЮФУ' src={UFU}/>
            </Link>

            <nav className='header__links'>
                <Link className='header__link' to='/news'>Новости</Link>
                <Link className='header__link' to='/about'>О проекте</Link>
                <Link className='header__link' to='/contacts'>Контакты</Link>
            </nav>
        </header>
    )
}