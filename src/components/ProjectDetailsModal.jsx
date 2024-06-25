import { faExternalLinkAlt, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Icon } from "@iconify/react";
import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/custom-animations/scale-out-animation.css";
import { Modal } from "react-bootstrap";
import AwesomeSliderStyles2 from "../scss/dark-slider.module.scss";
import AwesomeSliderStyles from "../scss/light-slider.module.scss";

function ProjectDetailsModal(props) {
  const { data, onHide } = props;

  let tech, img;
  if (data) {
    const { technologies, images, title, description, url } = data;

    if (technologies) {
      tech = technologies.map((icons, i) => (
        <li className="list-inline-item mx-3" key={i}>
          <span>
            <div className="text-center">
              <i className={icons.class} style={{ fontSize: "300%" }}>
                <p className="text-center" style={{ fontSize: "30%" }}>
                  {icons.name}
                </p>
              </i>
            </div>
          </span>
        </li>
      ));
    }

    if (images) {
      img = images.map((elem, i) => <div key={i} data-src={elem} />);
    }
  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="modal-inside"
    >
      <span onClick={onHide} className="modal-close">
        <FontAwesomeIcon icon={faTimes} className="fa-3x close-icon" />
      </span>
      <div className="col-md-12">
        <div className="col-md-10 mx-auto" style={{ paddingBottom: "50px" }}>
          <div className="slider-tab">
            <Icon icon="emojione:red-circle" />
            &nbsp;
            <Icon icon="twemoji:yellow-circle" />
            &nbsp;
            <Icon icon="twemoji:green-circle" />
          </div>
          <AwesomeSlider
            cssModule={[AwesomeSliderStyles, AwesomeSliderStyles2]}
            animation="scaleOutAnimation"
            className="slider-image"
          >
            {img}
          </AwesomeSlider>
        </div>
        <div className="col-md-10 mx-auto">
          <h3 style={{ padding: "5px 5px 0 5px" }}>
            {data?.title}
            {data?.url && (
              <a
                href={data.url}
                target="_blank"
                rel="noopener noreferrer"
                className="link-href"
              >
                <FontAwesomeIcon
                  icon={faExternalLinkAlt}
                  style={{ marginLeft: "10px" }}
                />
              </a>
            )}
          </h3>
          <p className="modal-description">{data?.description}</p>
          <div className="col-md-12 text-center">
            <ul className="list-inline mx-auto">{tech}</ul>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default ProjectDetailsModal;
