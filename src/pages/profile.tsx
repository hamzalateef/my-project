import * as React from "react"
import { Camera01Icon, Mail01Icon, Upload04Icon, UserIcon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Field, FieldDescription, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useProfileStore } from "@/store/useProfileStore"

export function Profile() {
  const storedUser = useProfileStore((state) => state.user)
  const saveUser = useProfileStore((state) => state.saveUser)
  const fileInputRef = React.useRef<HTMLInputElement>(null)
  const [userForm, setUserForm] = React.useState({
    name: storedUser.name || "Hamza Khan",
    email: storedUser.email || "admin@jobzone.com",
    phone: "+92 300 000 0000",
    role: "Administrator",
    address: "Lahore, Pakistan",
    bio: "Building a better hiring experience for JobZone teams.",
    image: "",
  })

  const initials = userForm.name.split(" ").map((part) => part[0]).join("").slice(0, 2).toUpperCase()
  const updateField = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setUserForm((current) => ({ ...current, [event.target.name]: event.target.value }))
  }
  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) setUserForm((current) => ({ ...current, image: URL.createObjectURL(file) }))
  }

  return (
    <main className="flex flex-1 flex-col gap-6 overflow-y-auto p-4 md:p-6">
      <Card>
        <CardHeader>
          <CardTitle>Profile settings</CardTitle>
          <CardDescription>Update your personal details and public profile image.</CardDescription>
          <CardAction><Badge>Active</Badge></CardAction>
        </CardHeader>
        <CardContent className="flex flex-col gap-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Avatar className="size-24"><AvatarImage src={userForm.image} alt={userForm.name} /><AvatarFallback>{initials}</AvatarFallback></Avatar>
            <div className="flex flex-col gap-2">
              <div><p className="font-medium">{userForm.name}</p><p className="text-sm text-muted-foreground">{userForm.email}</p></div>
              <div className="flex flex-wrap gap-2">
                <Button variant="outline" onClick={() => fileInputRef.current?.click()}><HugeiconsIcon icon={Upload04Icon} strokeWidth={2} data-icon="inline-start" />Upload photo</Button>
                <Button variant="ghost" size="icon" aria-label="Change profile photo" onClick={() => fileInputRef.current?.click()}><HugeiconsIcon icon={Camera01Icon} strokeWidth={2} /></Button>
              </div>
              <Input ref={fileInputRef} type="file" accept="image/*" className="sr-only" onChange={handleUpload} />
            </div>
          </div>
          <FieldGroup className="grid gap-5 md:grid-cols-2">
            <Field><FieldLabel htmlFor="name">Full name</FieldLabel><Input id="name" name="name" value={userForm.name} onChange={updateField} /></Field>
            <Field><FieldLabel htmlFor="email">Email address</FieldLabel><Input id="email" name="email" type="email" value={userForm.email} onChange={updateField} /></Field>
            <Field><FieldLabel htmlFor="phone">Phone number</FieldLabel><Input id="phone" name="phone" value={userForm.phone} onChange={updateField} /></Field>
            <Field><FieldLabel htmlFor="role">Role</FieldLabel><Input id="role" name="role" value={userForm.role} onChange={updateField} /></Field>
            <Field className="md:col-span-2"><FieldLabel htmlFor="address">Location</FieldLabel><Input id="address" name="address" value={userForm.address} onChange={updateField} /></Field>
            <Field className="md:col-span-2"><FieldLabel htmlFor="bio">Bio</FieldLabel><Textarea id="bio" name="bio" value={userForm.bio} onChange={updateField} /><FieldDescription>This appears on your JobZone profile.</FieldDescription></Field>
          </FieldGroup>
        </CardContent>
        <CardFooter className="justify-end"><Button onClick={() => saveUser({ name: userForm.name, email: userForm.email, total: 1 })}><HugeiconsIcon icon={UserIcon} strokeWidth={2} data-icon="inline-start" />Save changes</Button></CardFooter>
      </Card>
      <section className="grid gap-4 md:grid-cols-3">
        <Card size="sm"><CardHeader><CardTitle>Team role</CardTitle><CardDescription>Current access level</CardDescription></CardHeader><CardContent><p className="font-medium">Administrator</p></CardContent></Card>
        <Card size="sm"><CardHeader><CardTitle>Account status</CardTitle><CardDescription>Profile availability</CardDescription></CardHeader><CardContent><Badge>Active</Badge></CardContent></Card>
        <Card size="sm"><CardHeader><CardTitle>Contact</CardTitle><CardDescription>Primary account email</CardDescription></CardHeader><CardContent className="flex items-center gap-2"><HugeiconsIcon icon={Mail01Icon} strokeWidth={2} /><span className="truncate">{userForm.email}</span></CardContent></Card>
      </section>
    </main>
  )
}
