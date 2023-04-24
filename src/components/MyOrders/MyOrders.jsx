import React from "react";
import { BsBagCheck } from "react-icons/bs";
import { MdArrowBackIos } from "react-icons/md";

const MyOrders = ({ setShowSidebar }) => {
  return (
    <div className="right">
      <div className="show-sidebar" onClick={() => setShowSidebar(true)}>
        <MdArrowBackIos /> <h3>My Orders</h3>
      </div>
      <div className="insights-container">
        <div className="insights-bar">
          <BsBagCheck />

          <h3>My Orders</h3>
        </div>
        <div className="insights-table">
          <div className="insights-row">
            <h3>Current Order</h3>
            <h3>OR8940</h3>
          </div>
          <div className="insights-row">
            <h3>Last Order</h3>
            <h3>OR8940</h3>
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

export default MyOrders;
