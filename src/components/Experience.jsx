import { Icon } from "@iconify/react";
import React from "react";
import Badge from "react-bootstrap/Badge";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const iconLogo = <Icon icon="mdi:home" />;

function Experience({ resumeExperience, resumeBasicInfo }) {
  let work;
  if (resumeExperience && resumeBasicInfo) {
    work = resumeExperience.map((work, i) => {
      const mainTech = work.mainTech.map((technology, i) => (
        <Badge
          pill
          className="main-badge mr-2 mb-2 "
          style={{ marginRight: 2 }}
          key={i}
        >
          {technology}
        </Badge>
      ));

      const tech = work.technologies.map((technology, i) => (
        <Badge
          pill
          className="experience-badge mr-2 mb-2"
          style={{
            border: "1px solid",
            margin: 2.5,
          }}
          key={i}
        >
          {technology}
        </Badge>
      ));

      return (
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date={work.years}
          iconStyle={{
            background: "#AE944F",
            color: "#fff",
            textAlign: "center",
          }}
          icon={iconLogo}
          key={i}
        >
          <div style={{ textAlign: "left", marginBottom: "4px" }}>
            {mainTech}
          </div>
          <h3
            className="vertical-timeline-element-title"
            style={{ textAlign: "left" }}
          >
            {work.title}
          </h3>
          <h4
            className="vertical-timeline-element-subtitle"
            style={{ textAlign: "left" }}
          >
            {work.company}
          </h4>
          <div style={{ textAlign: "left", marginTop: "15px" }}>{tech}</div>
        </VerticalTimelineElement>
      );
    });
  }

  return (
    <section id="resume" className="pb-5">
      <div className="col-md-12 mx-auto">
        <div className="col-md-12">
          <h1 className="section-title" style={{ color: "black" }}>
            <span className="text-black" style={{ textAlign: "center" }}>
              Experience
            </span>
          </h1>
        </div>
      </div>
      <div className="col-md-8 mx-auto">
        <VerticalTimeline>
          {work}
          <VerticalTimelineElement
            iconStyle={{
              background: "#AE944F",
              color: "#fff",
              textAlign: "center",
            }}
            icon={iconLogo}
          />
        </VerticalTimeline>
      </div>
    </section>
  );
}

export default Experience;
