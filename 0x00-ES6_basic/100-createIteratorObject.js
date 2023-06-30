export default function createIteratorObject(report) {
  const allEmployeesList = [];

  for (const department of Object.keys(report.allEmployees)) {
    for (const employee of report.allEmployees[department]) {
      allEmployeesList.push(employee);
    }
  }

  return allEmployeesList;
}
