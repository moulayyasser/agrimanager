import React from 'react';
import { BarChart, Calendar, AlertTriangle, Sprout, DollarSign, Package, Users } from 'lucide-react';

const Dashboard: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <DashboardCard
          title="Crop Overview"
          icon={<Sprout className="w-8 h-8 text-green-500" />}
          content="5 active crops"
        />
        <DashboardCard
          title="Financial Summary"
          icon={<DollarSign className="w-8 h-8 text-green-500" />}
          content="Revenue: 50,000 MAD"
        />
        <DashboardCard
          title="Inventory Status"
          icon={<Package className="w-8 h-8 text-green-500" />}
          content="15 items low in stock"
        />
        <DashboardCard
          title="Workforce"
          icon={<Users className="w-8 h-8 text-green-500" />}
          content="20 active employees"
        />
        <DashboardCard
          title="Upcoming Tasks"
          icon={<Calendar className="w-8 h-8 text-green-500" />}
          content="3 tasks due this week"
        />
        <DashboardCard
          title="Alerts"
          icon={<AlertTriangle className="w-8 h-8 text-yellow-500" />}
          content="2 new alerts"
        />
      </div>
    </div>
  );
};

const DashboardCard: React.FC<{ title: string; icon: React.ReactNode; content: string }> = ({ title, icon, content }) => (
  <div className="card hover:shadow-lg transition-shadow duration-200">
    <div className="flex items-center mb-4">
      {icon}
      <h2 className="text-xl font-semibold ml-2 text-gray-800">{title}</h2>
    </div>
    <p className="text-gray-600">{content}</p>
  </div>
);

export default Dashboard;