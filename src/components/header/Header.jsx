import React, {useEffect} from 'react';
import {Link, NavLink} from 'react-router-dom';
import './header.scss';

import i18next from 'i18next';

import { useTranslation } from 'react-i18next';

function Header() {

    const {i18n, t} = useTranslation(["common", "navigation"]);

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

  return (
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
    </header>
  )
}

export default Header