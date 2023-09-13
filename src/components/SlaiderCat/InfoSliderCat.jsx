import { useSelector } from "react-redux";
import { selectorInfo } from "../../redux/selector";
import css from "./InfoSliderCat.module.css";
export const InfoSliderCat = () => {
  const info = useSelector(selectorInfo);
  if (!info.length) {
    // Дані ще не завантажені, можна відобразити заглушку або індікатор завантаження.
    return <div>Loading...</div>;
  }
  const catId = info[0];
  console.log(catId);
  const {
    breeds: [{ name, temperament, description, origin, life_span, weight }],
  } = catId;

  return (
    <>
      <section className={css.infoSection}>
        <div className={css.wrapper}>
          <h1 className={css.title}>{name}</h1>
          <p className={css.text}>{description}</p>
        </div>

        <div className={css.wrapperInfo}>
          <div className={css.container}>
            <p className={css.desc}>
              <b className={css.style}>Temperament:</b>
              {temperament}
            </p>
          </div>
          <div className={css.section}>
            <ul className={css.list}>
              <li className={css.item}>
                <b>Origin:</b> {origin}
              </li>
              <li className={css.item}>
                <b>Weight:</b>
                {weight.metric}
              </li>
              <li className={css.item}>
                <b>Life span:</b> {life_span} years
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};
