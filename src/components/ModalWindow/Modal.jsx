import css from "./ModalWindov.module.css";
import icon from "../../images/sprite.svg";
import { useState } from "react";
export const Modal = ({ close, toggleModal }) => {
  const [drag, setDrag] = useState(false);

  const [photo, setPhoto] = useState(null);

  const setStarthendel = (e) => {
    e.preventDefault();
    setDrag(true);
  };

  const setLeavehendel = (e) => {
    e.preventDefault();
    setDrag(false);
  };

  const setDropHendel = (e) => {
    e.preventDefault();
    const file = [...e.dataTransfer.files];
    setPhoto(file);
  };
  return (
    <div className={css.wrapp}>
      <button className={css.button} onClick={close}>
        <svg className={css.svgBut}>
          <use xlinkHref={icon + "#icon-Close"}></use>
        </svg>
      </button>
      <h1 className={css.title}>Upload a .jpg or .png Cat Image</h1>
      <p className={css.text}>
        Any uploads must comply with the
        <span style={{ marginLeft: "5px", marginRight: "5px" }}>
          <a
            className={css.link}
            target="blank"
            href="https://thecatapi.com/privacy"
          >
            upload guidelines
          </a>
        </span>
        or face deletion.
      </p>
      <div className={css.thumb}>
        {drag ? (
          <div
            onDragLeave={(e) => setLeavehendel(e)}
            onDragStart={(e) => setStarthendel(e)}
            onDragOver={(e) => setStarthendel(e)}
            onDrop={(e) => setDropHendel(e)}
          >
            {photo ? (
              <img
                className={css.images}
                alt=""
                src={URL.createObjectURL(photo[0])}
              />
            ) : (
              <img className={css.images} alt="" src="" />
            )}
          </div>
        ) : (
          <div
            onDragLeave={(e) => setLeavehendel(e)}
            onDragStart={(e) => setStarthendel(e)}
            onDragOver={(e) => setStarthendel(e)}
          >
            <svg
              style={{
                width: "200px",
                height: "200px",
                fill: "#FF868E",
                marginTop: "60px",
              }}
            >
              <use xlinkHref={icon + "#uploadImg"}></use>
            </svg>
          </div>
        )}
        {photo ? (
          ""
        ) : (
          <p className={css.textImages}>
            <b>Drag here</b> your file or <b>Click here </b> to upload
          </p>
        )}
      </div>
      {photo ? (
        <>
          <p className={css.sin}>Image File Name:{photo[0].name}</p>
          <button
            style={{
              backgroundColor: "#FF868E",
              width: "172px",
              height: "40px",
              color: "white",
              borderRadius: "10px",
              marginTop: "20px",
            }}
          >
            UPLOAD PHOTO
          </button>
        </>
      ) : (
        <p className={css.sin}>No file selected</p>
      )}
    </div>
  );
};
