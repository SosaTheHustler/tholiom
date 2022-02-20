import React from "react";
import Helmet from "react-helmet";
import img from "./img/Image-1.jpg";

const Outreach = () => {
  return (
    <div className="outreach-container">
      <div className="outreach">
        <img src={img} className="outreach-img" />
        <Helmet>
          <script src="https://apps.elfsight.com/p/platform.js" defer></script>
        </Helmet>
        <div class="elfsight-app-7f1a767f-4d2e-4be7-b1ca-25644e6c8a72"></div>
      </div>
    </div>
  );
};

export default Outreach;
