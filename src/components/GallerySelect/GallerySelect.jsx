import css from "./GallerySelect.module.css";
import icon from "../../images/sprite.svg";
import { useDispatch, useSelector } from "react-redux";
import { selectorgalleryALL } from "../../redux/selector";
import { useEffect, useState } from "react";
import {
  galleriIncrement,
  getCatsImagesByBreed,
  getImagesGallery,
  ImagesByBreedGAllery,
} from "../../redux/operation";
import PropTypes from "prop-types";
export const GallerySelect = ({ prop }) => {
  const breeds = useSelector(selectorgalleryALL);
  const dispatch = useDispatch();

  const [order, setOrder] = useState("Random");
  const [type, setType] = useState("jpg");
  const [limit, setLimit] = useState(5);
  const [breead, setBreead] = useState("none");
  const hendelOrder = (event) => {
    const idOrde = event.target.value;
    setOrder(idOrde);
    console.log(idOrde);
  };

  const hendelType = (event) => {
    const idType = event.target.value;
    setType(idType);
    console.log(idType);
  };

  const hendelLimit = (event) => {
    const idLimit = event.target.value;
    setLimit(idLimit);
    console.log(idLimit);
  };

  const hendelBreead = (event) => {
    const idBreead = event.target.value;
    setBreead(idBreead);
    console.log(idBreead);
  };

  useEffect(() => {
    dispatch(getImagesGallery());
    dispatch(getCatsImagesByBreed(breead));
    dispatch(ImagesByBreedGAllery(breead));
    dispatch(galleriIncrement({ order, type, limit, breead }));
  }, [dispatch, order, type, limit, breead]);

  return (
    <>
      {/* <form className={css.wrappSelect}>
        <div>
          <label className={css.labelSelect}>ORDER</label>
          <select
            onChange={hendelOrder}
            defaultValue
            className={css.selectGallery}
          >
            <option value="RAND">Random</option>
            <option value="ASC">ASC</option>
            <option value="DESC">DESC</option>
          </select>

          <label className={css.labelSelect}>BREEDS</label>
          <select
            onClick={prop}
            onChange={hendelBreead}
            defaultValue
            className={css.selectGallery}
          >
            <option value="">None</option>
            {breeds.map((item) => (
              <option value={item.id} key={item.id}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className={css.labelSelect}>TYPE</label>
          <select
            onChange={hendelType}
            defaultValue
            className={css.selectGallery}
          >
            <option value="jpg">Static</option>
            <option value="jpg,gif,png">ALL</option>
            <option value="gif">Animated</option>
          </select>

          <label className={css.labelSelect}>LIMIT </label>
          <select
            onChange={hendelLimit}
            defaultValue
            className={css.selectGallerypage}
          >
            <option value="5">5 items per page</option>
            <option value="10">10 items per page</option>
            <option value="15">15 items per page</option>
            <option value="20">20 items per page</option>
          </select>
          <button className={css.buttonUdate}>
            <svg className={css.svgUpdate}>
              <use xlinkHref={icon + "#icon-update"}></use>
            </svg>
          </button>
        </div>
      </form> */}
      <form className={css.wrappSelect}>
        <label className={css.labelSelect}>
          ORDER
          <select
            onChange={hendelOrder}
            defaultValue
            className={css.selectGallery}
          >
            <option value="RAND">Random</option>
            <option value="ASC">ASC</option>
            <option value="DESC">DESC</option>
          </select>
        </label>
        <label className={css.labelSelect}>
          BREEDS
          <select
            onClick={prop}
            onChange={hendelBreead}
            defaultValue
            className={css.selectGallery}
          >
            <option value="">None</option>
            {breeds.map((item) => (
              <option value={item.id} key={item.id}>
                {item.name}
              </option>
            ))}
          </select>
        </label>
        <label className={css.labelSelect}>
          TYPE
          <select
            onChange={hendelType}
            defaultValue
            className={css.selectGallery}
          >
            <option value="jpg">Static</option>
            <option value="jpg,gif,png">ALL</option>
            <option value="gif">Animated</option>
          </select>
        </label>
        <label className={css.labelSelect}>
          LIMIT
          <select
            onChange={hendelLimit}
            defaultValue
            className={css.selectGallerypage}
          >
            <option value="5">5 items per page</option>
            <option value="10">10 items per page</option>
            <option value="15">15 items per page</option>
            <option value="20">20 items per page</option>
          </select>{" "}
        </label>

        <button className={css.buttonUdate}>
          <svg className={css.svgUpdate}>
            <use xlinkHref={icon + "#icon-update"}></use>
          </svg>
        </button>
      </form>
    </>
  );
};
GallerySelect.propTypes = {
  prop: PropTypes.func,
};
