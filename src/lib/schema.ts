import type { description } from "@/components/line-chart"
import { z } from "zod"

export const loginSchema = z.object({
  fullName: z.string().min(4, "Full name is required").max(10, "Enter Maximum 10 Letters"),
    description: z.string().min(10, "Description is required"),
    company: z.string().min(2, "Company name is required"),
    location: z.string().min(5, "Location is required"),
    status: z.string().nonempty("Select your job status"),
    min: z.string().nonempty("Enter Min Salary"),
    max: z.string().nonempty("Enter Max Salary"),
    department: z.string().nonempty("Select your department"),
    requirement: z.string().nonempty("Enter your requirements"),
    education: z.string().nonempty("Select a course"),
    jobtype: z.string().nonempty("Select a course"),
    posted: z.string().nonempty("Select a course"),
    expire: z.string().nonempty("Select a course"),
    date:z.string()
})

// company: z.string().email("Invalid email"),
//     location: z.string().min(10, "Phone number is required").max(11, "Enter Maximum 11 Numbers"),
//     max: z.string().min(6, "Address is required"),