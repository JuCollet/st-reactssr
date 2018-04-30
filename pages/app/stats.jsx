import React from 'react';
import AppLayout from '../../components/AppLayout/AppLayout';
import YearlyExpenses from '../../components/Cards/YearlyExpenses/YearlyExpenses';

const stats = () => (
  <AppLayout>
    <span className="app-content-title">Statistiques</span>
    <YearlyExpenses />
  </AppLayout>
);

export default stats;
