import { cn } from '@placeholder/ui-kit/util';
import { ArrowLeft } from 'lucide-react';
import React from 'react';

import { useLayout } from '../context/layout.context';

export const LayoutSideBar: React.FC<React.PropsWithChildren<unknown>> = ({
  children,
}) => {
  const { isSidebarOpen, toggleSidebar } = useLayout();

  const handleToggle = () => {
    toggleSidebar((prev) => !prev);
  };

  return (
    <nav
      className={cn(
        `relative h-screen border-r pt-12 duration-500`,
        isSidebarOpen ? 'w-72' : 'w-[78px]'
      )}
    >
      <ArrowLeft
        className={cn(
          'absolute z-50 -right-3 top-24 cursor-pointer rounded-full border bg-background text-3xl text-foreground',
          !isSidebarOpen && 'rotate-180'
        )}
        onClick={handleToggle}
      />
      <div className="py-4 space-y-4">
        <div className="px-3 py-2">
          <div className="mt-3 space-y-1">{children}</div>
        </div>
      </div>
    </nav>
  );
};
