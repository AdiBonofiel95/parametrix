import { AvailabilityGraphsProps, HistoricalData } from "../types/types";
import Grid from '@mui/material/Grid2';
import RegionAvailabilityGraph from "./RegionAvailabilityGraph";
import { useState } from "react";
import { Button, Typography } from "@mui/material";




export default function AvailabilityGraphs(props: AvailabilityGraphsProps) {
    const [graphData, setGraphData] = useState<HistoricalData[]>(
        props.historicalData.length > 0 ? props.historicalData[0] : []
    );
    const [displayedRegionName, setDisplayedRegionName] = useState<string>(props.regionData[0].name);

    const onClick = (index:number) => {
        setGraphData(props.historicalData[index]);
        setDisplayedRegionName(props.regionData[index].name);
    }

    return (
        <Grid container flexDirection={"row"} size={12} justifyContent={'center'}>
            <Grid container justifyContent={"center"} alignItems={"stretch"} sx={{flexDirection: {xs: "row", md: "column"}}}>
                {props.regionData.map((region, index) => (
                    <Grid container sx={{margin: "2px", flexDirection: "row"}}>
                        <Button variant="contained" sx={{backgroundColor: '#3f51b5', width: '100%'}}
                        onClick={() => onClick(index)}>
                            {region.name}
                        </Button>
                    </Grid>
                ))}
            </Grid>
            <Grid container flexDirection={"column"} size={{xs: 12, md: 8}}>
                <Typography variant="h5">{displayedRegionName}</Typography>
                <RegionAvailabilityGraph regionHistoricalData={graphData}/>
            </Grid>
        </Grid>
    )
}