export interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: val]: any;
}

export interface Director extends Teacher {
  numberOfReports: number;
}

export function printTeacher(firstName: string, lastName: string) {
  return `${firstName[0]}. ${lastName}`;
}
export interface iStudentClass {
  workOnHomework(): string;
  displayName(): string;
}

export class StudentClass implements iStudentClass {
  _firstName: string;
  _lastName: string;

  constructor(firstName: string, lastName: string) {
    this._firstName = firstName;
    this._lastName = lastName;
  }
  workOnHomework = () => "currently working";
  displayName = () => this._firstName;
}
