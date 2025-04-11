// import React from "react";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
// import { UserPlus, Search, MessageSquare, Star } from "lucide-react"; // optional: install lucide-react or use any icon lib

// const steps = [
//   {
//     icon: <UserPlus size={48} className="text-sky-600 mb-4" />,
//     title: "Sign Up and Create Your Profile",
//     description:
//       "Create a free account and personalize your profile with the skills you can offer or services you need. Choose to accept Spark tokens or micro-payments. List any tools you're willing to rent out to neighbors.",
//   },
//   {
//     icon: <Search size={48} className="text-green-600 mb-4" />,
//     title: "Discover Local Skills and Tools",
//     description:
//       "Use Skillovia's search filters to explore services in your neighborhood. Find help, learn something new, or borrow equipment nearby.",
//   },
//   {
//     icon: <MessageSquare size={48} className="text-purple-600 mb-4" />,
//     title: "Connect & Exchange",
//     description:
//       "Send a message, book a service, swap skills, or rent a tool from verified neighbors. It’s a safe and transparent way to build community bonds.",
//   },
//   {
//     icon: <Star size={48} className="text-yellow-500 mb-4" />,
//     title: "Leave Reviews & Strengthen Your Community",
//     description:
//       "After each exchange, leave a review to help others make informed decisions. Build your reputation and gain trust in your local network.",
//   },
// ];

// const How = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 600,
//     slidesToShow: 2,
//     slidesToScroll: 1,
//     responsive: [
//       { breakpoint: 1024, settings: { slidesToShow: 2 } },
//       { breakpoint: 768, settings: { slidesToShow: 1 } },
//     ],
//   };

//   return (
//     <div className="thim-popular-video_home-1">
//       <div className="container">
//         <div className="bp-element bp-element-st-list-videos vblog-layout-slider-1">
//           <div className="wrap-element">
//             <div className="heading-post">
//               <h3 className="title">How Life Mirror Works</h3>
//             </div>

//             <Slider {...settings}>
//               {steps.map((step, index) => (
//                 <div key={index} className="px-4">
//                   <div className="bg-white shadow-lg rounded-2xl p-6 text-center h-full flex flex-col justify-between">
//                     {step.icon}
//                     <h3 className="text-xl font-semibold mb-2 text-gray-800">
//                       {step.title}
//                     </h3>
//                     <p className="text-gray-600 text-sm">{step.description}</p>
//                   </div>
//                 </div>
//               ))}
//             </Slider>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default How;
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const trendingCategories = [
  {
    id: 1,
    title: "MEDITATION",
    movies: 2,
    imgSrc: "assets/images/post-05.jpg",
  },
  {
    id: 2,
    title: "SCRIPTURE VISUALS",
    movies: 3,
    imgSrc: "assets/images/post-06.jpg",
  },
  {
    id: 3,
    title: "JOURNALING/NOTE-TAKING",
    movies: 1,
    imgSrc: "assets/images/post-07.jpg",
  },
  {
    id: 4,
    title: "PROGRESS TRACKER",
    movies: 250,
    imgSrc: "assets/images/post-05.jpg",
  },
  {
    id: 5,
    title: "USER TESTIMONY",
    movies: 2,
    imgSrc: "assets/images/post-06.jpg",
  },
];

const How = () => {
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
                <h3 className="title">HOW LIFE MIRROR WORKS</h3>
                <div className="description">
                  Experience the Power of Biblical Stillness
                </div>
              </div>
            </div>
            <div
              class="bp-element bp-element-heading align-center"
              style={{ width: "60%", margin: "auto" }}
            >
              <div
                class="content"
                style={{
                  textAlign: "center",
                  margin: "auto",
                  color: "white",
                  marginTop: "40px",
                  marginBottom: "40px",
                  fontSize: "20px",
                }}
              >
                LifeMirror guides you through Scripture-based meditations
                designed to renew your mind, restore your soul, and deepen your
                walk with God.
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

export default How;
