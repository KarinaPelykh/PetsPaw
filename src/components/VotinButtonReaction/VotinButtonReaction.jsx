import css from "./VotinButtonReaction.module.css";
import icon from "../../images/sprite.svg";
// import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Favorite,
  FavoriteGet,
  VotesPost,
  GetVotesPost,
} from "../../redux/operation";

export const VotinButtonReaction = ({ image_id, hendelFoto }) => {
  const dispatch = useDispatch();

  const handelVote = (value) => {
    console.log("handelVote", value);
    dispatch(VotesPost({ value, image_id }));
    dispatch(GetVotesPost());
    hendelFoto();
  };

  const handelFavorite = () => {
    dispatch(Favorite(image_id));
    dispatch(FavoriteGet());
    hendelFoto();
  };
  return (
    <div className={css.wrapper}>
      <button
        onClick={() => {
          handelVote(1);
        }}
        className={css.buttonSmile}
      >
        <svg className={css.svgSmile}>
          <use xlinkHref={icon + "#smile"}></use>
        </svg>
      </button>
      <button
        onClick={() => {
          handelFavorite();
        }}
        className={css.buttonFavorit}
      >
        <svg className={css.svgHeart}>
          <use xlinkHref={icon + "#heart"}></use>
        </svg>
      </button>
      <button
        onClick={() => {
          handelVote(-1);
        }}
        className={css.buttonDislik}
      >
        <svg className={css.svgDis}>
          <use xlinkHref={icon + "#sad"}></use>
        </svg>
      </button>
    </div>
  );
};
