"use client"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  ColumnDef,
} from "@tanstack/react-table"

type Employee = {
  name: string
  identityNumber: string
  position: string
  phoneNumber: string
}

type DataTableProps<TData, TValue> = {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })



  return (
    <>
      {/* Desktop Table View */}
      <div className="hidden md:block rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map(headerGroup => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <TableHead key={header.id}>
                    {flexRender(header.column.columnDef.header, header.getContext())}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map(row => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map(cell => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="text-center">
                  No employees found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Mobile Card View */}
      <div className="md:hidden space-y-4">
        {table.getRowModel().rows.length ? (
          table.getRowModel().rows.map(row => {
            const employee = row.original as Employee
            return (
              <div key={row.id} className="border rounded-lg p-4 space-y-3 shadow-sm">
                <div className="space-y-2">
                  <div>
                    <span className="text-sm text-muted-foreground">Name</span>
                    <p className="font-medium">{employee.name}</p>
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">Position</span>
                    <p>{employee.position}</p>
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">Phone Number</span>
                    <p>{employee.phoneNumber}</p>
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">IC/Passport Number</span>
                    <p className="font-mono text-sm">{employee.identityNumber}</p>
                  </div>
                </div>
              </div>
            )
          })
        ) : (
          <div className="border rounded-lg p-8 text-center">
            <p className="text-muted-foreground">No employees found.</p>
          </div>
        )}
      </div>
    </>
  )
}