import { faPlaystation, faWindows } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PlusIcon } from "@heroicons/react/outline";
import { useState } from "react";
import IGame from "store/games/entities/IGame";

export interface IGameCardProps {
  game?: IGame;
}

const GameCard: React.FC<IGameCardProps> = ({ game }) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      className="card"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img className="thumbnail" src={game?.background_image} />
      <div className="card-body">
        <div>
          <FontAwesomeIcon className="mr-3" icon={faWindows} />
          <FontAwesomeIcon className="mr-3" icon={faPlaystation} />
        </div>
        <h3 className="card-title">{game?.name}</h3>
        <div className="py-3">
          <button className="btn bg-slate-900">
            <PlusIcon className="w-4" />
            <span className="ml-2">155</span>
          </button>
        </div>
      </div>
      {hover && (
        <div className="section-after-hover">
          <table className="w-full text-xs">
            <tbody>
              <tr className="border-b-2 border-slate-400">
                <td className="text-slate-400 py-3">Release Date</td>
                <td className="text-right">{new Date().toDateString()}</td>
              </tr>
              <tr className="border-b-2 border-slate-400">
                <td className="text-slate-400 py-3">Genres</td>
                <td className="text-right">{new Date().toDateString()}</td>
              </tr>
              <tr>
                <td className="text-slate-400 py-3">Chart</td>
                <td className="text-right">{new Date().toDateString()}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default GameCard;
