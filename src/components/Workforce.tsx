import React from 'react';
import { Users, UserPlus, UserMinus, Clock } from 'lucide-react';

const Workforce: React.FC = () => {
  const employees = [
    { id: 1, name: 'Ahmed Benali', role: 'Farm Manager', status: 'Full-time' },
    { id: 2, name: 'Fatima Zahra', role: 'Crop Specialist', status: 'Full-time' },
    { id: 3, name: 'Youssef El Amrani', role: 'Equipment Operator', status: 'Part-time' },
    { id: 4, name: 'Amina Tazi', role: 'Seasonal Worker', status: 'Temporary' },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Workforce Management</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <InfoCard icon={<Users />} title="Total Employees" value="4" />
        <InfoCard icon={<UserPlus />} title="Full-time" value="2" />
        <InfoCard icon={<UserMinus />} title="Part-time" value="1" />
        <InfoCard icon={<Clock />} title="Temporary" value="1" />
      </div>
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <h2 className="text-xl font-semibold p-4 bg-green-100">Employee Directory</h2>
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Role</th>
              <th className="px-4 py-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id} className="border-t">
                <td className="px-4 py-2">{employee.name}</td>
                <td className="px-4 py-2">{employee.role}</td>
                <td className="px-4 py-2">
                  <span className={`px-2 py-1 rounded-full text-sm ${getStatusColor(employee.status)}`}>
                    {employee.status}
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
    case 'Full-time':
      return 'bg-green-100 text-green-800';
    case 'Part-time':
      return 'bg-yellow-100 text-yellow-800';
    case 'Temporary':
      return 'bg-blue-100 text-blue-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

export default Workforce;