import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import * as XLSX from "xlsx";
import defaultAnalyticsData from "../data/defaultAnalyticsData";
import metaDataWorkbookUrl from "../assets/meta_data.xlsx";

const AnalyticsDataContext = createContext({
  data: defaultAnalyticsData,
  fileName: "",
  selectedRegion: "Global",
  availableRegions: ["Global", "APAC", "EMEA", "Brazil", "North America"],
  importExcelData: async () => { },
  setSelectedRegion: () => { },
});

const clone = (value) => JSON.parse(JSON.stringify(value));

const toNumber = (value) => {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : 0;
};

const toPercentText = (value) => `${(toNumber(value) * 100).toFixed(1)}%`;

const formatRegion = (value) => {
  const raw = value?.toString().trim().toLowerCase();
  if (raw === "apac") return "APAC";
  if (raw === "emea") return "EMEA";
  if (raw === "north america") return "North America";
  if (raw === "brazil") return "Brazil";
  if (raw === "global") return "Global";
  return value;
};

const formatDepartment = (value) => {
  const raw = `${value || ""}`.trim().toLowerCase();
  if (!raw) return "Unknown";
  if (raw === "r&d") return "R&D";
  if (raw === "hr") return "HR";
  return raw
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0].toUpperCase() + part.slice(1))
    .join(" ");
};

const average = (values) => {
  if (!values.length) return 0;
  return values.reduce((acc, n) => acc + n, 0) / values.length;
};

const parseYears = (value) => {
  if (value === null || value === undefined) return null;
  const match = value.toString().replace(/\s+/g, "").match(/(\d*\.?\d+)/);
  if (!match) return null;
  const years = Number(match[1]);
  return Number.isFinite(years) ? years : null;
};

const getSheetAoa = (workbook, sheetName) => {
  const sheet = workbook.Sheets[sheetName];
  if (!sheet) return [];
  return XLSX.utils.sheet_to_json(sheet, { header: 1, defval: "" });
};

const rowIsMostlyEmpty = (row = []) => row.every((cell) => !`${cell}`.trim());

const buildMapByRegion = (rows, valueKey) => {
  const byRegion = {};
  rows.forEach((row) => {
    const region = formatRegion(row.region);
    byRegion[region] = (byRegion[region] || 0) + toNumber(row[valueKey]);
  });
  return byRegion;
};

const months = ["jan", "feb", "mar", "apr", "may", "jun"];

