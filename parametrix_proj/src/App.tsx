import './App.css';
import { HistoricalData, RegionData } from './types/types';
import RegionsData from './mockData/regionData';
import Dashboard from './components/Dashboard';
import historicalDataUSEast from './mockData/USEastHistoric';
import historicalDataUSWest from './mockData/USWestHistoric';
import historicalDataEurope from './mockData/EuropeHistoric';
import historicalDataAsiaPacific from './mockData/AsiaPacificHistoric';
import Grid from '@mui/material/Grid2';
import AvailabilityGraphs from './components/AvailabilityGraphs';



function App() {
  const regionData: RegionData[] = RegionsData;
  const historicalData: HistoricalData[][] = [
    historicalDataUSEast, 
    historicalDataUSWest, 
    historicalDataEurope, 
    historicalDataAsiaPacific
  ];

  return (
    <div className="App">
      <h1>App</h1>
      <Dashboard allRegionsData={regionData} />
      <AvailabilityGraphs historicalData={historicalData} regionData={regionData}/> 
    </div>
  );
}

export default App;
