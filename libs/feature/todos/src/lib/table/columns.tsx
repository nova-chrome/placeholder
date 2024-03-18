import { Todo } from '@placeholder/model/todo';
import { Button } from '@placeholder/ui-kit/ui';
import { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown, Check, X } from 'lucide-react';

export const COLUMNS: ColumnDef<Todo>[] = [
  {
    accessorKey: 'id',
    header: 'ID',
  },
  {
    accessorKey: 'title',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Title
          <ArrowUpDown className="w-4 h-4 ml-2" />
        </Button>
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
