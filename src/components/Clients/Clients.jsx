import React from "react";
import Company1 from "../../images/company1.png";
import Company2 from "../../images/company2.png";

import Company3 from "../../images/company3.png";

import Company4 from "../../images/company4.png";

import ClientCard from "../ClientCard/ClientCard";
import "./Clients.css";

const Clients = () => {

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      paritialVisibilityGutter: 60,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      paritialVisibilityGutter: 50,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      paritialVisibilityGutter: 30,
    },
  };
  const settings = {
    className: "slider variable-width",
    dots: true,
    infinite: true,
    centerMode: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    variableWidth: true,
  };
  return (
    <section className="client-container">
      <h2 className="client-heading">
        Our <span style={{ fontWeight: 600 }}>Clients</span>
      </h2>
      <div className="client-img-container">
        <div>
          <img src={Company1} alt="" draggable={false} />
        </div>
        <div>
          <img src={Company2} alt="" draggable={false} />
        </div>
        <div>
          <img src={Company3} alt="" draggable={false} />
        </div>
        <div>
          <img src={Company4} alt="" draggable={false} />
        </div>
      </div>
    </section>
  );
};

export default Clients;
