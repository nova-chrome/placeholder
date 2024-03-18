import { ThemeToggle } from '@placeholder/ui-kit/ui';
import { Boxes } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

export default function Header() {
  return (
    <div className="fixed left-0 right-0 top-0 z-20 border-b bg-background">
      <nav className="flex h-16 items-center justify-between px-4">
        <Link href="/" className="items-center justify-between gap-2 flex">
          <Boxes className="h-6 w-6" />
          <h1 className="text-lg font-semibold">JSON Placeholder App</h1>
        </Link>

        <ThemeToggle />
      </nav>
    </div>
  );
}
