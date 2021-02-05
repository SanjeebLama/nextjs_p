/** @jsxRuntime classic */
/** @jsx jsx */
import { ThemeProvider } from "theme-ui";
import theme from "theme";
import { useRef, useState, useEffect } from "react";
import { jsx, Box, Container, Image, Button } from "theme-ui";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import SectionHeading from "components/section-heading";
import TeamMember from "components/cards/team-member";
import arrowRight from "assets/images/icons/arrow-right.png";

import a from "assets/images/FirstMag/1.png";
import b from "assets/images/FirstMag/1.1.png";
import c from "assets/images/FirstMag/1.2.png";
import d from "assets/images/FirstMag/1.3.png";
import e from "assets/images/FirstMag/1.4.png";
import f from "assets/images/FirstMag/1.5.png";
import g from "assets/images/FirstMag/1.6.png";
import h from "assets/images/FirstMag/1.7.png";
import i from "assets/images/FirstMag/1.8.png";
import j from "assets/images/FirstMag/1.9.png";
import k from "assets/images/FirstMag/1.10.png";
import l from "assets/images/FirstMag/1.11.png";
import m from "assets/images/FirstMag/1.12.png";
import no from "assets/images/FirstMag/1.13.jpg";
import o from "assets/images/FirstMag/1.14.png";

SwiperCore.use([Navigation, Pagination]);

const data = [
  {
    id: 1,
    avatar: a,
  },
  {
    id: 2,
    avatar: b,
  },
  {
    id: 3,
    avatar: c,
  },
  {
    id: 4,
    avatar: d,
  },
  {
    id: 5,
    avatar: e,
  },
  {
    id: 6,
    avatar: f,
  },
  {
    id: 7,
    avatar: g,
  },
  {
    id: 8,
    avatar: h,
  },
  {
    id: 9,
    avatar: i,
  },
  {
    id: 10,
    avatar: j,
  },
  {
    id: 11,
    avatar: k,
  },
  {
    id: 12,
    avatar: l,
  },
  {
    id: 13,
    avatar: m,
  },
  {
    id: 14,
    avatar: no,
  },
  {
    id: 15,
    avatar: o,
  },
];

const OurTeam = () => {
  const swiperRef = useRef(null);
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [containerOffset, setContainerOffset] = useState({
    left: null,
    top: null,
  });

  const isEnd = swiperRef?.current?.swiper?.isEnd;

  const handlePrev = () => {
    swiperRef?.current?.swiper?.slidePrev();
    setInterval(() => {
      setCurrentIndex(swiperRef?.current?.swiper?.activeIndex);
    }, 100);

    clearInterval();
  };
  const handleNext = () => {
    swiperRef?.current?.swiper?.slideNext();
    setInterval(() => {
      setCurrentIndex(swiperRef?.current?.swiper?.activeIndex);
    }, 100);

    clearInterval();
  };

  useEffect(() => {
    setContainerOffset({
      left: containerRef.current.offsetLeft,
      top: containerRef.current.offsetTop,
    });
  }, [containerRef]);

  const breakpoints = {
    0: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    1601: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
  };

  return (
    <Box as="section" id="team" sx={styles.section}>
      <Container ref={containerRef}>
        <SectionHeading
          sx={styles.heading}
          title="Weekly Magazine"
          description=""
        />
      </Container>
      <Box
        sx={{
          ml: currentIndex === 0 ? containerOffset?.left : 0,
          ...styles.teamWrapper,
        }}
      >
        {currentIndex !== 0 && (
          <button
            onClick={handlePrev}
            className="swiper-arrow swiper-arrow-left"
          >
            <Image src={arrowRight} alt="arrow left" />
          </button>
        )}
        {!isEnd && (
          <button
            className="swiper-arrow swiper-arrow-right"
            onClick={handleNext}
          >
            <Image src={arrowRight} alt="arrow right" />
          </button>
        )}

        <Swiper
          ref={swiperRef}
          spaceBetween={30}
          watchSlidesVisibility={true}
          slidesPerView={5}
          breakpoints={breakpoints}
        >
          {data?.map((item) => (
            <SwiperSlide key={item.id}>
              <TeamMember member={item} />
              {/* <h3 sx={styles.buttonWrapper}> Free</h3> */}
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
};

export default OurTeam;

const styles = {
  section: {
    pt: [11],
    pb: [11, null, null, 12, null, 14],
  },
  heading: {
    p: {
      maxWidth: 500,
      m: "10px auto 0",
    },
  },
  teamWrapper: {
    position: "relative",
    pl: [6],
    pr: [6, null, null, 0],
    transition: "0.3s ease-in-out 0s",
    ".swiper-arrow": {
      backgroundColor: "#fff",
      border: 0,
      cursor: "pointer",
      padding: 0,
      display: "flex",
      width: [30, null, null, null, 40, 60],
      height: [30, null, null, null, 40, 60],
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0px 7px 14px rgba(25, 60, 101, 0.06)",
      borderRadius: "50%",
      position: "absolute",
      zIndex: 2,
      top: "calc(50% - 40px)",
      transform: "translateY(-50%)",
      outline: 0,
      img: {
        // maxWidth: [8, 10, null, null, "100%"],
      },
    },
    ".swiper-arrow-left": {
      left: [3, null, null, null, 20, 50],
      img: {
        transform: "rotate(180deg)",
        marginLeft: "-4px",
      },
    },
    ".swiper-arrow-right": {
      right: [3, null, null, null, 20, 50],
      img: {
        marginRight: "-4px",
      },
    },
  },
};
