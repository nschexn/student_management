import { Injectable } from '@angular/core';
import { Student } from '../interfaces/student'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  students: Student[]  = [
    {
      id: 1, 
      name: "Contact 001", 
      description: "Contact 001 des",
      email: "c001@email.com",
      school: "Tom Benson",
      grade: 5,
      availability: {
        days: ['Monday', 'Tuesday'],
        times: ['9:00am', '11:00am']
      }
    }
  ];

  constructor() { }
}
