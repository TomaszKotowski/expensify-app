import React from 'react';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import { shallow } from 'enzyme';

test('should correctly render ExpeneseSummmary with one expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={235} />);
    expect(wrapper).toMatchSnapshot();
});

test('should correctly render ExpeneseSummmary with mulitple expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={23} expensesTotal={2318494985} />);
    expect(wrapper).toMatchSnapshot();
});