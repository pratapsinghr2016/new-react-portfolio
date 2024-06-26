import React from "react";
import "./App.scss";
import About from "./components/About";
import ContactSection from "./components/Contacts";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Projects from "./components/Projects";
import ResumeSection from "./components/Resume";
import Skills from "./components/Skills";
import portFolioJson from "./constants/portfolioData";
import resumeData from "./constants/resumeData";

const App = () => {
  console.log("App", portFolioJson);
  return (
    <div>
      <Header sharedData={portFolioJson.basic_info} />
      <About
        resumeBasicInfo={resumeData.basic_info}
        sharedBasicInfo={portFolioJson.basic_info}
      />
      <Projects
        resumeProjects={resumeData.projects}
        resumeBasicInfo={portFolioJson.basic_info}
      />
      <Skills
        sharedSkills={resumeData.skills}
        resumeBasicInfo={portFolioJson.basic_info}
      />
      <ContactSection
        sharedSkills={resumeData.skills}
        resumeBasicInfo={portFolioJson.basic_info}
      />
      <ResumeSection
        resumeExperience={resumeData.experience}
        resumeBasicInfo={portFolioJson.basic_info}
      />
      <Experience
        resumeExperience={resumeData.experience}
        resumeBasicInfo={portFolioJson.basic_info}
      />
      <Footer sharedBasicInfo={portFolioJson.basic_info} />
    </div>
  );
};

export default App;
