// import { useSelector } from "react-redux";
// import css from "./BreedaaImeges.module.css";
// import { selectorBreeds } from "../../redux/selector";

// export const BreedaaImeges = () => {
//   const breeds = useSelector(selectorBreeds);
//   const imageStyles = [
//     { width: "200px", height: "300px" },
//     { width: "200px", height: "140px" },
//     { width: "200px", height: "140px" },
//     { width: "200px", height: "140px" },
//     { width: "420px", height: "300px" },
//     { width: "200px", height: "140px" },
//     { width: "200px", height: "140px" },
//     { width: "200px", height: "300px" },
//     { width: "420px", height: "300px" },
//     { width: "200px", height: "140px" },
//     { width: "200px", height: "300px" },
//     { width: "200px", height: "140px" },
//     { width: "200px", height: "140px" },
//     { width: "200px", height: "140px" },
//     { width: "420px", height: "300px" },
//   ];
//   return (
//     <div className={css.imgCat}>
//       <ul className={css.list}>
//         {breeds.map((item, index) => (
//           <li key={item.id}>
//             <img
//               style={imageStyles[index % imageStyles.length]}
//               src={item.url}
//               alt={item.name}
//             />
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };
import { useSelector } from "react-redux";
import css from "./BreedaaImeges.module.css";
import { selectorBreeds } from "../../redux/selector";

export const BreedaaImeges = () => {
  const breeds = useSelector(selectorBreeds);

  // Масив об'єктів зі стилями для кожного зображення
  const imageStyles = [
    { width: "200px", height: "300px" },
    { width: "200px", height: "140px" },
    { width: "200px", height: "140px" },
    { width: "200px", height: "140px" },
    { width: "420px", height: "300px" },
  ];

  return (
    <div className={css.imgCat}>
      <ul className={css.list}>
        {breeds.map((item, index) => (
          <li className={css.item} key={item.id}>
            <img
              src={item.url}
              alt={item.name}
              style={imageStyles[index % imageStyles.length]} // Встановлення стилів для зображення
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
