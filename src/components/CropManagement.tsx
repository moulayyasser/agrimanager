import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { Sprout, Droplet, Sun, Thermometer, Plus } from 'lucide-react';

const CropManagement: React.FC = () => {
  const { crops, setCrops } = useAppContext();
  const [newCrop, setNewCrop] = useState({ name: '', status: '', plantDate: '', harvestDate: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewCrop(prev => ({ ...prev, [name]: value }));
  };

  const handleAddCrop = (e: React.FormEvent) => {
    e.preventDefault();
    setCrops(prev => [...prev, { id: Date.now(), ...newCrop }]);
    setNewCrop({ name: '', status: '', plantDate: '', harvestDate: '' });
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Crop Management</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <InfoCard icon={<Sprout />} title="Total Crops" value={crops.length.toString()} />
        <InfoCard icon={<Droplet />} title="Avg. Water Usage" value="250 L/day" />
        <InfoCard icon={<Sun />} title="Sunlight Hours" value="10 hrs/day" />
        <InfoCard icon={<Thermometer />} title="Avg. Temperature" value="25°C" />
      </div>
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
        <table className="w-full">
          <thead className="bg-green-100">
            <tr>
              <th className="px-4 py-2 text-left">Crop</th>
              <th className="px-4 py-2 text-left">Status</th>
              <th className="px-4 py-2 text-left">Plant Date</th>
              <th className="px-4 py-2 text-left">Harvest Date</th>
            </tr>
          </thead>
          <tbody>
            {crops.map((crop) => (
              <tr key={crop.id} className="border-t">
                <td className="px-4 py-2">{crop.name}</td>
                <td className="px-4 py-2">{crop.status}</td>
                <td className="px-4 py-2">{crop.plantDate}</td>
                <td className="px-4 py-2">{crop.harvestDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Add New Crop</h2>
        <form onSubmit={handleAddCrop} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            value={newCrop.name}
            onChange={handleInputChange}
            placeholder="Crop Name"
            className="input"
            required
          />
          <input
            type="text"
            name="status"
            value={newCrop.status}
            onChange={handleInputChange}
            placeholder="Status"
            className="input"
            required
          />
          <input
            type="date"
            name="plantDate"
            value={newCrop.plantDate}
            onChange={handleInputChange}
            className="input"
            required
          />
          <input
            type="date"
            name="harvestDate"
            value={newCrop.harvestDate}
            onChange={handleInputChange}
            className="input"
            required
          />
          <button type="submit" className="btn btn-primary col-span-2 flex items-center justify-center">
            <Plus className="mr-2" /> Add Crop
          </button>
        </form>
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

export default CropManagement;