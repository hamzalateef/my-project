import type { IconSvgElement } from "@hugeicons/react"
import { HugeiconsIcon } from "@hugeicons/react"
import type * as React from "react"
import { NavLink, useLocation } from "react-router-dom"

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

type NavItem = {
  title: string
  to: string
  icon: IconSvgElement
}

export function NavSecondary({
  items,
  ...props
}: { items: NavItem[] } & React.ComponentPropsWithoutRef<typeof SidebarGroup>) {
  const location = useLocation()

  return (
    <SidebarGroup {...props}>
      <SidebarGroupLabel>Account</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.to}>
              <SidebarMenuButton
                asChild
                isActive={
                  location.pathname === item.to ||
                  location.pathname.startsWith(`${item.to}/`)
                }
                tooltip={item.title}
              >
                <NavLink to={item.to}>
                  <HugeiconsIcon icon={item.icon} strokeWidth={2} />
                  <span>{item.title}</span>
                </NavLink>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}
