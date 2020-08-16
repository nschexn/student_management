export interface Student {
  id: number;
  name: string;
  description: string;
  email: string;
  school: string;
  grade: number;
  availability: Availability;
}

interface Availability {
  days: string[];
  times: string[];
}
