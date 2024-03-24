import { NavItem } from '@placeholder/shared/feature/layout';
import { Book, CheckCheck, Grid, LayoutDashboard } from 'lucide-react';

export const NAV_ITEMS: NavItem[] = [
  {
    title: 'Dashboard',
    icon: LayoutDashboard,
    href: '/',
  },
  {
    title: 'Todos',
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
