import generateHistoricalData from "../services/GenerateHistoricMockData";
import { HistoricalData } from "../types/types";

const historicalDataEurope: HistoricalData[] = generateHistoricalData('2024-03-21T00:00:00Z');

export default historicalDataEurope;