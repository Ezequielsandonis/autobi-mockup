import React, { useState, useMemo } from "react";
import { Card } from "primereact/card";
import { Dropdown } from "primereact/dropdown";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { colors } from "../../../shared/design-system";
import { MacroDimension, MacroData } from "../types";
import {
  mockMacroFabricanteMarca,
  mockMacroRubroLinea,
  mockMacroRamo,
  mockMacroVendedor,
} from "../store/mockData";
import { formatCurrency, formatNumber, formatPercent } from "../utils/formatters";

const dimensionOptions = [
  { label: "Fabricante / Marca / Producto", value: "fabricante-marca-producto" },
  { label: "Rubro / Línea", value: "rubro-linea" },
  { label: "Ramo", value: "ramo" },
  { label: "Vendedor", value: "vendedor" },
];

export const MacroView: React.FC = () => {
  const [dimension, setDimension] = useState<MacroDimension>("fabricante-marca-producto");

  const data = useMemo(() => {
    switch (dimension) {
      case "fabricante-marca-producto":
        return mockMacroFabricanteMarca;
      case "rubro-linea":
        return mockMacroRubroLinea;
      case "ramo":
        return mockMacroRamo;
      case "vendedor":
        return mockMacroVendedor;
      default:
        return [];
    }
  }, [dimension]);

  const facturacionBodyTemplate = (rowData: MacroData) => {
    return formatCurrency(rowData.facturacion);
  };

  const porcentajeBodyTemplate = (rowData: MacroData) => {
    return formatPercent(rowData.porcentajeSobreTotal);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4" style={{ backgroundColor: colors.background.paper, padding: "16px", borderRadius: "8px" }}>
        <label className="text-sm font-medium" style={{ color: colors.text.primary }}>
          Dimensión:
        </label>
        <Dropdown
          value={dimension}
          onChange={(e) => setDimension(e.value)}
          options={dimensionOptions}
          optionLabel="label"
          optionValue="value"
          style={{ minWidth: "300px" }}
        />
      </div>

      <Card title={`Análisis por ${dimensionOptions.find(d => d.value === dimension)?.label}`} className="shadow-sm">
        <DataTable
          value={data}
          paginator
          rows={10}
          rowsPerPageOptions={[5, 10, 20]}
          emptyMessage="No hay datos disponibles"
        >
          <Column field="name" header="Nombre" sortable />
          <Column field="facturacion" header="Facturación" body={facturacionBodyTemplate} sortable />
          {data[0]?.kilosLitros !== undefined && (
            <Column field="kilosLitros" header="Kilos/Litros" body={(row) => formatNumber(row.kilosLitros || 0)} sortable />
          )}
          {data[0]?.bultos !== undefined && (
            <Column field="bultos" header="Bultos" body={(row) => formatNumber(row.bultos || 0)} sortable />
          )}
          {data[0]?.ordenes !== undefined && (
            <Column field="ordenes" header="Órdenes" body={(row) => formatNumber(row.ordenes || 0)} sortable />
          )}
          {data[0]?.clientes !== undefined && (
            <Column field="clientes" header="Clientes" body={(row) => formatNumber(row.clientes || 0)} sortable />
          )}
          <Column field="porcentajeSobreTotal" header="% del Total" body={porcentajeBodyTemplate} sortable />
        </DataTable>
      </Card>
    </div>
  );
};
