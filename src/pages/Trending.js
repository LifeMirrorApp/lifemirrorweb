import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const trendingCategories = [
  { id: 1, title: "Game", movies: 250, imgSrc: "assets/images/post-05.jpg" },
  {
    id: 2,
    title: "Animation",
    movies: 380,
    imgSrc: "assets/images/post-06.jpg",
  },
  {
    id: 3,
    title: "Life Style",
    movies: 180,
    imgSrc: "assets/images/post-07.jpg",
  },
  { id: 4, title: "Game", movies: 250, imgSrc: "assets/images/post-05.jpg" },
  {
    id: 5,
    title: "Animation",
    movies: 380,
    imgSrc: "assets/images/post-06.jpg",
  },
  {
    id: 6,
    title: "Life Style",
    movies: 180,
    imgSrc: "assets/images/post-07.jpg",
  },
];

const Trending = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <div className="thim-trending-categories_home-1">
      <div className="container">
        <div className="bp-element bp-element-st-list-categories vblog-layout-slider-1">
          <div className="wrap-element">
            <div className="heading-post">
              <div className="text">
                <h3 className="title">TRENDING CATEGORIES</h3>
                <div className="description">
                  It is a long established fact that a reader
                </div>
              </div>
            </div>

            <Slider {...settings} className="slide-slick">
              {trendingCategories.map((category) => (
                <div key={category.id} className="item-slick">
                  <div className="post-item">
                    <img src={category.imgSrc} alt={category.title} />
                    <div className="overlay"></div>
                    <a href="blog.html" className="content">
                      <span className="title">{category.title}</span>{" "}
                      {category.movies} Movies
                    </a>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trending;
