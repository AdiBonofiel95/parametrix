import { useEffect, useState } from 'react';
import { regionalDashboardData, RegionalDashboardProps } from '../types/types'
import Grid from '@mui/material/Grid2';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import StyledTytle from './StyledTytle';


export default function RegionalDashboard(props: RegionalDashboardProps) {

    const [data, setData] = useState<regionalDashboardData>({});
    const [regionName, setRegionName] = useState('');

    useEffect(() => {
        setData({
            status: props.regionalData.status,
            availability: props.regionalData.availability,
            responseTime: props.regionalData.responseTime,
        });
        setRegionName(props.regionalData.name)
    }, [props])
    

    return (
        <Grid container flexDirection={'column'}>
            <Grid container>
                <StyledTytle tytle={regionName} />
            </Grid>
            <Grid container>
                <Table>
                    <TableHead>
                        {Object.keys(data).map((key) => (
                            <TableCell key={regionName + key}>{key}</TableCell>
                        ))}
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            {Object.values(data).map((entry) => (
                                <TableCell key={regionName + entry}>{entry}</TableCell>
                            ))}
                        </TableRow>
                    </TableBody>
                </Table>
            </Grid>
        </Grid>
    )
}