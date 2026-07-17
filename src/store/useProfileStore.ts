import type { ProfileState } from "@/types/profile";
import { create } from "zustand";

export const useProfileStore = create<ProfileState>((set) => ({
  user: {
    name: "Hamza",
    email: "admin@gmail.com",
    total: 0,
  },

  userForm: {
    name: "",
    email: "",
    total: 0,
  },

  isTrue: false,

  saveUser: (u) => {
    set({
      user: u,
      userForm: u,
    });
  },

  saveTrue: (c) => {
    set({ isTrue: c });
  },
}));
