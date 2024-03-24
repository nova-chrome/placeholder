import { Todo } from '@placeholder/todo/model';
import {
  Button,
  Checkbox,
  DataTableColumnHeader,
  TruncateTooltip,
} from '@placeholder/ui-kit/ui';
import { cn } from '@placeholder/ui-kit/util';
import { ColumnDef } from '@tanstack/react-table';
import { X } from 'lucide-react';

export const COLUMNS: ColumnDef<Todo>[] = [
  {
    accessorKey: 'id',
    header: 'ID',
  },
  {
    accessorKey: 'title',
    enableHiding: false,
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Title" />
    ),
    cell: ({ row }) => {
      return (
        <TruncateTooltip
          className={cn(
            'max-w-[400px]',
            row.original.completed && 'line-through'
          )}
          text={row.original.title}
        />
      );
    },
  },
  {
    accessorKey: 'completed',
    header: () => <div className="text-center">Done</div>,
    cell: ({ row }) => {
      return (
        <div className="flex justify-center text-center">
          <Checkbox checked={row.original.completed} className="pr-0" />
        </div>
      );
    },
  },
  {
    accessorKey: '',
    header: 'Remove',
    cell: () => {
      return (
        <Button size="icon" variant="ghost">
          <X />
        </Button>
      );
    },
  },
];
