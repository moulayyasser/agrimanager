import React from 'react';
import { Package, TrendingDown, TrendingUp } from 'lucide-react';

const Inventory: React.FC = () => {
  const inventoryItems = [
    { id: 1, name: 'Fertilizer A', quantity: 500, unit: 'kg', status: 'In Stock' },
    { id: 2, name: 'Pesticide B', quantity: 50, unit: 'L', status: 'Low Stock' },
    { id: 3, name: 'Seeds C', quantity: 1000, unit: 'packets', status: 'In Stock' },
    { id: 4, name: 'Tools Set D', quantity: 5, unit: 'sets', status: 'Out of Stock' },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Inventory Management</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <InfoCard icon={<Package />} title="Total Items" value="4" />
        <InfoCard icon={<TrendingDown />} title="Low Stock Items" value="1" />
        <InfoCard icon={<TrendingUp />} title="Fully Stocked" value="2" />
      </div>
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="w-full">
          <thead className="bg-green-100">
            <tr>
              <th className="px-4 py-2 text-left">Item</th>
              <th className="px-4 py-2 text-left">Quantity</th>
              <th className="px-4 py-2 text-left">Unit</th>
              <th className="px-4 py-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {inventoryItems.map((item) => (
              <tr key={item.id} className="border-t">
                <td className="px-4 py-2">{item.name}</td>
                <td className="px-4 py-2">{item.quantity}</td>
                <td className="px-4 py-2">{item.unit}</td>
                <td className="px-4 py-2">
                  <span className={`px-2 py-1 rounded-full text-sm ${getStatusColor(item.status)}`}>
                    {item.status}
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

const getStatusColor = (status: string) => {
  switch (status) {
    case 'In Stock':
      return 'bg-green-100 text-green-800';
    case 'Low Stock':
      return 'bg-yellow-100 text-yellow-800';
    case 'Out of Stock':
      return 'bg-red-100 text-red-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

export default Inventory;