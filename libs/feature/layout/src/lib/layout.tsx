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
        <main className="flex-1 pt-16 pb-1 overflow-x-hidden overflow-y-auto here bg-secondary/10">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            {children}
          </div>
        </main>
      </div>
    </LayoutProvider>
  );
};
