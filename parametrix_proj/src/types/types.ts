export interface RegionalDashboardProps {
    regionalData: RegionData,
}

export interface DashboardProps {
    allRegionsData: RegionData[]
}

export interface RegionData {
    id: string;
    name: string;
    status: Status;
    availability: number;
    responseTime: number;
}

export interface RegionalDashboardData {
    status?: Status,
    availability?: number,
    responseTime?: number
}

export interface HistoricalData {
    timestamp: string;
    availability: number;
}

export interface RegionAvailabilityGraphProps {
    regionHistoricalData: HistoricalData[]
}

export interface AvailabilityGraphsProps {
    historicalData: HistoricalData[][],
    regionData: RegionData[]
}

export interface DataCenterLocationsAndAvailability {
    name: string,
    latitude: number,
    longitude: number,
    status: Status
}

export enum Status {
    Online = 'online',
    Degraded = 'degraded',
    Offline = 'offline'
}