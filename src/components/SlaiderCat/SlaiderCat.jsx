import { SelectIages } from "../SelectImages/SelectImages";

import css from "./SlaiderCat.module.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { InfoSliderCat } from "./InfoSliderCat";
export const SlaiderCat = () => {
  return (
    <>
      <div className={css.containerSwipertImg}>
        <div>
          <div className={css.inner}>
            <SelectIages />
          </div>
          <InfoSliderCat />
        </div>
      </div>
    </>
  );
};
