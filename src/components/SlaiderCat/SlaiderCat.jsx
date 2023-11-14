import { SelectIages } from "../SelectImages/SelectImages";
import icon from "../../images/sprite.svg";
import { Link } from "react-router-dom";
import css from "./SlaiderCat.module.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { InfoSliderCat } from "./InfoSliderCat";
export const SlaiderCat = () => {
  return (
    <>
      <div className={css.container}>
        <div className={css.cont}>
          <Link className={css.buttonBack} to="/">
            <svg className={css.svgback}>
              <use xlinkHref={icon + "#icon-arrow-left"}></use>
            </svg>
          </Link>
          <button type="button" className={css.btnBreeds}>
            BREEDS
          </button>
        </div>
        <div className={css.containerSwipertImg}>
          <div>
            <div className={css.inner}>
              <SelectIages />
            </div>
            <InfoSliderCat />
          </div>
        </div>
      </div>
    </>
  );
};
