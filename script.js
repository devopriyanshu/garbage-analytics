const mockData = {
  "weekly-summary": [
    { week_start: "2023-05-01", plastic: 45, bio: 32, non_bio: 78 },
    { week_start: "2023-05-08", plastic: 52, bio: 38, non_bio: 85 },
    { week_start: "2023-05-15", plastic: 48, bio: 35, non_bio: 82 },
    { week_start: "2023-05-22", plastic: 56, bio: 42, non_bio: 91 },
    { week_start: "2023-05-29", plastic: 50, bio: 39, non_bio: 88 },
  ],
  "weekly-peaks": [
    { day_of_week: "Monday", dustbin_id: "DB001", avg_fill: 78 },
    { day_of_week: "Tuesday", dustbin_id: "DB002", avg_fill: 82 },
    { day_of_week: "Wednesday", dustbin_id: "DB003", avg_fill: 85 },
    { day_of_week: "Thursday", dustbin_id: "DB001", avg_fill: 79 },
    { day_of_week: "Friday", dustbin_id: "DB002", avg_fill: 88 },
    { day_of_week: "Saturday", dustbin_id: "DB003", avg_fill: 92 },
    { day_of_week: "Sunday", dustbin_id: "DB001", avg_fill: 65 },
  ],
  "avg-fill-hour": [
    { dustbin_id: "DB001", hour_of_day: 0, avg_fill: 15 },
    { dustbin_id: "DB001", hour_of_day: 1, avg_fill: 12 },
    { dustbin_id: "DB001", hour_of_day: 2, avg_fill: 10 },
    { dustbin_id: "DB001", hour_of_day: 3, avg_fill: 8 },
    { dustbin_id: "DB001", hour_of_day: 4, avg_fill: 7 },
    { dustbin_id: "DB001", hour_of_day: 5, avg_fill: 10 },
    { dustbin_id: "DB001", hour_of_day: 6, avg_fill: 25 },
    { dustbin_id: "DB001", hour_of_day: 7, avg_fill: 45 },
    { dustbin_id: "DB001", hour_of_day: 8, avg_fill: 60 },
    { dustbin_id: "DB001", hour_of_day: 9, avg_fill: 55 },
    { dustbin_id: "DB001", hour_of_day: 10, avg_fill: 50 },
    { dustbin_id: "DB001", hour_of_day: 11, avg_fill: 58 },
    { dustbin_id: "DB001", hour_of_day: 12, avg_fill: 65 },
    { dustbin_id: "DB001", hour_of_day: 13, avg_fill: 62 },
    { dustbin_id: "DB001", hour_of_day: 14, avg_fill: 70 },
    { dustbin_id: "DB001", hour_of_day: 15, avg_fill: 75 },
    { dustbin_id: "DB001", hour_of_day: 16, avg_fill: 80 },
    { dustbin_id: "DB001", hour_of_day: 17, avg_fill: 85 },
    { dustbin_id: "DB001", hour_of_day: 18, avg_fill: 78 },
    { dustbin_id: "DB001", hour_of_day: 19, avg_fill: 70 },
    { dustbin_id: "DB001", hour_of_day: 20, avg_fill: 60 },
    { dustbin_id: "DB001", hour_of_day: 21, avg_fill: 45 },
    { dustbin_id: "DB001", hour_of_day: 22, avg_fill: 30 },
    { dustbin_id: "DB001", hour_of_day: 23, avg_fill: 20 },
    { dustbin_id: "DB002", hour_of_day: 0, avg_fill: 10 },
    { dustbin_id: "DB002", hour_of_day: 1, avg_fill: 8 },
    { dustbin_id: "DB002", hour_of_day: 2, avg_fill: 5 },
    { dustbin_id: "DB002", hour_of_day: 3, avg_fill: 5 },
    { dustbin_id: "DB002", hour_of_day: 4, avg_fill: 5 },
    { dustbin_id: "DB002", hour_of_day: 5, avg_fill: 8 },
    { dustbin_id: "DB002", hour_of_day: 6, avg_fill: 20 },
    { dustbin_id: "DB002", hour_of_day: 7, avg_fill: 40 },
    { dustbin_id: "DB002", hour_of_day: 8, avg_fill: 55 },
    { dustbin_id: "DB002", hour_of_day: 9, avg_fill: 50 },
    { dustbin_id: "DB002", hour_of_day: 10, avg_fill: 45 },
    { dustbin_id: "DB002", hour_of_day: 11, avg_fill: 53 },
    { dustbin_id: "DB002", hour_of_day: 12, avg_fill: 60 },
    { dustbin_id: "DB002", hour_of_day: 13, avg_fill: 57 },
    { dustbin_id: "DB002", hour_of_day: 14, avg_fill: 65 },
    { dustbin_id: "DB002", hour_of_day: 15, avg_fill: 70 },
    { dustbin_id: "DB002", hour_of_day: 16, avg_fill: 75 },
    { dustbin_id: "DB002", hour_of_day: 17, avg_fill: 80 },
    { dustbin_id: "DB002", hour_of_day: 18, avg_fill: 73 },
    { dustbin_id: "DB002", hour_of_day: 19, avg_fill: 65 },
    { dustbin_id: "DB002", hour_of_day: 20, avg_fill: 55 },
    { dustbin_id: "DB002", hour_of_day: 21, avg_fill: 40 },
    { dustbin_id: "DB002", hour_of_day: 22, avg_fill: 25 },
    { dustbin_id: "DB002", hour_of_day: 23, avg_fill: 15 },
  ],
  "daily-fill-trends": [
    { day_of_week: "Monday", date: "2023-05-01", avg_fill: 65 },
    { day_of_week: "Tuesday", date: "2023-05-02", avg_fill: 70 },
    { day_of_week: "Wednesday", date: "2023-05-03", avg_fill: 75 },
    { day_of_week: "Thursday", date: "2023-05-04", avg_fill: 68 },
    { day_of_week: "Friday", date: "2023-05-05", avg_fill: 80 },
    { day_of_week: "Saturday", date: "2023-05-06", avg_fill: 85 },
    { day_of_week: "Sunday", date: "2023-05-07", avg_fill: 60 },
    { day_of_week: "Monday", date: "2023-05-08", avg_fill: 67 },
    { day_of_week: "Tuesday", date: "2023-05-09", avg_fill: 72 },
    { day_of_week: "Wednesday", date: "2023-05-10", avg_fill: 77 },
    { day_of_week: "Thursday", date: "2023-05-11", avg_fill: 70 },
    { day_of_week: "Friday", date: "2023-05-12", avg_fill: 82 },
    { day_of_week: "Saturday", date: "2023-05-13", avg_fill: 87 },
    { day_of_week: "Sunday", date: "2023-05-14", avg_fill: 62 },
  ],
};

