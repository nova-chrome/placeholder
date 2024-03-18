import { buttonVariants } from '@placeholder/ui-kit/ui';
import { cn } from '@placeholder/ui-kit/util';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { useLayout } from './layout.context';
import { NAV_ITEMS } from './nav-items';

export const LayoutSidenav = () => {
  const path = usePathname();
  const { isSidebarOpen } = useLayout();

  return (
    <nav className="space-y-2">
      {NAV_ITEMS.map((item) => (
        <Link
          key={item.title}
          href={item.href}
          className={cn(
            buttonVariants({ variant: 'ghost' }),
            'group relative flex h-12 justify-start',
            path === item.href && 'bg-muted font-bold hover:bg-muted'
          )}
        >
          <item.icon className={'h-5 w-5'} />
          <span
            className={cn(
              'absolute left-12 text-base duration-200',
              !isSidebarOpen &&
                'transition-all duration-300 opacity-0 text-background group-hover:z-50 group-hover:ml-4 group-hover:rounded group-hover:bg-foreground group-hover:p-2 group-hover:opacity-100'
            )}
          >
            {item.title}
          </span>
        </Link>
      ))}
    </nav>
  );
};
