import { useSelector } from "react-redux";
import { selectorSort } from "../../redux/selector";

export const NameCat = () => {
  const nameCat = useSelector(selectorSort);

  return (
    <>
      <p>
        Hello. If want to find a cat, then come and look at the name of the of
        your dreams
      </p>
      <ul>
        {nameCat.map(({ id, name }) => (
          <li key={id}>
            {id}-{name}
          </li>
        ))}
      </ul>
    </>
  );
};
