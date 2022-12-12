import React from "react";

import "./css/Pin.css";

function Pin({ urls, name }) {
  // console.log(urls);
  return (
    <>
      <div className="pin-wrapper">
        <div className="pin-container">
          <img src={urls} alt={"image-" + name} />
        </div>
      </div>
    </>
  );
}

export default Pin;
