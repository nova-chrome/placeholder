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

export function getCallStatus(callState: CallState): CallStatus {
  return {
    loaded: callState === LoadingState.LOADED,
    loading: callState === LoadingState.LOADING,
    error: getCallStateError(callState),
  };
}

export function getCallStateError(callState: CallState): string | null {
  return (callState as ErrorState)?.errorMsg ?? null;
}
