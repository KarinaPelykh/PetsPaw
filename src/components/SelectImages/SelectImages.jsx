import { useSelector } from "react-redux";
import { selectorImages } from "../../redux/selector";

import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs, Navigation } from "swiper/modules";
import "./swiper-css.css";

export const SelectIages = () => {
  const images = useSelector(selectorImages);
  const imageStyles = [{ width: "640px", height: "360px", marginTop: "20px" }];
  return (
    <Swiper
      loop={true}
      spaceBetween={10}
      navigation={true}
      modules={[Navigation, Thumbs]}
      grabCursor={true}
      className="swiper-css"
    >
      {images.map((item, index) => (
        <SwiperSlide key={item.id}>
          <img
            style={imageStyles[index % imageStyles.length]}
            src={item.url}
            alt={item.name}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
