import css from "./Gallery.module.css";
import icon from "../../images/sprite.svg";
import { Link } from "react-router-dom";
import { BreedaaImeges } from "../BreedaaImeges/BreeadImeges";
import { BreedsForm } from "../BreedsForm/BreedsForm";
import { GallerySelect } from "../GallerySelect/GallerySelect";
import { useState } from "react";
import { SearchCat } from "../SearchCat/SearchCat";

export const Gallery = () => {
  const [openComp, setOpenComp] = useState(false);

  const toggle = () => {
    if (!openComp) {
      setOpenComp(!openComp);
    }
  };
  return (
    <>
      <section className={css.section}>
        <BreedsForm toggle={toggle} />
        {openComp ? (
          <SearchCat />
        ) : (
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
            <GallerySelect />
            <BreedaaImeges />
          </div>
        )}
      </section>
    </>
  );
};
