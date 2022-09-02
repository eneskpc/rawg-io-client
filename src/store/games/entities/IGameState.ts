import IGame from "./IGame";

interface IGameState {
  loading: string;
  count: number;
  next: string;
  previous: string | null;
  seo_title: string;
  seo_description: string;
  seo_keywords: string;
  seo_h1: string;
  noindex: boolean;
  nofollow: boolean;
  description: string;
  filters: any;
  nofollow_collections: string[];
  results: IGame[];
  current_req_id: string;
  error: any;
}

export default IGameState;
