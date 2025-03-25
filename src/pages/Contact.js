import React, { useEffect, useState } from "react";

import Header2 from "./Header2";
import back from "./outo.png";
import backs from "./footimg.jpg";
import pro from "./exam.png";
import r1 from "./edublink-breadcrumb-bg.webp";
import r5 from "./examthree.png";
import Footer from "./Footer";
import "./style.css";
import Test from "./Test";
import Header from "./Header";
import Footers from "./Footers";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // use icons for buttons
import Builder from "./Builder";
import Swipes from "./Swipes";

import img from "./blog.webp";

const Contact = () => {
  return (
    <>
      <div id="main-content">
        <div class="content-area">
          <div class="page-title">
            <div
              class="main-top"
              style={{
                backgroundImage: "url('assets/images/bg-page-title-01.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div class="overlay-top-header"></div>

              <div class="content container">
                <h1>Contact Us</h1>

                <div class="wrap-breadcrumb">
                  <ul class="breadcrumbs">
                    <li>
                      <a href="javascript:;">Home</a>
                    </li>

                    <li>
                      <span class="breadcrum-icon">/</span>
                      Contact Us
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="site-content layout-1">
            <main class="site-main">
              <div class="wrap-main-content">
                <div class="thim-contact-info_contact-page">
                  <div class="container">
                    <div class="row">
                      <div class="col-sm-6 col-lg-3">
                        <div class="bp-element bp-element-icon-box vblog-layout-2 align-center">
                          <div class="icon-box">
                            <div class="icon-image">
                              <i class="ion ion-android-pin"></i>
                            </div>

                            <div class="content">
                              <h3 class="title">Our Location</h3>

                              <div class="description">
                                1355 Elnino Market Street, Suite 969 San
                                Francisco, CA 94103
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="col-sm-6 col-lg-3">
                        <div class="bp-element bp-element-icon-box vblog-layout-2 align-center">
                          <div class="icon-box">
                            <div class="icon-image">
                              <i class="ion ion-android-call"></i>
                            </div>

                            <div class="content">
                              <h3 class="title">Call Us</h3>

                              <div class="description">
                                <a href="javascript:;">(800) 202-555-0120</a>
                                <br />
                                <a href="javascript:;">202-555-0135</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="col-sm-6 col-lg-3">
                        <div class="bp-element bp-element-icon-box vblog-layout-2 align-center">
                          <div class="icon-box">
                            <div class="icon-image">
                              <i class="ion ion-email"></i>
                            </div>

                            <div class="content">
                              <h3 class="title">Message</h3>

                              <div class="description">
                                <a href="javascript:;">
                                  <span
                                    class="__cf_email__"
                                    data-cfemail="5536342730302778363a3b2134362115383432677b363a38"
                                  >
                                    [email&#160;protected]
                                  </span>
                                </a>
                                <br />
                                <a href="javascript:;">
                                  <span
                                    class="__cf_email__"
                                    data-cfemail="f29b9c949ddf818782829d8086b29f9395c0dc919d9f"
                                  >
                                    [email&#160;protected]
                                  </span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="col-sm-6 col-lg-3">
                        <div class="bp-element bp-element-icon-box vblog-layout-2 align-center">
                          <div class="icon-box">
                            <div class="icon-image">
                              <i class="ion ion-thumbsup"></i>
                            </div>

                            <div class="content">
                              <h3 class="title">Follow Us</h3>

                              <div class="description">
                                <a href="javascript:;">
                                  <i class="fa fa-facebook"></i>
                                </a>

                                <a href="javascript:;">
                                  <i class="fa fa-twitter"></i>
                                </a>

                                <a href="javascript:;">
                                  <i class="fa fa-instagram"></i>
                                </a>

                                <a href="javascript:;">
                                  <i class="fa fa-youtube-play"></i>
                                </a>

                                <a href="javascript:;">
                                  <i class="fa fa-tumblr"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="divline_contact-page"></div>
                  </div>
                </div>

                <div class="thim-send-message_contact-page">
                  <div class="container">
                    <div class="bp-element bp-element-heading align-center">
                      <h3 class="title">Send a message</h3>

                      <div class="description">
                        Your email address will not be published. Required
                        fields are marked.
                      </div>
                    </div>

                    <form class="contact-form">
                      <label class="wrap-input">
                        <input type="text" name="name" placeholder="Name*" />
                      </label>

                      <label class="wrap-input">
                        <input type="text" name="email" placeholder="Email*" />
                      </label>

                      <label class="wrap-input">
                        <input
                          type="text"
                          name="phone"
                          placeholder="Phone Number*"
                        />
                      </label>

                      <label class="wrap-input full-width">
                        <input
                          type="text"
                          name="subject"
                          placeholder="Subject*"
                        />
                      </label>

                      <label class="wap-textarea">
                        <textarea name="msg" placeholder="Message*"></textarea>
                      </label>

                      <input
                        type="submit"
                        class="form-submit"
                        value="send your message"
                      />
                    </form>
                  </div>

                  <div class="map">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d35206.811735826785!2d-73.97774789142626!3d40.733798330440614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25990e23d7e8d%3A0xfa615edfd1b67e18!2sWashington+Square+Park!5e0!3m2!1svi!2s!4v1538464707133"
                      style={{ border: "0" }}
                      allowfullscreen
                    ></iframe>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
