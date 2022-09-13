export type User = {
  _id: string;
  username: string;
  country: string;
};

export type AuthState = {
  me: User | null;
  loading: boolean;
};

export type LoginPayload = {
  username: string;
  password: string;
};

export type LoginResponse = {
  user: {
    _id: string;
    username: string;
    password: string;
    country: string;
  };
  token: string;
};

export type RegisterPayload = {
  username: string;
  password: string;
  country: string;
};

export type RegisterResponse = LoginResponse;

export type Artist = {
  artist: {
    artist_id: number;
    artist_name: string;
    artist_name_translation_list: string[];
    artist_comment: string;
    artist_country: string;
    artist_alias_list: string[];
    artist_rating: number;
    artist_twitter_url: string;
    artist_credits: {
      artist_list: Artist[];
    };
    restricted: number;
    updated_time: Date;
    begin_year_date: string;
    begin_date: string;
    end_year_date: string;
    end_date: string;
  };
};

export type ArtistState = {
  artists: Artist[];
  loading: boolean;
};
