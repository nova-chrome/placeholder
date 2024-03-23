import {
  CallState,
  CallStatus,
  ErrorState,
  LoadingState,
} from './call-state.model';

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
