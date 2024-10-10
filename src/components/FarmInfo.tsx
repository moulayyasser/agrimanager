import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { Save } from 'lucide-react';

const FarmInfo: React.FC = () => {
  const { farmInfo, setFarmInfo } = useAppContext();
  const [editedInfo, setEditedInfo] = useState(farmInfo);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedInfo(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFarmInfo(editedInfo);
    alert('Farm information updated successfully!');
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Farm Information & Settings</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Farm Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={editedInfo.name}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              />
            </div>
            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
              <input
                type="text"
                id="location"
                name="location"
                value={editedInfo.location}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              />
            </div>
            <div>
              <label htmlFor="size" className="block text-sm font-medium text-gray-700">Farm Size</label>
              <input
                type="text"
                id="size"
                name="size"
                value={editedInfo.size}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              />
            </div>
            <div>
              <label htmlFor="owner" className="block text-sm font-medium text-gray-700">Owner Name</label>
              <input
                type="text"
                id="owner"
                name="owner"
                value={editedInfo.owner}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              />
            </div>
          </div>
          <div className="mt-6">
            <button type="submit" className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
              <Save className="mr-2 -ml-1 h-5 w-5" aria-hidden="true" />
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FarmInfo;