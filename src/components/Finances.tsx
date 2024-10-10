import React from 'react';
import { DollarSign, TrendingUp, TrendingDown, PieChart } from 'lucide-react';

const Finances: React.FC = () => {
  const transactions = [
    { id: 1, date: '2023-06-01', description: 'Crop Sale - Wheat', amount: 25000, type: 'Income' },
    { id: 2, date: '2023-06-05', description: 'Fertilizer Purchase', amount: -5000, type: 'Expense' },
    { id: 3, date: '2023-06-10', description: 'Equipment Rental', amount: -2000, type: 'Expense' },
    { id: 4, date: '2023-06-15', description: 'Crop Sale - Tomatoes', amount: 15000, type: 'Income' },
  ];

  const totalIncome = transactions.filter(t => t.type === 'Income').reduce((sum, t) => sum + t.amount, 0);
  const totalExpenses = Math.abs(transactions.filter(t => t.type === 'Expense').reduce((sum, t) => sum + t.amount, 0));
  const netProfit = totalIncome - totalExpenses;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Financial Management</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <InfoCard icon={<DollarSign />} title="Total Income" value={`${totalIncome} MAD`} />
        <InfoCard icon={<TrendingDown />} title="Total Expenses" value={`${totalExpenses} MAD`} />
        <InfoCard icon={<TrendingUp />} title="Net Profit" value={`${netProfit} MAD`} />
        <InfoCard icon={<PieChart />} title="Profit Margin" value={`${((netProfit / totalIncome) * 100).toFixed(2)}%`} />
      </div>
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <h2 className="text-xl font-semibold p-4 bg-green-100">Recent Transactions</h2>
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 text-left">Date</th>
              <th className="px-4 py-2 text-left">Description</th>
              <th className="px-4 py-2 text-left">Amount (MAD)</th>
              <th className="px-4 py-2 text-left">Type</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id} className="border-t">
                <td className="px-4 py-2">{transaction.date}</td>
                <td className="px-4 py-2">{transaction.description}</td>
                <td className={`px-4 py-2 ${transaction.amount > 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {transaction.amount > 0 ? '+' : ''}{transaction.amount}
                </td>
                <td className="px-4 py-2">
                  <span className={`px-2 py-1 rounded-full text-sm ${transaction.type === 'Income' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                    {transaction.type}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const InfoCard: React.FC<{ icon: React.ReactNode; title: string; value: string }> = ({ icon, title, value }) => (
  <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
    <div className="mr-4 text-green-500">{icon}</div>
    <div>
      <h3 className="text-sm font-medium text-gray-500">{title}</h3>
      <p className="text-lg font-semibold">{value}</p>
    </div>
  </div>
);

export default Finances;