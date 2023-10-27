import { useSelector } from "react-redux";
import { selectorGallery } from "../../redux/selector";
import css from "./GalleryImages.module.css";
import icon from "../../images/sprite.svg";
export const GalleryIameges = () => {
  const gallery = useSelector(selectorGallery);
 
  if (gallery.lenght === 0) {
    return (
      <div>
        <p>Loading</p>
      </div>
    );
  }
  console.log("gallery====", gallery);
  return (
    <ul className={css.list}>
      {gallery.map((item) => (
        <li className={css.item} key={item.id}>
          <a className={css.overleyLink}>
            <div className={css.wrapperLi}>
              <img src={item.url} alt={item.id} />
              <div className={css.overley}>
                <div className={css.texBackground}>
                  <button className={css.button}>
                    <svg
                      style={{
                        width: "25px",
                        height: "25px",
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
