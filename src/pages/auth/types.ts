export type User = {
  _id: string;
  username: string;
  country: string;
};

export type AuthState = {
  me: User | null;
  loading: boolean;
};
