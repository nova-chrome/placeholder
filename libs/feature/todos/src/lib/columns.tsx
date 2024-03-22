import { Todo } from '@placeholder/model/todo';
import {
  DataTableColumnHeader,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@placeholder/ui-kit/ui';
import { ColumnDef } from '@tanstack/react-table';
import { Check, X } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

export const COLUMNS: ColumnDef<Todo>[] = [
  {
    accessorKey: 'id',
    header: 'ID',
  },
  {
    accessorKey: 'title',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Title" />
    ),
    cell: function Cell({ row }) {
      const [isOverflowed, setIsOverflow] = React.useState(false);
      const textElementRef = React.useRef<HTMLDivElement | null>(null);

      React.useEffect(() => {
        const compareSize = () => {
          if (textElementRef.current) {
            const compare =
              textElementRef.current.scrollWidth >
              textElementRef.current.clientWidth;

            setIsOverflow(compare);
          }
        };
        compareSize();
        window.addEventListener('resize', compareSize);
        return () => window.removeEventListener('resize', compareSize);
      }, []);

      return (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                className="w-full rounded-sm focus:outline-none focus:ring-1 focus:ring-ring"
                href={row.original.id.toString()}
              >
                <div
                  ref={textElementRef}
                  className="w-11/12 overflow-hidden whitespace-nowrap text-ellipsis"
                >
                  {row.original.title}
                </div>
              </Link>
            </TooltipTrigger>
            {isOverflowed && (
              <TooltipContent>{row.original.title}</TooltipContent>
            )}
          </Tooltip>
        </TooltipProvider>
      );
    },
  },
  {
    accessorKey: 'completed',
    header: () => <div className="text-right">Completed</div>,
    cell: ({ row }) => {
      const completed = row.original.completed;

      return (
        <div className="flex justify-end font-medium">
          {completed ? <Check /> : <X />}
        </div>
      );
    },
  },
];
