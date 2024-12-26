import { DashboardProps } from '../types/types'
import  Grid  from '@mui/material/Grid2'
import RegionalDashboard from './RegionalDashboard'


export default function Dashboard(props: DashboardProps) {

    return (
        <Grid container size={12}>
            {props.allRegionsData.map((regionData) => (
                <RegionalDashboard key={regionData.id} regionalData={regionData}/>
            ))}
        </Grid>
    )
}