const parseWorkbook = (workbook) => {
  const parsed = clone(defaultAnalyticsData);

  const headcountRows = getSheetAoa(workbook, "Sheet1")
    .slice(1)
    .filter((row) => !rowIsMostlyEmpty(row))
    .map((row) => ({
      region: row[0],
      department: row[1],
      headcount: toNumber(row[2]),
    }));

  const openRoleRows = getSheetAoa(workbook, "Sheet2")
    .slice(1)
    .filter((row) => !rowIsMostlyEmpty(row))
    .map((row) => ({
      region: row[0],
      department: row[1],
      openRoles: toNumber(row[2]),
    }));

  const attritionRows = getSheetAoa(workbook, "Sheet3")
    .slice(1)
    .filter((row) => !rowIsMostlyEmpty(row))
    .map((row) => ({
      region: row[0],
      department: row[1],
      attritionRate: toNumber(row[2]),
    }));

  const tenureRows = getSheetAoa(workbook, "Sheet4")
    .slice(1)
    .filter((row) => !rowIsMostlyEmpty(row))
    .map((row) => ({
      region: row[0],
      department: row[1],
      avgTenureText: row[2],
      avgTenureYears: parseYears(row[2]),
    }));

  const headcountByRegion = buildMapByRegion(headcountRows, "headcount");
  const openRolesByRegion = buildMapByRegion(openRoleRows, "openRoles");

  const regionOrder = ["APAC", "EMEA", "Brazil", "North America"];
  const regionCards = regionOrder.map((region) => ({
    region,
    value: headcountByRegion[region] || 0,
    openRoles: openRolesByRegion[region] || 0,
  }));

  parsed.overview.regionCards = regionCards;
  parsed.overview.headcountByRegion = regionCards.map((item) => ({ region: item.region, value: item.value }));

  const regionDepartmentMap = {};

  const touchRegionDepartment = (regionRaw, departmentRaw) => {
    const region = formatRegion(regionRaw);
    const department = formatDepartment(departmentRaw);
    if (!regionDepartmentMap[region]) regionDepartmentMap[region] = {};
    if (!regionDepartmentMap[region][department]) {
      regionDepartmentMap[region][department] = {
        name: department,
        headcount: 0,
        openRoles: 0,
        attritionRate: 0,
        attritionSamples: 0,
      };
    }
    return regionDepartmentMap[region][department];
  };

  headcountRows.forEach((row) => {
    const item = touchRegionDepartment(row.region, row.department);
    item.headcount += row.headcount;
  });

  openRoleRows.forEach((row) => {
    const item = touchRegionDepartment(row.region, row.department);
    item.openRoles += row.openRoles;
  });

  attritionRows.forEach((row) => {
    const item = touchRegionDepartment(row.region, row.department);
    item.attritionRate += row.attritionRate;
    item.attritionSamples += 1;
  });

  const regionDrilldown = regionOrder.map((region) => {
    const departmentItems = Object.values(regionDepartmentMap[region] || {}).map((item) => ({
      name: item.name,
      headcount: item.headcount,
      openRoles: item.openRoles,
      attritionRate: item.attritionSamples ? (item.attritionRate / item.attritionSamples) : 0,
    })).sort((a, b) => b.headcount - a.headcount);

    const topAttritionDepartment = departmentItems.reduce((prev, curr) => (
      curr.attritionRate > (prev?.attritionRate || 0) ? curr : prev
    ), null);

    return {
      region,
      headcount: departmentItems.reduce((sum, item) => sum + item.headcount, 0),
      openRoles: departmentItems.reduce((sum, item) => sum + item.openRoles, 0),
      topRisk: topAttritionDepartment ? `${topAttritionDepartment.name} Attrition` : "Hiring",
      functions: departmentItems,
    };
  });

  parsed.overview.regionDrilldown = regionDrilldown;

  const totalHeadcount = headcountRows.reduce((acc, row) => acc + row.headcount, 0);
  const totalOpenRoles = openRoleRows.reduce((acc, row) => acc + row.openRoles, 0);
  const avgAttrition = average(attritionRows.map((row) => row.attritionRate));
  const avgTenure = average(tenureRows.map((row) => row.avgTenureYears).filter((v) => v !== null));

  parsed.dashboard.kpis = [
    { title: "Headcount", value: totalHeadcount.toLocaleString("en-US"), subtitle: "Region: Global" },
    { title: "Open Roles", value: totalOpenRoles.toLocaleString("en-US"), subtitle: "Hiring Pipeline" },
    { title: "Attrition", value: toPercentText(avgAttrition), subtitle: "Monthly Rate" },
    { title: "Avg Tenure", value: `${avgTenure.toFixed(1)} yrs`, subtitle: "Workforce Stability" },
    parsed.dashboard.kpis[4],
    parsed.dashboard.kpis[5],
  ];

  const sheet5 = getSheetAoa(workbook, "Sheet5");
  const attritionTrendRows = sheet5
    .slice(2)
    .filter((row) => !rowIsMostlyEmpty(row))
    .map((row) => ({
      region: `${row[0]}`.trim().toLowerCase(),
      role: row[1],
      jan: toNumber(row[2]),
      feb: toNumber(row[3]),
      mar: toNumber(row[4]),
      apr: toNumber(row[5]),
      may: toNumber(row[6]),
      jun: toNumber(row[7]),
    }));

  const globalAttritionRows = attritionTrendRows.filter((row) => row.region === "global");
  const overviewAttritionTrend = months.map((monthKey, index) => {
    const monthLabel = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"][index];
    const monthAvg = average(globalAttritionRows.map((row) => row[monthKey]));
    return { month: monthLabel, value: Number((monthAvg * 100).toFixed(2)) };
  });
  parsed.overview.attritionTrend = overviewAttritionTrend;
  parsed.risk.attritionTrend = overviewAttritionTrend;

  const sheet6 = getSheetAoa(workbook, "Sheet6");
  const budgetRows = sheet6
    .slice(3)
    .filter((row) => !rowIsMostlyEmpty(row))
    .map((row) => ({
      region: `${row[0]}`.trim().toLowerCase(),
      role: row[1],
      status: `${row[2]}`.trim().toLowerCase(),
      jan: toNumber(row[3]),
      feb: toNumber(row[4]),
      mar: toNumber(row[5]),
      apr: toNumber(row[6]),
      may: toNumber(row[7]),
      jun: toNumber(row[8]),
    }));

  const globalBudgetRows = budgetRows.filter((row) => row.region === "global");
  const overlay = months.map((monthKey, index) => {
    const monthLabel = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"][index];
    const budget = globalBudgetRows.filter((row) => row.status === "budget").reduce((acc, row) => acc + row[monthKey], 0);
    const actual = globalBudgetRows.filter((row) => row.status === "actual").reduce((acc, row) => acc + row[monthKey], 0);
    const forecast = globalBudgetRows.filter((row) => row.status === "forecast").reduce((acc, row) => acc + row[monthKey], 0);
    return {
      month: monthLabel,
      budget: Number(budget.toFixed(2)),
      actual: Number(actual.toFixed(2)),
      forecast: Number(forecast.toFixed(2)),
    };
  });
  parsed.overview.costOverlay = overlay;
  parsed.overview.varianceNotes = overlay.map((row) => ({ month: row.month, budget: row.budget, actual: row.actual }));

  const projected = Math.round(totalHeadcount * (1 - avgAttrition));
  const demand = totalHeadcount + totalOpenRoles;
  parsed.planning.comparisonData = [
    { region: "Baseline", value: totalHeadcount },
    { region: "Projected", value: projected },
    { region: "Demand", value: demand },
  ];

  const sheet7 = getSheetAoa(workbook, "Sheet7");
  const watchlistRows = sheet7
    .slice(3)
    .filter((row) => !rowIsMostlyEmpty(row))
    .map((row) => ({
      role: row[0],
      region: formatRegion(row[1]),
      team: row[2],
      tenure: row[3],
      performance: `${row[4]}`.trim().toLowerCase() === "high" ? "High" : "Med",
      risk: `${row[5]}`.trim().toLowerCase() === "high" ? "High" : "Med",
      likelyDriver: row[6],
    }));

  parsed.risk.retentionWatchlist = watchlistRows;
  const highRiskCount = watchlistRows.filter((row) => row.risk === "High").length;
  const medRiskCount = watchlistRows.filter((row) => row.risk === "Med").length;
  const lowRiskCount = 0;
  const riskTotal = Math.max(1, highRiskCount + medRiskCount + lowRiskCount);
  parsed.risk.riskSegmentation = [
    { name: "High Risk", value: Math.round((highRiskCount / riskTotal) * 100) },
    { name: "Medium Risk", value: Math.round((medRiskCount / riskTotal) * 100) },
    { name: "Low Risk", value: Math.round((lowRiskCount / riskTotal) * 100) },
  ];
  parsed.overview.riskSegmentation = parsed.risk.riskSegmentation;

  const sheet8 = getSheetAoa(workbook, "Sheet8");
  const talentRows = sheet8
    .slice(3)
    .filter((row) => !rowIsMostlyEmpty(row))
    .map((row) => ({
      id: row[0],
      department: row[1],
      region: formatRegion(`${row[2]}`.trim()),
      potential: `${row[3]}`.trim().toLowerCase(),
      performance: `${row[4]}`.trim().toLowerCase(),
    }));

  const levelIndex = { low: 0, mid: 1, high: 2 };
  const grid = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];

  talentRows.forEach((row) => {
    const potentialIdx = levelIndex[row.potential];
    const performanceIdx = levelIndex[row.performance];
    if (potentialIdx === undefined || performanceIdx === undefined) return;
    grid[potentialIdx][performanceIdx] += 1;
  });

  const talentTotal = Math.max(1, talentRows.length);
  const highPerformance = talentRows.filter((row) => row.performance === "high").length;
  const highPotential = talentRows.filter((row) => row.potential === "high").length;
  const rdPopulation = talentRows.filter((row) => `${row.department}`.trim().toLowerCase() === "r&d").length;
  const highHigh = talentRows.filter((row) => row.performance === "high" && row.potential === "high").length;
  const mobilePool = talentRows.filter((row) => row.potential === "mid" || row.potential === "high").length;

  parsed.talent.grid = grid;
  parsed.talent.radar = [
    { metric: "Delivery", value: Math.round((highPerformance / talentTotal) * 100) },
    { metric: "Potential", value: Math.round((highPotential / talentTotal) * 100) },
    { metric: "Skill Depth", value: Math.round((rdPopulation / talentTotal) * 100) },
    { metric: "Engagement", value: Math.round((highHigh / talentTotal) * 100) },
    { metric: "Mobility", value: Math.round((mobilePool / talentTotal) * 100) },
  ];

  const sheet9 = getSheetAoa(workbook, "Sheet9");
  const issueRows = sheet9
    .slice(3)
    .filter((row) => !rowIsMostlyEmpty(row))
    .map((row) => {
      const severityRaw = `${row[1]}`.trim().toLowerCase();
      let serverity = "Low";
      if (severityRaw === "high") serverity = "High";
      if (severityRaw === "medium") serverity = "Medium";
      return {
        id: row[0],
        serverity,
        system: row[2],
        issue: row[3],
        impact: row[4],
        owner: row[5],
        age: row[6],
      };
    });

  parsed.governance.issueLog = issueRows;
  parsed.governance.openIssues = issueRows.length;

  return parsed;
};

