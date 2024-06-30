import React from "react";

function Footer({ sharedBasicInfo }) {
  return (
    <footer
      style={{
        display: "flex",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="container">
        <h2>
          Copyright &copy; {sharedBasicInfo ? sharedBasicInfo.name : "???"}
        </h2>
      </div>
    </footer>
  );
}

export default Footer;
