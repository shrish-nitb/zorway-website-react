import { motion } from "framer-motion";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Glossy from "../General/Glossy";
import ThumbGrid from "./ThumbGrid";

export default function BlogPage() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        transition={{ ease: "easeIn", duration: 1 }}
        className="tools tools-header"
      >
        <div>
          <div className="button-tools">Back to Blogs</div>
        </div>
      </motion.div>
      <Link to="read">
        <motion.div
          exit={{ gridTemplateColumns: "1fr", gridTemplateRows: "1fr" }}
          className="thumb-parent"
        >
          <div class="image-container">
            <div class="image-overlay"></div>
            <motion.img
              exit={{ maxHeight: "607px", maxWidth: "1700px" }}
              transition={{ type: "spring", damping: 9, duration: 2 }}
              src="https://s3-alpha-sig.figma.com/img/7cd3/8fa5/a4bae463af518f8105d9a332943b929f?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Vgcj9KTTbEWLou--g6NBt949iAGTgPEwPhJXA5qiKuXWilOSGCLIWPcsVG1sHT1bNVVnwTluU9k8a6wbPabqlowhJyo5owxxxSsXUnhC-1sIs8oC--hmqM9XH3fbQFfYNApPh1mt4NZrF1h4lmvWPcaa6zqLjOi8tnPYywHSKaNgUs1s8j6XniAvzylIyrtJ4QhMEwVGY4kMHXn0TWL00o8jgXP9bkpUp8wCXGKIJ83uRbK35g0yQDGGPscQhNm0gCcJUpKSOTnUACOY83fUNN8mmDIAs--4Q3tOlugsKcY6xNLYGC4LZxePc99~Hp-0xvxiTRPXDkn05AyNf7suNQ__"
              alt=""
            />
          </div>
          <motion.div
            exit={
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
      </Link>
      <motion.div
        exit={window.innerWidth > 1280 ? { y: "-755px", opacity: 1 } : {}}
        transition={{ ease: "linear", duration: 1 }}
        className="tools"
      >
        <div>
          <motion.div className="button-tools">All</motion.div>
          <motion.div
            exit={{ opacity: 0 }}
            transition={{ ease: "linear", duration: 1 }}
            className="button-tools"
          >
            Report
          </motion.div>
          <motion.div
            exit={{ opacity: 0 }}
            transition={{ ease: "linear", duration: 1 }}
            className="button-tools"
          >
            Blogs
          </motion.div>
        </div>
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ ease: "linear", duration: 1 }}
          className="search"
        >
          <div
            style={{
              display: "flex",
              alignItems:"center",
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
                lineHeight: 20 /* 100% */,
                background: "none",
                border: "none",
                outline: "none",
                height: "35px",
              }}
              placeholder="Type to Search"
            />
          </div>
        </motion.div>
      </motion.div>
      <ThumbGrid />

      <div className="footer">
        <div className="button-tools">Load More</div>
      </div>
      <Glossy bg={`url("112.png")`} position={"right"} paddingInline={true}>
        <div className="career-container">
          <div className="head purple-head">Want a career with us?</div>
          <div className="subtitle">
            Are you prepared to embark on an exhilarating career journey with
            us?
          </div>
        </div>
        <div style={{ margin: "unset" }} className="outlined-btn">
          <div>Get In Touch</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
          >
            <path
              d="M24.5138 14.0053C24.513 13.8326 24.4773 13.6618 24.4087 13.5033C24.3401 13.3448 24.2402 13.2018 24.1148 13.083L16.8173 5.78552C16.5268 5.50727 16.2276 5.38477 15.9161 5.38477C15.2056 5.38477 14.6946 5.88527 14.6946 6.56252C14.6946 6.91777 14.8381 7.21877 15.0621 7.44102L17.5593 9.97327L20.7811 12.9168L18.2051 12.761H4.74059C3.99684 12.761 3.48584 13.272 3.48584 14.0053C3.48584 14.728 3.99684 15.239 4.74059 15.239H18.2051L20.7811 15.0815L17.5611 18.0268L15.0603 20.559C14.9435 20.6734 14.8507 20.8101 14.7876 20.961C14.7245 21.1119 14.6923 21.274 14.6928 21.4375C14.6928 22.1148 15.2056 22.6153 15.9161 22.6153C16.2276 22.6153 16.5286 22.4928 16.7928 22.2373L24.1148 14.917C24.2389 14.7998 24.3382 14.6588 24.4067 14.5025C24.4753 14.3462 24.5117 14.1759 24.5138 14.0053Z"
              fill="#AA67FE"
            ></path>
          </svg>
        </div>
      </Glossy>
      <br />
    </>
  );
}
