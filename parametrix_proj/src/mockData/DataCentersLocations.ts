import generateDataCenterStatus from "../services/GenerateDataCenterStatus";
import { DataCenterLocationsAndAvailability } from "../types/types";


const dataCentersLocations = [
    {
      "name": "us-east-1",
      "latitude": 38.13,
      "longitude": -78.45
    },
    {
      "name": "us-east-2",
      "latitude": 39.96,
      "longitude": -83.0
    },
    {
      "name": "us-west-1",
      "latitude": 37.35,
      "longitude": -121.96
    },
    {
      "name": "us-west-2",
      "latitude": 46.15,
      "longitude": -123.88
    },
    {
      "name": "eu-west-1",
      "latitude": 53.0,
      "longitude": -8.0
    },
    {
      "name": "eu-west-2",
      "latitude": 51.0,
      "longitude": -0.1
    },
    {
      "name": "eu-west-3",
      "latitude": 48.86,
      "longitude": 2.35
    },
    {
      "name": "eu-central-1",
      "latitude": 50.0,
      "longitude": 8.0
    },
    {
      "name": "sa-east-1",
      "latitude": -23.34,
      "longitude": -46.38
    },
    {
      "name": "ap-southeast-1",
      "latitude": 1.37,
      "longitude": 103.8
    },
    {
      "name": "ap-southeast-2",
      "latitude": -33.86,
      "longitude": 151.2
    },
    {
      "name": "ap-northeast-1",
      "latitude": 35.41,
      "longitude": 139.42
    },
    {
      "name": "ap-northeast-2",
      "latitude": 37.56,
      "longitude": 126.98
    },
    {
      "name": "ap-south-1",
      "latitude": 19.08,
      "longitude": 72.88
    },
    {
      "name": "ca-central-1",
      "latitude": 45.5,
      "longitude": -73.6
    }
  ];


const dataCenterLocationsAndAvailability: DataCenterLocationsAndAvailability[] = 
dataCentersLocations.map((dataCenter) => ({
...dataCenter,
status: generateDataCenterStatus(),
}));

export default dataCenterLocationsAndAvailability;