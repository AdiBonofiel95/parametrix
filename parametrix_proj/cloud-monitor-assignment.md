# Cloud Service Status Dashboard - Take-Home Assignment

## Overview
Create a simple web application that displays the status and health metrics of cloud services across different regions. This exercise will test your ability to work with React, handle data visualization, and create a responsive user interface.

## Requirements

### Core Features (Required)
1. Create a dashboard that displays cloud services status across 4 regions:
   - US East
   - US West
   - Europe
   - Asia Pacific

2. For each region, display the following metrics:
   - Current Status (Online/Degraded/Offline)
   - Availability percentage (e.g., 99.95%)
   - Response time (in milliseconds)

3. Create a simple visualization (graph) showing availability trends over the last 24 hours

### User Interface Requirements
- Display regions in a grid layout
- Use color coding to indicate status (green for online, yellow for degraded, red for offline)
- Make the dashboard responsive (mobile-friendly)
- Implement a refresh button to update the data

### Technical Requirements
- Use React for the frontend
- Use any charting library of your choice (e.g., Recharts, Chart.js)
- Implement proper TypeScript types/interfaces
- Include basic error handling
- Write at least 2 unit tests for your components

## Sample Data
You can use this mock data structure for your implementation:

```typescript
interface RegionData {
  id: string;
  name: string;
  status: 'online' | 'degraded' | 'offline';
  availability: number;
  responseTime: number;
}

interface HistoricalData {
  timestamp: string;
  availability: number;
}

// Sample data
const regions: RegionData[] = [
  {
    id: 'us-east',
    name: 'US East',
    status: 'online',
    availability: 99.98,
    responseTime: 45,
  },
  // ... other regions
];

const historicalData: HistoricalData[] = [
  {
    timestamp: '2024-03-19T00:00:00',
    availability: 99.95,
  },
  // ... other timestamps
];
```

## Bonus Features (Optional)
- create a Docker file so the team can run the docker on their's desktop or server to see the web application.
- Add a "detailed view" modal when clicking on a region
- Implement a simple search/filter function for regions
- Add additional metrics of your choice
- Add animations for status changes
- Implement dark/light mode toggle

## Evaluation Criteria
We will evaluate your submission based on:
1. Code organization and cleanliness
2. Component structure and reusability
3. TypeScript usage and type safety
4. UI/UX design and responsiveness
5. Error handling and edge cases
6. Test coverage and quality
7. Bonus features implementation (if attempted)

## Submission Guidelines
1. Create a new GitHub repository for your solution
2. Include a README.md with:
   - Setup instructions
   - Any assumptions made
   - List of implemented features
   - Technologies used
   - Future improvements you would make
3. Commit your code regularly to show your work progression
4. Time limit: 4 hours (excluding setup time)

## Important Notes
- Focus on code quality over quantity of features
- It's okay to not complete all bonus features
- Document any third-party libraries used
- Include comments for complex logic
- Consider edge cases and loading states

## Getting Started
1. Create a new React project using Create React App with TypeScript
2. Install required dependencies
3. Start with the core features before attempting bonus features
4. Test your application across different screen sizes

## Resources Provided
- Sample data structure (above)
- Basic color scheme suggestion:
  ```css
  :root {
    --status-online: #4caf50;
    --status-degraded: #ff9800;
    --status-offline: #f44336;
  }
  ```

Good luck! We look forward to reviewing your solution.
Parametrix Insurance
