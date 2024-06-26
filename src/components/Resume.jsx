import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { QRCode } from "react-qrcode-logo";
import download from "./download.gif";
import resumeLocalLink from "./Rajat_Pratap_Singh_Resume_Frontend_SDE3.pdf";

const resumeLinkUrl =
  "https://drive.google.com/file/d/12EFKUXPtDJHnkObbulV4b2QkaSOpF2jY/view?usp=sharing";

const SkillsSection = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const updateMedia = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <section id="skills" style={{ backgroundColor: "#fff", padding: "40px 0" }}>
      <div className="col-md-12 text-center">
        <h1 className="section-title">
          <span className="text-dark">RESUME</span>
        </h1>
      </div>
      <div
        style={{
          display: isMobile ? "none" : "flex",
          flexWrap: "wrap",
          flexDirection: "column",
          alignContent: "center",
          justifyContent: "center",
          padding: "20px",
          marginTop: -25,
        }}
        className="resume-container"
      >
        <span style={{ border: "3px solid #444444", borderRadius: 5 }}>
          <QRCode
            value={resumeLinkUrl}
            size={250}
            qrStyle="dots"
            eyeRadius={10}
            fgColor="#444444"
            className="qr-code"
          />
        </span>
        <Button
          href={resumeLocalLink}
          download
          style={{
            backgroundColor: "#444444",
            height: 40,
            textAlign: "center",
            color: "#fff",
            fontSize: 20,
            marginTop: 10,
            fontWeight: "bold",
          }}
        >
          Download Resume
        </Button>
      </div>
      {isMobile && (
        <span
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Button
            href={resumeLocalLink}
            download
            style={{
              display: "block",
              width: 200,
              height: 200,
              backgroundColor: "#444",
              color: "#fff",
              textAlign: "center",
              lineHeight: "100px",
              borderRadius: 10,
              margin: "0 auto",
              cursor: "pointer",
              fontSize: 20,
            }}
          >
            <img src={download} width="100%" height="100%" alt="Download" />
          </Button>
          <small style={{ fontWeight: 800, letterSpacing: 2, marginTop: 10 }}>
            CLICK TO DOWNLOAD
          </small>
        </span>
      )}
    </section>
  );
};

export default SkillsSection;
