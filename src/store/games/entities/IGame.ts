interface IGame {
  id: number;
  slug: string;
  name: string;
  released: string;
  tba: boolean;
  background_image: string;
  rating: number;
  rating_top: number;
  ratings: string[];
  rating_count: number;
  reviews_text_count: number;
  added: number;
  added_by_status: string;
  metacritic: string;
  playtime: number;
  suggestions_count: number;
  updated: string;
  reviews_count: number;
  community_rating: number;
  saturated_color: string;
  dominant_color: string;
  clip: string;
}

export default IGame;
