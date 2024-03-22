import { TailwindIndicator } from '@placeholder/ui-kit/ui';
import React from 'react';

import { LayoutHeader } from './components/header';
import { LayoutSideBar } from './components/side-bar';
import { LayoutSideNav } from './components/side-nav';
import { LayoutProvider } from './context/layout.context';

export const LayoutFeature = ({ children }: React.PropsWithChildren) => {
  return (
    <LayoutProvider>
      <LayoutHeader />
      <div className="flex h-screen overflow-hidden border-collapse">
        <LayoutSideBar>
          <LayoutSideNav />
        </LayoutSideBar>
        <main className="relative flex flex-col w-full min-h-screen pt-16 pb-8 overflow-x-hidden overflow-y-auto bg-secondary/10">
          <div className="flex-1 flex-grow px-4 sm:px-6 lg:px-8">
            {children}
          </div>
        </main>
      </div>
      <TailwindIndicator />
    </LayoutProvider>
  );
};
