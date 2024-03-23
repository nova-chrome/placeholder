/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

export type ProviderType<T> = React.FC<T>;

export function buildProvidersTree(
  providerWithProps: Array<[ProviderType<any>, any]>
) {
  const initialComponent: React.FC<React.PropsWithChildren<unknown>> = ({
    children,
  }) => children;

  return providerWithProps.reduce(
    (
      AccumulatedComponents: React.FC<React.PropsWithChildren<unknown>>,
      [Provider, props = {}]
    ) => {
      return ({ children }) => {
        return (
          <AccumulatedComponents>
            <Provider {...props}>{children}</Provider>
          </AccumulatedComponents>
        );
      };
    },
    initialComponent
  );
}
