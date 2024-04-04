import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Group } from './Class/group';
import { EventEmitter, Output} from '@angular/core';
import { ViewformComponent } from '../view-form/view-form.component'; // Додайте імпорт ViewformComponent

@Component({
  selector: 'app-myform',
  templateUrl: './myform.component.html',
  styleUrls: ['./myform.component.scss'],
})
export class MyformComponent implements OnInit {
  @Output() formDataSubmitted: EventEmitter<any> = new EventEmitter<any>();

  groupForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.groupForm = this.fb.group({
      courses: this.fb.array([])
    });
  }

  ngOnInit() {
    this.initCourses();
  }

  initCourses() {
    for (let i = 0; i < 5; i++) {
      this.addCourse();
    }
  }

  get courses(): FormArray {
    return this.groupForm.get('courses') as FormArray;
  }

  createCourse(): FormGroup {
    return this.fb.group({
      groups: this.fb.array([
        this.createGroup()
      ])
    });
  }

  createGroup(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      number_students: [0, [Validators.required, Validators.pattern('^[0-9]+$')]]
    });
  }

  addCourse() {
    const course = this.createCourse();
    this.courses.push(course);
  }

  addGroup(courseIndex: number) {
    const courseGroups = this.getCourseGroups(courseIndex);
    if (courseGroups) {
      courseGroups.push(this.createGroup());
    }
  }

  removeGroup(courseIndex: number, groupIndex: number) {
    const courseGroups = this.getCourseGroups(courseIndex);
    if (courseGroups) {
      courseGroups.removeAt(groupIndex);
    }
  }

  getCourseGroups(courseIndex: number): FormArray | null {
    const course = this.courses.at(courseIndex);
    return course ? course.get('groups') as FormArray : null;
  }

  onSubmit() {
    const formData = this.groupForm.value;
    this.formDataSubmitted.emit(formData);
   
    console.log(this.groupForm.value);
  }
}
