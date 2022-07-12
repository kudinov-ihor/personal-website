import React, {useEffect, useState} from 'react';
import {Link, NavLink} from 'react-router-dom';
import './header.scss';

import i18next from 'i18next';

import { useTranslation } from 'react-i18next';

function Header() {

    const {i18n, t} = useTranslation(["common", "navigation"]);

    const [menu, setMenu] = useState(false);

    useEffect (() => {
            i18next.changeLanguage("en");
    }, []);

    const handleLanguageChange = () => {
        if (localStorage.getItem("i18nextLng") === 'ua') {
            i18n.changeLanguage('en');
        } else {
            i18n.changeLanguage('ua');
        }
    }

    const navigationLinks = i18next.t('navigation:navigation', {returnObjects: true}).map((link) => 
            <li className="header-nav__link"  key={link.id}>
                <NavLink 
                    className={({ isActive }) => isActive ?'header-nav__item_active' : 'header-nav__item'} to={link.link}
                    >
                        {link.name} 
                </NavLink>
            </li>
    );
    const mobileNavigationLinks = i18next.t('navigation:navigation', {returnObjects: true}).map((link) => 

        <li className="menu-link" key={link.id}>
            <Link to={link.link}>{link.name}</Link>
        </li>
    );

  return (
    <>
        <div className={menu ? 'menu active' : 'menu'}>

        <div className="menu-block">
            <nav>
                <ul className="menu-list" onClick={() => setMenu(false)}>
                    {mobileNavigationLinks}
                </ul>
            </nav>
        </div>

        </div>
        <header className='header'>
        <div className="header-logo">
            <span className="header-logo__circle"></span>
            <h4 className="header-logo__name">Ihor Kudinov</h4>
            <span className="header-logo__position">Front-end developer</span>
            <button className='lang-btn' onClick={handleLanguageChange}>
                    {localStorage.getItem("i18nextLng") === 'ua' ? 'УКР' : 'ENG'}
            </button>
        </div>
        <nav>
            <ul className="header-nav">
                {navigationLinks}
            </ul>

        </nav>
        <div className={menu ? 'header__hamburger active' : 'header__hamburger'} onClick={() => setMenu(!menu)}>
            <span ></span>
            <span ></span>
            <span ></span>
        </div>
        </header>
    </>
  )
}

export default Header