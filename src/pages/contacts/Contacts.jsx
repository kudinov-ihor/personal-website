import React from 'react';
import './contacts.scss';
import { motion } from 'framer-motion';
import i18next from "i18next";

import { useTranslation } from "react-i18next";

import Hero from '../../assets/img/hero_contact.webp';


function Contacts() {

    const { i18n, t } = useTranslation(["common", "contacts"]);

    const infoList =  i18next
      .t("contacts:infoList", { returnObjects: true })
      .map((item) => ( 
        <>
            <h4 className="contact__title contact__title_small">{item.title}</h4>
            <h5 className="contact__descr contact__descr_small">{item.content}</h5>
        </>
      ));

  return (
    <motion.section
        className='contact'
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        >
        <div className="container container-flex">
            <div className="contact__info">
                <h1 className="contact__title">{t("contacts:sectionTitle")}</h1>
                <h2 className="contact__descr">{t("contacts:sectionDescr")}</h2>
                {infoList}
            </div>
            <motion.img 
                src={Hero} 
                alt="" 
                initial= {{y: '-100vh'}}
                animate= {{y: '0'}}
                exit= {{y: '100vh'}}
                />
        </div>
    </motion.section>
  )
}

export default Contacts