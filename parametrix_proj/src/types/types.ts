export interface RegionalDashboardProps {
    regionalData: regionData,
}

export interface DashboardProps {
    allRegionsData: regionData[]
}

export interface regionData {
    id: string;
    name: string;
    status: Status;
    availability: number;
    responseTime: number;
}

export interface regionalDashboardData {
    status?: Status,
    availability?: number,
    responseTime?: number
}

export enum Status {
    Online = 'online',
    Degraded = 'degraded',
    Offline = 'offline'
}