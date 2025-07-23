import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, FileText, Calculator } from "lucide-react"

export default function GenerateSlipPage() {
  return (
    <>
      <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
        <div className="flex items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="/dashboard">
                  Dashboard
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Generate Slip</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div className="ml-auto px-4">
          <ModeToggle />
        </div>
      </header>
      
      <div className="flex flex-1 flex-col gap-6 p-4 pt-0">
        {/* Header Section */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Generate Salary Slip</h1>
            <p className="text-muted-foreground">
              Create salary slips for employees for the selected month
            </p>
          </div>
          <Button>
            <FileText className="mr-2 h-4 w-4" />
            Preview Slip
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Employee Selection Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Slip Details
              </CardTitle>
              <CardDescription>
                Select employee and month for salary slip generation
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="employee">Select Employee</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose an employee" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="emp001">John Doe (EMP001)</SelectItem>
                    <SelectItem value="emp002">Jane Smith (EMP002)</SelectItem>
                    <SelectItem value="emp003">Mike Brown (EMP003)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="month">Month</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Month" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="01">January</SelectItem>
                      <SelectItem value="02">February</SelectItem>
                      <SelectItem value="03">March</SelectItem>
                      <SelectItem value="04">April</SelectItem>
                      <SelectItem value="05">May</SelectItem>
                      <SelectItem value="06">June</SelectItem>
                      <SelectItem value="07">July</SelectItem>
                      <SelectItem value="08">August</SelectItem>
                      <SelectItem value="09">September</SelectItem>
                      <SelectItem value="10">October</SelectItem>
                      <SelectItem value="11">November</SelectItem>
                      <SelectItem value="12">December</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="year">Year</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Year" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="2024">2024</SelectItem>
                      <SelectItem value="2025">2025</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Salary Components Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="h-5 w-5" />
                Salary Components
              </CardTitle>
              <CardDescription>
                Configure salary details and allowances
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="basic">Basic Salary (RM)</Label>
                <Input id="basic" placeholder="3000.00" type="number" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="allowances">Allowances (RM)</Label>
                <Input id="allowances" placeholder="500.00" type="number" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="overtime">Overtime Hours</Label>
                <Input id="overtime" placeholder="10" type="number" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="overtime-rate">Overtime Rate (RM/hour)</Label>
                <Input id="overtime-rate" placeholder="25.00" type="number" />
              </div>
            </CardContent>
          </Card>

          {/* Deductions Card */}
          <Card>
            <CardHeader>
              <CardTitle>Deductions</CardTitle>
              <CardDescription>
                Configure tax and statutory deductions
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="epf">EPF Contribution (RM)</Label>
                <Input id="epf" placeholder="330.00" type="number" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="socso">SOCSO Contribution (RM)</Label>
                <Input id="socso" placeholder="24.60" type="number" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="tax">Income Tax (RM)</Label>
                <Input id="tax" placeholder="150.00" type="number" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="other">Other Deductions (RM)</Label>
                <Input id="other" placeholder="0.00" type="number" />
              </div>
            </CardContent>
          </Card>

          {/* Summary Card */}
          <Card>
            <CardHeader>
              <CardTitle>Salary Summary</CardTitle>
              <CardDescription>
                Overview of total salary calculation
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm">Basic Salary:</span>
                  <span className="text-sm font-medium">RM 3,000.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Allowances:</span>
                  <span className="text-sm font-medium">RM 500.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Overtime:</span>
                  <span className="text-sm font-medium">RM 250.00</span>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span className="text-sm">Gross Salary:</span>
                  <span className="text-sm font-medium">RM 3,750.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Total Deductions:</span>
                  <span className="text-sm font-medium text-red-600">-RM 504.60</span>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span className="font-medium">Net Salary:</span>
                  <span className="font-bold text-green-600">RM 3,245.40</span>
                </div>
              </div>

              <Button className="w-full mt-4">
                <FileText className="mr-2 h-4 w-4" />
                Generate Salary Slip
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  )
}