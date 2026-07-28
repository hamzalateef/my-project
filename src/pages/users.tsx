import * as React from "react"
import type { ColumnDef } from "@tanstack/react-table"
import { UserGroupIcon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

import { DataTable } from "@/components/data-table"
import { RecordActions } from "@/components/record-actions"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

type UserRecord = { id: number; name: string; email: string; role: string; status: "Active" | "Invited"; joined: string }

const initialUsers: UserRecord[] = [
  { id: 1, name: "Hamza Khan", email: "hamza@jobzone.com", role: "Administrator", status: "Active", joined: "Jun 7, 2025" },
  { id: 2, name: "Ayesha Malik", email: "ayesha@jobzone.com", role: "Recruiter", status: "Active", joined: "Apr 18, 2025" },
  { id: 3, name: "Bilal Ahmed", email: "bilal@jobzone.com", role: "Hiring Manager", status: "Invited", joined: "Mar 9, 2025" },
  { id: 4, name: "Sana Raza", email: "sana@jobzone.com", role: "Recruiter", status: "Active", joined: "Jan 15, 2025" },
]

export default function Users() {
  const [users, setUsers] = React.useState(initialUsers)
  const removeUser = React.useCallback((id: number) => setUsers((current) => current.filter((user) => user.id !== id)), [])

  const columns = React.useMemo<ColumnDef<UserRecord>[]>(() => [
    {
      accessorKey: "name",
      header: "User",
      cell: ({ row }) => {
        const user = row.original
        const initials = user.name.split(" ").map((part) => part[0]).join("").slice(0, 2)
        return <div className="flex items-center gap-3"><Avatar><AvatarFallback>{initials}</AvatarFallback></Avatar><div className="flex flex-col"><span className="font-medium">{user.name}</span><span className="text-xs text-muted-foreground">{user.email}</span></div></div>
      },
    },
    { accessorKey: "role", header: "Role" },
    { accessorKey: "status", header: "Status", cell: ({ row }) => <Badge variant={row.original.status === "Active" ? "default" : "secondary"}>{row.original.status}</Badge> },
    { accessorKey: "joined", header: "Joined" },
    { id: "actions", enableSorting: false, header: "", cell: ({ row }) => <RecordActions label={row.original.name} onDelete={() => removeUser(row.original.id)} /> },
  ], [removeUser])

  return (
    <main className="flex flex-1 flex-col gap-6 overflow-y-auto p-4 md:p-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><HugeiconsIcon icon={UserGroupIcon} strokeWidth={2} />Users</CardTitle>
          <CardDescription>Manage access for your JobZone team.</CardDescription>
        </CardHeader>
        <CardContent><DataTable columns={columns} data={users} filterColumn="name" filterPlaceholder="Search users..." /></CardContent>
      </Card>
    </main>
  )
}
