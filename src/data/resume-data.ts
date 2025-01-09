import { ResumeData } from "@/types/resume";

export const resumeData: ResumeData = {
  user: {
    firstName: "John",
    lastName: "Doe",
    title: "Senior Software Engineer",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    address: "San Francisco, CA",
    photo: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=300&h=300"
  },
  experiences: [
    {
      companyName: "Tech Corp",
      companyLogo: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=100&h=100",
      location: "San Francisco, CA",
      startDate: "2020-01",
      title: "Senior Software Engineer",
      categories: ["Engineering", "Leadership"],
      description: "Led development of core platform features and mentored junior developers."
    },
    {
      companyName: "Startup Inc",
      companyLogo: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=100&h=100",
      location: "New York, NY",
      startDate: "2018-03",
      endDate: "2019-12",
      title: "Software Engineer",
      categories: ["Frontend", "Mobile"],
      description: "Developed and maintained multiple client applications."
    }
  ]
};