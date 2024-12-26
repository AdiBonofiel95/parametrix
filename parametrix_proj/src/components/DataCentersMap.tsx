import { DataCenterLocationsAndAvailability } from '../types/types'
import { ComposableMap, Geographies, Geography, Marker} from 'react-simple-maps';
import Grid from '@mui/material/Grid2';
import { useState } from 'react';
import StatusColorPallate from '../types/StatusColorPallete';

type DataCentersMapProps = {
    dataCenterLocationsAndAvailability: DataCenterLocationsAndAvailability[],
}

export default function DataCentersMap(props: DataCentersMapProps) {

    const [hoveredMarker, setHoveredMarker] = useState<number|null>(null);

    // const geoUrl =
    //     'https://raw.githubusercontent.com/lotusms/world-map-data/main/world.json';
    const geoUrl = '/Geo.json';
    const markerColorPallet = StatusColorPallate;

    return (
        <Grid container size={10} justifyContent={'center'}>
            <ComposableMap style={{ width: '85%', height: 'auto' }}>
                <Geographies geography={geoUrl}>
                {({ geographies }) =>
                geographies.map((geo) => (
                    <Geography 
                        key={geo.rsmKey} 
                        geography={geo} 
                        style={{default: { fill: '#3f51b5', outline: 'none' }, 
                                hover: { fill: '#3f51b5', outline: 'none' },
                                pressed: { fill: '#3f51b5', outline: 'none' }}}
                    />
                ))
                }
                </Geographies>
                {props.dataCenterLocationsAndAvailability.map((location, index) => (
                    <Marker
                    key={location.name + "marker"}
                    coordinates={[location.longitude, location.latitude]}
                    onMouseEnter={() => setHoveredMarker(index)}
                    onMouseLeave={() => setHoveredMarker(null)}
                    >
                        <circle r={4} fill={markerColorPallet[location.status]} stroke="#fff" strokeWidth={1} />
                        {hoveredMarker === index && (<text
                            textAnchor="start"
                            y={-10}
                        >
                            {location.name}
                        </text>)}
                    </Marker>
            ))}
            </ComposableMap>
        </Grid>
    )
}