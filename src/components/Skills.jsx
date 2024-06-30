import {
  faBootstrap,
  faCss3Alt,
  faDocker,
  faGithub,
  faHtml5,
  faJsSquare,
  faNodeJs,
  faReact,
  faSass,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import antd from "./assets/antd.svg";
import apollo from "./assets/apollo.svg";
import aws from "./assets/aws.svg";
import chart from "./assets/chart.svg";
import cms from "./assets/cms.svg";
import express from "./assets/express.svg";
import gateway from "./assets/gateway.svg";
import graphql from "./assets/graphql.svg";
import headless from "./assets/headless.svg";
import jest from "./assets/jest.svg";
import kub from "./assets/kub.svg";
import mfe from "./assets/mfe.svg";
import mongo from "./assets/mongo.svg";
import mui from "./assets/mui.svg";
import nest from "./assets/nestjs.svg";
import faNextJs from "./assets/nextjs.svg";
import reactN from "./assets/reactN.svg";
import redux from "./assets/redux.svg";
import sonarqube from "./assets/sonarqube.svg";
import storybook from "./assets/storybook.svg";
import typescript from "./assets/typescript.svg";
import vite from "./assets/vite.svg";
import webpack from "./assets/webpack.svg";

const skillsData = [
  { name: "HTML5", icon: faHtml5, type: "icn" },
  { name: "CSS3", icon: faCss3Alt, type: "icn" },
  { name: "JavaScript", icon: faJsSquare, type: "icn" },
  { name: "Nodejs", icon: faNodeJs, type: "icn" },
  { name: "React", icon: faReact, type: "icn" },
  { name: "Sass", icon: faSass, type: "icn" },
  { name: "Bootstrap", icon: faBootstrap, type: "icn" },
  { name: "MySQL", icon: faDatabase, type: "icn" },
  { name: "Docker", icon: faDocker, type: "icn" },
  { name: "Git", icon: faGithub, type: "icn" },
  { name: "Next.js", icon: faNextJs, type: "img" },
  { name: "MUI", icon: mui, type: "img" },
  { name: "AntD", icon: antd, type: "img" },
  { name: "Redux", icon: redux, type: "img" },
  { name: "ReactNative", icon: reactN, type: "img" },
  { name: "TypeScript", icon: typescript, type: "img" },
  { name: "Micro_FE", icon: mfe, type: "img" },
  { name: "Storybook", icon: storybook, type: "img" },
  { name: "Webpack", icon: webpack, type: "img" },
  { name: "Vite", icon: vite, type: "img" },
  { name: "Chartjs", icon: chart, type: "img" },
  { name: "CMS", icon: cms, type: "img" },
  { name: "HeadlessCMS", icon: headless, type: "img" },
  { name: "Jest", icon: jest, type: "img" },
  { name: "SonarQube", icon: sonarqube, type: "img" },
  { name: "ExpressJS", icon: express, type: "img" },
  { name: "NestJS", icon: nest, type: "img" },
  { name: "GraphQL", icon: graphql, type: "img" },
  { name: "Apollo", icon: apollo, type: "img" },
  { name: "AWS", icon: aws, type: "img" },
  { name: "Kubernetes", icon: kub, type: "img" },
  { name: "Gateways", icon: gateway, type: "img" },
  { name: "MongoDB", icon: mongo, type: "img" },
];

const ResumeSection = () => {
  const skillStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "10px",
    padding: "20px",
    borderRadius: "10px",
    backgroundColor: "#444",
    color: "#ffffff",
    fontSize: "20px",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    width: "80px",
    height: "80px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
  };

  const skillHoverStyle = {
    transform: "scale(1.1)",
    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.5)",
  };

  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    padding: "20px",
  };

  const iconStyle = {
    fontSize: "40px",
    textShadow:
      "2px 2px 4px rgba(0, 0, 0, 0.5), -1px -1px 2px rgba(255, 255, 255, 0.3)",
  };

  return (
    <section id="skills" style={{ backgroundColor: "#fff", padding: "40px 0" }}>
      <div className="col-md-12 text-center">
        <h1 className="section-title">
          <span className="text-dark">Skills</span>
        </h1>
      </div>
      <div style={containerStyle}>
        {skillsData.map((skill) => (
          <div
            key={skill.name}
            style={skillStyle}
            onMouseEnter={(e) =>
              Object.assign(e.currentTarget.style, skillHoverStyle)
            }
            onMouseLeave={(e) =>
              Object.assign(e.currentTarget.style, skillStyle)
            }
          >
            <span
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {skill.type === "icn" ? (
                <FontAwesomeIcon icon={skill.icon} style={iconStyle} />
              ) : (
                <img src={skill.icon} width={40} height={40} />
              )}
              <small style={{ fontSize: "1.25rem", marginTop: 3 }}>
                {skill.name}
              </small>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ResumeSection;
