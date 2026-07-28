import {
  Briefcase01Icon,
  Building01Icon,
  ChartRingIcon,
  UserGroupIcon,
  UserIcon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

import JobFormModal from "@/components/job-modal"
import { ChartLineLabel } from "@/components/line-chart"
import { ChartAreaLegend } from "@/components/vacancy-chart"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const stats = [
  { title: "Total Users", value: "1,284", description: "Unread", icon: UserGroupIcon },
  { title: "New Users", value: "452", description: "Since last week", icon: UserIcon },
  { title: "Total Jobs", value: "93", description: "This month", icon: Briefcase01Icon },
  { title: "Active Jobs", value: "57", description: "Open positions", icon: ChartRingIcon },
  { title: "Companies", value: "26", description: "Registered companies", icon: Building01Icon },
]

export default function Dashboard() {
  return (
    <main className="flex flex-1 flex-col gap-6 overflow-y-auto p-4 md:p-6">
      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
        {stats.map((stat) => (
          <Card key={stat.title} size="sm">
            <CardHeader>
              <CardTitle>{stat.title}</CardTitle>
              <CardDescription>{stat.description}</CardDescription>
              <CardAction>
                <HugeiconsIcon icon={stat.icon} strokeWidth={2} className="text-primary" />
              </CardAction>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-semibold tabular-nums">{stat.value}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="grid gap-6 xl:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Job activity</CardTitle>
            <CardDescription>Recent application trends</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartLineLabel />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Vacancies</CardTitle>
            <CardDescription>Open position overview</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartAreaLegend />
          </CardContent>
        </Card>
      </section>

      <Card className="max-w-sm">
        <CardHeader>
          <CardTitle>Quick actions</CardTitle>
          <CardDescription>Manage common JobZone tasks.</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          <JobFormModal triggerLabel="Create Job" />
          <Button variant="outline">Invite User</Button>
          <Button variant="secondary">Export CSV</Button>
        </CardContent>
      </Card>
    </main>
  )
}
