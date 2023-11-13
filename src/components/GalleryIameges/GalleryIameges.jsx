import { useSelector } from "react-redux";
import { selectorGallery } from "../../redux/selector";
import css from "./GalleryImages.module.css";
import icon from "../../images/sprite.svg";
import { useState } from "react";
export const GalleryIameges = () => {
  const gallery = useSelector(selectorGallery);

  const [like, setLike] = useState({});
  const hendelLIke = (id) => {
    setLike((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <ul className={css.list}>
      {gallery.map((item) => (
        <li className={css.item} key={item.id}>
          <a className={css.overleyLink}>
            <div className={css.wrapperLi}>
              <img className={css.images} src={item.url} alt={item.id} />
              <div className={css.overley}>
                <div className={css.texBackground}>
                  <button
                    onClick={() => hendelLIke(item.id)}
                    className={css.button}
                  >
                    <svg
                      style={{
                        fill: like[item.id] ? "#FF868E" : "#fff",
                        stroke: like[item.id] ? "#fff" : "#FF868E",
                        width: "25px",
                        height: "24px",
                      }}
                    >
                      <use xlinkHref={icon + "#heart"}></use>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </a>
        </li>
      ))}
    </ul>
  );
};