// Modified fetchData function to use mock data
async function fetchData(endpoint) {
  try {
    console.log(`Using mock data for endpoint: ${endpoint}`);

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 300));

    const data = mockData[endpoint];

    if (!data) {
      throw new Error(`No mock data available for endpoint: ${endpoint}`);
    }

    console.log(`Mock data returned for ${endpoint}:`, data);
    return data;
  } catch (err) {
    console.error(`Error with mock data for ${endpoint}:`, err);
    return [];
  }
}

// Render charts function
async function renderCharts() {
  // 1. Weekly Summary
  console.log("Fetching weekly summary data..."); // Added console log
  const summary = await fetchData("weekly-summary");

  if (!Array.isArray(summary)) {
    console.error("Weekly Summary data is not an array:", summary);
    return;
  }

  const week = summary.map((s) => new Date(s.week_start).toLocaleDateString());
  console.log("Rendering weekly summary chart with data:", { week, summary });

  new Chart(document.getElementById("weeklySummaryChart"), {
    type: "bar",
    data: {
      labels: week,
      datasets: [
        {
          label: "Plastic",
          data: summary.map((s) => s.plastic),
          backgroundColor: "#4CAF50",
        },
        {
          label: "Organic",
          data: summary.map((s) => s.bio),
          backgroundColor: "#FFC107",
        },
        {
          label: "General",
          data: summary.map((s) => s.non_bio),
          backgroundColor: "#F44336",
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: "Weekly Waste Summary by Type (kg)",
        },
      },
    },
  });

  // 2. Weekly Peaks
  console.log("Fetching weekly peaks data...");
  const peaks = await fetchData("weekly-peaks");

  if (!Array.isArray(peaks)) {
    console.error("Weekly Peaks data is not an array:", peaks);
    return;
  }

  const peakDays = peaks.map(
    (p) => `${p.day_of_week.trim()} (ID: ${p.dustbin_id})`
  );
  console.log("Rendering weekly peaks chart with data:", { peakDays, peaks });

  new Chart(document.getElementById("weeklyPeaksChart"), {
    type: "bar",
    data: {
      labels: peakDays,
      datasets: [
        {
          label: "Avg Fill (%)",
          data: peaks.map((p) => p.avg_fill),
          backgroundColor: "#2196F3",
        },
      ],
    },
    options: {
      plugins: {
        title: {
          display: true,
          text: "Weekly Peaks per Dustbin",
        },
      },
    },
  });

  // 3. Average Fill by Hour
  console.log("Fetching average fill by hour data...");
  const hourly = await fetchData("avg-fill-hour");

  if (!Array.isArray(hourly)) {
    console.error("Average Fill by Hour data is not an array:", hourly);
    return;
  }

  const groupedByBin = {};
  hourly.forEach((item) => {
    if (!groupedByBin[item.dustbin_id])
      groupedByBin[item.dustbin_id] = { hours: [], fills: [] };
    groupedByBin[item.dustbin_id].hours.push(item.hour_of_day);
    groupedByBin[item.dustbin_id].fills.push(item.avg_fill);
  });

  const datasets = Object.entries(groupedByBin).map(([id, data], i) => ({
    label: `Dustbin ${id}`,
    data: data.fills,
    borderColor: `hsl(${i * 60}, 70%, 50%)`,
    fill: false,
  }));

  console.log("Rendering average fill by hour chart with data:", {
    hourly,
    groupedByBin,
    datasets,
  });

  new Chart(document.getElementById("avgFillByHourChart"), {
    type: "line",
    data: {
      labels: Array.from({ length: 24 }, (_, i) => `${i}:00`),
      datasets,
    },
    options: {
      plugins: {
        title: {
          display: true,
          text: "Average Fill by Hour",
        },
      },
    },
  });

  // 4. Daily Fill Trend
  console.log("Fetching daily fill trends data...");
  const trends = await fetchData("daily-fill-trends");

  if (!Array.isArray(trends)) {
    console.error("Daily Fill Trends data is not an array:", trends);
    return;
  }

  const days = trends.map((d) => `${d.day_of_week.trim()} (${d.date})`);
  console.log("Rendering daily fill trends chart with data:", { days, trends });

  new Chart(document.getElementById("dailyFillTrendChart"), {
    type: "line",
    data: {
      labels: days,
      datasets: [
        {
          label: "Avg Fill (%)",
          data: trends.map((t) => t.avg_fill),
          borderColor: "#9C27B0",
          fill: false,
        },
      ],
    },
    options: {
      plugins: {
        title: {
          display: true,
          text: "Daily Fill Trends (All Dustbins)",
        },
      },
    },
  });
}

