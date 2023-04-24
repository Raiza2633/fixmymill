import React, { useState } from "react";
import Insights from "../../components/Insights/Insights";
import MyOrders from "../../components/MyOrders/MyOrders";
import Profile from "../../components/Profile/Profile";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./UserPage.css";
const UserPage = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [currentTab, setCurrentTab] = useState(0);
  const [showSidebar, setShowSidebar] = useState(true);
  return (
    <div className="userpage-container">
      <Sidebar
        admin={isAdmin}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
      />
      {currentTab === 0 &&
        (isAdmin ? (
          <Insights showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        ) : (
          <Profile showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        ))}
      {currentTab === 1 && (
        <MyOrders showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      )}
    </div>
  );
};

export default UserPage;
