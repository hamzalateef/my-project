import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useProfileStore } from "@/store/useProfileStore";

export function Profile() {
  const saveUser = useProfileStore((state) => state.saveUser);
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const [userForm, setUserForm] = React.useState({
    name: "",
    email: "",
    phone: "",
    role: "Hamza",
    address: "",
    bio: "",
    total: 1,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpQQJkX4QxVH-28D1eFJ_RP7evdCNcec4wTA9wDIUwlw&s=10",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setUserForm({
      ...userForm,
      [e.target.name]: e.target.value,
    });
  };

  function saveUserAction() {
    saveUser(userForm);
    console.log(userForm);
  }

  function handleButtonClick() {
    fileInputRef.current?.click();
  }

  return (
    <div className="p-2">
      <Card className="max-w-7xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl">My Profile</CardTitle>
        </CardHeader>

        <CardContent>
          <div className="flex items-center gap-6 mb-8">
            <Avatar className="w-24 h-24">
              <AvatarImage src={userForm.image} />
              <AvatarFallback className="text-sm">Loading...</AvatarFallback>
            </Avatar>

            <div>
              <h2 className="text-xl font-semibold">
                {userForm.name || "Hamza"}
              </h2>

              <p className="text-gray-500">
                {userForm.email || "admin@email.com"}
              </p>

              <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                accept="image/*"
              />

              {/* Button */}
              <Button
                variant="outline"
                className="mt-3"
                onClick={handleButtonClick}
              >
                Change Photo
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Label>Name</Label>
              <Input
                name="name"
                value={userForm.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="mt-2"
              />
            </div>

            <div>
              <Label>Email</Label>
              <Input
                name="email"
                type="email"
                value={userForm.email}
                onChange={handleChange}
                placeholder="Email"
                className="mt-2"
              />
            </div>

            <div>
              <Label>Phone</Label>
              <Input
                name="phone"
                value={userForm.phone}
                onChange={handleChange}
                placeholder="+92 3000000000"
                className="mt-2"
              />
            </div>

            <div>
              <Label>Role</Label>
              <Input
                name="role"
                value={userForm.role}
                onChange={handleChange}
                className="mt-2"
              />
            </div>

            <div className="md:col-span-2">
              <Label>Address</Label>
              <Input
                name="address"
                value={userForm.address}
                onChange={handleChange}
                placeholder="Pakistan"
                className="mt-2"
              />
            </div>

            <div className="md:col-span-2">
              <Label>Bio</Label>
              <Textarea
                rows={5}
                name="bio"
                value={userForm.bio}
                onChange={handleChange}
                placeholder="Write something..."
                className="mt-2"
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-5 mt-8">
            <Card>
              <CardContent className="p-5 text-center">
                <h3 className="text-gray-500 text-sm">Total Admins</h3>

                <p className="text-2xl font-bold">{userForm.total}</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-5 text-center">
                <h3 className="text-gray-500 text-sm">Status</h3>

                <p className="text-green-600 font-semibold">Active</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-5 text-center">
                <h3 className="text-gray-500 text-sm">Account Type</h3>

                <p className="font-semibold">Admin</p>
              </CardContent>
            </Card>
          </div>

          <div className="flex justify-end mt-8">
            <Button
              onClick={saveUserAction}
              className="bg-green-600 hover:bg-green-700"
            >
              Save Changes
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
