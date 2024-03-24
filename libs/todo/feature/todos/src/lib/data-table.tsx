import {
  todoSelectors,
  todoUiActions,
} from '@placeholder/todo/data-access/todo-state';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  DataTablePagination,
  DataTableViewOptions,
  Input,
  ScrollArea,
  ScrollBar,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@placeholder/ui-kit/ui';
import {
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  PaginationState,
  SortingState,
  useReactTable,
} from '@tanstack/react-table';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { COLUMNS as columns } from './columns';

export function DataTable() {
  const dispatch = useDispatch();

  const data = useSelector(todoSelectors.selectAll);
  const total = useSelector(todoSelectors.selectTotal);

  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );

  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  const pagedData = data.slice(
    pagination.pageIndex * pagination.pageSize,
    (pagination.pageIndex + 1) * pagination.pageSize
  );

  const table = useReactTable({
    data: pagedData,
    columns,
    manualPagination: true,
    rowCount: total ?? data.length,
    pageCount: Math.ceil((total ?? data.length) / pagination.pageSize),
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onPaginationChange: setPagination,
    state: {
      sorting,
      columnFilters,
      pagination,
    },
  });

  React.useEffect(() => {
    dispatch(
      todoUiActions.todoTablePaginationChanged({
        pageIndex: pagination.pageIndex + 1,
        pageSize: pagination.pageSize,
      })
    );
  }, [pagination]);

  return (
    <Card>
      <CardHeader className="py-2">
        <div className="flex items-center justify-between gap-3 py-4">
          <Input
            placeholder="Filter Todos..."
            value={(table.getColumn('title')?.getFilterValue() as string) ?? ''}
            onChange={(event) =>
              table.getColumn('title')?.setFilterValue(event.target.value)
            }
            className="max-w-sm"
          />

          <DataTableViewOptions table={table} />
        </div>
      </CardHeader>
      <CardContent>
        <ScrollArea className="border rounded h-[565px] w-full">
          <Table>
            <TableHeader className="sticky top-0">
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead key={header.id}>
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </TableHead>
                    );
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && 'selected'}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center"
                  >
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
          <ScrollBar orientation="vertical" />
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </CardContent>
      <CardFooter className="flex items-center justify-end py-4 space-x-2">
        <DataTablePagination table={table} />
      </CardFooter>
    </Card>
  );
}
