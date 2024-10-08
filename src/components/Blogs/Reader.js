import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";
import copy from "copy-to-clipboard";
import { useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Cookies from 'js-cookie';

export default function Reader() {
  const sectionRef = useRef(null);
  const controls = useAnimation();
  const containerAnimation = useAnimation();

  useEffect(() => {
    // Set window position to 0 with smooth scroll animation
    const scrollOptions = {
      top: 0,
      behavior: 'smooth'
    };

    const smoothScrollToTop = () => {
      const scrollToTop = () => {
        const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;

        if (currentScroll > 0) {
          window.requestAnimationFrame(scrollToTop);
          window.scrollTo(0, currentScroll - currentScroll / 8);
        }
      };

      scrollToTop();
    };

    smoothScrollToTop();
    containerAnimation.start({
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    });
  }, [containerAnimation]);

  const navigate = useNavigate();
  const [keyword, setKeyword] = useState("");
  const handleSearchChange = (e) => {
    setKeyword(e.target.value)
  }
  const [isDarkMode, setIsDarkMode] = useState(
    Cookies.get('darkMode') === 'true' || Cookies.get('darkMode') === undefined
  );

  useEffect(() => {
    Cookies.set('darkMode', isDarkMode.toString(), { expires: 365 }); // Set cookie with a one-year expiration
    const switcherElement = document.getElementById('switcher');
    if (switcherElement) {
      switcherElement.classList.toggle('light', !isDarkMode);
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      <div id="switcher">
        <button onClick={toggleDarkMode} className="mode-switch">
          <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
        </button>
        <ToastContainer />
        <motion.div
          initial={{ y: "200px", opacity: 0 }}
          animate={{ visibility: "visible", y: "0px", opacity: 1, transition: { ease: "easeOut", duration: 0.7, delay: 0.8 } }}
          exit={{ opacity: 0, transition: { ease: "linear", duration: 0.6 } }}
          transition={{ ease: "linear", duration: 1 }}
          className="tools back tools-header"
        >
          <div>
            <div
              className="button-tools icon-btn"
              onClick={() => {
                navigate(-1);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 30 30"
                fill="none"
              >
                <path
                  d="M14.1199 5.56763C14.251 5.69828 14.355 5.85351 14.426 6.02445C14.497 6.19538 14.5335 6.37864 14.5335 6.56372C14.5335 6.74881 14.497 6.93207 14.426 7.103C14.355 7.27393 14.251 7.42917 14.1199 7.55982L8.08594 13.5938H25.3125C25.6855 13.5938 26.0431 13.742 26.3069 14.0057C26.5706 14.2694 26.7187 14.6271 26.7187 15.0001C26.7187 15.373 26.5706 15.7307 26.3069 15.9944C26.0431 16.2581 25.6855 16.4063 25.3125 16.4063H8.08594L14.1199 22.4426C14.3841 22.7068 14.5325 23.0651 14.5325 23.4387C14.5325 23.8123 14.3841 24.1706 14.1199 24.4348C13.8557 24.699 13.4974 24.8474 13.1238 24.8474C12.7502 24.8474 12.3919 24.699 12.1277 24.4348L3.69024 15.9973C3.55914 15.8667 3.45511 15.7114 3.38414 15.5405C3.31316 15.3696 3.27663 15.1863 3.27663 15.0012C3.27663 14.8161 3.31316 14.6329 3.38414 14.4619C3.45511 14.291 3.55914 14.1358 3.69024 14.0051L12.1277 5.56763C12.2584 5.43653 12.4136 5.33251 12.5846 5.26153C12.7555 5.19056 12.9387 5.15402 13.1238 5.15402C13.3089 5.15402 13.4922 5.19056 13.6631 5.26153C13.834 5.33251 13.9893 5.43653 14.1199 5.56763Z"
                  fill="white"
                  fill-opacity="0.8"
                />
              </svg>
              Back
            </div>
          </div>
        </motion.div>

        <motion.div>
          <motion.div
            animate={{ gridTemplateColumns: "1fr", gridTemplateRows: "1fr" }}
            exit={{ gridTemplateColumns: "1.9fr 1fr", gridTemplateRows: "28.75rem" }}
            className="thumb-parent"
          >
            <div class="image-container">
              <div class="image-overlay"></div>
              <motion.img
                animate={{ maxHeight: "607px", maxWidth: "1700px" }}
                exit={{ maxHeight: "unset", maxWidth: "unset" }}
                transition={{ type: "spring", damping: 9, duration: 2 }}
                src="https://s3-alpha-sig.figma.com/img/7cd3/8fa5/a4bae463af518f8105d9a332943b929f?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=S8gZupDM8HypN9Qzg2arhvL9V45MCZFYsclzuTOLqY6NyAlWrqZVYhJp9gI3Dvc5gQ~ZxItN1iKWHaqqZ~nEYXdvv4Gwge40UPv-eyt-moGrE2WHir8GPdbxdDxImu4jO4AX7ITYZmpA0owLGzYYJaJLdytOuZ47uGez0LUJOg9Rz45w~7qUQgLhOf1FlkW5VIvUVSRZHKnJ~QU7f06M2DPkBJJrVPn5Z2sYu4blnJHE8MkOUx4uw3qv68aaXinFBJF2tw0kIqE4bYBEb4m2FOvyOrtsTPYLpWh6ymmYRARiPQJwAipoJ3rRBddnObLBi03tNk1TtdKTCYQKhMws~Q__"
                alt=""
              />
            </div>
            <motion.div
              animate={
                window.innerWidth > 1280
                  ? {
                    position: "absolute",
                    right: "10vw",
                    width: "calc((80vw - 49px) / 2.8)",
                    y: "30vh",
                    opacity: 0,
                  }
                  : {}
              }
              exit={
                window.innerWidth > 1280
                  ? {
                    position: "static",
                    y: "0",
                    opacity: 1,
                    width: "calc(-24.5px + 28.5714vw)"
                  }
                  : {}
              }
              transition={{ type: "spring", duration: 1 }}
            >
              <div className="title-white ">
                Publishing Mobile Apps:
                <br />A How To Guide
              </div>
              <div className="subtitle">
                Steps and Materials to Publishing on the Mobile App Store
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            animate={window.innerWidth > 1280 ? { position: "absolute", y: "-614.8px", opacity: 1 } : { position: "absolute", }}
            exit={window.innerWidth > 1280 ? { position: "relative", y: "0", opacity: 1, transition: { ease: "easeOut", duration: 1 } } : { position: "relative", }}
            transition={{ ease: "linear", duration: 1 }}
            className="tools"
          >
            <div>
              <motion.div
                animate={{ opacity: 0 }}
                exit={{ opacity: 1 }}
                transition={{ ease: "linear", duration: 1 }}
                className="button-tools">All</motion.div>
              <motion.div
                animate={{ opacity: 0 }}
                exit={{ opacity: 1 }}
                transition={{ ease: "linear", duration: 1 }}
                className="button-tools"
              >
                Report
              </motion.div>
              <motion.div
                animate={{ opacity: 0 }}
                exit={{ opacity: 1 }}
                transition={{ ease: "linear", duration: 1 }}
                className="button-tools"
              >
                Blogs
              </motion.div>
            </div>
            <motion.div
              animate={{ opacity: 0 }}
              exit={{ opacity: 1 }}
              transition={{ ease: "linear", duration: 1 }}
              className="search"

            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"

                >
                  <path
                    d="M20.4167 21.875L13.8542 15.3125C13.3333 15.7292 12.7344 16.059 12.0573 16.3021C11.3802 16.5451 10.6597 16.6667 9.89583 16.6667C8.00347 16.6667 6.40208 16.0111 5.09167 14.7C3.78125 13.3889 3.12569 11.7875 3.125 9.89583C3.125 8.00347 3.78056 6.40208 5.09167 5.09167C6.40278 3.78125 8.00417 3.12569 9.89583 3.125C11.7882 3.125 13.3899 3.78056 14.701 5.09167C16.0122 6.40278 16.6674 8.00417 16.6667 9.89583C16.6667 10.6597 16.5451 11.3802 16.3021 12.0573C16.059 12.7344 15.7292 13.3333 15.3125 13.8542L21.875 20.4167L20.4167 21.875ZM9.89583 14.5833C11.1979 14.5833 12.3049 14.1278 13.2167 13.2167C14.1285 12.3056 14.584 11.1986 14.5833 9.89583C14.5833 8.59375 14.1278 7.48715 13.2167 6.57604C12.3056 5.66493 11.1986 5.20903 9.89583 5.20833C8.59375 5.20833 7.48715 5.66424 6.57604 6.57604C5.66493 7.48785 5.20903 8.59444 5.20833 9.89583C5.20833 11.1979 5.66424 12.3049 6.57604 13.2167C7.48785 14.1285 8.59444 14.584 9.89583 14.5833Z"
                    fill="black"
                    fill-opacity="0.6"
                  />
                </svg>
                <input
                  type="text"
                  style={{
                    flexGrow: 1,
                    color: "rgba(0, 0, 0, 0.60)",
                    fontFamily: "Rubik",
                    fontSize: 20,
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: 20,
                    background: "none",
                    border: "none",
                    outline: "none",
                    height: "35px",
                  }}
                  value={keyword}
                  onChange={handleSearchChange}
                  placeholder="Type to Search"
                />
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: "linear", duration: 1 }}
            className="tools"
          >
            <div className="blog-info">
              <div>
                <div>Written By</div>
                <div>loream updmss</div>
              </div>
              <div>
                <div>Published on</div>
                <div>January 31,2024</div>
              </div>
            </div>
            <div>
              <div
                className="button-tools"
                onClick={() => {
                  copy(window.location.href);
                  toast("URL Copied to Clipboard");
                }}
              >
                Copy Link
              </div>
              <div className="button-tools">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                >
                  <path
                    d="M17.4262 12.99L26.9194 1.875H24.6694L16.4288 11.5256L9.84375 1.875H2.25L12.2063 16.47L2.25 28.125H4.5L13.2037 17.9325L20.1581 28.125H27.7519L17.4262 12.99ZM14.3456 16.5975L13.3369 15.1444L5.31 3.58125H8.76563L15.2419 12.9131L16.2506 14.3663L24.6712 26.4975H21.2156L14.3456 16.5975Z"
                    fill="white"
                    fill-opacity="0.6"
                  />
                </svg>
              </div>
              <div className="button-tools">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                >
                  <g clip-path="url(#clip0_2_2034)">
                    <path
                      d="M0 2.14875C0 0.961875 0.98625 0 2.20312 0H27.7969C29.0138 0 30 0.961875 30 2.14875V27.8512C30 29.0381 29.0138 30 27.7969 30H2.20312C0.98625 30 0 29.0381 0 27.8512V2.14875ZM9.26812 25.1138V11.5669H4.76625V25.1138H9.26812ZM7.01813 9.71625C8.5875 9.71625 9.56437 8.6775 9.56437 7.37625C9.53625 6.04688 8.58938 5.03625 7.04813 5.03625C5.50688 5.03625 4.5 6.04875 4.5 7.37625C4.5 8.6775 5.47687 9.71625 6.98812 9.71625H7.01813ZM16.2206 25.1138V17.5481C16.2206 17.1431 16.2506 16.7381 16.3706 16.4494C16.695 15.6412 17.4356 14.8031 18.6806 14.8031C20.31 14.8031 20.9606 16.0444 20.9606 17.8669V25.1138H25.4625V17.3438C25.4625 13.1812 23.2425 11.2463 20.28 11.2463C17.8913 11.2463 16.8206 12.5588 16.2206 13.4831V13.53H16.1906L16.2206 13.4831V11.5669H11.7206C11.7769 12.8381 11.7206 25.1138 11.7206 25.1138H16.2206Z"
                      fill="white"
                      fill-opacity="0.6"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2_2034">
                      <rect width="30" height="30" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </motion.div>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: "linear", duration: 1 }}
          style={{ paddingInline: "17vw" }}
          className="read-container"
        >
          <div className="title-white ">
            Publishing Mobile Apps: A How To Guide
          </div>
          <div className="content-blog">
            In today's digital age, mobile applications have become indispensable
            tools for businesses and individuals alike. Whether you're an aspiring
            app developer or a seasoned professional, the process of publishing
            your mobile app can seem daunting. However, with the right guidance,
            you can navigate through the intricacies of app publishing with ease.
            In this comprehensive guide, we'll walk you through the step-by-step
            process of publishing your mobile app, from conception to launch.
            <div className="content-blog-heading">1. Define Your App Concept</div>
            Before diving into the publishing process, it's crucial to have a
            clear understanding of your app's purpose, target audience, and unique
            selling points. Conduct market research to identify gaps in the market
            and ensure that your app addresses a specific need or solves a
            particular problem. Define your app's features and functionalities,
            keeping user experience at the forefront of your design
            considerations.
            <div className="content-blog-heading">2. Develop Your App</div>
            Once you have a solid app concept in place, it's time to bring it to
            life through development. Whether you're building your app from
            scratch or working with a development team, focus on creating a
            seamless user experience and robust functionality. Pay attention to
            design elements, performance optimization, and compatibility across
            various devices and operating systems.
            <div className="content-blog-heading">3. Test and Refine</div>
            Testing is a critical phase in the app development process, allowing
            you to identify and address any bugs, glitches, or usability issues
            before launch. Conduct thorough testing across different devices,
            screen sizes, and operating systems to ensure a smooth user
            experience. Solicit feedback from beta testers and iterate on your app
            based on their insights.
            <div className="content-blog-heading">
              4. Prepare for App Store Submission
            </div>
            Before submitting your app to the app stores, make sure to gather all
            the necessary assets and information required for the submission
            process. This includes app icons, screenshots, descriptions, keywords,
            and any legal documentation. Familiarize yourself with the guidelines
            and policies of the app stores you plan to publish on, such as the
            Apple App Store and Google Play Store.
            <div className="content-blog-heading">5. Submit Your App</div>
            Once you've prepared all the required materials, it's time to submit
            your app for review. Follow the submission guidelines carefully,
            ensuring that your app complies with the app store's policies and
            regulations. Be patient during the review process, as it may take some
            time for your app to be approved.
            <div className="content-blog-heading">
              6. Launch and Promote Your App
            </div>
            After your app has been approved and published on the app stores, it's
            time to celebrate your launch! However, the work doesn't stop there.
            Develop a comprehensive marketing strategy to promote your app and
            attract users. Utilize social media, app store optimization
            techniques, influencer partnerships, and other marketing channels to
            increase visibility and drive downloads.
            <div className="content-blog-heading">7. Monitor and Iterate</div>
            Once your app is live, it's essential to monitor its performance and
            gather user feedback continually. Track key metrics such as downloads,
            retention rates, user engagement, and revenue to gauge the success of
            your app. Use this data to iterate on your app, releasing updates and
            improvements to enhance the user experience and drive long-term
            success. In conclusion, publishing a mobile app can be a rewarding
            journey filled with challenges and opportunities. By following this
            step-by-step guide and staying informed about the latest industry
            trends and best practices, you can successfully navigate the app
            publishing process and bring your app to the hands of millions of
            users worldwide. Good luck!
          </div>
        </motion.div>
      </div>
    </>
  );
}
