export default function createReportObject(employeeList) {
  return {
    allEmployees: employeeList,
    getNumberOfDepartments(arg) {
      return Object.keys(arg).length;
    },
  };
}
