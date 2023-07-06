export interface Student {
firstName: string;
lastName: string;
age: number;
location: string;
}

const student1: Student = {
  firstName: 'Chisom',
  lastName: 'Ibekwe',
  age: 25,
  location: 'Uyo',
};

const student2: Student = {
  firstName: 'Lucas',
  lastName: 'Bolt',
  age: 25,
  location: 'Netherland',
};

const studentsList: Array<Student> = [student1, student2];

export const renderTable = (studentsList: Array<Student>): void => {
  const table = document.createElement('table');
  const hRow = document.createElement('tr');
  table.insertAdjacentElement('beforeend', hRow);

  hRow.insertAdjacentHTML('beforeend', '<th>FirstName</th>');
  hRow.insertAdjacentHTML('beforeend', '<th>Location</th>');

  for (const student of studentsList) {
    const studentRow = document.createElement('tr');
    studentRow.insertAdjacentHTML('beforeend', `<td>${student.firstName}</td>`);
    studentRow.insertAdjacentHTML('beforeend', `<td>${student.location}</td>`);
    table.insertAdjacentElement('beforeend', studentRow);
  }

  document.body.insertAdjacentElement('beforeend', table);
};

renderTable(studentsList);
