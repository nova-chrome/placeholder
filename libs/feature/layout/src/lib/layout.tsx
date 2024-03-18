import React from 'react';

import { LayoutHeader } from './header';
import { LayoutSidebar } from './sidebar';
import { LayoutSidenav } from './sidenav';

export const AppLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      <LayoutHeader />
      <div className="flex h-screen overflow-hidden border-collapse">
        <LayoutSidebar>
          <LayoutSidenav />
        </LayoutSidebar>
        <main className="flex-1 pt-16 pb-1 overflow-x-hidden overflow-y-auto here bg-secondary/10">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            {children}
          </div>
        </main>
      </div>
    </>
  );
};
