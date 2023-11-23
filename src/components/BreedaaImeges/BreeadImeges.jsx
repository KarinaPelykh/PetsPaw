import { useSelector } from "react-redux";
import css from "./BreedaaImeges.module.css";
import { selectorBreeds } from "../../redux/selector";
import { Oval } from "react-loader-spinner";

export const BreedaaImeges = () => {
  const breeds = useSelector(selectorBreeds);

  return (
    <>
      {breeds.length === 0 ? (
        <div className={css.loader}>
          <Oval
            height={80}
            width={80}
            color="#ff868e"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="oval-loading"
            secondaryColor="#ff868e"
            strokeWidth={2}
            strokeWidthSecondary={2}
          />
        </div>
      ) : (
        <div className={css.imgCat}>
          <ul className={css.list}>
            {breeds.map((item) => (
              <li className={css.item} key={item.id}>
                <a className={css.overleyLink}>
                  <div className={css.wrapperLi}>
                    <img
                      className={css.image}
                      src={item.image.url}
                      alt={item.name}
                    />
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
      )}
    </>
  );
};
