import getBudgetObject from './7-getBudgetObject.js';
/**
 * @param {number} income - income.
 * @param {float} gdp - gdp.
 * @param {number} capita - capita.
 * @return {object} object repping the full budget details.
 */
export default function getFullBudgetObject(income, gdp, capita) {
  const budget = getBudgetObject(income, gdp, capita);
  const fullBudget = {
    ...budget,
    getIncomeInDollars(income) {
      return `$${income}`;
    },
    getIncomeInEuros(income) {
      return `${income} euros`;
    },
  };

  return fullBudget;
}
