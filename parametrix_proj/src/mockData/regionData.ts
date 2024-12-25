import { RegionData, Status } from '../types/types'

const RegionsData: RegionData[] = [{
    id: 'us-east',
    name: 'US East',
    status: Status.Online,
    availability: 99.98,
    responseTime: 45,
},
{
    id: 'us-west',
    name: 'US West',
    status: Status.Online,
    availability: 98.55,
    responseTime: 20,
},
{
    id: 'europe',
    name: 'Europe',
    status: Status.Degraded,
    availability: 95.44,
    responseTime: 80,
},
{
    id: 'asia-pacific',
    name: 'Asia Pacific',
    status: Status.Offline,
    availability: 82,
    responseTime: -1,
},
]

export default RegionsData;