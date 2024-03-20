import { Todo } from '@placeholder/model/todo';
import { DataTableColumnHeader } from '@placeholder/ui-kit/ui';
import { ColumnDef } from '@tanstack/react-table';
import { Check, X } from 'lucide-react';
import Link from 'next/link';

export const COLUMNS: ColumnDef<Todo>[] = [
  {
    accessorKey: 'id',
    header: 'ID',
  },
  {
    accessorKey: 'title',
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Title" />;
    },
    cell: ({ row }) => {
      return (
        <Link href={row.original.id.toString()}>{row.original.title}</Link>
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
