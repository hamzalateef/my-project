import * as React from "react"
import type { ColumnDef } from "@tanstack/react-table"
import { Briefcase01Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

import { DataTable } from "@/components/data-table"
import JobFormModal from "@/components/job-modal"
import { RecordActions } from "@/components/record-actions"
import { Badge } from "@/components/ui/badge"
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

type JobRecord = { id: number; title: string; company: string; location: string; status: "Open" | "Closed" | "Coming Soon"; posted: string }

const initialJobs: JobRecord[] = [
  { id: 1, title: "Frontend Developer", company: "TechWave Ltd", location: "Lahore, Pakistan", status: "Open", posted: "Jun 7, 2025" },
  { id: 2, title: "Backend Engineer", company: "SoftCore Inc", location: "Karachi, Pakistan", status: "Closed", posted: "Apr 18, 2025" },
  { id: 3, title: "Product Designer", company: "Designify Studio", location: "Remote", status: "Coming Soon", posted: "Mar 9, 2025" },
  { id: 4, title: "Data Analyst", company: "Northstar Labs", location: "Islamabad, Pakistan", status: "Open", posted: "Jan 15, 2025" },
]

export default function Jobs() {
  const [jobs, setJobs] = React.useState(initialJobs)
  const removeJob = React.useCallback((id: number) => setJobs((current) => current.filter((job) => job.id !== id)), [])
  const columns = React.useMemo<ColumnDef<JobRecord>[]>(() => [
    { accessorKey: "title", header: "Job title", cell: ({ row }) => <div className="flex flex-col"><span className="font-medium">{row.original.title}</span><span className="text-xs text-muted-foreground">{row.original.company}</span></div> },
    { accessorKey: "location", header: "Location" },
    { accessorKey: "status", header: "Status", cell: ({ row }) => <Badge variant={row.original.status === "Open" ? "default" : row.original.status === "Closed" ? "destructive" : "secondary"}>{row.original.status}</Badge> },
    { accessorKey: "posted", header: "Posted" },
    { id: "actions", enableSorting: false, header: "", cell: ({ row }) => <RecordActions label={row.original.title} onDelete={() => removeJob(row.original.id)} /> },
  ], [removeJob])
  return <main className="flex flex-1 flex-col gap-6 overflow-y-auto p-4 md:p-6"><Card><CardHeader><CardTitle className="flex items-center gap-2"><HugeiconsIcon icon={Briefcase01Icon} strokeWidth={2} />Jobs</CardTitle><CardDescription>Track open roles and hiring progress.</CardDescription><CardAction><JobFormModal /></CardAction></CardHeader><CardContent><DataTable columns={columns} data={jobs} filterColumn="title" filterPlaceholder="Search jobs..." /></CardContent></Card></main>
}
