import IGameState from "./IGameState";

interface IGameServiceState {
  data: IGameState | null;
  loading: string;
  current_req_id: string;
  error: any;
}

export default IGameServiceState;
