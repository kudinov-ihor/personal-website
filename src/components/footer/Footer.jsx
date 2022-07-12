import React from 'react';
import { SocialIcon } from 'react-social-icons';
import './footer.scss';

import { useTranslation } from 'react-i18next';

function Footer() {

    const {i18n, t} = useTranslation(["common"]);

  return (
    <footer>
        <div className="footer__phone">
            <h5 className="footer__title">{t('phoneTitle')}</h5>
            <a href="tel:380982327807" className="footer__link">+380982327807</a>
        </div>
        <div className="footer__phone">
            <h5 className="footer__title">{t('emailTitle')}</h5>
            <a href="mailto:kudinov.igor98@gmail.com" className="footer__link">kudinov.igor98@gmail.com</a>
        </div>
        <div className="footer__phone">
            <SocialIcon url="https://github.com/kudinov-ihor" bgColor="#fff" fgColor='#000' style={{ height: 50, width: 50, marginRight: 10 }}  />
            <SocialIcon url="https://t.me/kudinov_iv" bgColor="#fff" fgColor='#000'  style={{ height: 50, width: 50 }}  />
        </div>
        <div className="footer__phone">
            <h5 className="footer__title"></h5>
        </div>
        <p className="footer__copyright">
            {t('copyright')}
        </p>
    </footer>
  )
}

export default Footer