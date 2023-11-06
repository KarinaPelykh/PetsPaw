import css from "./VotinButtonReaction.module.css";
import icon from "../../images/sprite.svg";

export const VotinButtonReaction = () => {
  return (
    <div className={css.wrapper}>
      <button className={css.buttonSmile}>
        <svg className={css.svgSmile}>
          <use xlinkHref={icon + "#smile"}></use>
        </svg>
      </button>
      <button className={css.buttonFavorit}>
        <svg className={css.svgHeart}>
          <use xlinkHref={icon + "#heart"}></use>
        </svg>
      </button>
      <button className={css.buttonDislik}>
        <svg className={css.svgDis}>
          <use xlinkHref={icon + "#sad"}></use>
        </svg>
      </button>
    </div>
  );
};
