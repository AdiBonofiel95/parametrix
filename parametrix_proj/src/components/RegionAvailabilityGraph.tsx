import { useState } from 'react'
import { RegionAvailabilityGraphProps } from '../types/types'
import { Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'


export default function RegionAvailabilityGraph(props: RegionAvailabilityGraphProps) {

    const [visibleRange, setVisibleRange] = useState([0, props.regionHistoricalData.length - 1]);
    const [isDragging, setIsDragging] = useState(false);
    const [dragStartX, setDragStartX] = useState<number | null>(null);
    
    const handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
        event.preventDefault();
        const [start, end] = visibleRange;
        const zoomStep = 1;
    
        if (event.deltaY < 0) {
        // Zoom in
        setVisibleRange([
            Math.min(start + zoomStep, end - 2), // Avoid collapsing the range
            Math.max(end - zoomStep, start + 2),
        ]);
        } else {
        // Zoom out
        setVisibleRange([
            Math.max(start - zoomStep, 0),
            Math.min(end + zoomStep, props.regionHistoricalData.length - 1),
        ]);
        }
    };

    const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
        if (visibleRange[1] - visibleRange[0] < props.regionHistoricalData.length - 1) {
          setIsDragging(true);
          setDragStartX(event.clientX);
        }
      };
    
      const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
        if (isDragging && dragStartX !== null) {
          const dragDistance = event.clientX - dragStartX;
          const dragStep = Math.round(dragDistance / 20); // Adjust sensitivity
    
          if (dragStep !== 0) {
            setVisibleRange(([start, end]) => {
              const newStart = Math.max(start - dragStep, 0);
              const newEnd = Math.min(end - dragStep, props.regionHistoricalData.length - 1);
    
              // Prevent moving beyond the bounds of the data
              if (newEnd - newStart >= end - start) {
                setDragStartX(event.clientX); // Reset drag start for continuous dragging
                return [newStart, newEnd];
              }
              return [start, end];
            });
          }
        }
      };
    
      const handleMouseUp = () => {
        setIsDragging(false);
        setDragStartX(null);
      };
    
    const filteredData = props.regionHistoricalData.slice(visibleRange[0], visibleRange[1] + 1);

    return (
        <div 
            onWheel={handleWheel} 
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}>
              <ResponsiveContainer width={"90%"} height={400}>
                <LineChart data={filteredData}>
                    <XAxis dataKey="timestamp" />
                    <YAxis  />
                    <Legend />
                    <Tooltip />
                    <Line type="monotone" dataKey="availability" stroke="#3f51b5" />
                    {/* <Brush dataKey="timestamp" height={10} stroke="#3f51b5"/> */}
                </LineChart>
              </ResponsiveContainer>
        </div>
    )
}