import type { description } from "@/components/line-chart"
import { z } from "zod"

export const loginSchema = z.object({
  fullName: z.string().min(4, "Full name is required"),
    description: z.string().min(4, "Father's name is required"),
    company: z.string().email("Invalid email"),
    location: z.string().min(10, "Phone number is required").max(11, "Enter Maximum 11 Numbers"),
    status: z.string().nonempty("Select your job status"),
    min: z.string().nonempty("Please select a gender"),
    max: z.string().min(6, "Address is required"),
    department: z.string().nonempty("Select your education"),
    requirement: z.string().nonempty("Select a course"),
    education: z.string().nonempty("Select a course"),
    jobtype: z.string().nonempty("Select a course"),
    expire: z.string().nonempty("Select a course"),
    date:z.string()
})