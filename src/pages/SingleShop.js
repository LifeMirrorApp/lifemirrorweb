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

const SingleShop = () => {
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
                <h1>Shop</h1>

                <div class="wrap-breadcrumb">
                  <ul class="breadcrumbs">
                    <li>
                      <a href="javascript:;">Home</a>
                    </li>

                    <li>
                      <span class="breadcrum-icon">/</span>
                      Shop
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="site-content sidebar-right layout-1">
            <div class="container">
              <div class="row">
                <main class="site-main col-lg-9">
                  <div class="wrap-main-content">
                    <div class="product">
                      <div class="bl-product-detail">
                        <div class="media-product">
                          <div
                            class="slide-images js-call-slick-col"
                            data-numofshow="1"
                            data-numofscroll="1"
                            data-loopslide="1"
                            data-autoscroll="0"
                            data-speedauto="6000"
                            data-responsive="[1, 1], [1, 1], [1, 1], [1, 1], [1, 1]"
                            data-fade="1"
                            data-customdot="1"
                          >
                            <div class="slide-slick">
                              <div
                                class="item-slick"
                                data-thumb="assets/images/product-thumb-01.jpg"
                              >
                                <div class="item-img">
                                  <img
                                    src="assets/images/single-product-01.jpg"
                                    alt="IMG"
                                  />
                                </div>
                              </div>

                              <div
                                class="item-slick"
                                data-thumb="assets/images/product-thumb-02.jpg"
                              >
                                <div class="item-img">
                                  <img
                                    src="assets/images/single-product-02.jpg"
                                    alt="IMG"
                                  />
                                </div>
                              </div>

                              <div
                                class="item-slick"
                                data-thumb="assets/images/product-thumb-03.jpg"
                              >
                                <div class="item-img">
                                  <img
                                    src="assets/images/single-product-03.jpg"
                                    alt="IMG"
                                  />
                                </div>
                              </div>
                            </div>

                            <div class="wrap-dot-slick"></div>
                          </div>
                        </div>

                        <div class="text-product">
                          <h4 class="name-product">Captain America</h4>

                          <div class="star-product">
                            <span class="iconstars">
                              <i class="ion ion-android-star"></i>
                              <i class="ion ion-android-star"></i>
                              <i class="ion ion-android-star"></i>
                              <i class="ion ion-android-star"></i>
                              <i class="ion ion-android-star"></i>
                              <i class="ion ion-android-star"></i>
                              <i class="ion ion-android-star"></i>
                              <i class="ion ion-android-star-outline"></i>
                              <i class="ion ion-android-star-outline"></i>
                              <i class="ion ion-android-star-outline"></i>
                            </span>
                            7/10
                          </div>

                          <span class="price">
                            <del>
                              <span class="woocommerce-Price-amount">
                                <span class="woocommerce-Price-currencySymbol">
                                  £
                                </span>
                                9.00
                              </span>
                            </del>

                            <ins>
                              <span class="woocommerce-Price-amount">
                                <span class="woocommerce-Price-currencySymbol">
                                  £
                                </span>
                                7.00
                              </span>
                            </ins>
                          </span>

                          <div class="description-product">
                            Aldus PageMaker including versions of Lorem Ipsum.
                            It was popularised in the 1960s with the release of
                            Letraset sheets containing Lorem Ipsum passages, and
                            more recently with desktop publishing software like
                            Aldus PageMaker including versions
                          </div>

                          <div class="quanlity-product">
                            <span class="name-field">Quanlity:</span>

                            <div class="bl-input-quanlity wrap-num-product">
                              <div class="btn-num-down" unselectable="on">
                                -
                              </div>

                              <input
                                class="num-product"
                                type="text"
                                value="1"
                              />

                              <div class="btn-num-up" unselectable="on">
                                +
                              </div>
                            </div>
                          </div>

                          <a
                            href="javascript:;"
                            class="btn-addcart btn-normal shape-round"
                          >
                            Add to cart
                          </a>

                          <div class="categories">
                            <span class="name-field">Categories:</span>
                            <a href="javascript:;" class="cat-item">
                              Documentaries,
                            </a>
                            <a href="javascript:;" class="cat-item">
                              Drama
                            </a>
                          </div>
                        </div>

                        <div class="woocommerce-tabs js-call-tabs">
                          <ul class="tabs thim-nav-tabs">
                            <li class="item-nav active" data-panel="1">
                              <a>Description</a>
                            </li>

                            <li class="item-nav" data-panel="2">
                              <a>Reviews (0)</a>
                            </li>

                            <li class="item-nav" data-panel="3">
                              <a>Trailer</a>
                            </li>
                          </ul>

                          <div class="thim-content-tabs">
                            <div class="tab-panel" data-nav="1">
                              <p>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry’s standard dummy text ever since
                                the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen
                                book. It has survived not only five centuries,
                                but also the leap into electronic typesetting,
                                remaining essentially unchanged. It was
                                popularised in the 1960s with the release of
                                Letraset sheets containing Lorem Ipsum passages,
                                and more recently with desktop publishing
                                software like Aldus PageMaker including
                                vevrsions of Lorem Ipsum. It was popularised in
                                the 1960s with the release of Letraset sheets
                                containing Lorem Ipsum passages
                              </p>
                            </div>

                            <div class="tab-panel" data-nav="2">
                              <p>Reviews Content</p>
                            </div>

                            <div class="tab-panel" data-nav="3">
                              <p>Trailer Content</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="related products-list">
                      <h2>Related Products</h2>

                      <div class="wrap-element">
                        <div class="row">
                          <div class="col-sm-6 col-md-4">
                            <div class="item-product">
                              <div class="media-item">
                                <div class="pic">
                                  <a href="single-shop.html">
                                    <img
                                      src="assets/images/product-05.jpg"
                                      alt="IMG"
                                    />
                                  </a>
                                </div>

                                <a href="javascript:;" class="btn-addcart">
                                  <i class="ion ion-android-cart"></i>
                                  Add to cart
                                </a>
                              </div>

                              <div class="text-item">
                                <h4 class="title">
                                  <a href="single-shop.html">Best Song CD</a>
                                </h4>

                                <span class="price">
                                  <del>
                                    <span class="woocommerce-Price-amount">
                                      <span class="woocommerce-Price-currencySymbol">
                                        £
                                      </span>
                                      9.00
                                    </span>
                                  </del>

                                  <ins>
                                    <span class="woocommerce-Price-amount">
                                      <span class="woocommerce-Price-currencySymbol">
                                        £
                                      </span>
                                      7.00
                                    </span>
                                  </ins>
                                </span>
                              </div>
                            </div>
                          </div>

                          <div class="col-sm-6 col-md-4">
                            <div class="item-product">
                              <div class="media-item">
                                <div class="pic">
                                  <a href="single-shop.html">
                                    <img
                                      src="assets/images/product-06.jpg"
                                      alt="IMG"
                                    />
                                  </a>
                                </div>

                                <a href="javascript:;" class="btn-addcart">
                                  <i class="ion ion-android-cart"></i>
                                  Add to cart
                                </a>
                              </div>

                              <div class="text-item">
                                <h4 class="title">
                                  <a href="single-shop.html">Best Song CD</a>
                                </h4>

                                <span class="price">
                                  <del>
                                    <span class="woocommerce-Price-amount">
                                      <span class="woocommerce-Price-currencySymbol">
                                        £
                                      </span>
                                      9.00
                                    </span>
                                  </del>

                                  <ins>
                                    <span class="woocommerce-Price-amount">
                                      <span class="woocommerce-Price-currencySymbol">
                                        £
                                      </span>
                                      7.00
                                    </span>
                                  </ins>
                                </span>
                              </div>
                            </div>
                          </div>

                          <div class="col-sm-6 col-md-4">
                            <div class="item-product">
                              <div class="media-item">
                                <div class="pic">
                                  <a href="single-shop.html">
                                    <img
                                      src="assets/images/product-07.jpg"
                                      alt="IMG"
                                    />
                                  </a>
                                </div>

                                <a href="javascript:;" class="btn-addcart">
                                  <i class="ion ion-android-cart"></i>
                                  Add to cart
                                </a>
                              </div>

                              <div class="text-item">
                                <h4 class="title">
                                  <a href="single-shop.html">Best Song CD</a>
                                </h4>

                                <span class="price">
                                  <span class="woocommerce-Price-amount">
                                    <span class="woocommerce-Price-currencySymbol">
                                      £
                                    </span>
                                    9.00
                                  </span>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </main>

                <div class="widget-area col-sm-9 col-md-8 col-lg-3 sticky-sidebar">
                  <aside class="widget widget_product_categories">
                    <h3 class="widget-title">Categories</h3>

                    <ul class="product-categories">
                      <li class="cat-item">
                        <a href="javascript:;">Film maker</a>

                        <span class="count">32</span>
                      </li>

                      <li class="cat-item">
                        <a href="javascript:;">Film studio</a>

                        <span class="count">32</span>
                      </li>

                      <li class="cat-item">
                        <a href="javascript:;">Life style</a>

                        <span class="count">16</span>
                      </li>

                      <li class="cat-item">
                        <a href="javascript:;">Fashion</a>

                        <span class="count">08</span>
                      </li>

                      <li class="cat-item">
                        <a href="javascript:;">Film online</a>

                        <span class="count">45</span>
                      </li>

                      <li class="cat-item">
                        <a href="javascript:;">Film studio</a>

                        <span class="count">32</span>
                      </li>
                    </ul>
                  </aside>

                  <aside class="widget widget_thim_layout_builder">
                    <div class="bp-element bp-element-products vblog-layout-list-1">
                      <div class="wrap-element">
                        <div class="heading-products">
                          <h3 class="title">Most Popular</h3>
                        </div>

                        <div class="list-products">
                          <div class="product-item">
                            <a href="single-shop.html" class="pic">
                              <img src="assets/images/post-53.jpg" alt="IMG" />
                            </a>

                            <div class="text">
                              <h4 class="title">
                                <a href="single-shop.html">
                                  Mirum est notare quam littera gothica
                                </a>
                              </h4>

                              <span class="price">
                                <del>
                                  <span class="woocommerce-Price-amount">
                                    <span class="woocommerce-Price-currencySymbol">
                                      £
                                    </span>
                                    9.00
                                  </span>
                                </del>

                                <ins>
                                  <span class="woocommerce-Price-amount">
                                    <span class="woocommerce-Price-currencySymbol">
                                      £
                                    </span>
                                    7.00
                                  </span>
                                </ins>
                              </span>
                            </div>
                          </div>

                          <div class="product-item">
                            <a href="single-shop.html" class="pic">
                              <img src="assets/images/post-54.jpg" alt="IMG" />
                            </a>

                            <div class="text">
                              <h4 class="title">
                                <a href="single-shop.html">
                                  What make you beautiful with us
                                </a>
                              </h4>

                              <span class="price">
                                <span class="woocommerce-Price-amount">
                                  <span class="woocommerce-Price-currencySymbol">
                                    £
                                  </span>
                                  7.00
                                </span>
                              </span>
                            </div>
                          </div>

                          <div class="product-item">
                            <a href="single-shop.html" class="pic">
                              <img src="assets/images/post-55.jpg" alt="IMG" />
                            </a>

                            <div class="text">
                              <h4 class="title">
                                <a href="single-shop.html">
                                  Watch the Sony a9 Livestream Event Online
                                </a>
                              </h4>

                              <span class="price">
                                <span class="woocommerce-Price-amount">
                                  <span class="woocommerce-Price-currencySymbol">
                                    £
                                  </span>
                                  7.00
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </aside>

                  <aside class="widget widget_tag_cloud">
                    <h3 class="widget-title">Tags Cloud</h3>

                    <div class="tagcloud">
                      <a href="javascript:;" class="tag-cloud-link">
                        Film oline
                      </a>

                      <a href="javascript:;" class="tag-cloud-link">
                        Creative
                      </a>

                      <a href="javascript:;" class="tag-cloud-link">
                        Design
                      </a>

                      <a href="javascript:;" class="tag-cloud-link">
                        Landing
                      </a>

                      <a href="javascript:;" class="tag-cloud-link">
                        Skill
                      </a>
                    </div>
                  </aside>

                  <aside class="widget widget_text">
                    <div class="textwidget">
                      <a href="javascript:;">
                        <img src="assets/images/ads-04.jpg" alt="IMG" />
                      </a>
                    </div>
                  </aside>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SingleShop;
