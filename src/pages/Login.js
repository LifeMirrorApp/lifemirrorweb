// import React from "react";

// import Header2 from "./Header2";
// import back from "./outo.png";
// import backs from "./footimg.jpg";
// import pro from "./exam.png";
// import r1 from "./edublink-breadcrumb-bg.webp";
// import r5 from "./examthree.png";
// import Footer from "./Footer";
// import "./style.css";
// import Test from "./Test";
// import Header from "./Header";
// import Footers from "./Footers";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // use icons for buttons
// import Builder from "./Builder";
// import Swipes from "./Swipes";
// import "./login.css";
// import img from "./blog.webp";

// const Login = () => {
//   return (
//     <>
//       <body class="responsive home-1" style={{ marginTop: "50px" }}>
//         <div id="bp-popup-login" class="white-popup mfp-with-anim">
//           <div class="loginwrapper">
//             <div class="login-popup box-login active">
//               <div
//                 class="media-content"
//                 style={{ backgroundImage: "url(assets/images/bg-01.jpg)" }}
//               ></div>

//               <div class="inner-login">
//                 <h3 class="title">
//                   <span class="current-title">
//                     Welcome back! Let's sign you in
//                   </span>
//                 </h3>

//                 <div class="form-row">
//                   <div class="wrap-form">
//                     <form id="loginform">
//                       <p class="login-username">
//                         <input
//                           type="text"
//                           placeholder="Username"
//                           class="input"
//                           autocomplete="off"
//                         />
//                       </p>

//                       <p class="login-email">
//                         <input
//                           type="email"
//                           name="user_email"
//                           placeholder="Email"
//                           class="input"
//                           autocomplete="off"
//                         />
//                       </p>

//                       <p class="login-remember">
//                         <input
//                           type="checkbox"
//                           name="rememberme"
//                           id="rememberme"
//                           value="forever"
//                           autocomplete="off"
//                         />
//                         Remember Me
//                       </p>

//                       <p class="button-submit">
//                         <a
//                           href="/admin"
//                           class="button button-primary button-large"
//                           style={{
//                             display: "inline-block",
//                             padding: "10px 20px",
//                             backgroundColor: "purple",
//                             width: "100%",
//                             textAlign: "center",
//                             fontSize: "15px",
//                             fontWeight: "600",
//                             color: "white",
//                           }}
//                         >
//                           Login
//                         </a>
//                       </p>
//                     </form>
//                     <div
//                       className="link-container"
//                       style={{
//                         display: "flex",
//                         justifyContent: "space-between",
//                         alignItems: "center",
//                         gap: "10px",
//                         marginTop: "10px",
//                       }}
//                     >
//                       <p className="link-bottom">
//                         Do not have an account?
//                         <a
//                           href="/register"
//                           className="display-box"
//                           style={{
//                             marginLeft: "5px",
//                             color: "purple",
//                             textDecoration: "none",
//                           }}
//                         >
//                           Register
//                         </a>
//                       </p>

//                       <p className="link-bottom">
//                         <a
//                           href="#losspw"
//                           className="display-box"
//                           style={{ color: "purple", textDecoration: "none" }}
//                         >
//                           Lost your password?
//                         </a>
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </body>
//     </>
//   );
// };

// export default Login;
import { useEffect } from "react";

const Login = () => {
  useEffect(() => {
    window.location.href = "http://localhost:3002/login"; // Redirect to external login
  }, []);

  return null; // No need to render anything since we're redirecting
};

export default Login;
