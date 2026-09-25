const defaultAnalyticsData = {
  appMeta: {
    dataHealth: "98%",
    lastRefresh: "Today 08:45 AM (IST)",
  },
  dashboard: {
    kpis: [
      { title: "Headcount", value: "1,170", subtitle: "Region: Global" },
      { title: "Open Roles", value: "80", subtitle: "Hiring Pipeline" },
      { title: "Attrition", value: "3.2%", subtitle: "Monthly Rate" },
      { title: "Avg Tenure", value: "3.6 yrs", subtitle: "Workforce Stability" },
      { title: "Cost/HC", value: "$92K", subtitle: "Annual estimate" },
      { title: "Action Center", value: "12", subtitle: "Approval - playbooks", attention: true },
    ],
  },
  overview: {
    regionCards: [
      { region: "APAC", value: 420, openRoles: 28 },
      { region: "EMEA", value: 310, openRoles: 22 },
      { region: "Brazil", value: 180, openRoles: 28 },
      { region: "North America", value: 260, openRoles: 20 },
    ],
    headcountByRegion: [
      { region: "APAC", value: 420 },
      { region: "EMEA", value: 310 },
      { region: "Brazil", value: 180 },
      { region: "North America", value: 260 },
    ],
    attritionTrend: [
      { month: "Jan", value: 2.1 },
      { month: "Feb", value: 2.4 },
      { month: "Mar", value: 2.9 },
      { month: "Apr", value: 3.2 },
      { month: "May", value: 3.0 },
      { month: "Jun", value: 2.7 },
    ],
    hiringVelocity: [
      { month: "Jan", value: 12 },
      { month: "Feb", value: 15 },
      { month: "Mar", value: 18 },
      { month: "Apr", value: 14 },
      { month: "May", value: 16 },
      { month: "Jun", value: 20 },
    ],
    riskSegmentation: [
      { name: "High Risk", value: 20 },
      { name: "Medium Risk", value: 35 },
      { name: "Low Risk", value: 45 },
    ],
    costOverlay: [
      { month: "Jan", budget: 10.2, actual: 9.8, forecast: 10.0 },
      { month: "Feb", budget: 10.5, actual: 10.1, forecast: 10.3 },
      { month: "Mar", budget: 11.0, actual: 10.6, forecast: 10.8 },
      { month: "Apr", budget: 10.8, actual: 10.4, forecast: 10.6 },
      { month: "May", budget: 11.2, actual: 10.9, forecast: 11.0 },
      { month: "Jun", budget: 11.0, actual: 10.7, forecast: 10.9 },
    ],
    varianceNotes: [
      { month: "Jan", budget: 9.8, actual: 10.1 },
      { month: "Feb", budget: 9.9, actual: 10.2 },
      { month: "Mar", budget: 10.0, actual: 10.6 },
      { month: "Apr", budget: 10.1, actual: 10.4 },
      { month: "May", budget: 10.2, actual: 10.9 },
      { month: "Jun", budget: 10.3, actual: 10.8 },
    ],
    regionDrilldown: [
      {
        region: "APAC",
        headcount: 420,
        openRoles: 28,
        topRisk: "Hiring",
        functions: [
          { name: "R&D", headcount: 150, openRoles: 10, attritionRate: 0.026 },
          { name: "Operations", headcount: 120, openRoles: 7, attritionRate: 0.031 },
          { name: "Sales", headcount: 90, openRoles: 8, attritionRate: 0.034 },
          { name: "G&A", headcount: 60, openRoles: 3, attritionRate: 0.02 },
        ],
      },
      {
        region: "EMEA",
        headcount: 310,
        openRoles: 22,
        topRisk: "Hiring",
        functions: [
          { name: "R&D", headcount: 130, openRoles: 9, attritionRate: 0.024 },
          { name: "Operations", headcount: 95, openRoles: 7, attritionRate: 0.029 },
          { name: "Sales", headcount: 55, openRoles: 4, attritionRate: 0.03 },
          { name: "G&A", headcount: 30, openRoles: 2, attritionRate: 0.018 },
        ],
      },
      {
        region: "Brazil",
        headcount: 180,
        openRoles: 28,
        topRisk: "Hiring",
        functions: [
          { name: "R&D", headcount: 70, openRoles: 10, attritionRate: 0.032 },
          { name: "Operations", headcount: 55, openRoles: 9, attritionRate: 0.038 },
          { name: "Sales", headcount: 35, openRoles: 6, attritionRate: 0.035 },
          { name: "G&A", headcount: 20, openRoles: 3, attritionRate: 0.021 },
        ],
      },
      {
        region: "North America",
        headcount: 260,
        openRoles: 20,
        topRisk: "Hiring",
        functions: [
          { name: "R&D", headcount: 100, openRoles: 9, attritionRate: 0.028 },
          { name: "Operations", headcount: 80, openRoles: 5, attritionRate: 0.024 },
          { name: "Sales", headcount: 50, openRoles: 4, attritionRate: 0.03 },
          { name: "G&A", headcount: 30, openRoles: 2, attritionRate: 0.019 },
        ],
      },
    ],
  },
  planning: {
    comparisonData: [
      { region: "Baseline", value: 1100 },
      { region: "Projected", value: 1100 },
      { region: "Demand", value: 1300 },
    ],
  },
  risk: {
    riskSegmentation: [
      { name: "High Risk", value: 20 },
      { name: "Medium Risk", value: 35 },
      { name: "Low Risk", value: 45 },
    ],
    attritionTrend: [
      { month: "Jan", value: 2.1 },
      { month: "Feb", value: 2.4 },
      { month: "Mar", value: 2.9 },
      { month: "Apr", value: 3.2 },
      { month: "May", value: 3.0 },
      { month: "Jun", value: 2.7 },
    ],
    retentionWatchlist: [
      { role: "Sr.Engineer", region: "EMEA", team: "R&D", tenure: "2.1y", performance: "High", risk: "High", likelyDriver: "Promotion lag" },
      { role: "HRBP", region: "APAC", team: "HR", tenure: "1.4y", performance: "Med", risk: "High", likelyDriver: "Manager change" },
      { role: "QA Lead", region: "North America", team: "Quality", tenure: "3.2y", performance: "High", risk: "Med", likelyDriver: "Workload" },
      { role: "Analyst", region: "Brazil", team: "Ops", tenure: "0.9y", performance: "Med", risk: "Med", likelyDriver: "Role mismatch" },
    ],
  },
  talent: {
    radar: [
      { metric: "Delivery", value: 82 },
      { metric: "Potential", value: 68 },
      { metric: "Skill Depth", value: 72 },
      { metric: "Engagement", value: 75 },
      { metric: "Mobility", value: 60 },
    ],
    grid: [
      [6, 18, 22],
      [9, 28, 35],
      [12, 24, 16],
    ],
  },
  governance: {
    openIssues: 4,
    issueLog: [
      { id: "DQ-1021", serverity: "High", system: "Workday", issue: "Duplicate worker IDs", impact: "Headcount mismatch", owner: "HRIS", age: "2d" },
      { id: "DQ-0998", serverity: "High", system: "Planful", issue: "Cost center unmapped", impact: "Workforce cost variance", owner: "Finance", age: "5d" },
      { id: "DQ-1107", serverity: "Medium", system: "Performance", issue: "Missing rating for 34 employees", impact: "Talent review gaps", owner: "HR Ops", age: "1d" },
      { id: "DQ-1044", serverity: "Low", system: "Workday", issue: "Manager hierarchy drift", impact: "Approval routing", owner: "HRIS", age: "3h" },
    ],
  },
  globalOps: {
    requests: [
      { id: "REQ-221", status: "Pending", region: "EMEA", sla: "SLA 8h", title: "Cost Validation", description: "Confirm May cost deltas for R&D" },
      { id: "REQ-222", status: "Pending", region: "APAC", sla: "SLA 8h", title: "Hiring Plan", description: "FY workforce plan revisions" },
      { id: "REQ-223", status: "Pending", region: "EMEA", sla: "SLA 8h", title: "Cost Validation", description: "Confirm May cost deltas for R&D" },
      { id: "REQ-224", status: "Pending", region: "EMEA", sla: "SLA 8h", title: "Cost Validation", description: "Confirm May cost deltas for R&D" },
    ],
  },
  actionCenter: {
    summary: {
      pendingApprovals: 3,
      activePlaybooks: 3,
      reminders: 3,
    },
  },
};

export default defaultAnalyticsData;
