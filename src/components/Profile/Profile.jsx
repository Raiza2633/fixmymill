import React from "react";

import "./Profile.css";
import Input from "../InputComponent/Input";
import { MdArrowBackIos } from "react-icons/md";

const Profile = ({ setShowSidebar }) => {
  return (
    <div className="right">
      <div className="show-sidebar" onClick={() => setShowSidebar(true)}>
        <MdArrowBackIos /> <h3>Profile</h3>
      </div>
      <form>
        <Input name="name" />
        <Input name="email" type="email" />
        <Input name="phone" type="email" />
      </form>
      <div className="save-btn">
        <button>Save</button>
      </div>
    </div>
  );
};

export default Profile;
