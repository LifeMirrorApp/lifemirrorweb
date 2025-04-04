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

const About = () => {
  return (
    <>
      <body class="responsive home-2">
        <div id="wrapper-container">
          <div id="main-content">
            <div class="content-area">
              <div class="page-title">
                <div
                  class="main-top"
                  style={{
                    backgroundImage: "url(assets/images/bg-page-title-03.jpg)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div class="overlay-top-header"></div>

                  <div class="content container">
                    <h1>About Us</h1>

                    <div class="wrap-breadcrumb">
                      <ul class="breadcrumbs">
                        <li>
                          <a href="javascript:;">Home</a>
                        </li>

                        <li>
                          <span class="breadcrum-icon">/</span>
                          About Us
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div class="site-content layout-1">
                <main class="site-main">
                  <div class="wrap-main-content">
                    <div class="thim-about_about-page">
                      <div class="container">
                        <div class="bp-element bp-element-heading align-center">
                          <h3 class="title">
                            Let’s make great things together!
                          </h3>

                          <div class="content">
                            If you are a newbie to managing a WordPress website,
                            then congratulations! You are here at the right
                            track with us because we are going to introduce you
                            one of the most knowledge when owning a WordPress
                            page: how to find your site the best WordPress
                            Hosting service.This process is often overlooked.
                          </div>
                        </div>

                        <div class="bp-element bp-element-counter-box align-center vblog-layout-1 show-line">
                          <div class="item">
                            <span class="number">154879</span>

                            <span class="text">Visitor</span>
                          </div>

                          <div class="item">
                            <span class="number">254879</span>

                            <span class="text">Download</span>
                          </div>

                          <div class="item">
                            <span class="number">1548</span>

                            <span class="text">Trailer</span>
                          </div>

                          <div class="item">
                            <span class="number">4.9</span>

                            <span class="text">Rating</span>
                          </div>
                        </div>

                        <div class="bp-element bp-element-st-list-videos vblog-layout-slider-4">
                          <div class="wrap-element">
                            <div
                              class="slide-videos js-call-slick-col"
                              data-numofshow="1"
                              data-numofscroll="1"
                              data-loopslide="1"
                              data-autoscroll="0"
                              data-speedauto="6000"
                              data-responsive="[1, 1], [1, 1], [1, 1], [1, 1], [1, 1]"
                            >
                              <div class="slide-slick">
                                <div class="item-slick">
                                  <div class="item-video">
                                    <img
                                      src="assets/images/about-01.jpg"
                                      alt="IMG"
                                    />
                                    <a
                                      href="https://www.youtube.com/watch?v=NEqtQYxzQaE"
                                      class="btn-play popup-youtube"
                                    ></a>
                                  </div>
                                </div>

                                <div class="item-slick">
                                  <div class="item-video">
                                    <img
                                      src="assets/images/about-01.jpg"
                                      alt="IMG"
                                    />
                                    <a
                                      href="https://www.youtube.com/watch?v=NEqtQYxzQaE"
                                      class="btn-play popup-youtube"
                                    ></a>
                                  </div>
                                </div>

                                <div class="item-slick">
                                  <div class="item-video">
                                    <img
                                      src="assets/images/about-01.jpg"
                                      alt="IMG"
                                    />

                                    <a
                                      href="https://www.youtube.com/watch?v=NEqtQYxzQaE"
                                      class="btn-play popup-youtube"
                                    ></a>
                                  </div>
                                </div>
                              </div>

                              <div class="wrap-dot-slick"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="thim-services_about-page">
                      <div class="container">
                        <div class="bp-element bp-element-heading align-center">
                          <h3 class="title">Our Services</h3>

                          <div class="description">
                            Let’s make great things together!
                          </div>
                        </div>

                        <div class="row">
                          <div class="col-md-4">
                            <div class="bp-element bp-element-icon-box align-center vblog-layout-1">
                              <div class="icon-box">
                                <div class="icon-image">
                                  <img
                                    src="assets/images/icon-box-01.png"
                                    alt="IMG"
                                  />
                                </div>

                                <div class="content">
                                  <h3 class="title">Film Production</h3>

                                  <div class="description">
                                    Lorem ipsum dolor sit a met, consectetur
                                    dipi elit, sed do eiusmod tempor incididunt
                                    ut labore et dolore magna aliqua.
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="col-md-4">
                            <div class="bp-element bp-element-icon-box align-center vblog-layout-1">
                              <div class="icon-box">
                                <div class="icon-image">
                                  <img
                                    src="assets/images/icon-box-02.png"
                                    alt="IMG"
                                  />
                                </div>

                                <div class="content">
                                  <h3 class="title">Film Production</h3>

                                  <div class="description">
                                    Lorem ipsum dolor sit a met, consectetur
                                    dipi elit, sed do eiusmod tempor incididunt
                                    ut labore et dolore magna aliqua.
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="col-md-4">
                            <div class="bp-element bp-element-icon-box align-center vblog-layout-1">
                              <div class="icon-box">
                                <div class="icon-image">
                                  <img
                                    src="assets/images/icon-box-03.png"
                                    alt="IMG"
                                  />
                                </div>

                                <div class="content">
                                  <h3 class="title">Film Production</h3>

                                  <div class="description">
                                    Lorem ipsum dolor sit a met, consectetur
                                    dipi elit, sed do eiusmod tempor incididunt
                                    ut labore et dolore magna aliqua.
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="thim-partner_about-page">
                      <div class="container">
                        <div class="bp-element bp-element-brands vblog-layout-slider-1">
                          <div class="wrap-element">
                            <div
                              class="slide-brands js-call-slick-col"
                              data-numofshow="5"
                              data-numofscroll="1"
                              data-loopslide="1"
                              data-autoscroll="1"
                              data-speedauto="3000"
                              data-responsive="[5, 1], [4, 1], [3, 1], [2, 1], [1, 1]"
                            >
                              <div class="slide-slick">
                                <div class="item-slick">
                                  <div class="brand-item">
                                    <img
                                      src="assets/images/brand-06.png"
                                      alt="IMG"
                                    />
                                  </div>
                                </div>

                                <div class="item-slick">
                                  <div class="brand-item">
                                    <img
                                      src="assets/images/brand-01-1.png"
                                      alt="IMG"
                                    />
                                  </div>
                                </div>

                                <div class="item-slick">
                                  <div class="brand-item">
                                    <img
                                      src="assets/images/brand-02-1.png"
                                      alt="IMG"
                                    />
                                  </div>
                                </div>

                                <div class="item-slick">
                                  <div class="brand-item">
                                    <img
                                      src="assets/images/brand-04-1.png"
                                      alt="IMG"
                                    />
                                  </div>
                                </div>

                                <div class="item-slick">
                                  <div class="brand-item">
                                    <img
                                      src="assets/images/brand-05-1.png"
                                      alt="IMG"
                                    />
                                  </div>
                                </div>

                                <div class="item-slick">
                                  <div class="brand-item">
                                    <img
                                      src="assets/images/brand-02-1.png"
                                      alt="IMG"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="thim-team_about-page">
                      <div class="container">
                        <div class="bp-element bp-element-heading align-center">
                          <h3 class="title">Creative Team</h3>

                          <div class="description">
                            Let’s make great things together!
                          </div>
                        </div>

                        <div class="bp-element bp-element-our-team layout-5">
                          <div class="wrap-element">
                            <div class="row">
                              <div class="col-sm-6 col-md-3">
                                <div class="author-item">
                                  <div class="pic-author">
                                    <img
                                      src="assets/images/team-01.jpg"
                                      alt="IMG"
                                    />
                                    <a
                                      href="single-author.html"
                                      class="overlay-author"
                                    ></a>
                                  </div>

                                  <div class="text-author">
                                    <h4 class="name-author">
                                      <a href="single-author.html">
                                        Cynthia W. Capra
                                      </a>
                                    </h4>

                                    <div class="info-author">Reporter</div>
                                  </div>
                                </div>
                              </div>

                              <div class="col-sm-6 col-md-3">
                                <div class="author-item">
                                  <div class="pic-author">
                                    <img
                                      src="assets/images/team-02.jpg"
                                      alt="IMG"
                                    />
                                    <a
                                      href="single-author.html"
                                      class="overlay-author"
                                    ></a>
                                  </div>

                                  <div class="text-author">
                                    <h4 class="name-author">
                                      <a href="single-author.html">
                                        Cynthia W. Capra
                                      </a>
                                    </h4>

                                    <div class="info-author">Reporter</div>
                                  </div>
                                </div>
                              </div>

                              <div class="col-sm-6 col-md-3">
                                <div class="author-item">
                                  <div class="pic-author">
                                    <img
                                      src="assets/images/team-03.jpg"
                                      alt="IMG"
                                    />
                                    <a
                                      href="single-author.html"
                                      class="overlay-author"
                                    ></a>
                                  </div>

                                  <div class="text-author">
                                    <h4 class="name-author">
                                      <a href="single-author.html">
                                        Cynthia W. Capra
                                      </a>
                                    </h4>

                                    <div class="info-author">Reporter</div>
                                  </div>
                                </div>
                              </div>

                              <div class="col-sm-6 col-md-3">
                                <div class="author-item">
                                  <div class="pic-author">
                                    <img
                                      src="assets/images/team-04.jpg"
                                      alt="IMG"
                                    />
                                    <a
                                      href="single-author.html"
                                      class="overlay-author"
                                    ></a>
                                  </div>

                                  <div class="text-author">
                                    <h4 class="name-author">
                                      <a href="single-author.html">
                                        Cynthia W. Capra
                                      </a>
                                    </h4>

                                    <div class="info-author">Reporter</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </main>
              </div>
            </div>
          </div>
        </div>
      </body>
      <Footer />
    </>
  );
};

export default About;
