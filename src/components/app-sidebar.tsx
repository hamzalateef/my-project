import { HugeiconsIcon } from "@hugeicons/react"
import {
  BookOpen02Icon,
  ChartRingIcon,
  ComputerTerminalIcon,
  CropIcon,
  PieChartIcon,
  RoboticIcon,
  SentIcon,
  Settings05Icon,
} from "@hugeicons/core-free-icons"

import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { useProfileStore } from "@/store/useProfileStore"

const mainItems = [
  { title: "Dashboard", to: "/", icon: ChartRingIcon, end: true },
  { title: "Users", to: "/users", icon: RoboticIcon },
  { title: "Jobs", to: "/jobs", icon: BookOpen02Icon },
  { title: "Department", to: "/department", icon: CropIcon },
  { title: "Companies", to: "/companies", icon: PieChartIcon },
]

const secondaryItems = [
  { title: "Notifications", to: "/notification", icon: SentIcon },
  { title: "Profile", to: "/profile", icon: ComputerTerminalIcon },
  { title: "Settings", to: "/settings", icon: Settings05Icon },
]

export function AppSidebar() {
  const user = useProfileStore((state) => state.user)

  return (
    <Sidebar variant="inset" collapsible="icon">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" tooltip="JobZone">
              <div className="flex size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                <HugeiconsIcon icon={ComputerTerminalIcon} strokeWidth={2} />
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">JobZone</span>
                <span className="truncate text-xs">Administration</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={mainItems} />
        <NavSecondary items={secondaryItems} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
    </Sidebar>
  )
}
