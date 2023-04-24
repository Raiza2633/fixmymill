import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="home-container" id="home">
      <div className="container">
        <div className="left">
          <div className="heading">
            All Your <span style={{ fontWeight: 600 }}>Treadmill Problems</span>{" "}
            In One Click
          </div>
          <div>
            <button className="btn-big">
              <Link to="/contact">Contact Us</Link>
            </button>
          </div>
        </div>
        <div className="right">image</div>
      </div>
      <div className="content">
        <p>
          Matric services is an experienced firm that has solutions for all your
          treadmill problems.
        </p>
      </div>
    </section>
  );
};
export default Home;
