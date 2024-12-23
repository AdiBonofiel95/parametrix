import React from 'react'
import { DashboardProps } from '../types/types'
import  Grid  from '@mui/material/Grid2'
import RegionalDashboard from './RegionalDashboard'


export default function Dashboard(props: DashboardProps) {

    return (
        <Grid container>
            {props.allRegionsData.map((regionData) => (
                <RegionalDashboard key={regionData.id} regionalData={regionData}/>
            ))}
        </Grid>
    )
}