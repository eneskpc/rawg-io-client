import GameCard from "views/children/GameList/game-card";
import { useAppDispatch } from "helpers/redux-helper";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import store, { RootState } from "store";
import { fetchGameList } from "store/games";
import IGameServiceState from "store/games/entities/IGameServiceState";

const GameList = () => {
  const gameListState = useSelector<RootState, IGameServiceState>(
    (state) => state.games
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchGameList());
  }, []);

  if (!gameListState || gameListState.loading === "pending") {
    return <div>bekleniyor</div>;
  }

  return (
    <>
      <h3 className="text-5xl mb-10 font-extrabold dark:text-white">Games</h3>
      <div className="grid grid-cols-4 gap-4">
        {gameListState.data?.results.map((g) => {
          console.log(g);
          return <GameCard game={g} />;
        })}
      </div>
    </>
  );
};

export default GameList;
