// Data for different time periods
const dataByPeriod = {
  week: {
    summaryStats: {
      totalWaste: 280,
      wasteChange: 8,
    },
    wasteOverTime: {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      data: [35, 42, 38, 45, 50, 40, 30],
    },
    wasteByRegion: [
      { name: "Location A", waste: 60, frequency: "Daily", status: "good" },
      { name: "Location B", waste: 45, frequency: "Weekly", status: "warning" },
      { name: "Location C", waste: 75, frequency: "Daily", status: "good" },
      { name: "Location D", waste: 40, frequency: "Monthly", status: "danger" },
      { name: "Location E", waste: 60, frequency: "Weekly", status: "warning" },
    ],
    collectionFrequency: {
      daily: 20,
      weekly: 15,
      monthly: 10,
    },
  },
  month: {
    summaryStats: {
      totalWaste: 1200,
      wasteChange: 12,
    },
    wasteOverTime: {
      labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
      data: [250, 300, 350, 300],
    },
    wasteByRegion: [
      { name: "Location A", waste: 200, frequency: "Daily", status: "good" },
      {
        name: "Location B",
        waste: 150,
        frequency: "Weekly",
        status: "warning",
      },
      { name: "Location C", waste: 300, frequency: "Daily", status: "good" },
      {
        name: "Location D",
        waste: 180,
        frequency: "Monthly",
        status: "danger",
      },
      {
        name: "Location E",
        waste: 220,
        frequency: "Weekly",
        status: "warning",
      },
    ],
    collectionFrequency: {
      daily: 20,
      weekly: 15,
      monthly: 10,
    },
  },
  quarter: {
    summaryStats: {
      totalWaste: 3800,
      wasteChange: 15,
    },
    wasteOverTime: {
      labels: ["Month 1", "Month 2", "Month 3"],
      data: [1200, 1300, 1300],
    },
    wasteByRegion: [
      { name: "Location A", waste: 800, frequency: "Daily", status: "good" },
      {
        name: "Location B",
        waste: 600,
        frequency: "Weekly",
        status: "warning",
      },
      { name: "Location C", waste: 900, frequency: "Daily", status: "good" },
      {
        name: "Location D",
        waste: 700,
        frequency: "Monthly",
        status: "danger",
      },
      {
        name: "Location E",
        waste: 800,
        frequency: "Weekly",
        status: "warning",
      },
    ],
    collectionFrequency: {
      daily: 22,
      weekly: 16,
      monthly: 10,
    },
  },
  year: {
    summaryStats: {
      totalWaste: 15000,
      wasteChange: 18,
    },
    wasteOverTime: {
      labels: ["Q1", "Q2", "Q3", "Q4"],
      data: [3500, 3800, 4000, 3700],
    },
    wasteByRegion: [
      { name: "Location A", waste: 3000, frequency: "Daily", status: "good" },
      {
        name: "Location B",
        waste: 2500,
        frequency: "Weekly",
        status: "warning",
      },
      { name: "Location C", waste: 4000, frequency: "Daily", status: "good" },
      {
        name: "Location D",
        waste: 2500,
        frequency: "Monthly",
        status: "danger",
      },
      {
        name: "Location E",
        waste: 3000,
        frequency: "Weekly",
        status: "warning",
      },
    ],
    collectionFrequency: {
      daily: 25,
      weekly: 15,
      monthly: 10,
    },
  },
};
