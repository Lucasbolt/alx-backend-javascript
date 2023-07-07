export interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

export interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak():string;
  workTeacherTasks(): string;
}

export class Director implements DirectorInterface {
  workFromHome() {
    return "Working from home";
  }

  getToWork() {
    return "Getting a coffee break";
  }

  workDirectorTasks() {
    return "Getting to director tasks";
  }
}

export class Teacher implements TeacherInterface {
  workFromHome = () => "Cannot work from home";
  getCoffeeBreak = () => "Cannot have a break";
  workTeacherTasks = () => "Getting to work";
}

export function createEmployee(salary: number | string): (Director | Teacher) {
  if (typeof(salary) === 'number' && salary < 500)
    return new Teacher();
  else (typeof(salary) === 'number' && salary >= 500)
    return new Director();
}

export function isDirector(employee: (Director | Teacher)) {
  return employee instanceof(Director);
}

export function executeWork(employee: (Director | Teacher)) {
  if (employee instanceof(Director))
    console.log((employee as Director).workDirectorTasks());
  else
     console.log((employee as Teacher).workTeacherTasks());
}
export type Subjects = ( "Math" | "History");

export function teachClass(todayClass: Subjects): string {
  if (todayClass === "Math")
    return "Teaching Math";
  return "Teaching History";
}
