import { useSelector } from "react-redux";
import css from "./BreedaaImeges.module.css";
// import PropTypes from "prop-types";
import { selectorBreeds } from "../../redux/selector";

export const BreedaaImeges = () => {
  const breeds = useSelector(selectorBreeds);
  const imageStyles = [
    // { width: "200px", height: "300px" },
    // { width: "200px", height: "140px" },
    // { width: "200px", height: "140px" },
    // { width: "200px", height: "140px", marginTop: "160px" },
    // { width: "420px", height: "300px" },
    // { width: "200px", height: "140px", marginTop: "160px" },
    // { width: "200px", height: "140px", marginTop: "160px" },
    // { width: "200px", height: "300px", marginTop: "160px" },
    // { width: "420px", height: "300px", marginTop: "160px" },
    // { width: "200px", height: "140px", marginTop: "320px" },
    // { width: "200px", height: "300px", marginTop: "320px" },
    // { width: "200px", height: "140px", marginTop: "320px" },
    // { width: "200px", height: "140px", marginTop: "320px" },
    // { width: "200px", height: "140px", marginTop: "320px" },
    // { width: "420px", height: "300px", marginTop: "160px" },
    // { width: "420px", height: "300px", marginTop: "320px" },
    // { width: "200px", height: "140px", marginTop: "320px" },
    // { width: "200px", height: "140px", marginTop: "480px" },
    // { width: "200px", height: "140px", marginTop: "480px" },
    // { width: "200px", height: "300px", marginTop: "320px" },
    // { width: "420px", height: "300px", marginTop: "320px" },
  ];
  return (
    <>
      <div className={css.imgCat}>
        <ul className={css.list}>
          {breeds.map((item, index) => (
            <li
              className={css.item }
              key={item.id}
            >
              {/* <a className={css.overleyLink}>
              <div className={css.wrapper}> */}
              <img
                // className={css.imageStyles}
                style={imageStyles[index % imageStyles.length]}
                src={item.image.url}
                alt={item.name}
              />

              {/* <div className={css.overley}>
                  <button className={css.textOoverley}>{item.name}</button>
                </div>
              </div>
            </a> */}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
{
  /* <li class="item-images">
  <a href="" class="link overley-link item-images-link">
    <div class="wrapper">
      <img src="./images/img-11.jpg" alt="car" width="360" />
      <div class="overley">
        <p class="text-overley">
          14 Stylish and User-Friendly App Design Concepts · Task Manager App ·
          Calorie Tracker App · Exotic Fruit Ecommerce App · Cloud Storage App
        </p>
      </div>
    </div>
    <div class="container-heading-text">
      <h2 class="headin-caption">Taxi Service</h2>
      <p class="headin-text-img">Marketing</p>
    </div>
  </a>
</li>; */
}

// BreedaaImeges.propTypes = {
//   images: PropTypes.array.isRequired,
// };
