
// export default Carousel;
// "use client";

// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import styles from "../styles/Carousel.module.css";
// import Card from "./Card";

// const Carousel = ({ slide }) => {
//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 4,
//     autoplay: true,
//     autoplaySpeed: 5000,
//   };

//   const items = slide.shows || slide;

//   return (
//     <div className={styles.carousel_container}>
//       <h2>{slide.title}</h2>
//       <div className={styles.carouselContainer}>
//         <Slider {...settings} style={{ height: "100%" }}>
//           {items.map((item, index) => (
//             <div key={index} className={styles.slide}>
//               <Card item={item} />
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </div>
//   );
// };

// export default Carousel;
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../styles/Carousel.module.css";
import Card from "./Card";

const Carousel = ({ slide }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className={styles.carousel_container}>
      <h2>{slide.title}</h2>
      <div className={styles.carouselContainer}>
        {slide.shows ? (
          <Slider {...settings} style={{ height: "100%" }}>
            {slide.shows?.map((item, index) => (
              <div key={index} className={styles.slide}>
                <Card item={item} key={index} />
              </div>
            ))}
          </Slider>
        ) : (
          <Slider {...settings} style={{ height: "100%" }}>
            {slide?.map((item, index) => (
              <div key={index} className={styles.slide}>
                <Card item={item} key={index} />
              </div>
            ))}
          </Slider>
        )}
      </div>
    </div>
  );
};

export default Carousel;
