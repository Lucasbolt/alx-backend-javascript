export default function createIteratorObject(report) {
  return {
    ...report,
    [Symbol.iterator]() {
      let countEmployee = 0;
      let countDepartment = 0;
      return {
        next() {
          const departments = Object.values(report.allEmployees);
          const department = departments[countDepartment];

          if (countEmployee >= department.length) {
            countEmployee = 0;
            countDepartment++;
          }

          if (countDepartment >= departments.length) {
            return { done: true };
          }

          return {
            value: department[countEmployee++],
            done: false,
          };
        },
      };
    },
  };
}
