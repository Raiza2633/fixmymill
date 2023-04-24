import React from "react";
import ServiceCard from "../ServiceCard/ServiceCard";
import "./Services.css"

const Services = () => {
  const cardData = [
    {
      title: "Installation",
      list: [
        "Assembly of the product",
        "Voltage Check",
        "Lubrication check",
        "Belt adjustment check",
        "Wiring Check",
        "Demo for usage",
      ],
    },
    {title: "General Service",
    list: [
      "Voltage check",
      "V belt check",
      "Motor check",
      "MCB check",
      "Pcb Check",
      "Display console check",
      "Lubrication",
      "Belt Adjustment",
      "Wiring check"
    ]},
    {
      title: "Repair",
      list: [
        "Repair of the Product",
        "Voltage check",
        "V belt check",
        "Motor check",
        "MCB check",
        "Pcb check",
        "Display console check",
        "Lubrication",
        "Belt Adjustment",
        "Wiring Check"
      ]
    }
  ];
  return (
    <section className="services-container" id="services">
      <h2 className="services-heading">Our Services</h2>
      <div className="card-component">
        {cardData.map((data, index) => (
          <ServiceCard title={data.title} list={data.list} key={index} />
        ))}
      </div>
    </section>
  );
};
export default Services;
