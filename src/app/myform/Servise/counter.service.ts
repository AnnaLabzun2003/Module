import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  constructor() { }

  calculateTotalStudents(courses: any[][]): number[] {
    const totalStudents: number[] = [];
    for (const course of courses) {
      let courseTotal = 0;
      for (const group of course) {
        courseTotal += group.number_students;
      }
      totalStudents.push(courseTotal);
    }
    return totalStudents;
  }

  logTotalStudents(courses: any[][]): void {
    const totalStudents = this.calculateTotalStudents(courses);
    for (let i = 0; i < totalStudents.length; i++) {
      console.log(`Total students for course ${i + 1}: ${totalStudents[i]}`);
    }
  }
}
