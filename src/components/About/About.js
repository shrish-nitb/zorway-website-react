import React, { useEffect, useRef, useState } from "react";
import Second from "../General/Second";
import ScrollPlates from "./ScrollPlates";
import { motion, useAnimation } from "framer-motion";
import Glossy from "../General/Glossy";
import MemberThumb from "./MemberThumb";
import { useScroll } from "framer-motion";
import { useMotionValueEvent } from "framer-motion";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";

export default function About() {
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

  const b = useScroll();
  const [actionOne, setActionOne] = useState({});
  const [actionTwo, setActionTwo] = useState({});
  const [actionThree, setActionThree] = useState({});
  const [plateOne, setPlateOne] = useState({});
  const [plateTwo, setPlateTwo] = useState({});
  const [plateThree, setPlateThree] = useState({});

  useMotionValueEvent(b.scrollYProgress, "change", (latest) => {
    //logic for horizontal plates "how we work"
    if (latest >= 0.4 && latest <= 0.76) {
      let progress = (latest - 0.4) / 0.36;
      if (progress <= 0.33) {
        setActionOne({ y: 0, opacity: 1 });
        setActionTwo({ y: 200, opacity: 0 });
        setPlateOne({ opacity: 1 });
        setPlateTwo({ opacity: 0 });
      } else if (progress <= 0.66 && progress >= 0.33) {
        setActionOne({ y: -200, opacity: 0 });
        setActionTwo({ y: 0, opacity: 1 });
        setActionThree({ y: 200, opacity: 0 });
        setPlateOne({ opacity: 0 });
        setPlateTwo({ opacity: 1 });
        setPlateThree({ opacity: 0 });
      } else {
        setActionTwo({ y: -200, opacity: 0 });
        setActionThree({ y: 0, opacity: 1 });
        setPlateTwo({ opacity: 0 });
        setPlateThree({ opacity: 1 });
      }
    }
  });

  return (
    <>
      <motion.section
        style={{ overflow: "hidden" }}
        initial={{ y: 300, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", damping: 8, duration: 0.5 }}
        className="about-hero-section"
      >
        <motion.div
          className="classic-1 glows-bg"
          initial={{ y: "-100px", opacity: 0 }}
          animate={{ y: "0px", opacity: 1 }}
          transition={{ duration: 1.8, ease: [0.42, 0, 0.58, 1] }}
          src=""
          alt=""
        />
        <div className="about-heading">
          <div className="social" style={{justifyContent:"center"}}>
            <div><i class="fa-brands fa-twitter"></i></div>
            <div><i class="fa-brands fa-instagram"></i></div>
            <div><i class="fa-brands fa-linkedin"></i></div>
          </div>
          <span className="about-heading-grad">About</span>
          <span> Us</span>
        </div>
        <div className="subtitle  maxw-sub">
          Unleash the full potential of your concept, enterprise, and
          aspirations, turning them into reality.
        </div>

        <motion.div
          className="classic-1"
          initial={{ y: "100px", opacity: 0 }}
          animate={{ y: "0px", opacity: 1 }}
          transition={{ duration: 1.8, ease: [0.42, 0, 0.58, 1] }}
          src=""
          alt=""
        />
        <motion.img
          initial={{ x: "100px", opacity: 0 }}
          animate={{ x: "0px", opacity: 1 }}
          transition={{ duration: 1, ease: [0.42, 0, 0.58, 1] }}
          className="classic-2"
          src="Group 1000001776.svg"
          alt=""
        />
        <motion.img
          initial={{ x: 538, opacity: 0 }}
          animate={{ x: window.innerWidth > 1023 ? 0 : 538, opacity: 1 }}
          transition={{ duration: 2, ease: [0.42, 0, 0.58, 1] }}
          className="classic-3"
          src="Vector 34.svg"
          alt=""
        />
      </motion.section>
      <Second
        purple={<>Welcome to Zorway</>}
        white={<>Your Gateway to Digital Excellence!</>}
        right={
          <>
            <img
              src="https://www.figma.com/file/oBm9aizomCqDqNVNtDXXja/image/07fcdfd9f524115fa8e5ae54cae4f3abfde4f793"
              style={{ width: "100%" }}
              alt=""
            />
          </>
        }
        left={
          <>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "50px",
                justifyContent: "center",
                paddingInline: "4.45vw",
              }}
            >
              <div className="subtitle txt-left">
                Zorway embodies a team of passionate experts united by a common
                goal: to equip businesses with innovative solutions that drive
                success. With extensive experience and a commitment to
                innovation, we offer a range of services tailored to meet
                diverse business needs.
                <br />
                <br />
                At Zorway, we understand that every business is unique. That's
                why we prioritize flexibility and customization in our approach,
                ensuring that our solutions align perfectly with your specific
                requirements. Whether it's leveraging emerging technologies or
                optimizing existing processes, we're dedicated to delivering
                results that propel your business forward.
                <br />
                <br />
                With a comprehensive suite of services, Zorway is your partner
                in navigating the complexities of the modern business landscape.
                From software development to strategic consultancy, we provide
                the expertise and support you need to thrive. Trust Zorway to
                lead your business towards success with our relentless pursuit
                of excellence and commitment to innovation.
              </div>
            </div>
          </>
        }
      ></Second>
      <div style={{ height: "300vh" }}>
        <section className="scroll-horizontal-section">
          <div className="title-white">
            <span className="purple-head">How We </span>Work
          </div>
          <div
            style={{
              height: "76vh",
              width: "80vw",
              display: "grid",
              gridTemplateColumns: "1fr 2fr",
            }}
          >
            <motion.div
              className="snap-scroll"
              style={{
                overflow: "hidden",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ScrollPlates
                bg={"url(plate-1.png)"}
                icon={"plate-icon-1.svg"}
                title={"Research"}
                subtitle={"Lorem ipsum dolor sit"}
                action={actionOne}
              />
              <ScrollPlates
                bg={"url(plate-2.png)"}
                icon={"plate-icon-2.svg"}
                title={"Ideate"}
                subtitle={"Lorem ipsum dolor sit"}
                action={actionTwo}
              />
              <ScrollPlates
                bg={"url(plate-3.png)"}
                icon={"plate-icon-3.svg"}
                title={"Execute"}
                action={actionThree}
                subtitle={"Lorem ipsum dolor sit"}
              />
            </motion.div>
            <div className="fading-plates">
              <motion.div
                animate={plateOne}
                transition={{ duration: 0.5, ease: [0.42, 0, 0.58, 1] }}
              >
                <img src="./plate-1.png" width={109} height={109} alt="" />
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat ante ut tellus fermentum, nec consequat libero sollicitudin. Vivamus quis neque a urna fermentum varius at vitae justo. Maecenas vel elit eu nisi convallis tempor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat ante ut tellus fermentum, nec consequat libero sollicitudin. Vivamus quis neque a urna fermentum varius at vitae justo. Maecenas vel elit eu nisi convallis tempor.
                </div>
              </motion.div>
              <motion.div
                animate={plateTwo}
                transition={{ duration: 0.5, ease: [0.42, 0, 0.58, 1] }}
              >
                <img src="./plate-2.png" width={109} height={109} alt="" />
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat ante ut tellus fermentum, nec consequat libero sollicitudin. Vivamus quis neque a urna fermentum varius at vitae justo. Maecenas vel elit eu nisi convallis tempor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat ante ut tellus fermentum, nec consequat libero sollicitudin. Vivamus quis neque a urna fermentum varius at vitae justo. Maecenas vel elit eu nisi convallis tempor.
                </div> </motion.div>
              <motion.div
                animate={plateThree}
                transition={{ duration: 0.5, ease: [0.42, 0, 0.58, 1] }}
              >
                <img src="./plate-3.png" width={109} height={109} alt="" />
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat ante ut tellus fermentum, nec consequat libero sollicitudin. Vivamus quis neque a urna fermentum varius at vitae justo. Maecenas vel elit eu nisi convallis tempor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat ante ut tellus fermentum, nec consequat libero sollicitudin. Vivamus quis neque a urna fermentum varius at vitae justo. Maecenas vel elit eu nisi convallis tempor.
                </div></motion.div>
            </div>
          </div>
        </section >
      </div >

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        style={window.innerWidth < 600 ? {marginTop: "60px"} : {}}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
  
        <SwiperSlide style={{ background: "none" }}>
          <Glossy>
            <div className="ideas-plate-parent">
              <div className="ideas-plate">
                <div className="ideas-text">
                  “ Lorem ipsum dolor sit amt, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut “
                </div>
              </div>
              <div className="picture-parent">
                <img
                  className="picture"
                  src="https://s3-alpha-sig.figma.com/img/5fe2/809a/26eb4f76e5e58eb382eba0c64a2864dc?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=coNIei~tDxk-uxNX50Xl1VbqJF~DYia7m20FGhbDTC9E2fMF9dTVlKN1LBhh9vya8wtts2sDgBDw1sfsX6WLeat07~vb9oQulvdN--~2mbZv12z~B0MZLwQR-oG~z-8Rsgb3OQ30m9e4rmW252m50RTyoF35Nsg2sSIJrJJky0P1xfXmFQjUxRnf5XA6LHEcdpjzHMYi8bgfBFtt-KknHBFy79Uv5LUGFtwnOFvyzvHF85PNkmsac3lJSN~VS9RdVXmY6gjbldrOC2FGz1xLNKoQSyKQjoapZduueP0hWYte38GvlJJ07ajB4v2bu1HjPo6jaz6VmD6900EQbHD27g__"
                  alt=""
                />
                <div className="info-ideas">
                  <span class="member-name">Sai Varun</span>
                  <span class="member-description">Co-Founder &amp; CEO</span>
                </div>
              </div>
            </div>
          </Glossy>
        </SwiperSlide>
        <SwiperSlide style={{ background: "none" }}>
          <Glossy>
            <div className="ideas-plate-parent">
              <div className="ideas-plate">
                <div className="ideas-text">
                  “ Lorem ipsum dolor sit amt, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut “
                </div>
              </div>
              <div className="picture-parent">
                <img
                  className="picture"
                  src="https://s3-alpha-sig.figma.com/img/5fe2/809a/26eb4f76e5e58eb382eba0c64a2864dc?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=coNIei~tDxk-uxNX50Xl1VbqJF~DYia7m20FGhbDTC9E2fMF9dTVlKN1LBhh9vya8wtts2sDgBDw1sfsX6WLeat07~vb9oQulvdN--~2mbZv12z~B0MZLwQR-oG~z-8Rsgb3OQ30m9e4rmW252m50RTyoF35Nsg2sSIJrJJky0P1xfXmFQjUxRnf5XA6LHEcdpjzHMYi8bgfBFtt-KknHBFy79Uv5LUGFtwnOFvyzvHF85PNkmsac3lJSN~VS9RdVXmY6gjbldrOC2FGz1xLNKoQSyKQjoapZduueP0hWYte38GvlJJ07ajB4v2bu1HjPo6jaz6VmD6900EQbHD27g__"
                  alt=""
                />
                <div className="info-ideas">
                  <span class="member-name">Neeraj Patel</span>
                  <span class="member-description">Co-Founder &amp; CTO</span>
                </div>
              </div>
            </div>
          </Glossy>
        </SwiperSlide>
        <SwiperSlide style={{ background: "none" }}>
          <Glossy>
            <div className="ideas-plate-parent">
              <div className="ideas-plate">
                <div className="ideas-text">
                  “ Lorem ipsum dolor sit amt, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut “
                </div>
              </div>
              <div className="picture-parent">
                <img
                  className="picture"
                  src="https://s3-alpha-sig.figma.com/img/5fe2/809a/26eb4f76e5e58eb382eba0c64a2864dc?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=coNIei~tDxk-uxNX50Xl1VbqJF~DYia7m20FGhbDTC9E2fMF9dTVlKN1LBhh9vya8wtts2sDgBDw1sfsX6WLeat07~vb9oQulvdN--~2mbZv12z~B0MZLwQR-oG~z-8Rsgb3OQ30m9e4rmW252m50RTyoF35Nsg2sSIJrJJky0P1xfXmFQjUxRnf5XA6LHEcdpjzHMYi8bgfBFtt-KknHBFy79Uv5LUGFtwnOFvyzvHF85PNkmsac3lJSN~VS9RdVXmY6gjbldrOC2FGz1xLNKoQSyKQjoapZduueP0hWYte38GvlJJ07ajB4v2bu1HjPo6jaz6VmD6900EQbHD27g__"
                  alt=""
                />
                <div className="info-ideas">
                  <span class="member-name">Pawan Raj Verma</span>
                  <span class="member-description">Co-Founder &amp; C0O</span>
                </div>
              </div>
            </div>
          </Glossy>
        </SwiperSlide>
      </Swiper>

      <section className="members">
        <div className="title-white purple-head">
          Unite with Our Founding Team
        </div>
        <div className="title-white"> Let's Make It a Happen!</div>
        {/* <div className="palette">
          <MemberThumb
            name={"Sai Varun"}
            info={"Co-Founder & CEO"}
          ></MemberThumb>
          <MemberThumb
            name={"Neeraj Patel"}
            info={"Co-Founder & CTO"}
          ></MemberThumb>
          <MemberThumb
            name={"Pawan Raj Verma"}
            info={"Co-Founder & COO"}
          ></MemberThumb>
        </div> */}
      </section>
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
