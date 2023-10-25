import css from "./GallerySelect.module.css";
import icon from "../../images/sprite.svg";
import { useSelector } from "react-redux";
import { selectorBreeds } from "../../redux/selector";
export const GallerySelect = () => {
  const breeds = useSelector(selectorBreeds);

  const hendelOrder = (event) => {
    const idOrde = event.target.value;
    console.log(idOrde);
  };

  const hendelType = (event) => {
    const idType = event.target.value;
    console.log(idType);
  };
  return (
    <>
      <form className={css.wrappSelect}>
        <div>
          <label className={css.labelSelect}>ORDER</label>
          <select
            onChange={hendelOrder}
            defaultValue
            className={css.selectGallery}
          >
            <option value="Random">Random</option>
            <option value="ASC">ASC</option>
            <option value="DESC">DESC</option>
          </select>

          <label className={css.labelSelect}>BREEDS</label>
          <select defaultValue className={css.selectGallery}>
            <option value="">None</option>
            {breeds.map((item) => (
              <option value={item.id} key={item.id}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className={css.labelSelect}>TYPE</label>
          <select
            onChange={hendelType}
            defaultValue
            className={css.selectGallery}
          >
            <option value="Static">Static</option>
            <option value="ALL">ALL</option>
            <option value="Animated">Animated</option>
          </select>

          <label className={css.labelSelect}>LIMIT </label>
          <div style={{ display: "flex" }}>
            <select defaultValue className={css.selectGallerypage}>
              <option value="5">5 items per page</option>
              <option value="10">10 items per page</option>
              <option value="15">15 items per page</option>
              <option value="20">20 items per page</option>
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
