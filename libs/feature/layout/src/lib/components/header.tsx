import { ThemeToggle } from '@placeholder/ui-kit/ui';
import Link from 'next/link';

export const LayoutHeader = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-20 border-b bg-background">
      <nav className="flex items-center justify-between h-16 px-4">
        <Link
          href="/"
          className="flex items-center justify-between gap-2 rounded-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus-visible:ring-offset-2"
        >
          <h1 className="text-lg font-semibold">JSON Placeholder App</h1>
        </Link>

        <ThemeToggle />
      </nav>
    </div>
  );
};
