export interface Experience {
  companyName: string;
  companyLogo: string;
  location: string;
  startDate: string;
  endDate?: string;
  title: string;
  categories: string[];
  description: string;
}

export interface UserDetails {
  firstName: string;
  lastName: string;
  title: string;
  email: string;
  phone: string;
  address: string;
  photo: string;
}

export interface ResumeData {
  user: UserDetails;
  experiences: Experience[];
}