const filterDataByRegion = (baseData, region) => {
  if (region === "Global") return baseData;

  const filtered = clone(baseData);

  // Filter overview region cards
  if (filtered.overview?.regionCards) {
    filtered.overview.regionCards = filtered.overview.regionCards.filter(card => card.region === region);
  }

  if (filtered.overview?.headcountByRegion) {
    filtered.overview.headcountByRegion = filtered.overview.headcountByRegion.filter(item => item.region === region);
  }

  if (filtered.overview?.regionDrilldown) {
    filtered.overview.regionDrilldown = filtered.overview.regionDrilldown.filter(item => item.region === region);
  }

  // Update KPIs based on filtered region
  if (filtered.overview?.regionCards?.length > 0) {
    const regionData = filtered.overview.regionCards[0];
    filtered.dashboard.kpis[0].value = regionData.value.toLocaleString();
    filtered.dashboard.kpis[0].subtitle = `Region: ${region}`;
    filtered.dashboard.kpis[1].value = regionData.openRoles.toString();
  }

  // Filter talent data
  if (filtered.talent?.talentPipeline) {
    filtered.talent.talentPipeline = filtered.talent.talentPipeline.filter(item => item.region === region);
  }

  if (filtered.talent?.successionPlanning) {
    filtered.talent.successionPlanning = filtered.talent.successionPlanning.filter(item => item.region === region);
  }

  // Filter planning data
  if (filtered.planning?.headcountPlan) {
    filtered.planning.headcountPlan = filtered.planning.headcountPlan.filter(item => item.region === region);
  }

  if (filtered.planning?.costModel) {
    filtered.planning.costModel = filtered.planning.costModel.filter(item => item.region === region);
  }

  return filtered;
};

