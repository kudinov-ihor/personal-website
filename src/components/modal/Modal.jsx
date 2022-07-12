import React from 'react';
import './modal.scss';
import {motion} from 'framer-motion';
import Backdrop from '../backdrop/Backdrop';

import { useTranslation } from "react-i18next";

function Modal({handleClose, title, content, photo, buttonLink }) {

    const { t } = useTranslation(["common"]);


    const dropIn = {
        hidden: {
            y: "-100vh",
            opacity: 0
        },
        visible: {
            y: "0",
            opacity: 1,
            transition: {
                duration: 0.1,
                type: "spring",
                damping: 25,
                stiffness: 500
            }

        },
        exit: {
            y: "100vh",
            opacity: 0
        }
    };

  return (
    <Backdrop onClick={handleClose}>
        <motion.div
            onClick={(e) => e.stopPropagation()}
            className='modal-window'
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit"
            >
            <img src={require("../../assets/img/projects/info/" + photo + ".webp")} alt={title}></img>
            <div>
                <h4 className="modal-window__title">
                    {title}
                </h4> 
                <p className="modal-window__content">
                    {content}
                </p>
                <a href={buttonLink} target="_blank" rel="noopener noreferrer">
                    <button className="modal-window__button">{t("buttonProjects")}</button>
                </a>
            </div>
            <button className="modal-window__close" onClick={handleClose}>X</button>
        </motion.div>
    </Backdrop>    
  )
}

export default Modal