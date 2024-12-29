import { HistoricalData } from "../types/types";


const generateAvailability = (): number => {
    const rand = Math.random();
    if (rand < 0.7) {
      // 70% chance to get a value between 94 and 100
      return +(94 + Math.random() * 6).toFixed(1);
    } else {
      // 30% chance to get a value between 65 and 94
      return +(65 + Math.random() * 29).toFixed(1);
    }
  };
  
  // Function to generate historical data
  const generateHistoricalData = (startDate: string): HistoricalData[] => {
    const data: HistoricalData[] = [];
    const startTime = new Date(startDate).getTime();
    const interval = 10 * 60 * 1000; // 10 minutes in milliseconds
    const totalEntries = 24 * 60 / 10; // 24 hours worth of entries (144)
  
    for (let i = 0; i < totalEntries; i++) {
      const timestamp = new Date(startTime + i * interval).toISOString().slice(11, 19);
      const availability = generateAvailability();
      data.push({ timestamp, availability });
    }
  
    return data;
  };

  export default generateHistoricalData;