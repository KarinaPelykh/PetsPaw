import css from "./ModalWindov.module.css";
import icon from "../../images/sprite.svg";
import PropTypes from "prop-types";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { UploadImages } from "../../redux/operation";
export const Modal = ({ close, open }) => {
  const [drag, setDrag] = useState(false);
  const [photo, setPhoto] = useState(null);
  const [message, setMessage] = useState(true);
  const [openMee, setOpen] = useState(false);
  console.log("message", message);
  const hendelOpen = () => {
    setOpen(!openMee);
  };
  console.log(message);
  const dispatch = useDispatch();

  const hendelUploadPhoto = () => {
    const formData = new FormData();
    formData.append("file", photo[0]);
    console.log(formData);
    dispatch(UploadImages(formData))
      .unwrap()
      .then(() => {
        setPhoto("");
        hendelOpen();
        setMessage(true);
      })
      .catch((error) => {
        hendelOpen();
        setMessage(false);
        console.log(error);
      });
  };

  console.log(photo);

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

  const openFile = () => {
    const file = document.getElementById("input");
    if (file) {
      file.click();
    }
  };
  const hendelsetPhoto = (e) => {
    e.preventDefault();
    const filephoto = e.target.files;
    setPhoto(filephoto);
  };
  return (
    <div className={css.wraperModal}>
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
        <div
          className={css.thumb}
          style={{ background: message ? "#fff" : "#FBE0DC" }}
        >
          <input
            type="file"
            id="input"
            accept=".jpg, .jpeg, .png"
            onChange={(e) => hendelsetPhoto(e)}
            style={{ display: "none" }}
          />
          {drag || photo ? (
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
              <b>Drag here</b> your file or ?
              <b onClick={(e) => openFile(e)}>Click here</b> to upload
            </p>
          )}
        </div>
        {photo ? (
          <>
            <p className={css.sin}>Image File Name:{photo[0].name}</p>

            {message ? (
              <button
                onClick={hendelUploadPhoto}
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
            ) : (
              ""
            )}
          </>
        ) : (
          <p className={css.sin}>No file selected</p>
        )}

        {openMee && (
          <div
            style={{
              display: "flex",
              background: "#fff",
              padding: "18px",
              borderRadius: "10px",
              marginTop: " 10px",
            }}
          >
            {message ? (
              <svg
                style={{
                  marginRight: "15px",
                  width: "20px",
                  height: "20px",
                  fill: "green",
                }}
              >
                <use xlinkHref={icon + "#checkmark"}></use>{" "}
              </svg>
            ) : (
              <svg
                style={{
                  marginRight: "15px",
                  width: "20px",
                  height: "20px",
                  fill: "red",
                }}
              >
                <use xlinkHref={icon + "#icon-cross"}></use>
              </svg>
            )}

            {message ? (
              <p className={css.sing}>Thanks for the Upload - Cat found!</p>
            ) : (
              <p className={css.sing}>No Cat found - try a different one</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

Modal.propTypes = {
  open: PropTypes.bool,
  close: PropTypes.func,
};
