import React from "react";
import { Card } from "primereact/card";
import { colors, spacingPresets } from "../../../shared/design-system";
import { mockMonthlyData36Meses } from "../store/mockData";
import { MonthlyTrendChart } from "./MonthlyTrendChart";

export const GeneralView: React.FC = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: spacingPresets.section.md }}>
      {/* Gráficos de Tendencias */}
      <Card title="Evolución Temporal - Facturación" className="shadow-sm">
        <MonthlyTrendChart
          data={mockMonthlyData36Meses}
          dataKey="facturacion"
          label="Facturación"
          formatValue={(v) => `$${(v / 1000000).toFixed(1)}M`}
        />
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: spacingPresets.section.md }}>
        <Card title="Evolución Temporal - Kilos/Litros" className="shadow-sm">
          <MonthlyTrendChart
            data={mockMonthlyData36Meses}
            dataKey="kilosLitros"
            label="Kilos/Litros"
            formatValue={(v) => `${(v / 1000).toFixed(0)}K`}
          />
        </Card>

        <Card title="Evolución Temporal - Órdenes" className="shadow-sm">
          <MonthlyTrendChart
            data={mockMonthlyData36Meses}
            dataKey="ordenes"
            label="Órdenes"
            formatValue={(v) => v.toFixed(0)}
          />
        </Card>
      </div>
    </div>
  );
};
