import React from "react";
import "./pages.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="background">
        <div className="title">
          Tholiom | The Hope Of Life International Outreach Ministries
        </div>
        <div className="slogan">
          <h1>
            There is <span>HOPE</span>
          </h1>
          <br />
          <h1>
            & There is <span>LIFE</span>
          </h1>
          <br />
          <h1>
            {" "}
            Through the word of <span>GOD</span>
          </h1>
        </div>
        <Link to="/schedule" className="button">
          Join us for service
        </Link>
      </div>
    </div>
  );
};

export default Home;
