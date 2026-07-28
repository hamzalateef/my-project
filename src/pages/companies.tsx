import * as React from "react"
import type { ColumnDef } from "@tanstack/react-table"
import { Building01Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

import { DataTable } from "@/components/data-table"
import { RecordActions } from "@/components/record-actions"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

type CompanyRecord = { id: number; name: string; description: string; status: "Public" | "Private"; openings: number; updated: string; image: string }

const initialCompanies: CompanyRecord[] = [
  { id: 1, name: "TechWave Ltd", description: "Smart, scalable software for modern businesses.", status: "Public", openings: 12, updated: "Jun 7, 2025", image: "https://cdn-icons-png.flaticon.com/512/1048/1048949.png" },
  { id: 2, name: "SoftCore Inc", description: "Reliable cloud products for growing teams.", status: "Private", openings: 4, updated: "Apr 18, 2025", image: "https://cdn-icons-png.flaticon.com/512/1048/1048913.png" },
  { id: 3, name: "Designify Studio", description: "Creative branding and UI/UX services.", status: "Public", openings: 7, updated: "Mar 9, 2025", image: "https://cdn-icons-png.flaticon.com/512/1828/1828884.png" },
  { id: 4, name: "Northstar Labs", description: "Data-led tools for distributed teams.", status: "Private", openings: 3, updated: "Jan 15, 2025", image: "" },
]

export default function Companies() {
  const [companies, setCompanies] = React.useState(initialCompanies)
  const removeCompany = React.useCallback((id: number) => setCompanies((current) => current.filter((company) => company.id !== id)), [])
  const columns = React.useMemo<ColumnDef<CompanyRecord>[]>(() => [
    { accessorKey: "name", header: "Company", cell: ({ row }) => <div className="flex items-center gap-3"><Avatar><AvatarImage src={row.original.image} alt={row.original.name} /><AvatarFallback>{row.original.name.slice(0, 2).toUpperCase()}</AvatarFallback></Avatar><div className="flex flex-col"><span className="font-medium">{row.original.name}</span><span className="max-w-xs truncate text-xs text-muted-foreground">{row.original.description}</span></div></div> },
    { accessorKey: "openings", header: "Open roles", cell: ({ row }) => `${row.original.openings} openings` },
    { accessorKey: "status", header: "Visibility", cell: ({ row }) => <Badge variant={row.original.status === "Public" ? "default" : "secondary"}>{row.original.status}</Badge> },
    { accessorKey: "updated", header: "Updated" },
    { id: "actions", enableSorting: false, header: "", cell: ({ row }) => <RecordActions label={row.original.name} onDelete={() => removeCompany(row.original.id)} /> },
  ], [removeCompany])
  return <main className="flex flex-1 flex-col gap-6 overflow-y-auto p-4 md:p-6"><Card><CardHeader><CardTitle className="flex items-center gap-2"><HugeiconsIcon icon={Building01Icon} strokeWidth={2} />Companies</CardTitle><CardDescription>Maintain the organizations publishing opportunities on JobZone.</CardDescription></CardHeader><CardContent><DataTable columns={columns} data={companies} filterColumn="name" filterPlaceholder="Search companies..." /></CardContent></Card></main>
}
