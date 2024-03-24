import { Todo } from '@placeholder/todo/model/todo';
import {
  Button,
  Checkbox,
  DataTableColumnHeader,
  TruncateTooltip,
} from '@placeholder/ui-kit/ui';
import { cn } from '@placeholder/ui-kit/util';
import { ColumnDef, Row } from '@tanstack/react-table';
import { X } from 'lucide-react';
import React from 'react';

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
    cell: ({ row }) => (
      <TruncateTooltip
        className={cn(
          'max-w-[400px]',
          row.original.completed && 'line-through'
        )}
        text={row.original.title}
      />
    ),
  },
  {
    accessorKey: 'completed',
    header: () => <div className="text-center">Done</div>,
    cell: ({ row }) => <Completed row={row} />,
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

function Completed({ row }: { row: Row<Todo> }) {
  const completed = row.original.completed;
  const [isCompleted, setIsCompleted] = React.useState(completed);

  return (
    <div className="flex justify-center text-center">
      <Checkbox
        checked={isCompleted}
        onCheckedChange={() => setIsCompleted((prev) => !prev)}
        className="pr-0"
      />
    </div>
  );
}
