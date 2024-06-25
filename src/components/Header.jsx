import React, { useState } from "react";
import Switch from "react-switch";
import { ReactTyped } from "react-typed";
import macImage from "./macImage.png";
import waveHand from "./waving-hand.svg";

const Header = ({ sharedData }) => {
  const [checked, setChecked] = useState(false);
  const [currentMode, setCurrentMode] = useState("light");

  const onThemeSwitchChange = (checked) => {
    setChecked(checked);
    setTheme();
  };

  const setTheme = () => {
    const dataThemeAttribute = "data-theme";
    const body = document.body;
    const newTheme =
      body.getAttribute(dataThemeAttribute) === "dark" ? "light" : "dark";
    setCurrentMode(newTheme);
    body.setAttribute(dataThemeAttribute, newTheme);
  };

  return (
    <header id="home" style={{ height: "100%", display: "block" }}>
      <div className="row aligner" style={{ height: "100%" }}>
        <div className="col-md-12">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              marginTop: -75,
            }}
          >
            <div
              className="title-container"
              style={{
                marginBottom: 20,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <span
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <img
                  src={waveHand}
                  alt="waveHand"
                  style={{
                    width: 50,
                    height: 50,
                  }}
                />
                <h2
                  style={{
                    fontSize: 25,
                    marginBottom: 5,
                    fontWeight: 700,
                    color: currentMode === "light" ? "black" : "white",
                  }}
                >
                  Hey, hire me as a
                </h2>
              </span>
              <ReactTyped
                strings={[
                  "Software Engineer",
                  "Frontend Developer",
                  "Backend Developer",
                  "Full-Stack Developer",
                  "Web Developer",
                  "Mobile Developer",
                ]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
                style={{
                  fontSize: "1.85rem",
                  fontWeight: 600,
                  marginBottom: 10,
                  color: currentMode === "light" ? "black" : "white",
                }}
              />
            </div>
            <Switch
              checked={checked}
              onChange={onThemeSwitchChange}
              offColor="#baaa80"
              onColor="#353535"
              className="react-switch mx-auto"
              width={80}
              height={40}
              uncheckedIcon={
                <span style={{ fontSize: 25, textAlign: "center" }}>🌜</span>
              }
              checkedIcon={
                <span style={{ fontSize: 25, textAlign: "center" }}>☀️</span>
              }
              id="icon-switch"
            />
            <span>
              <img
                src={macImage}
                alt={"hero"}
                style={{ width: "100%", height: "auto", maxHeight: "500px" }}
              />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
