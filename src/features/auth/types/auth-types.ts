export interface IUser {
  _id: string;
  email: string;
  password: string;
  total_likes: number;
  name: string;
  comments: [];
}

export interface IAuthSlice {
  user: IUser | null;
  loading: boolean;
  error: string | null;
}

export interface SignUpResponce {
  message: string;
  user: IUser;
  token: string;
}

export interface AuthArg {
  email?: string;
  password: string;
  name: string;
}
