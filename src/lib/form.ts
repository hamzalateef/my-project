import * as z from "zod"

export const jobSchema = z.object({
  title: z.string().min(2, "Job title required"),
  company: z.string().min(2, "Company name is required"),
  location: z.string().min(2, "Location required"),
  status: z.string().min(1, "Select job status"),
  date: z.string().min(1, "Select a date"),
  link: z.string().min(2, "Link required"),
})
