import css from "./Breeds.module.css";
import icon from "../../images/sprite.svg";
import { useEffect, useState } from "react";
import { getImages } from "../../redux/operation";
import { useDispatch, useSelector } from "react-redux";
import { BreedaaImeges } from "../BreedaaImeges/BreeadImeges";
import { Link } from "react-router-dom";
import { Select } from "../Select/Select";
import { BreedsForm } from "../BreedsForm/BreedsForm";
import { selectorBreeds } from "../../redux/selector";

export const Breeds = () => {
  const breeds = useSelector(selectorBreeds);
  const breedsName = [];
  for (const breed of breeds) {
    breedsName.push(breed.name);
  }
  const filterAlfabetUp = (e) => {
    e.preventDefault();
    breedsName.sort();
    console.log(breedsName.sort());
  };

  const filterAlfabetDown = (e) => {
    e.preventDefault();
    breedsName.sort().reverse();

    console.log(breedsName.sort().reverse());
  };

  const [limit, setLimit] = useState(5);

  const hendelImgChange = (event) => {
    const imgChanges = event.target.value;
    setLimit(imgChanges);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getImages(limit));
  }, [dispatch, limit]);

  return (
    <section className={css.section}>
      <BreedsForm />
      <div className={css.container}>
        <div className={css.cont}>
          <Link className={css.buttonBack} to="/">
            <svg
              style={{
                position: "absolute",
                top: "10px",
                left: "10px",
                width: "20px",
                height: "20px",
                objectFit: "cover",
              }}
            >
              <use xlinkHref={icon + "#icon-arrow-left"}></use>
            </svg>
          </Link>
          <button type="button" className={css.btnBreeds}>
            BREEDS
          </button>
          <Select />

          <select
            onChange={hendelImgChange}
            defaultValue
            className={css.selectLimit}
          >
            <option className={css.optionLimit} value="5">
              Limit:5
            </option>
            <option className={css.optionLimit} value="10">
              Limit:10
            </option>
            <option className={css.optionLimit} value="15">
              Limit:15
            </option>
            <option className={css.optionLimit} value="20">
              Limit:20
            </option>
          </select>
          <button
            onClick={filterAlfabetUp}
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
            onClick={filterAlfabetDown}
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
