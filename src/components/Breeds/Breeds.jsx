import css from "./Breeds.module.css";
import icon from "../../images/sprite.svg";
import { useEffect } from "react";
import { getImages } from "../../redux/operation";
import { useDispatch } from "react-redux";
import { BreedaaImeges } from "../BreedaaImeges/BreeadImeges";

export const Breeds = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getImages());
  }, [dispatch]);
  return (
    <section className={css.section}>
      <form className={css.wrapper}>
        <input
          className={css.input}
          type="text"
          name="name"
          id="user-name"
          placeholder="Search for breeds by name"
        />

        <ul className={css.list}>
          <li>
            <button className={css.btn}>
              <svg style={{ width: "30px", height: "30px" }}>
                <use xlinkHref={icon + "#icon-smail"}></use>
              </svg>
            </button>
          </li>
          <li>
            <button className={css.btn}>
              <svg style={{ width: "30px", height: "26px" }}>
                <use xlinkHref={icon + "#heart"}></use>
              </svg>
            </button>
          </li>
          <li>
            <button className={css.btn}>
              <svg style={{ width: "30px", height: "30px" }}>
                <use xlinkHref={icon + "#sad"}></use>
              </svg>
            </button>
          </li>
        </ul>
      </form>
      <div className={css.container}>
        <div className={css.cont}>
          <button type="button" className={css.buttonBack}>
            <svg style={{ width: "20px", height: "20px", objectFit: "cover" }}>
              <use xlinkHref={icon + "#icon-arrow-left"}></use>
            </svg>
          </button>
          <button type="button" className={css.btnBreeds}>
            BREEDS
          </button>
          <select className={css.select}>
            <option className={css.option} value="value" selected>
              All breeds
            </option>
            <option disabled>Cat</option>
          </select>
          <select className={css.selectLimit}>
            <option className={css.option} value="value" selected>
              Limit:
            </option>
            <option disabled>Limit:5</option>
            <option disabled>Limit:10</option>
            <option disabled>Limit:15</option>
            <option disabled>Limit:20</option>
          </select>
          <button
            style={{
              position: " relative",
            }}
            className={css.buttonFilter}
          >
            <svg
              style={{
                width: "40px",
                height: "40px",
                position: "absolute",
                top: "0px",
                left: "-1px",
              }}
            >
              <use xlinkHref={icon + "#icon-Group-up"}></use>
            </svg>
          </button>
          <button
            style={{
              position: "relative",
            }}
            className={css.buttonFilter}
          >
            <svg
              style={{
                width: "40px",
                height: "40px",
                position: "absolute",
                top: "0px",
                left: "-1px",
              }}
            >
              <use xlinkHref={icon + "#icon-Group-down"}></use>
            </svg>
          </button>
        </div>

        <BreedaaImeges />
      </div>
    </section>
  );
};
