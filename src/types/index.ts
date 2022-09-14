export type User = {
  _id: string;
  username: string;
  country: string;
};

export type AuthState = {
  currentUser: User | null;
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
    restricted: number;
    updated_time: Date;
    begin_year_date: string;
    begin_date: string;
    end_date: string;
  };
};

export type ArtistState = {
  artists: Artist[];
  loading: boolean;
};

export type Album = {
  album: {
    album_id: number;
    album_mid: string;
    album_name: string;
    album_rating: number;
    album_release_date: Date;
    artist_id: number;
    artist_name: string;
    album_pline: string;
    album_copyright: string;
    album_label: string;
    restricted: number;
    updated_time: Date;
  };
};

export type AlbumState = {
  albums: Album[];
  loading: boolean;
};

export type Track = {
  track: {
    track_id: number;
    track_name: string;
    track_rating: number;
    album_id: number;
    album_name: string;
    artist_id: number;
    artist_name: string;
    restricted: number;
    updated_time: Date;
  };
};

export type TrackState = {
  tracks: Track[];
  loading: boolean;
};
