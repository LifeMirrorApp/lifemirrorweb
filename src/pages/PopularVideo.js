import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import videosData from "./videosData"; // Import your video data from a separate file

const PopularVideo = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <div className="thim-popular-video_home-1">
      <div className="container">
        <div className="bp-element bp-element-st-list-videos vblog-layout-slider-1">
          <div className="wrap-element">
            <div className="heading-post">
              <h3 className="title">Popular Videos</h3>
              <a href="/list-videos" className="link">
                See all news
              </a>
            </div>
            <div className="list-posts">
              <Slider {...settings} className="slide-posts">
                {videosData.map((video, index) => (
                  <div key={index} className="item-slick">
                    <div className="post-item">
                      <div className="pic">
                        <img src={video.imgSrc} alt="IMG" />
                        <div className="overlay"></div>
                        <div className="meta-info">
                          <div className="imdb">
                            <span className="value">{video.imdb}</span> IMDb
                          </div>
                          <div
                            className="label"
                            style={{ background: video.labelColor }}
                          >
                            {video.label}
                          </div>
                        </div>
                        <a
                          href={video.link}
                          className="btn-play popup-youtube"
                        ></a>
                      </div>
                      <h4 className="title">
                        <a href="/single-video">{video.title}</a>
                      </h4>
                      <div className="info">{video.category}</div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularVideo;
