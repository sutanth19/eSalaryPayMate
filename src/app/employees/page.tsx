import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { UserPlus } from "lucide-react";
import { columns } from "@/components/employees/columns"
import { DataTable } from "@/components/employees/data-table"


export default function EmployeesPage() {
  const employeeData = [
    { 
      name: "SUTANTH",
      position: "CEO",
      phoneNumber: "012-3456789",
      identityNumber: "900101-10-1234", // Malaysian IC format
    },
    {     
      name: "SUTAN",
      position: "Developer",
      phoneNumber: "011-9876543",
      identityNumber: "A1234567", // Passport or foreign ID },
    },
  ];

  return (
    <>
      <PageHeader title="Employees" />

      {/* Main content */}
      <div className="flex flex-1 flex-col p-4 pt-0 space-y-4">
        {/* Top row (text + desktop button) */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold">Employees</h1>
            <p className="text-sm text-muted-foreground">
              Manage your company employees and their information
            </p>
          </div>

          {/* Desktop button only */}
          <div className="hidden sm:block">
            <Button>
              <UserPlus className="mr-2 h-4 w-4" />
              Add Employee
            </Button>
          </div>
        </div>

        {/*  Employee Table */}
        <DataTable columns={columns} data={employeeData} />
      </div>

      {/* Mobile button only (fixed at bottom) */}
      <div className="fixed bottom-4 left-4 right-4 sm:hidden z-50">
        <Button className="w-full">
          <UserPlus className="mr-2 h-4 w-4" />
          Add Employee
        </Button>
      </div>
    </>
  );
}
