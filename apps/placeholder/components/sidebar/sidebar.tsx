import { cn } from '@placeholder/ui-kit/util';
import { ArrowLeft } from 'lucide-react';
import React from 'react';

import { useSidebar } from './sidebar.context';

export default function Sidebar({
  children,
}: React.PropsWithChildren<unknown>) {
  const { isOpen, toggleOpen } = useSidebar();

  const handleToggle = () => {
    toggleOpen((prev) => !prev);
  };

  return (
    <nav
      className={cn(
        `relative h-screen border-r pt-20 duration-500`,
        isOpen ? 'w-72' : 'w-[78px]'
      )}
    >
      <ArrowLeft
        className={cn(
          'absolute -right-3 top-20 cursor-pointer rounded-full border bg-background text-3xl text-foreground',
          !isOpen && 'rotate-180'
        )}
        onClick={handleToggle}
      />
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <div className="mt-3 space-y-1">{children}</div>
        </div>
      </div>
    </nav>
  );
}
