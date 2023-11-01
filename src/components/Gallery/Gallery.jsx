import css from "./Gallery.module.css";
import icon from "../../images/sprite.svg";

import { BreedsForm } from "../BreedsForm/BreedsForm";
import { GallerySelect } from "../GallerySelect/GallerySelect";
import { useState } from "react";
import { SearchCat } from "../SearchCat/SearchCat";
import { Button } from "../Button/Button";
import { GalleryIameges } from "../GalleryIameges/GalleryIameges";
import { GalleryBreeds } from "../GalleryBreeds/GalleryBreeds";
import { Modal } from "../ModalWindow/Modal";
import { useToggle } from "../../hooks/useToggle.js";
export const Gallery = () => {
  const [openComp, setOpenComp] = useState(false);
  const [show, setShowing] = useState(false);
  const [showSlider, setShowingSlider] = useState(true);

  const { openModal, close, open } = useToggle();

  const handelShow = () => {
    if (!show) {
      return setShowing(!show);
    }
  };

  const handelShowSlider = () => {
    return setShowingSlider(!showSlider);
  };

  const toggle = () => {
    if (!openComp) {
      setOpenComp(!openComp);
    }
  };
  return (
    <>
      {!open && (
        <section className={css.section}>
          <BreedsForm toggle={toggle} />
          {openComp ? (
            <SearchCat />
          ) : (
            <div className={css.container}>
              <div className={css.cont}>
                <Button />
                <button type="button" className={css.btnBreeds}>
                  GALLERY
                </button>

                <button
                  type="button"
                  className={css.btnUpload}
                  onClick={openModal}
                >
                  <svg
                    style={{
                      width: "16px",
                      height: "16px",
                      marginRight: "10px",
                    }}
                  >
                    <use xlinkHref={icon + "#icon-upload"}></use>
                  </svg>
                  UPLOAD
                </button>
              </div>
              <GallerySelect
                prop={handelShow}
                handelShowSlider={handelShowSlider}
              />
              {showSlider && <GalleryBreeds />}
              {!show && (
                <div style={{ marginTop: "20px" }}>
                  <GalleryIameges />
                </div>
              )}
            </div>
          )}
        </section>
      )}
      {open && <Modal close={close} open={open} />}
    </>
  );
};
