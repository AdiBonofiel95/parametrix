import { useEffect, useState } from 'react';
import { RegionalDashboardData, RegionalDashboardProps, Status } from '../types/types'
import Grid from '@mui/material/Grid2';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import StyledTytle from './StyledTytle';
import StatusColorPallate from '../types/StatusColorPallete';
import StatusIcon from './StatusIcon';


export default function RegionalDashboard(props: RegionalDashboardProps) {

    const [data, setData] = useState<RegionalDashboardData>({});
    const [regionName, setRegionName] = useState('');

    useEffect(() => {
        setData({
            status: props.regionalData.status,
            availability: props.regionalData.availability,
            responseTime: props.regionalData.responseTime,
        });
        setRegionName(props.regionalData.name)
    }, [props])

    const colorPallete = StatusColorPallate;

    const getIconColor: (color: Status) => string = (color) => colorPallete[color];

    return (
        <Grid container flexDirection={'column'} size={6} paddingRight={'1.5%'} paddingLeft={'1.5%'} paddingBottom={'2%'}>
            <Grid container justifyContent={'center'}>
                <StyledTytle tytle={regionName} />
            </Grid>
            <Grid container >
                <Table>
                    <TableHead>
                        {Object.keys(data).map((key) => (
                            <TableCell key={regionName + key} align='center'>{key}</TableCell>
                        ))}
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            {Object.values(data).map((entry, index) => (
                                <TableCell key={regionName + entry} align='center'>
                                    <Grid container justifyContent={'center'} alignItems={'center'} gap={'4px'}>
                                        {index === 0 && (<StatusIcon color={getIconColor(entry)}/>)}{entry}
                                    </Grid>
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableBody>
                </Table>
            </Grid>
        </Grid>
    )
}