import { useSelector } from "react-redux";
import css from "./BreedaaImeges.module.css";
import { selectorBreeds } from "../../redux/selector";

export const BreedaaImeges = () => {
  const breeds = useSelector(selectorBreeds);

  return (
    <>
      <div className={css.imgCat}>
        <ul className={css.list}>
          {breeds.map((item) => (
            <li className={css.item} key={item.id}>
              <a className={css.overleyLink}>
                <div className={css.wrapperLi}>
                  <img src={item.image.url} alt={item.name} />
                  <div className={css.overley}>
                    <div className={css.texBackground}>
                      <p className={css.textOoverley}>{item.name}</p>
                    </div>
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
