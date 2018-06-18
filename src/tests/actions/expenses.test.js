import { addExpense, editExpense, removeExpense } from '../../actions/expenses.js';

test('should setup remove expense action object', () => {
    const action = removeExpense({ id:'123abc' });
    expect(action).toEqual({
        type:'REMOVE_EXPENSE',
        id:'123abc'
    })
});

test('shoul setup edit expense action object', () => {
    const note = 'New note here';
    const action = editExpense('123abc', {note});
    expect(action).toEqual({ 
        type:'EDIT_EXPENSE',
        id:'123abc',
        updates:{
            note
        }
     })
});

test('should setup add expense acion object with provided value', () => {
    const expenseData = {
        description:'Rent',
        amount:109400,
        createdAt:1000,
        note: 'This was last month rent'
    }
    const action = addExpense(expenseData);
    expect(action).toEqual({ 
        type:'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
     })
});

test('should setup add expense action object with defualt values', () => {
    const expenseData = {
        description: '',
        note: '',
        amount: 0,
        createdAt: 0
    }
    const action = addExpense(expenseData);
    expect(action).toEqual({ 
        type:'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
     })

});