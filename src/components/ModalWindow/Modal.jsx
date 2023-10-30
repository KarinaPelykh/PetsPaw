import css from "./ModalWindov.module.css";
import icon from "../../images/sprite.svg";
// import { useState } from "react";
export const Modal = ({ close, toggleModal }) => {
  //   const [close, setClose] = useState(true);
  //   console.log(close);
  //   const hendelCloseModal = () => {
  //     setClose(!close);
  //   };
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
        {/* <img className={css.images} src="" alt="" /> */}
        <div>
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

        <p className={css.textImages}>
          <b>Drag here</b> your file or <b>Click here </b> to upload
        </p>
      </div>
      <p className={css.sin}>No file selected</p>
    </div>
  );
};
