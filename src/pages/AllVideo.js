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

const AllVideo = () => {
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
                <h1>All Movie List</h1>

                <div class="wrap-breadcrumb">
                  <ul class="breadcrumbs">
                    <li>
                      <a href="javascript:;">Home</a>
                    </li>

                    <li>
                      <span class="breadcrum-icon">/</span>
                      All Movie List
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
                    <div class="thim-videos_list-videos-page">
                      <div class="videos-list">
                        <div class="wrap-element js-call-isotope-filter">
                          <div class="heading-element">
                            <div class="wrap-filter-group">
                              <div class="filter-tope-group">
                                <span class="item-tope active" data-filter="*">
                                  All
                                </span>

                                <span class="item-tope" data-filter=".Cinema">
                                  Cinema
                                </span>

                                <span class="item-tope" data-filter=".Music">
                                  Music
                                </span>

                                <span class="item-tope" data-filter=".Sport">
                                  Sport
                                </span>

                                <span class="item-tope" data-filter=".Tech">
                                  Tech
                                </span>

                                <span class="item-tope" data-filter=".Fashion">
                                  Fashion
                                </span>

                                <span
                                  class="item-tope"
                                  data-filter=".Animation"
                                >
                                  Animation
                                </span>
                              </div>
                            </div>

                            <div class="wrap-select-filter">
                              Year :
                              <div class="select-filter">
                                <label>
                                  <select>
                                    <option>All</option>
                                    <option>2016</option>
                                    <option>2017</option>
                                    <option>2018</option>
                                  </select>
                                </label>
                              </div>
                            </div>

                            <div class="wrap-filter-videos js-filter-full-container">
                              <a href="javascript:;" class="toggle-filter">
                                Filter videos
                              </a>

                              <div class="content-filter">Filter content</div>
                            </div>
                          </div>

                          <div class="row isotope-grid">
                            <div class="col-sm-6 col-md-4 col-lg-3 isotope-item Cinema Animation">
                              <div class="item-post">
                                <div class="pic-item">
                                  <img
                                    src="assets/images/post-01.jpg"
                                    alt="IMG"
                                  />

                                  <div class="overlay"></div>

                                  <div class="meta-info">
                                    <div class="imdb">
                                      <span class="value">5</span>IMDb
                                    </div>

                                    <div
                                      class="label"
                                      style={{ background: "#800080;" }}
                                    >
                                      Hot
                                    </div>
                                  </div>

                                  <a
                                    href="https://www.youtube.com/watch?v=NEqtQYxzQaE"
                                    class="btn-play popup-youtube"
                                  ></a>
                                </div>

                                <div class="text-item">
                                  <h4 class="title">
                                    <a href="single-video.html">
                                      How To Make a Pimple Disappear With Makeup
                                    </a>
                                  </h4>
                                </div>
                              </div>
                            </div>

                            <div class="col-sm-6 col-md-4 col-lg-3 isotope-item Music Fashion">
                              <div class="item-post">
                                <div class="pic-item">
                                  <img
                                    src="assets/images/post-02.jpg"
                                    alt="IMG"
                                  />

                                  <div class="overlay"></div>

                                  <div class="meta-info">
                                    <div class="imdb">
                                      <span class="value">5</span>IMDb
                                    </div>

                                    <div
                                      class="label"
                                      style={{ background: "#800080;" }}
                                    >
                                      Hot
                                    </div>
                                  </div>

                                  <a
                                    href="https://www.youtube.com/watch?v=NEqtQYxzQaE"
                                    class="btn-play popup-youtube"
                                  ></a>
                                </div>

                                <div class="text-item">
                                  <h4 class="title">
                                    <a href="single-video.html">
                                      How To Make a Pimple Disappear With Makeup
                                    </a>
                                  </h4>
                                </div>
                              </div>
                            </div>

                            <div class="col-sm-6 col-md-4 col-lg-3 isotope-item Cinema Sport Fashion">
                              <div class="item-post">
                                <div class="pic-item">
                                  <img
                                    src="assets/images/post-03.jpg"
                                    alt="IMG"
                                  />

                                  <div class="overlay"></div>

                                  <div class="meta-info">
                                    <div class="imdb">
                                      <span class="value">5</span>IMDb
                                    </div>

                                    <div
                                      class="label"
                                      style={{ background: "#800080;" }}
                                    >
                                      Hot
                                    </div>
                                  </div>

                                  <a
                                    href="https://www.youtube.com/watch?v=NEqtQYxzQaE"
                                    class="btn-play popup-youtube"
                                  ></a>
                                </div>

                                <div class="text-item">
                                  <h4 class="title">
                                    <a href="single-video.html">
                                      How To Make a Pimple Disappear With Makeup
                                    </a>
                                  </h4>
                                </div>
                              </div>
                            </div>

                            <div class="col-sm-6 col-md-4 col-lg-3 isotope-item Music">
                              <div class="item-post">
                                <div class="pic-item">
                                  <img
                                    src="assets/images/post-04.jpg"
                                    alt="IMG"
                                  />

                                  <div class="overlay"></div>

                                  <div class="meta-info">
                                    <div class="imdb">
                                      <span class="value">5</span>IMDb
                                    </div>

                                    <div
                                      class="label"
                                      style={{ background: "#800080;" }}
                                    >
                                      Hot
                                    </div>
                                  </div>

                                  <a
                                    href="https://www.youtube.com/watch?v=NEqtQYxzQaE"
                                    class="btn-play popup-youtube"
                                  ></a>
                                </div>

                                <div class="text-item">
                                  <h4 class="title">
                                    <a href="single-video.html">
                                      How To Make a Pimple Disappear With Makeup
                                    </a>
                                  </h4>
                                </div>
                              </div>
                            </div>

                            <div class="col-sm-6 col-md-4 col-lg-3 isotope-item Sport Tech">
                              <div class="item-post">
                                <div class="pic-item">
                                  <img
                                    src="assets/images/post-01.jpg"
                                    alt="IMG"
                                  />

                                  <div class="overlay"></div>

                                  <div class="meta-info">
                                    <div class="imdb">
                                      <span class="value">5</span>IMDb
                                    </div>

                                    <div
                                      class="label"
                                      style={{ background: "#800080;" }}
                                    >
                                      Hot
                                    </div>
                                  </div>

                                  <a
                                    href="https://www.youtube.com/watch?v=NEqtQYxzQaE"
                                    class="btn-play popup-youtube"
                                  ></a>
                                </div>

                                <div class="text-item">
                                  <h4 class="title">
                                    <a href="single-video.html">
                                      How To Make a Pimple Disappear With Makeup
                                    </a>
                                  </h4>
                                </div>
                              </div>
                            </div>

                            <div class="col-sm-6 col-md-4 col-lg-3 isotope-item Sport Tech">
                              <div class="item-post">
                                <div class="pic-item">
                                  <img
                                    src="assets/images/post-02.jpg"
                                    alt="IMG"
                                  />

                                  <div class="overlay"></div>

                                  <div class="meta-info">
                                    <div class="imdb">
                                      <span class="value">5</span>IMDb
                                    </div>

                                    <div
                                      class="label"
                                      style={{ background: "#800080;" }}
                                    >
                                      Hot
                                    </div>
                                  </div>

                                  <a
                                    href="https://www.youtube.com/watch?v=NEqtQYxzQaE"
                                    class="btn-play popup-youtube"
                                  ></a>
                                </div>

                                <div class="text-item">
                                  <h4 class="title">
                                    <a href="single-video.html">
                                      How To Make a Pimple Disappear With Makeup
                                    </a>
                                  </h4>
                                </div>
                              </div>
                            </div>

                            <div class="col-sm-6 col-md-4 col-lg-3 isotope-item Tech Fashion">
                              <div class="item-post">
                                <div class="pic-item">
                                  <img
                                    src="assets/images/post-03.jpg"
                                    alt="IMG"
                                  />

                                  <div class="overlay"></div>

                                  <div class="meta-info">
                                    <div class="imdb">
                                      <span class="value">5</span>IMDb
                                    </div>

                                    <div
                                      class="label"
                                      style={{ background: "#800080;" }}
                                    >
                                      Hot
                                    </div>
                                  </div>

                                  <a
                                    href="https://www.youtube.com/watch?v=NEqtQYxzQaE"
                                    class="btn-play popup-youtube"
                                  ></a>
                                </div>

                                <div class="text-item">
                                  <h4 class="title">
                                    <a href="single-video.html">
                                      How To Make a Pimple Disappear With Makeup
                                    </a>
                                  </h4>
                                </div>
                              </div>
                            </div>

                            <div class="col-sm-6 col-md-4 col-lg-3 isotope-item Tech Animation">
                              <div class="item-post">
                                <div class="pic-item">
                                  <img
                                    src="assets/images/post-04.jpg"
                                    alt="IMG"
                                  />

                                  <div class="overlay"></div>

                                  <div class="meta-info">
                                    <div class="imdb">
                                      <span class="value">5</span>IMDb
                                    </div>

                                    <div
                                      class="label"
                                      style={{ background: "#800080;" }}
                                    >
                                      Hot
                                    </div>
                                  </div>

                                  <a
                                    href="https://www.youtube.com/watch?v=NEqtQYxzQaE"
                                    class="btn-play popup-youtube"
                                  ></a>
                                </div>

                                <div class="text-item">
                                  <h4 class="title">
                                    <a href="single-video.html">
                                      How To Make a Pimple Disappear With Makeup
                                    </a>
                                  </h4>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <ul class="loop-pagination">
                        <li>
                          <a href="javascript:;" class="page-numbers">
                            1
                          </a>
                        </li>

                        <li>
                          <a href="javascript:;" class="page-numbers current">
                            2
                          </a>
                        </li>

                        <li>
                          <a href="javascript:;" class="page-numbers">
                            3
                          </a>
                        </li>

                        <li>
                          <a href="javascript:;" class="page-numbers">
                            4
                          </a>
                        </li>

                        <li>
                          <a href="javascript:;" class="page-numbers next">
                            Next
                            <i class="ion ion-ios-arrow-thin-right"></i>
                          </a>
                        </li>
                      </ul>
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

export default AllVideo;
