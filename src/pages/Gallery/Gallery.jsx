import css from "./Gallery.module.css";
import icon from "../../images/sprite.svg";

import { BreedsForm } from "../../components/BreedsForm/BreedsForm";
import { GallerySelect } from "../../components/GallerySelect/GallerySelect";
import { useState } from "react";
import { SearchCat } from "../SearchCat/SearchCat.jsx";
import { Button } from "../../components/Button/Button";
import { GalleryIameges } from "../../components/GalleryIameges/GalleryIameges";
import { GalleryBreeds } from "../../components/GalleryBreeds/GalleryBreeds";
import { Modal } from "../../components/ModalWindow/Modal";
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
                <div style={{ display: "flex" }}>
                  <Button />
                  <button type="button" className={css.btnBreeds}>
                    GALLERY
                  </button>
                </div>
                <div>
                  <button
                    type="button"
                    className={css.btnUpload}
                    onClick={openModal}
                  >
                    <svg className={css.svgUpload}>
                      <use xlinkHref={icon + "#icon-upload"}></use>
                    </svg>
                    UPLOAD
                  </button>
                </div>
              </div>
              <GallerySelect
                prop={handelShow}
                handelShowSlider={handelShowSlider}
              />
              {showSlider && <GalleryBreeds />}
              {!show && <GalleryIameges />}
            </div>
          )}
        </section>
      )}
      {open && <Modal close={close} open={open} />}
    </>
  );
};
// export default Gallery;
