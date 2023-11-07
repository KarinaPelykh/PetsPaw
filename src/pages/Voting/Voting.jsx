import css from "./Voting.module.css";
import { useDispatch } from "react-redux";
import { BreedsForm } from "../../components/BreedsForm/BreedsForm";
import { useEffect, useState } from "react";
import { SearchCat } from "../SearchCat/SearchCat";
import { Button } from "../../components/Button/Button";
import { Votes } from "../../redux/operation";
import { VotinButtonReaction } from "../../components/VotinButtonReaction/VotinButtonReaction";
export const Voting = () => {
  const [like, setLike] = useState(false);
  // const [favorite, setFavorite] = useState(false);

  const handelLike = () => {
    setLike(!like);
    hendelTime();
  };
  const hendelTime = () => {
    const date = new Date();
    console.log(date);
  };
  // const handelFavorite = () => {};

  // const handelDiclike = () => {};
  const dicpatch = useDispatch();
  useEffect(() => {
    dicpatch(Votes());
  }, [dicpatch]);

  const [opneComp, setOpenComp] = useState(false);
  const toggle = () => {
    if (!opneComp) {
      setOpenComp(!opneComp);
    }
  };
  // const votin = useSelector(selectorBreeds);

  // if (breeds.length === 0) {
  //   return (
  //     <div style={{ marginLeft: "230px", marginTop: "320px" }}>Loading...</div>
  //   );
  // }
  return (
    <section className={css.section}>
      <BreedsForm toggle={toggle} />

      {opneComp ? (
        <SearchCat />
      ) : (
        <div className={css.container}>
          <div className={css.cont}>
            <Button />
            <button type="button" className={css.btnBreeds}>
              VOTING
            </button>
          </div>

          <div className={css.containerImgCat}>
            <img
              className={css.votingImg}
              // src={item.image.url}
              // alt={breeds.name}
            />
          </div>
          <VotinButtonReaction props={handelLike} />
        </div>
      )}
    </section>
  );
};