async function renderWasteCompositionAnalysis() {
  const weeklySummary = await fetchData("weekly-summary");

  if (!Array.isArray(weeklySummary)) {
    console.error(
      "Weekly Summary data is not available for composition analysis"
    );
    return;
  }

  // 1. Waste Composition Pie Chart
  const latestWeek = weeklySummary[weeklySummary.length - 1];
  const totalWaste = latestWeek.plastic + latestWeek.bio + latestWeek.non_bio;

  new Chart(document.getElementById("wasteCompositionChart"), {
    type: "pie",
    data: {
      labels: ["Plastic", "Organic", "General"],
      datasets: [
        {
          data: [latestWeek.plastic, latestWeek.bio, latestWeek.non_bio],
          backgroundColor: ["#4CAF50", "#FFC107", "#F44336"],
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: `Waste Composition (Latest Week: ${new Date(
            latestWeek.week_start
          ).toLocaleDateString()})`,
        },
        tooltip: {
          callbacks: {
            label: function (context) {
              const value = context.raw;
              const percentage = Math.round((value / totalWaste) * 100);
              return `${context.label}: ${value}kg (${percentage}%)`;
            },
          },
        },
      },
    },
  });

  // 2. Waste Trends by Type Line Chart
  const weeks = weeklySummary.map((s) =>
    new Date(s.week_start).toLocaleDateString()
  );

  new Chart(document.getElementById("wasteTrendChart"), {
    type: "line",
    data: {
      labels: weeks,
      datasets: [
        {
          label: "Plastic",
          data: weeklySummary.map((s) => s.plastic),
          borderColor: "#4CAF50",
          backgroundColor: "rgba(76, 175, 80, 0.1)",
          fill: true,
          tension: 0.3,
        },
        {
          label: "Organic",
          data: weeklySummary.map((s) => s.bio),
          borderColor: "#FFC107",
          backgroundColor: "rgba(255, 193, 7, 0.1)",
          fill: true,
          tension: 0.3,
        },
        {
          label: "General",
          data: weeklySummary.map((s) => s.non_bio),
          borderColor: "#F44336",
          backgroundColor: "rgba(244, 67, 54, 0.1)",
          fill: true,
          tension: 0.3,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: "Weekly Waste Trends by Type (kg)",
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: "Weight (kg)",
          },
        },
      },
    },
  });

  // 3. Generate Insights
  const insights = generateWasteInsights(weeklySummary);

  // Calculate average percentages
  const avgPlastic =
    weeklySummary.reduce((sum, week) => sum + week.plastic, 0) /
    weeklySummary.length;
  const avgBio =
    weeklySummary.reduce((sum, week) => sum + week.bio, 0) /
    weeklySummary.length;
  const avgNonBio =
    weeklySummary.reduce((sum, week) => sum + week.non_bio, 0) /
    weeklySummary.length;
  const totalAvg = avgPlastic + avgBio + avgNonBio;

  document.getElementById("compositionInsights").innerHTML = `
    <div class="waste-stats">
      <div class="waste-stat">
        <h4>Avg Plastic</h4>
        <div class="stat-value">${Math.round(avgPlastic)}kg</div>
        <div>${Math.round((avgPlastic / totalAvg) * 100)}% of total</div>
      </div>
      <div class="waste-stat">
        <h4>Avg Organic</h4>
        <div class="stat-value">${Math.round(avgBio)}kg</div>
        <div>${Math.round((avgBio / totalAvg) * 100)}% of total</div>
      </div>
      <div class="waste-stat">
        <h4>Avg General</h4>
        <div class="stat-value">${Math.round(avgNonBio)}kg</div>
        <div>${Math.round((avgNonBio / totalAvg) * 100)}% of total</div>
      </div>
    </div>
    ${insights
      .map(
        (insight) => `
      <div class="insight-item">${insight}</div>
    `
      )
      .join("")}
  `;
}

