import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";

export default function EmployeesPage() {
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
            <Button>Add Employee</Button>
          </div>
        </div>
      </div>

      {/* Mobile button only (fixed at bottom) */}
      <div className="fixed bottom-4 left-4 right-4 sm:hidden z-50">
        <Button className="w-full">Add Employee</Button>
      </div>
    </>
  );
}
