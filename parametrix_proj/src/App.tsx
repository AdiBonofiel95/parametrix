import './App.css';
import { regionData } from './types/types';
import RegionData from './data/mockData';
import Dashboard from './components/Dashboard';



function App() {

  const regionData: regionData[] = RegionData;

  return (
    <div className="App">
      <h1>App</h1>
      <Dashboard allRegionsData={regionData} />
    </div>
  );
}

export default App;
