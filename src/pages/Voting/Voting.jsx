import css from "./Voting.module.css";
import { useDispatch, useSelector } from "react-redux";
import { BreedsForm } from "../../components/BreedsForm/BreedsForm";
import { useEffect, useState } from "react";
import { SearchCat } from "../SearchCat/SearchCat";
import { Button } from "../../components/Button/Button";
import { FavoriteGet, Votes, GetVotesPost } from "../../redux/operation";
import { VotinButtonReaction } from "../../components/VotinButtonReaction/VotinButtonReaction";
import { selectorVotin } from "../../redux/selector";
import { ListMessageVotin } from "../../components/ListMessageVotin/ListMessageVotin";
export const Voting = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Votes());
    dispatch(GetVotesPost());
    dispatch(FavoriteGet());
  }, [dispatch]);

  const hendelFoto = () => {
    dispatch(Votes());
  };

  const [opneComp, setOpenComp] = useState(false);
  const toggle = () => {
    if (!opneComp) {
      setOpenComp(!opneComp);
    }
  };

  const votin = useSelector(selectorVotin);

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
            {votin ? (
              <img
                className={css.votingImg}
                src={votin[0]?.url}
                alt={votin.name}
              />
            ) : (
              <p className={css.votingImg}>Loader</p>
            )}
          </div>
          <VotinButtonReaction
            image_id={votin[0]?.id}
            hendelFoto={hendelFoto}
          />
          <ListMessageVotin />
        </div>
      )}
    </section>
  );
};
