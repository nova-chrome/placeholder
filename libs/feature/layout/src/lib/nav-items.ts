import {
  Book,
  CheckCheck,
  Grid,
  LayoutDashboard,
  LucideIcon,
} from 'lucide-react';

export interface NavItem {
  title: string;
  href: string;
  icon: LucideIcon;
}

export const NAV_ITEMS: NavItem[] = [
  {
    title: 'Dashboard',
    icon: LayoutDashboard,
    href: '/',
  },
  {
    title: 'Todo',
    icon: CheckCheck,
    href: '/todos',
  },
  {
    title: 'Posts',
    icon: Book,
    href: '/posts',
  },
  {
    title: 'Albums',
    icon: Grid,
    href: '/albums',
  },
];
