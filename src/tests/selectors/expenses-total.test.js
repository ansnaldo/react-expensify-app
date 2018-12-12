import expenses from '../fixtures/expenses';
import expensesTotal from '../../selectors/expenses-total';

test('should return the total of the expenses', () => {
    const total = expensesTotal(expenses);
    expect(total).toBe(114195);
});

test('should return a single expense', () => {
   const total = expensesTotal([expenses[2]]);
   expect(total).toBe(4500);
});

test('should return 0 if no expenses', () => {
   const total = expensesTotal([]);
   expect(total).toBe(0);
});