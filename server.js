import express from "express";
import cors from "cors";
import { neon } from "@neondatabase/serverless";
import dotenv from "dotenv";
dotenv.config();
const app = express();

app.use(cors());

const sql = neon(process.env.DATABASE_URL);

// Fetch Weekly Summary
async function fetchWeeklySummary() {
  try {
    const rows = await sql`
      SELECT * FROM weekly_summary
    `;
    console.log("Weekly Summary:", rows);
    return rows;
  } catch (error) {
    console.error("Error fetching weekly summary:", error);
  }
}

// Fetch Weekly Peaks
async function fetchWeeklyPeaks() {
  try {
    const rows = await sql`
        SELECT dustbin_id, day_of_week, avg_fill
        FROM weekly_peaks
      `;
    console.log("Weekly Peeks:", rows);
    return rows;
  } catch (error) {
    console.error("Error fetching weekly peeks:", error);
  }
}

// Fetch Average Fill by Hour
async function fetchAvgFillByHour() {
  try {
    const rows = await sql`
      SELECT * FROM avg_fill_by_hour
    `;
    console.log("Average Fill by Hour:", rows);
    return rows;
  } catch (error) {
    console.error("Error fetching average fill by hour:", error);
  }
}

// Fetch Daily Fill Trends
async function fetchDailyFillTrends() {
  try {
    const rows = await sql`
      SELECT * FROM daily_fill_trends
    `;
    console.log("Daily Fill Trends:", rows);
    return rows;
  } catch (error) {
    console.error("Error fetching daily fill trends:", error);
  }
}

// API Endpoint: Weekly Summary
app.get("/api/weekly-summary", async (req, res) => {
  try {
    const data = await fetchWeeklySummary();
    res.status(200).json({ success: true, data });
  } catch (error) {
    console.error("Error in /api/weekly-summary:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

// API Endpoint: Weekly Peaks
app.get("/api/weekly-peeks", async (req, res) => {
  try {
    const data = await fetchWeeklyPeaks();
    res.status(200).json({ success: true, data });
  } catch (error) {
    console.error("Error in /api/weekly-peeks:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

// API Endpoint: Average Fill by Hour
app.get("/api/avg-fill-hour", async (req, res) => {
  try {
    const data = await fetchAvgFillByHour();
    res.status(200).json({ success: true, data });
  } catch (error) {
    console.error("Error in /api/avg-fill-hour:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

// API Endpoint: Daily Fill Trends
app.get("/api/daily-fill-trends", async (req, res) => {
  try {
    const data = await fetchDailyFillTrends();
    res.status(200).json({ success: true, data });
  } catch (error) {
    console.error("Error in /api/daily-fill-trends:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

const PORT = 3000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
