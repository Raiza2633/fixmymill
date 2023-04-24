import React, { useState } from "react";
import { TbPhoneCall } from "react-icons/tb";
import { HiOutlineMailOpen } from "react-icons/hi";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

import "./ContactUs.css";

const ContactUs = () => {
  const [file, setFile] = useState();
  console.log(file);

  return (
    <div className="contact-container">
      <div className="left">
        <div className="contact-form">
          <form>
            <div className="addinfo-para">
              <p>
                Please add your information which helps us to understand your
                problems and we will give a possible solutions.
              </p>
            </div>
            <div className="input-container">
              <input
                className="contact-name"
                type="name"
                name="name"
                placeholder="Contact name"
              />
            </div>
            <div className="input-container">
              <input
                className="street"
                type="text"
                name="street"
                placeholder="Street"
              />
            </div>
            <div
              className="input-container"
              style={{ flexDirection: "row", gap: "1rem" }}
            >
              <input
                className="city"
                type="text"
                name="city"
                placeholder="City"
              />
              <input
                className="pincode"
                type="pincode"
                name="pincode"
                placeholder="Pincode"
              />
            </div>
            <div className="input-container">
              <input
                className="contact-phone"
                type="phone"
                name="phone"
                placeholder="Contact Phone"
              />
            </div>
            <div className="input-container">
              <input
                className="email"
                type="email"
                name="email"
                placeholder="Email"
              />
            </div>
            <div className="input-container">
              <input
                className="idea"
                type="text"
                name="idea"
                placeholder="Let’s talk about your idea"
              />
            </div>
            <div className="file-container">
              <input
                className="file"
                type="file"
                name="file"
                onChange={(e) => {
                  setFile(e.target.files[0]);
                }}
              />
              {file ? (
                <div> {file.name}</div>
              ) : (
                <div>Upload Additional file</div>
              )}
            </div>
            <div className="para">
              Attach file. File size of your documents should not exceed 10MB
            </div>

            <button className="submit-btn">Submit</button>
          </form>
          <div className="contact-details">
            <div className="tele">
              <div className="phone">
                <TbPhoneCall /> +918773898982
              </div>
              <div className="mail">
                <HiOutlineMailOpen /> fixmymill@support.com
              </div>
            </div>
            <div className="social">
              <div className="insta">
                <BsInstagram />
              </div>
              <div className="facebook">
                <FaFacebookF />
              </div>
              <div className="twitter">
                <BsTwitter />
              </div>
            </div>
          </div>
        </div>
        <div className="right"></div>
      </div>
      <div className="right">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.84916296526!2d77.6309395!3d12.9539974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1679579480625!5m2!1sen!2sin"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
