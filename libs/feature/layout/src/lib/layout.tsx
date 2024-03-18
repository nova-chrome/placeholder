import { PropsWithChildren } from 'react';
import React from 'react';

import { Header } from './header';
import { LayoutSidebar } from './sidebar';

export const AppLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      <div className="flex h-screen border-collapse overflow-hidden">
        <LayoutSidebar>hi</LayoutSidebar>
        <main className="flex-1 overflow-y-auto overflow-x-hidden pt-16 here bg-secondary/10 pb-1">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {children}
          </div>
        </main>
      </div>
    </>
  );
};
