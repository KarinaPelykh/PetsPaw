import css from "./Gallery.module.css";
import icon from "../../images/sprite.svg";
import { Link } from "react-router-dom";
import { BreedaaImeges } from "../BreedaaImeges/BreeadImeges";
import { BreedsForm } from "../BreedsForm/BreedsForm";

export const Gallery = () => {
  return (
    <>
      <section className={css.section}>
        <BreedsForm />
        <div className={css.container}>
          <div className={css.cont}>
            <button type="button" className={css.buttonBack}>
              <Link to="/">
                <svg
                  style={{
                    width: "20px",
                    height: "20px",
                    objectFit: "cover",
                  }}
                >
                  <use xlinkHref={icon + "#icon-arrow-left"}></use>
                </svg>
              </Link>
            </button>
            <button type="button" className={css.btnBreeds}>
              GALLERY
            </button>

            <button type="button" className={css.btnUpload}>
              <svg
                style={{ width: "16px", height: "16px", marginRight: "10px" }}
              >
                <use xlinkHref={icon + "#icon-upload"}></use>
              </svg>
              UPLOAD
            </button>
          </div>
          <form className={css.wrappSelect}>
            <div>
              <label className={css.labelSelect}>ORDER</label>
              <select defaultValue className={css.selectGallery}>
                <option value="5">Random</option>
              </select>
              <label className={css.labelSelect}>TYPE</label>
              <select defaultValue className={css.selectGallery}>
                <option value="5">Static</option>
              </select>
            </div>
            <div>
              <label className={css.labelSelect}>BREEDS</label>
              <select defaultValue className={css.selectGallery}>
                <option value="5">None</option>
              </select>

              <label className={css.labelSelect}>LIMIT </label>
              <div style={{ display: "flex" }}>
                <select defaultValue className={css.selectGallerypage}>
                  <option value="5">5 items per page</option>
                </select>
                <button className={css.buttonUdate}>
                  <svg
                    style={{
                      width: "18px",
                      height: "20px",
                      marginRight: "10px",
                    }}
                  >
                    <use xlinkHref={icon + "#icon-update"}></use>
                  </svg>
                </button>
              </div>
            </div>
          </form>
          <BreedaaImeges />
        </div>
      </section>
    </>
  );
};
