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

const Submit = () => {
  return (
    <>
      <div id="main-content">
        <div class="content-area">
          <div class="page-title">
            <div
              class="main-top"
              style={{
                backgroundImage: "url('assets/images/bg-page-title-01.jpg')",
              }}
            >
              <div class="overlay-top-header"></div>

              <div class="content container">
                <h1>Submit Video</h1>

                <div class="wrap-breadcrumb">
                  <ul class="breadcrumbs">
                    <li>
                      <a href="javascript:;">Home</a>
                    </li>

                    <li>
                      <span class="breadcrum-icon">/</span>
                      Submit Video
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="site-content layout-1">
            <div class="container">
              <div class="row">
                <main class="site-main col-12">
                  <div class="wrap-main-content">
                    <div class="thim-form_submit-page">
                      <div class="row justify-content-center">
                        <div class="col-xl-10">
                          <div class="bp-element bp-element-heading align-center">
                            <h3 class="title">ADD NEW VIDEO</h3>

                            <div class="description">
                              This is just a demo, so we will limit the size of
                              the file uploaded to the server ( max file size: 2
                              megabytes ).
                            </div>

                            <div class="content">
                              You can change these values when configuring.
                            </div>
                          </div>

                          <div class="divline_submit-page"></div>

                          <form class="submit-video-form validate-form">
                            <div class="row">
                              <div class="col-md-6">
                                <div class="item-input">
                                  <span class="input-title">FIRST NAME *</span>

                                  <label class="input-field require">
                                    <input type="text" />
                                  </label>
                                </div>
                              </div>

                              <div class="col-md-6">
                                <div class="item-input">
                                  <span class="input-title">LAST NAME *</span>

                                  <label class="input-field require">
                                    <input type="text" />
                                  </label>
                                </div>
                              </div>

                              <div class="col-md-6">
                                <div class="item-input">
                                  <span class="input-title">YOUR EMAIL *</span>

                                  <label class="input-field require">
                                    <input type="text" />
                                  </label>
                                </div>
                              </div>

                              <div class="col-md-6">
                                <div class="item-input">
                                  <span class="input-title">POST TITLE *</span>

                                  <label class="input-field require">
                                    <input type="text" />
                                  </label>
                                </div>
                              </div>

                              <div class="divline-form"></div>

                              <div class="col-12">
                                <div class="item-input">
                                  <span class="input-title">POST CONTENT</span>

                                  <label class="input-field">
                                    <textarea></textarea>
                                  </label>
                                </div>
                              </div>

                              <div class="col-12">
                                <div class="item-input">
                                  <span class="input-title">
                                    VIDEO URL (OR EMBED)
                                  </span>

                                  <label class="input-field require">
                                    <textarea></textarea>
                                  </label>
                                </div>
                              </div>

                              <div class="col-12">
                                <div class="item-input input-choose-file">
                                  <span class="input-title">
                                    FEATURED IMAGE
                                  </span>

                                  <label class="input-field">
                                    Choose File
                                    <input type="file" name="file" />
                                  </label>

                                  <span class="input-file-value">
                                    No file chosen
                                  </span>
                                </div>
                              </div>

                              <div class="divline-form"></div>

                              <div class="col-12">
                                <div class="item-input">
                                  <span class="input-title">
                                    VIDEO CATEGORIES
                                  </span>

                                  <label class="input-field">
                                    <input
                                      type="text"
                                      placeholder="Select from existing categories"
                                    />
                                  </label>
                                </div>
                              </div>

                              <div class="col-12">
                                <div class="item-input">
                                  <span class="input-title">VIDEO TAGS</span>

                                  <label class="input-field">
                                    <input
                                      type="text"
                                      placeholder="Select from existing tags"
                                    />
                                  </label>
                                </div>
                              </div>

                              <div class="col-12">
                                <div class="item-input">
                                  <span class="input-title">CHANNELS</span>

                                  <label class="input-field">
                                    <input
                                      type="text"
                                      placeholder="Select from existing channels"
                                    />
                                  </label>
                                </div>
                              </div>

                              <div class="col-12">
                                <div class="item-input">
                                  <span class="input-title">PLAYLISTS</span>

                                  <label class="input-field">
                                    <input
                                      type="text"
                                      placeholder="Select from existing playlists"
                                    />
                                  </label>
                                </div>
                              </div>
                            </div>

                            <button class="btn-submit btn-large shape-round">
                              submit video
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </main>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Submit;
