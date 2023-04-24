import React from "react";
import { FiLogOut } from "react-icons/fi";
import { BsBagCheck } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { MdAutoGraph, MdArrowForwardIos } from "react-icons/md";
import { RxAvatar } from "react-icons/rx";

const Sidebar = ({
  admin,
  currentTab,
  setCurrentTab,
  showSidebar,
  setShowSidebar,
}) => {
  return (
    <div className="left" style={{ left: showSidebar ? "0" : "-700px" }}>
      <div className="inner-wrapper">
        <div className="profile-avatar">
          <RxAvatar />
        </div>
        <div className="profile-name">
          <h2>{admin ? "Admin" : "User"}</h2>
        </div>

        <hr></hr>
        {admin ? (
          <div
            className={`profile-list-container ${
              currentTab === 0 ? "active-tab" : null
            }`}
            onClick={() => {
              setCurrentTab(0);
              setShowSidebar(false);
            }}
          >
            <div className="left-content">
              <MdAutoGraph />
              <h3>Insights</h3>
            </div>
            <MdArrowForwardIos />
          </div>
        ) : (
          <div
            className={`profile-list-container ${
              currentTab === 0 ? "active-tab" : null
            }`}
            onClick={() => {
              setCurrentTab(0);
              setShowSidebar(false);
            }}
          >
            <div className="left-content">
              <CgProfile />
              <h3>Profile</h3>
            </div>
            <MdArrowForwardIos />
          </div>
        )}
        <hr></hr>
        <div
          className={`profile-list-container ${
            currentTab === 1 ? "active-tab" : null
          }`}
          onClick={() => {
            setCurrentTab(1);
            setShowSidebar(false);
          }}
        >
          <div className="left-content">
            <BsBagCheck />
            <h3>My Orders</h3>
          </div>
          <MdArrowForwardIos />
        </div>
        <hr></hr>
        <div
          className={`profile-list-container`}
          style={{ justifyContent: "flex-start", gap: "1rem" }}
        >
          <FiLogOut />
          <h3>Sign Out</h3>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
