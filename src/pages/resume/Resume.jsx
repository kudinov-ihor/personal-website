import React from 'react';
import './resume.scss';
import { motion } from 'framer-motion';
import i18next from 'i18next';

import { useTranslation } from 'react-i18next';

function Resume() {

    const {i18n, t} = useTranslation(["common", "resume"]);

    const workExperience =  i18next.t('resume:workExperience', {returnObjects: true}).map((item) =>
        <div className="resume-wrapper__item" key={item.id}>
            <h4 className="resume-wrapper__position">{item.position}</h4>
            <h4 className="resume-wrapper__company">{item.company}</h4>
            <p className="resume-wrapper__content">{item.content}</p>
            <span className="resume-wrapper__date">{item.date}</span>
        </div>
    );
    const educationList = i18next.t('resume:education', {returnObjects: true}).map((item) =>
        <div className="resume-wrapper__item" key={item.id}>
            <h4 className="resume-wrapper__position resume-wrapper__position_bold">
                {item.degree}
            </h4>
            <p className="resume-wrapper__content">
                {item.place}
            </p>
            <span className="resume-wrapper__date">
                {item.date}
            </span>
        </div>
    );
    const skillsList = i18next.t('resume:skills', {returnObjects: true}).map((item) =>
        <li className="resume-wrapper__skill" key={item.id}>
            {item.skill}
        </li>
    );

  return (
    <motion.section
        className='resume'
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        >
        <div className="container">
            <h1 className="resume__title">{t("resume:sectionTitle")}</h1>
            <div className="resume-wrapper">
                <h3 className="resume-wrapper__title">{t("resume:workExperienceTitle")}</h3>
                <div className="resume-wrapper__cards">
                    {workExperience}
                </div>
            </div>
            <div className="resume-wrapper">
                <h3 className="resume-wrapper__title ">{t('resume:educationTitle')}</h3>
                <div className="resume-wrapper__cards">
                    {educationList}
                </div>
            </div>
            <div className="resume-wrapper">
                <h3 className="resume-wrapper__title">Work Experience</h3>
                <ul className="resume-wrapper__list">
                    {skillsList}
                </ul>
            </div>
        </div>
    </motion.section>
  )
}

export default Resume