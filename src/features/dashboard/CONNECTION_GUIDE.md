# Dashboard Backend Connection Guide

## Overview

This guide explains how to connect the Dashboard feature to the backend API when endpoints are ready.

## Current State

- All components use mock data from `store/mockData.ts`
- API structure is prepared in `store/dashboardApi.ts` (commented out)
- Types are defined in `types/index.ts`
- Components are ready to receive real data

## Implementation Steps

### Step 1: Uncomment and Configure API Endpoints

1. Open `src/features/dashboard/store/dashboardApi.ts`
2. Uncomment the entire file
3. Adjust endpoint URLs to match your backend routes
4. Verify response types match backend structure

### Step 2: Update Components to Use Real Data

For each component, replace mock data with API hooks:

#### Historical Analysis View

**File:** `components/AnalisisHistoricoView.tsx`

```typescript
// BEFORE (using mock data):
import { mockGeneralMetrics } from "../store/mockData";
const metrics = mockGeneralMetrics;

// AFTER (using API):
import { useGetHistoricalGeneralMetricsQuery } from "../store/dashboardApi";
const { data: metricsData, isLoading } = useGetHistoricalGeneralMetricsQuery();
const metrics = metricsData?.result;
```

#### Monthly Trend Chart

**File:** `components/GeneralView.tsx`

```typescript
// BEFORE:
import { mockMonthlyData36Meses } from "../store/mockData";
<MonthlyTrendChart data={mockMonthlyData36Meses} ... />

// AFTER:
import { useGetHistoricalMonthlyDataQuery } from "../store/dashboardApi";
const { data: monthlyData } = useGetHistoricalMonthlyDataQuery();
<MonthlyTrendChart data={monthlyData?.result || []} ... />
```

#### Macro View

**File:** `components/MacroView.tsx`

```typescript
// BEFORE:
import { mockMacroFabricanteMarca, ... } from "../store/mockData";
const data = useMemo(() => {
  switch (dimension) {
    case "fabricante-marca-producto": return mockMacroFabricanteMarca;
    // ...
  }
}, [dimension]);

// AFTER:
import { useGetHistoricalMacroDataQuery } from "../store/dashboardApi";
const { data: macroData } = useGetHistoricalMacroDataQuery({ dimension });
const data = macroData?.result || [];
```

#### Micro Views

Similar pattern for:
- `components/MicroProductosView.tsx` → `useGetHistoricalMicroProductosQuery`
- `components/MicroClientesView.tsx` → `useGetHistoricalMicroClientesQuery`
- `components/MicroVendedoresView.tsx` → `useGetHistoricalMicroVendedoresQuery`

#### Impact View

**File:** `components/ImpactoAutobimationView.tsx`

```typescript
// BEFORE:
import { mockImpactoAutobimation, mockFeatureSummary } from "../store/mockData";
const { metrics } = mockImpactoAutobimation;

// AFTER:
import { useGetImpactMetricsQuery, useGetFeatureSummaryQuery } from "../store/dashboardApi";
const { data: impactData } = useGetImpactMetricsQuery();
const { data: summaryData } = useGetFeatureSummaryQuery();
const { metrics } = impactData?.result || {};
const summary = summaryData?.result || {};
```

### Step 3: Add Loading and Error States

Add loading and error handling to all views:

```typescript
const { data, isLoading, error } = useGetHistoricalGeneralMetricsQuery();

if (isLoading) {
  return <SkeletonCard />; // or appropriate loading component
}

if (error) {
  return <EmptyState title="Error" description="Failed to load data" />;
}
```

### Step 4: Hide Sections Until Ready (Optional)

To hide sections until backend is ready, use feature flags:

**File:** `components/AnalisisHistoricoView.tsx` or `pages/DashboardPage.tsx`

```typescript
const ENABLED_SECTIONS = {
  general: true,      // Enable when ready
  macro: false,       // Hide until ready
  micro: false,       // Hide until ready
  impact: true,       // Enable when ready
};

// In component:
{ENABLED_SECTIONS.macro && <MacroView />}
```

Or use environment variables:

```typescript
const ENABLE_MACRO_VIEW = import.meta.env.VITE_ENABLE_MACRO_VIEW === "true";
```

## Data Transformation

If backend response structure differs from frontend types:

1. Create transformers in `utils/transformers.ts`
2. Use in API endpoints with `transformResponse`
3. Or transform in components before using data

Example:

```typescript
// utils/transformers.ts
export const transformBackendMetrics = (backendData: any): GeneralMetrics => {
  return {
    facturacion: backendData.total_invoicing,
    kilosLitros: backendData.total_kilos_liters,
    // ... map fields
  };
};
```

## Backend Endpoint Structure Expected

```
GET  /dashboard/historical/general              → GeneralMetrics
GET  /dashboard/historical/monthly              → MonthlyData[]
GET  /dashboard/historical/macro/{dimension}    → MacroData[]
GET  /dashboard/historical/micro/productos      → MicroProductoData[]
GET  /dashboard/historical/micro/clientes       → MicroClienteData[]
GET  /dashboard/historical/micro/vendedores     → MicroVendedorData[]
GET  /dashboard/impact                          → ImpactoAutobimation
GET  /dashboard/features/summary                → FeatureSummary
```

All endpoints should return `ApiResponse<T>` format:

```typescript
{
  result: T,
  success: boolean,
  message?: string
}
```

## Testing Checklist

- [ ] Uncomment dashboardApi.ts
- [ ] Configure endpoint URLs
- [ ] Replace mock data with API calls in all views
- [ ] Add loading states
- [ ] Add error handling
- [ ] Test with real backend
- [ ] Verify data transformation if needed
- [ ] Hide/show sections as needed
- [ ] Update types if backend structure differs

## Notes

- Keep mock data files for development/testing
- Use feature flags or env vars to toggle sections
- All components use React.memo for performance
- Types are ready but may need adjustment for backend structure
