import { TestBed } from '@angular/core/testing';

import { CounterService } from './counter.service';

describe('CounterService', () => {
  let service: CounterService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CounterService]
    });
    service = TestBed.inject(CounterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should calculate total students for all courses', () => {
    const courses = [
      // Перший курс
      [
        { name: 'Group 1', number_students: 20 },
        { name: 'Group 2', number_students: 25 }
      ],
      // Другий курс
      [
        { name: 'Group 1', number_students: 15 },
        { name: 'Group 2', number_students: 18 },
        { name: 'Group 3', number_students: 22 }
      ],
      // Третій курс
      [
        { name: 'Group 1', number_students: 30 },
        { name: 'Group 2', number_students: 28 },
        { name: 'Group 3', number_students: 35 },
        { name: 'Group 4', number_students: 25 }
      ],
      // Четвертий курс
      [
        { name: 'Group 1', number_students: 17 },
        { name: 'Group 2', number_students: 19 },
        { name: 'Group 3', number_students: 20 }
      ],
      // П'ятий курс
      [
        { name: 'Group 1', number_students: 23 },
        { name: 'Group 2', number_students: 25 },
        { name: 'Group 3', number_students: 18 },
        { name: 'Group 4', number_students: 20 },
        { name: 'Group 5', number_students: 21 }
      ]
    ];
    const expectedTotalStudents = [45, 55, 118, 56, 107];
    const totalStudents = service.calculateTotalStudents(courses);
    expect(totalStudents).toEqual(expectedTotalStudents);
  });
});
