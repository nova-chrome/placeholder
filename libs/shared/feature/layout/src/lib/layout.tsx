import { LucideIcon } from 'lucide-react';
import { useRouter } from 'next/router';
import React from 'react';
import { useHotkeys } from 'react-hotkeys-hook';

import { LayoutHeader } from './components/header';
import { LayoutSideBar } from './components/side-bar';
import { LayoutSideNav } from './components/side-nav';
import { LayoutProvider } from './context/layout.context';

export interface NavItem {
  title: string;
  href: string;
  icon: LucideIcon;
}

interface LayoutFeatureProps {
  navItems: NavItem[];
}

export const LayoutFeature: React.FC<
  React.PropsWithChildren<LayoutFeatureProps>
> = ({ children, navItems }) => {
  const { push } = useRouter();
  useHotkeys('meta+1,control+shift+1,control+1', () => push('/'));
  useHotkeys('meta+2,control+shift+2,control+2', () => push('/todos'));
  useHotkeys('meta+3,control+shift+3,control+3', () => push('/posts'));
  useHotkeys('meta+4,control+shift+4,control+4', () => push('/albums'));
  return (
    <LayoutProvider>
      <LayoutHeader />
      <div className="flex h-screen overflow-hidden border-collapse">
        <LayoutSideBar>
          <LayoutSideNav navItems={navItems} />
        </LayoutSideBar>
        <main className="relative flex flex-col w-full min-h-screen pt-16 pb-8 overflow-x-hidden overflow-y-auto bg-secondary/10">
          <div className="flex-1 flex-grow px-4 sm:px-6 lg:px-8">
            {children}
          </div>
        </main>
      </div>
    </LayoutProvider>
  );
};
