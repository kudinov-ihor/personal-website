import React from 'react';
import './modal.scss';
import {motion} from 'framer-motion';
import Backdrop from '../backdrop/Backdrop';

function Modal({handleClose, title, content, photo}) {

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
            <img src={require("../../assets/img/projects/info/" + photo + ".webp")} ></img>
            <div>
                <h4 className="modal-window__title">
                    {title}
                </h4> 
                <p className="modal-window__content">
                    {content}
                </p> 
            </div>
        </motion.div>
    </Backdrop>    
  )
}

export default Modal