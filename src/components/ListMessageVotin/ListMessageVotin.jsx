import { useSelector } from "react-redux";
import { selectorFavorite, selectorVotinImages } from "../../redux/selector";
import css from "./ListMessageVotin.module.css";
import icon from "../../images/sprite.svg";
export const ListMessageVotin = () => {
  const votinsMesseg = useSelector(selectorVotinImages);
  const favorite = useSelector(selectorFavorite);
  const message = [...votinsMesseg, ...favorite];
  return (
    <>
      <ul className={css.list}>
        {message.map(({ id, created_at, image_id, value }) => (
          <li className={css.item} key={id}>
            <span className={css.time}>
              {new Date(created_at).toLocaleTimeString()}
            </span>

            <p className={css.text}>
              Image ID: <b>{image_id}</b> was added to
              <span style={{ marginRight: "15px" }}>
                {value === 1 && "Like"}
                {value === -1 && "Dislike"}
                {value !== -1 && value !== 1 && "Favorite"}
              </span>
            </p>
            {value === 1 && (
              <svg className={css.svg} style={{ fill: "green" }}>
                <use xlinkHref={icon + "#smile"}></use>
              </svg>
            )}
            {value === -1 && (
              <svg className={css.svg} style={{ fill: "#FFD280" }}>
                <use xlinkHref={icon + "#sad"}></use>
              </svg>
            )}
            {value !== 1 && value !== -1 && (
              <svg
                className={css.svg}
                style={{
                  fill: "#fff",
                  stroke: "#ff868e",
                  strokeWidth: "3px",
                }}
              >
                <use xlinkHref={icon + "#heart"}></use>
              </svg>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};
