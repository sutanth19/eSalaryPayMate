import { ColumnDef } from "@tanstack/react-table"

export type Employee = {
  name: string
  identityNumber: string
  position: string
  phoneNumber: string
}

export const columns: ColumnDef<Employee>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
    {
    accessorKey: "identityNumber",
    header: "IC/Passport Number",
  },
   {
    accessorKey: "phoneNumber",
    header: "Phone Number",
  },
  {
    accessorKey: "position",
    header: "Position",
  }
 
]