export const AnalyticsDataProvider = ({ children }) => {
  const [baseData, setBaseData] = useState(defaultAnalyticsData);
  const [fileName, setFileName] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("Global");
  const [availableRegions, setAvailableRegions] = useState(["Global", "APAC", "EMEA", "Brazil", "North America"]);

  useEffect(() => {
    let active = true;

    const loadDefaultWorkbook = async () => {
      try {
        const response = await fetch(metaDataWorkbookUrl);
        const buffer = await response.arrayBuffer();
        const workbook = XLSX.read(buffer, { type: "array" });
        const parsed = parseWorkbook(workbook);
        if (!active) return;
        setBaseData(parsed);
        
        // Extract available regions from data
        const regions = ["Global"];
        if (parsed.overview?.regionCards) {
          parsed.overview.regionCards.forEach(card => {
            if (card.region && !regions.includes(card.region)) {
              regions.push(card.region);
            }
          });
        }
        setAvailableRegions(regions);
        setFileName("meta_data.xlsx");
      } catch (error) {
        if (!active) return;
        setBaseData(defaultAnalyticsData);
      }
    };

    loadDefaultWorkbook();
    return () => {
      active = false;
    };
  }, []);

  const importExcelData = useCallback(async (file) => {
    const buffer = await file.arrayBuffer();
    const workbook = XLSX.read(buffer, { type: "array" });
    const parsed = parseWorkbook(workbook);
    setBaseData(parsed);
    
    // Extract available regions from data
    const regions = ["Global"];
    if (parsed.overview?.regionCards) {
      parsed.overview.regionCards.forEach(card => {
        if (card.region && !regions.includes(card.region)) {
          regions.push(card.region);
        }
      });
    }
    setAvailableRegions(regions);
    setFileName(file.name);
    setSelectedRegion("Global");
  }, []);

  const data = useMemo(() => filterDataByRegion(baseData, selectedRegion), [baseData, selectedRegion]);

  const value = useMemo(() => ({
    data,
    fileName,
    selectedRegion,
    availableRegions,
    importExcelData,
    setSelectedRegion,
  }), [data, fileName, selectedRegion, availableRegions, importExcelData]);

  return <AnalyticsDataContext.Provider value={value}>{children}</AnalyticsDataContext.Provider>;
};

export const useAnalyticsData = () => useContext(AnalyticsDataContext);
