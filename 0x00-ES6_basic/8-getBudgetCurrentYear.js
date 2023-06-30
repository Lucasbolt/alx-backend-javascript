/**
 * @return {date}
 */
function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

/**
 * @param {number} income - income.
 * @param {float} gdp - gdp.
 * @param {number} capita - capita.
 * @return {object} returns budget
 */
export default function getBudgetForCurrentYear(income, gdp, capita) {
  const budget = {
    [`income-${getCurrentYear()}`]: income,
    [`gdp-${getCurrentYear()}`]: gdp,
    [`capita-${getCurrentYear()}`]: capita,
  };

  return budget;
}
