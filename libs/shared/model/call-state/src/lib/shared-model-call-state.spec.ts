import { sharedModelCallState } from './shared-model-call-state';

describe('sharedModelCallState', () => {
  it('should work', () => {
    expect(sharedModelCallState()).toEqual('shared-model-call-state');
  });
});
