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
