import css from "./GallerySelect.module.css";
import icon from "../../images/sprite.svg";
export const GallerySelect = () => {
  return (
    <>
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
    </>
  );
};
