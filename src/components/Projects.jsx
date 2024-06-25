import React, { useState } from "react";
import Slider from "react-slick";
import ProjectDetailsModal from "./ProjectDetailsModal";

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2500,
  responsive: [
    {
      breakpoint: 1024, // for devices less than 1024px
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600, // for devices less than 600px
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 480, // for devices less than 480px
      settings: {
        slidesToShow: 1, // only one slide visible
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
  ],
};

function Projects({ resumeProjects, resumeBasicInfo }) {
  const [detailsModalShow, setDetailsModalShow] = useState(false);
  const [deps, setDeps] = useState({});

  const detailsModalClose = () => setDetailsModalShow(false);

  const detailsModalOpen = (data) => {
    setDeps(data);
    setDetailsModalShow(true);
  };

  let sectionName, projects;
  if (resumeProjects && resumeBasicInfo) {
    sectionName = resumeBasicInfo.projects;
    projects = resumeProjects.map((project) => {
      const cardStyle = {
        cursor: "pointer",
        margin: "20px",
        transition: "transform 0.3s ease-in-out",
        display: "flex",
        justifyContent: "center",
      };

      const cardHoverStyle = {
        transform: "scale(1.05)",
      };

      const cardContentStyle = {
        textAlign: "center",
        padding: "10px",
        backgroundColor: "#fff",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        borderRadius: "10px",
        position: "relative",
      };

      const projectDateStyle = {
        position: "absolute",
        top: "10px",
        left: "10px",
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        color: "white",
        padding: "5px 10px",
        borderRadius: "3px",
        fontSize: "14px",
        fontWeight: "bold",
      };

      const projectTitleStyle = {
        fontWeight: "bold",
        textAlign: "center",
        marginTop: "10px",
        fontSize: "18px",
        color: "#333",
      };

      return (
        <div
          className="col-sm-12 col-md-6 col-lg-4"
          key={project.title}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div
            className="portfolio-item d-block"
            style={cardStyle}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = cardHoverStyle.transform)
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "none")}
            onClick={() => detailsModalOpen(project)}
          >
            <div style={cardContentStyle}>
              <img
                src={project.images[0]}
                alt="projectImages"
                height="230"
                style={{
                  marginBottom: 0,
                  paddingBottom: 0,
                  position: "relative",
                  width: "100%",
                  borderRadius: "10px 10px 0 0",
                }}
              />
              <span style={projectDateStyle}>{project.startDate}</span>
              <p style={projectTitleStyle}>{project.title}</p>
            </div>
          </div>
        </div>
      );
    });
  }

  return (
    <section id="portfolio">
      <div className="col-md-12">
        <h1 className="section-title" style={{ color: "black" }}>
          <span>PROJECTS</span>
        </h1>
        <div className="col-md-12 mx-auto" style={{ overflow: "hidden" }}>
          <div className="row mx-auto">
            <Slider {...settings}>{projects}</Slider>
          </div>
        </div>
        <ProjectDetailsModal
          show={detailsModalShow}
          onHide={detailsModalClose}
          data={deps}
        />
      </div>
    </section>
  );
}

export default Projects;
