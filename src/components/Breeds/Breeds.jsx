import css from "./Breeds.module.css";
import icon from "../../images/sprite.svg";
import { useEffect } from "react";
import { getImages } from "../../redux/operation";
import { useDispatch } from "react-redux";
import { BreedaaImeges } from "../BreedaaImeges/BreeadImeges";
import { Link } from "react-router-dom";
// import { selectorBreeds } from "../../redux/selector";
import { Select } from "../Select/Select";
import { BreedsForm } from "../BreedsForm/BreedsForm";

export const Breeds = () => {
  // const breeds = useSelector(selectorBreeds);
  // const [displayedImages, setDisplayedImages] = useState();
  // console.log(displayedImages);
  // const hendelImgChange = (event) => {
  //   const imgChanges = event.target.value;
  //   const dfd = breeds.slice(0, imgChanges);
  //   setDisplayedImages(dfd);
  // };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getImages());
  }, [dispatch]);
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
            BREEDS
          </button>
          <Select />

          <select defaultValue className={css.selectLimit}>
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

        <BreedaaImeges />
      </div>
    </section>
  );
};
