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
  workTeacherTasks = () => "Gettinf to work";
}

export function createEmployee(salary: number | string) {
  if (typeof(salary) === 'number' && salary < 500)
    return "Teacher";
  else (typeof(salary) === 'number' && salary >= 500)
    return "Director";
}


console.log(createEmployee(200));
console.log(createEmployee(1000));
