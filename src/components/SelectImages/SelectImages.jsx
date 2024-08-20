import { useSelector } from "react-redux";
import { selectorImages } from "../../redux/selector";

import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs, Navigation } from "swiper/modules";
import "./swiper-css.css";

export const SelectIages = () => {
  const images = useSelector(selectorImages);

  return (
    <Swiper
      loop={true}
      spaceBetween={1}
      navigation={true}
      modules={[Navigation, Thumbs]}
      grabCursor={true}
      className="swiper-css"
    >
      {images.map((item) => (
        <SwiperSlide key={item.id}>
          <img className="swiper-css-img" src={item.url} alt={item.name} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
