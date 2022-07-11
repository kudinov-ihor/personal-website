import React, {useState} from "react";
import "./projects.scss";

import { motion } from "framer-motion";
import i18next from "i18next";

import { useTranslation } from "react-i18next";
import Modal from '../../components/modal/Modal'


function Projects() {

  const { i18n, t } = useTranslation(["common", "projects"]);

  const [show, setShow] = useState(false);
  const [modalData, setModalData] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const eComercialProjectList = i18next
    .t("projects:projectList", { returnObjects: true })
    .map((item) => (
      <div className="projects__item" key={item.id}>
        {/* <div className="projects__content">
          <h4 className="projects__name">{item.name}</h4>
          <p className="projects__descr"> {item.content} </p>
        </div> */}
  
        <img 
            src={require("../../assets/img/projects/" + item.image + ".webp")} 
            onClick={()=> {
                setModalData(item);
                setShow(true);
              }}
              />


      </div>
    ));

  
  // const nonComercialProjectList = i18next.t("projects:nonProjectList", {returnObjects: true}).map((item) => (
  //   <div className="projects__item" key={item.id}>
  //     <div className="projects__content">
  //       <h4 className="projects__name">{item.name}</h4>
  //     </div>
  //     <img src={require("../../assets/img/" + item.image + ".webp")} />
  //   </div>
  // ));

  return (
    <motion.section
      className="projects"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="container">
        <h1 className="projects__title">{t("projects:sectionTitle")}</h1>
        <h3 className="projects__title_small">{t("projects:sectionDescr")}</h3>
        <div className="projects__wrapper">
          {eComercialProjectList}
          {show && <Modal show={show} handleClose={handleClose} title={modalData.name} content={modalData.content} photo={modalData.infoImg}/>}
        </div>
      </div>
    </motion.section>
  );
}

export default Projects;
