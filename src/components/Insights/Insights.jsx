import React from "react";
import { MdAutoGraph, MdArrowBackIos } from "react-icons/md";

const Insights = ({ setShowSidebar }) => {
  return (
    <div className="right">
      <div className="show-sidebar" onClick={() => setShowSidebar(true)}>
        <MdArrowBackIos /> <h3>Insights</h3>
      </div>
      <div className="insights-container">
        <div className="insights-bar">
          <MdAutoGraph />
          <h3>Insights</h3>
        </div>
        <div className="insights-table">
          <div className="insights-row">
            <h3>Total Website Views</h3>
            <h3>90</h3>
          </div>
          <div className="insights-row">
            <h3>Total Revenue</h3>
            <h3>₹ 9000</h3>
          </div>
          <div className="insights-row">
            <h3>Number of Orders</h3>
            <h3>05</h3>
          </div>
        </div>
      </div>
      <div className="save-btn">
        <button>Export PDF</button>
      </div>
    </div>
  );
};

export default Insights;
