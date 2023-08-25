import css from "./Breeds.module.css";
import icon from "../../images/sprite.svg";
import { useEffect, useState } from "react";
import { getImages } from "../../redux/operation";
import { useDispatch, useSelector } from "react-redux";
import { BreedaaImeges } from "../BreedaaImeges/BreeadImeges";
import { Link } from "react-router-dom";
import { selectorBreeds } from "../../redux/selector";
import { Select } from "../Select/Select";

export const Breeds = () => {
  const breeds = useSelector(selectorBreeds);
  const [displayedImages, setDisplayedImages] = useState(breeds.slice(0, 5));

  const hendelImgChange = (event) => {
    const imgChanges = event.target.value;
    const dfd = Object.values(breeds).slice(0, imgChanges);
    setDisplayedImages(dfd);
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getImages());
    setDisplayedImages(breeds.slice(0, 5));
  }, [dispatch, setDisplayedImages]);
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
            <Link to="/">
              <svg
                style={{ width: "20px", height: "20px", objectFit: "cover" }}
              >
                <use xlinkHref={icon + "#icon-arrow-left"}></use>
              </svg>
            </Link>
          </button>
          <button type="button" className={css.btnBreeds}>
            BREEDS
          </button>
          <Select className={css.select} />
          {/* <select className={css.select}>
            <option className={css.option} value="value" selected>
              All breeds
            </option>
            <option value={breeds.name}>Cat</option>
          </select> */}
          <select onChange={hendelImgChange} className={css.selectLimit}>
            <option value="5">Limit:5</option>
            <option value="10">Limit:10</option>
            <option value="15">Limit:15</option>
            <option value="20">Limit:20</option>
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

        <BreedaaImeges images={displayedImages} />
      </div>
    </section>
  );
};
