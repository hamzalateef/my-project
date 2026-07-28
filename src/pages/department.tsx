import * as React from "react"
import type { ColumnDef } from "@tanstack/react-table"
import { Folder01Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

import { DataTable } from "@/components/data-table"
import { RecordActions } from "@/components/record-actions"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

type DepartmentRecord = { id: number; name: string; lead: string; members: number; status: "Active" | "Planning"; updated: string }

const initialDepartments: DepartmentRecord[] = [
  { id: 1, name: "Engineering", lead: "Hamza Khan", members: 24, status: "Active", updated: "Jun 7, 2025" },
  { id: 2, name: "Product Design", lead: "Sana Raza", members: 9, status: "Active", updated: "May 25, 2025" },
  { id: 3, name: "Marketing", lead: "Ayesha Malik", members: 12, status: "Planning", updated: "Apr 18, 2025" },
  { id: 4, name: "People Operations", lead: "Bilal Ahmed", members: 6, status: "Active", updated: "Mar 9, 2025" },
]

export default function Department() {
  const [departments, setDepartments] = React.useState(initialDepartments)
  const removeDepartment = React.useCallback((id: number) => setDepartments((current) => current.filter((department) => department.id !== id)), [])
  const columns = React.useMemo<ColumnDef<DepartmentRecord>[]>(() => [
    { accessorKey: "name", header: "Department", cell: ({ row }) => <div className="flex flex-col"><span className="font-medium">{row.original.name}</span><span className="text-xs text-muted-foreground">Lead: {row.original.lead}</span></div> },
    { accessorKey: "members", header: "Members", cell: ({ row }) => `${row.original.members} members` },
    { accessorKey: "status", header: "Status", cell: ({ row }) => <Badge variant={row.original.status === "Active" ? "default" : "secondary"}>{row.original.status}</Badge> },
    { accessorKey: "updated", header: "Updated" },
    { id: "actions", enableSorting: false, header: "", cell: ({ row }) => <RecordActions label={row.original.name} onDelete={() => removeDepartment(row.original.id)} /> },
  ], [removeDepartment])
  return <main className="flex flex-1 flex-col gap-6 overflow-y-auto p-4 md:p-6"><Card><CardHeader><CardTitle className="flex items-center gap-2"><HugeiconsIcon icon={Folder01Icon} strokeWidth={2} />Departments</CardTitle><CardDescription>Organize the teams that support your hiring operation.</CardDescription></CardHeader><CardContent><DataTable columns={columns} data={departments} filterColumn="name" filterPlaceholder="Search departments..." /></CardContent></Card></main>
}