function generateWasteInsights(weeklySummary) {
  const insights = [];
  const latestWeek = weeklySummary[weeklySummary.length - 1];

  // Calculate changes from previous week
  if (weeklySummary.length > 1) {
    const prevWeek = weeklySummary[weeklySummary.length - 2];
    const plasticChange = (
      ((latestWeek.plastic - prevWeek.plastic) / prevWeek.plastic) *
      100
    ).toFixed(1);
    const bioChange = (
      ((latestWeek.bio - prevWeek.bio) / prevWeek.bio) *
      100
    ).toFixed(1);
    const nonBioChange = (
      ((latestWeek.non_bio - prevWeek.non_bio) / prevWeek.non_bio) *
      100
    ).toFixed(1);

    insights.push(
      `Plastic waste ${
        plasticChange >= 0 ? "increased" : "decreased"
      } by ${Math.abs(plasticChange)}% compared to previous week`,
      `Organic waste ${
        bioChange >= 0 ? "increased" : "decreased"
      } by ${Math.abs(bioChange)}% compared to previous week`,
      `General waste ${
        nonBioChange >= 0 ? "increased" : "decreased"
      } by ${Math.abs(nonBioChange)}% compared to previous week`
    );
  }

  // Identify dominant waste type
  const wasteTypes = [
    { name: "Plastic", value: latestWeek.plastic },
    { name: "Organic", value: latestWeek.bio },
    { name: "General", value: latestWeek.non_bio },
  ].sort((a, b) => b.value - a.value);

  insights.push(
    `Primary waste type: ${wasteTypes[0].name} (${wasteTypes[0].value}kg), followed by ${wasteTypes[1].name} and ${wasteTypes[2].name}`
  );

  // Check for trends over time
  const plasticTrend =
    weeklySummary[weeklySummary.length - 1].plastic - weeklySummary[0].plastic;
  const bioTrend =
    weeklySummary[weeklySummary.length - 1].bio - weeklySummary[0].bio;
  const nonBioTrend =
    weeklySummary[weeklySummary.length - 1].non_bio - weeklySummary[0].non_bio;

  if (plasticTrend > 0) {
    insights.push(
      "Plastic waste shows an increasing trend over the observed period"
    );
  }
  if (bioTrend > 0) {
    insights.push(
      "Organic waste shows an increasing trend over the observed period"
    );
  }
  if (nonBioTrend > 0) {
    insights.push(
      "General waste shows an increasing trend over the observed period"
    );
  }

  return insights;
}

// Initialize chart rendering
async function initializeDashboard() {
  console.log("Initializing dashboard...");
  await renderCharts();
  await renderWasteCompositionAnalysis();
}

initializeDashboard();
