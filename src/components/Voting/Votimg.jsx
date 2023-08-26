import { Link } from "react-router-dom";
import icon from "../../images/sprite.svg";
import css from "./Voting.module.css";
import { useSelector } from "react-redux";
import { selectorBreeds } from "../../redux/selector";
import { BreedsForm } from "../BreedsForm/BreedsForm";

export const Voting = () => {
  const breeds = useSelector(selectorBreeds);
  if (breeds.length === 0) {
    return (
      <div style={{ marginLeft: "230px", marginTop: "320px" }}>Loading...</div>
    );
  }
  console.log(breeds);
  return (
    <section className={css.section}>
      <BreedsForm />
      <div className={css.container}>
        <div className={css.cont}>
          <button type="button" className={css.buttonBack}>
            <Link to="/">
              <svg
                style={{ width: "20px", height: "20px", objectFit: "cover" }}
              >
                <use xlinkHref={icon + "#icon-arrow-left"}></use>
              </svg>
            </Link>
          </button>
          <button type="button" className={css.btnBreeds}>
            VOTING
          </button>
        </div>

        <div className={css.imgCat}>
          <img
            style={{ margin: "auto", width: "400px", height: "300px" }}
            src={breeds[0].image.url}
            alt={breeds.name}
          />
        </div>
      </div>
    </section>
  );
};
