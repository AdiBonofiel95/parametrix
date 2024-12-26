import './App.css';
import { DataCenterLocationsAndAvailability, HistoricalData, RegionData } from './types/types';
import RegionsData from './mockData/regionData';
import Dashboard from './components/Dashboard';
import historicalDataUSEast from './mockData/USEastHistoric';
import historicalDataUSWest from './mockData/USWestHistoric';
import historicalDataEurope from './mockData/EuropeHistoric';
import historicalDataAsiaPacific from './mockData/AsiaPacificHistoric';
import Grid from '@mui/material/Grid2';
import AvailabilityGraphs from './components/AvailabilityGraphs';
import DataCentersMap from './components/DataCentersMap';
import dataCenterLocationsAndAvailability from './mockData/DataCentersLocations';



function App() {
  const regionData: RegionData[] = RegionsData;
  const historicalData: HistoricalData[][] = [
    historicalDataUSEast, 
    historicalDataUSWest, 
    historicalDataEurope, 
    historicalDataAsiaPacific
  ];
  const dataCenterLocations:DataCenterLocationsAndAvailability[] = dataCenterLocationsAndAvailability;
  

  return (
    <div className="App">
      <h1>App</h1>
      <Grid container flexDirection={'column'} alignItems={'center'}>
        <Dashboard allRegionsData={regionData} />
        <AvailabilityGraphs historicalData={historicalData} regionData={regionData}/> 
        <DataCentersMap dataCenterLocationsAndAvailability={dataCenterLocations} />
      </Grid>
    </div>
  );
}

export default App;
