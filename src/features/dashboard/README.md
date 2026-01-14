# Dashboard Feature - Backend Connection Guide

## Current State

- ✅ All components use mock data
- ✅ API structure prepared in `store/dashboardApi.ts` (commented)
- ✅ Types defined in `types/index.ts`
- ⚠️ **Note: Use English nomenclature for new code**

## Quick Connection Steps

### 1. Uncomment API File

Open `store/dashboardApi.ts` and uncomment all endpoints.

### 2. Replace Mock Data

In each component, replace:
```typescript
// BEFORE
import { mockData } from "../store/mockData";
const data = mockData;

// AFTER
import { useGetDataQuery } from "../store/dashboardApi";
const { data: apiData, isLoading, error } = useGetDataQuery();
const data = apiData?.result;
```

### 3. Hide Sections (Optional)

Use feature flags in `pages/DashboardPage.tsx`:

```typescript
const ENABLED_SECTIONS = {
  historical: true,
  impact: false, // Hide until ready
};
```

See `CONNECTION_GUIDE.md` for detailed instructions.

## Sections to Hide/Show

- Historical Analysis → `ENABLED_SECTIONS.historical`
- Impact Autobimation → `ENABLED_SECTIONS.impact`
- Macro View → `ENABLED_SECTIONS.macro`
- Micro View → `ENABLED_SECTIONS.micro`
