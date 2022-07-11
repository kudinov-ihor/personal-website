import React from 'react';
import { Link } from 'react-router-dom';
import './home.scss';
import Image from '../../assets/img/portrait_photo.webp';
import { motion, AnimatePresence } from 'framer-motion';
import i18next from 'i18next';

import { useTranslation } from 'react-i18next';

function Home() {

    const {i18n, t} = useTranslation(["common", "home"]);

    const generateColor = () => {
        const randomColor = Math.floor(Math.random() * 16777215)
          .toString(16)
          .padStart(6, '0');
        return `#${randomColor}`;
      };

    const sectionAnimation = {
        hidden: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        exit: {
            opacity: 0
        }
    };

    const circlesAnimation = {
        hidden: {
            y: 10,
            opacity: 0
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                delay: 0.5
              }

        },
        exit: {
            y: 10
        }
    };

    const circles = i18next.t('home:circles', {returnObjects: true}).map((link) =>
        <AnimatePresence>
            <Link to={link.link}>
                <motion.div 
                    className="home-wrapper__circle" 
                    key={link.id} 
                    style={{backgroundColor: generateColor()}}
                    variants={circlesAnimation}
                    initial='hidden'
                    animate='visible'
                    exit='exit'
                    >
                    {link.title}
                </motion.div>
            </Link>
        </AnimatePresence>
    );

  return (
    <motion.section
        className='home'
        variants={sectionAnimation}
        initial='hidden'
        animate='animate'
        exit='exit'

        >
        <div className="container">
            <div className="home-wrapper">
                <img src={Image} className="home-wrapper__photo" />
                <div className="home-wrapper__content">
                    <span className="home-wrapper__big-word">
                        {t("home:title")}
                    </span>
                    <h4 className="home-wrapper__title">
                        {t("home:subTitle")}
                    </h4>
                    <h1 className="home-wrapper__descr">{t("home:content")}</h1>
                    <div className="home-wrapper__layout">
                        {circles}
                    </div>
                </div>
            </div>
        </div>
    </motion.section>
  )
}

export default Home