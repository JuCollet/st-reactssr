import React from 'react';
import AppLayout from '../../components/AppLayout/AppLayout';
import YearlyEvolution from '../../components/Cards/YearlyEvolution/YearlyEvolution';
import MonthlyRevenues from '../../components/Cards/MonthlyRevenues/MonthlyRevenues';
import YearlyExpenses from '../../components/Cards/YearlyExpenses/YearlyExpenses';
import ExpensesList from '../../components/Cards/ExpensesList/ExpensesList';

const stats = () => (
  <AppLayout>
    <span className="app-content-title">Statistiques</span>
    <MonthlyRevenues />
    <YearlyEvolution />
    <YearlyExpenses />
    <ExpensesList />
  </AppLayout>
);

export default stats;
