import './App.css';
import { HistoricalData, regionData } from './types/types';
import RegionData from './mockData/regionData';
import Dashboard from './components/Dashboard';
import historicalDataUSEast from './mockData/USEastHistoric';



function App() {

  const regionData: regionData[] = RegionData;
  const historicalDataUSE: HistoricalData[] = historicalDataUSEast;

  console.log(historicalDataUSE);

  return (
    <div className="App">
      <h1>App</h1>
      <Dashboard allRegionsData={regionData} />
    </div>
  );
}

export default App;
