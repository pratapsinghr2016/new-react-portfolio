import React from "react";

function Footer({ sharedBasicInfo }) {
  return (
    <footer>
      <div className="col-md-12">
        <div className="copyright py-4 text-center">
          <div className="container">
            <h2>
              Copyright &copy; {sharedBasicInfo ? sharedBasicInfo.name : "???"}
            </h2>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
