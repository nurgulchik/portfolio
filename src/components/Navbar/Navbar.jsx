import { useState } from "react";
import { Link, NavLink } from "react-router-dom"

import "./navbar.scss";
import menuIcon from '../../images/menu.svg'




function Navbar() {

const [menuActive, setMenuActive] = useState(false);

const showMenu = () => {
    setMenuActive(!menuActive);
}

  return (
    <nav className="navbar">
       <div className="container navbar__container">
           <Link to="/" className="navbar__logo">N_CH
           </Link>
           <button onClick={showMenu} className="navbar__toggle">
            <img src={menuIcon} alt="fhhg" />
           </button>


           <div className={menuActive ? "navbar__menu navbar__menu--show" : "navbar__menu"}>
           <NavLink onClick={showMenu} to="/" className="navbar__menu-link">Главная</NavLink>
           <NavLink onClick={showMenu} to="/about" className="navbar__menu-link">Обо мне</NavLink>
           <NavLink onClick={showMenu} to="/services" className="navbar__menu-link">Сервисы</NavLink>
           <NavLink onClick={showMenu} to="/feedback" className="navbar__menu-link">Отзывы</NavLink>
           <NavLink onClick={showMenu} to="/price" className="navbar__menu-link">Цены</NavLink>
           <NavLink onClick={showMenu} to="/contact" className="navbar__menu-link">Контакты</NavLink>
       </div>
       </div>
      
    </nav>
  )
}

export default Navbar