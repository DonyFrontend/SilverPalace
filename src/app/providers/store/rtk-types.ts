export interface ThunkConfig<T> {
  rejectValue: T;
}

export interface StoreSlice<T> {
  loading: boolean;
  error: string;
  data: T;
}
