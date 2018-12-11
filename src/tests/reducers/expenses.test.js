import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import uuid from "uuid";

test('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@InIT'});
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action );
    expect(state).toEqual([expenses[0],expenses[2]]);
});

test('should not remove expense if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    };
    const state = expensesReducer(expenses, action );
    expect(state).toEqual(expenses);
});

test('should add new expense', () => {
  const expense = {

            id: uuid(),
            description: 'laptop ',
            note: '',
            amount: 29500,
            createdAt: 20000
    };

    const action = {
        type: 'ADD_EXPENSE',
        expense

    };
    const state = expensesReducer(expenses, action );
    expect(state).toEqual([...expenses, expense]);
});

test('should edit an expense', () => {
    const description = 'new';

    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[2].id,
        updates: {
            description
        }
    };
    const state = expensesReducer(expenses, action );
    expect(state[2].description).toBe(description);
});

test('should not edit an expense id is not found', () => {
    const description = 'new';

    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: {
            description
        }
    };
    const state = expensesReducer(expenses, action );
    expect(state).toEqual(expenses);
});



