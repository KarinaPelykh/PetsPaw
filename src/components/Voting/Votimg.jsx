import { Link } from "react-router-dom";
import icon from "../../images/sprite.svg";
import css from "./Voting.module.css";
import { useSelector } from "react-redux";
import { selectorBreeds } from "../../redux/selector";
import { BreedsForm } from "../BreedsForm/BreedsForm";
import { useState } from "react";
import { SearchCat } from "../SearchCat/SearchCat";

export const Voting = () => {
  const [opneComp, setOpenComp] = useState(false);
  const toggle = () => {
    if (!opneComp) {
      setOpenComp(!opneComp);
    }
  };
  const breeds = useSelector(selectorBreeds);
  if (breeds.length === 0) {
    return (
      <div style={{ marginLeft: "230px", marginTop: "320px" }}>Loading...</div>
    );
  }
  return (
    <section className={css.section}>
      <BreedsForm toggle={toggle} />

      {opneComp ? (
        <SearchCat />
      ) : (
        <div className={css.container}>
          <div className={css.cont}>
            <Link className={css.buttonBack} to="/">
              <svg className={css.svgButton}>
                <use xlinkHref={icon + "#icon-arrow-left"}></use>
              </svg>
            </Link>
            <button type="button" className={css.btnBreeds}>
              VOTING
            </button>
          </div>

          <div className={css.containerImgCat}>
            <img
              className={css.votingImg}
              src={breeds[0].image.url}
              alt={breeds.name}
            />
          </div>
        </div>
      )}
    </section>
  );
};
