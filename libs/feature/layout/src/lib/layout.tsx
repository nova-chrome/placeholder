import { PropsWithChildren } from 'react';

import { Header } from './header';
import { LayoutSidebar } from './sidebar';

export const AppLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      <div className="flex h-screen overflow-hidden border-collapse">
        <LayoutSidebar>hi</LayoutSidebar>
        <main className="flex-1 pt-16 pb-1 overflow-x-hidden overflow-y-auto here bg-secondary/10">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            {children}
          </div>
        </main>
      </div>
    </>
  );
};
