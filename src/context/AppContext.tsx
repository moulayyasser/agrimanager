import React, { createContext, useState, useContext } from 'react';

interface Crop {
  id: number;
  name: string;
  status: string;
  plantDate: string;
  harvestDate: string;
}

interface InventoryItem {
  id: number;
  name: string;
  quantity: number;
  unit: string;
  status: string;
}

interface Employee {
  id: number;
  name: string;
  role: string;
  status: string;
}

interface Transaction {
  id: number;
  date: string;
  description: string;
  amount: number;
  type: 'Income' | 'Expense';
}

interface FarmInfo {
  name: string;
  location: string;
  size: string;
  owner: string;
}

interface AppContextType {
  crops: Crop[];
  setCrops: React.Dispatch<React.SetStateAction<Crop[]>>;
  inventory: InventoryItem[];
  setInventory: React.Dispatch<React.SetStateAction<InventoryItem[]>>;
  employees: Employee[];
  setEmployees: React.Dispatch<React.SetStateAction<Employee[]>>;
  transactions: Transaction[];
  setTransactions: React.Dispatch<React.SetStateAction<Transaction[]>>;
  farmInfo: FarmInfo;
  setFarmInfo: React.Dispatch<React.SetStateAction<FarmInfo>>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [crops, setCrops] = useState<Crop[]>([
    { id: 1, name: 'Wheat', status: 'Growing', plantDate: '2023-03-15', harvestDate: '2023-07-15' },
    { id: 2, name: 'Tomatoes', status: 'Harvesting', plantDate: '2023-04-01', harvestDate: '2023-06-30' },
    { id: 3, name: 'Olives', status: 'Dormant', plantDate: '2022-05-10', harvestDate: '2023-11-15' },
  ]);

  const [inventory, setInventory] = useState<InventoryItem[]>([
    { id: 1, name: 'Fertilizer A', quantity: 500, unit: 'kg', status: 'In Stock' },
    { id: 2, name: 'Pesticide B', quantity: 50, unit: 'L', status: 'Low Stock' },
    { id: 3, name: 'Seeds C', quantity: 1000, unit: 'packets', status: 'In Stock' },
    { id: 4, name: 'Tools Set D', quantity: 5, unit: 'sets', status: 'Out of Stock' },
  ]);

  const [employees, setEmployees] = useState<Employee[]>([
    { id: 1, name: 'Ahmed Benali', role: 'Farm Manager', status: 'Full-time' },
    { id: 2, name: 'Fatima Zahra', role: 'Crop Specialist', status: 'Full-time' },
    { id: 3, name: 'Youssef El Amrani', role: 'Equipment Operator', status: 'Part-time' },
    { id: 4, name: 'Amina Tazi', role: 'Seasonal Worker', status: 'Temporary' },
  ]);

  const [transactions, setTransactions] = useState<Transaction[]>([
    { id: 1, date: '2023-06-01', description: 'Crop Sale - Wheat', amount: 25000, type: 'Income' },
    { id: 2, date: '2023-06-05', description: 'Fertilizer Purchase', amount: -5000, type: 'Expense' },
    { id: 3, date: '2023-06-10', description: 'Equipment Rental', amount: -2000, type: 'Expense' },
    { id: 4, date: '2023-06-15', description: 'Crop Sale - Tomatoes', amount: 15000, type: 'Income' },
  ]);

  const [farmInfo, setFarmInfo] = useState<FarmInfo>({
    name: 'Green Valley Farm',
    location: 'Meknes, Morocco',
    size: '100 hectares',
    owner: 'Mohammed El Fassi',
  });

  return (
    <AppContext.Provider value={{ 
      crops, setCrops, 
      inventory, setInventory, 
      employees, setEmployees, 
      transactions, setTransactions,
      farmInfo, setFarmInfo
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};