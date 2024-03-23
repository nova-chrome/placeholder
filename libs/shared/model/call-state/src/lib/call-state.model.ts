export enum LoadingState {
  INIT = 'INIT',
  LOADING = 'LOADING',
  LOADED = 'LOADED',
}

export interface ErrorState {
  errorMsg: string;
}

export type CallState = LoadingState | ErrorState;

export interface CallStatus {
  loaded: boolean;
  loading: boolean;
  error: string | null;
}
