import css from "./Breeds.module.css";
import icon from "../../images/sprite.svg";
import { useEffect, useState } from "react";
import { getImages } from "../../redux/operation";
import { useDispatch } from "react-redux";
import { BreedaaImeges } from "../BreedaaImeges/BreeadImeges";
import { Link } from "react-router-dom";
import { Select } from "../Select/Select";
import { BreedsForm } from "../BreedsForm/BreedsForm";
import { SlaiderCat } from "../SlaiderCat/SlaiderCat";
import { SortCat } from "../SortCat/SortCat";

export const Breeds = () => {
  const [limit, setLimit] = useState(5);
  const [showSliderCat, setShowSliderCat] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);

  const handelChangeSelect = (value) => {
    setShowSliderCat(true);
    setSelectedValue(value);
    console.log(value);
  };

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
          <Select onChange={handelChangeSelect} />

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
          <SortCat />
        </div>
        {selectedValue && showSliderCat ? <SlaiderCat /> : <BreedaaImeges />}
      </div>
    </section>
  );
};
