import Axios from "axios";

export default Axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "fe5c69be2a654cceb33eefa6c288bb82",
  },
});

export enum RequestStuation {
  FINISHED = "finished",
  PENDING = "pending",
  ERROR = "An error occured",
}
