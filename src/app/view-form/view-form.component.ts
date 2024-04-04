import { Component } from '@angular/core';
import { Group } from '../myform/Class/group';
import { CounterService } from '../myform/Servise/counter.service';
import { Calculation } from '../myform/Class/calculation';

@Component({
  selector: 'app-view-form',
  templateUrl: './view-form.component.html',
  styleUrls: ['./view-form.component.scss']
})
export class ViewformComponent {
  coursesData: Course[] = []; // Use a specific interface for clarity
  totalStudentsPerCourse: number[] = [];

  constructor(private counterService: CounterService) {}

  addData(event: any) {
    if (event) {
      this.coursesData = event.courses as Course[]; // Type assertion
      this.calculateTotalStudentsPerCourse();
    } else {
      throw new Error("Error: No data received");
    }
  }

  calculateTotalStudentsPerCourse() {
    const courses = this.coursesData.map(course => course.groups); // Отримуємо масив груп кожного курсу
    this.totalStudentsPerCourse = this.counterService.calculateTotalStudents(courses); // Обчислюємо загальну кількість студентів для кожного курсу
  }
  
  

  getStudentInfo(courseIndex: number): string {
    const calculation = new Calculation();
    calculation.show(this.totalStudentsPerCourse[courseIndex].toString()); // Викликаємо метод show з нового екземпляру
    return calculation.info; // Повертаємо інформацію про кількість студентів
  }
}


interface Course {
  groups: Group[];
}
