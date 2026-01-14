import React from "react";
import { Card } from "primereact/card";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Tag } from "primereact/tag";
import { colors } from "../../../shared/design-system";
import { mockMicroProductos } from "../store/mockData";
import { formatCurrency, formatNumber, formatPercent } from "../utils/formatters";

export const MicroProductosView: React.FC = () => {
  const tendenciaBodyTemplate = (rowData: any) => {
    const getSeverity = (tendencia: string) => {
      if (tendencia === "creciente") return "success";
      if (tendencia === "decreciente") return "danger";
      return "warning";
    };

    return (
      <Tag value={rowData.tendencia} severity={getSeverity(rowData.tendencia)} />
    );
  };

  const estacionalBodyTemplate = (rowData: any) => {
    return rowData.esEstacional ? (
      <Tag value="Estacional" severity="info" />
    ) : (
      <Tag value="No estacional" severity="secondary" />
    );
  };

  return (
    <Card title="Análisis Detallado por Producto" className="shadow-sm">
      <DataTable
        value={mockMicroProductos}
        paginator
        rows={10}
        rowsPerPageOptions={[5, 10, 20]}
        emptyMessage="No hay datos disponibles"
      >
        <Column field="productoName" header="Producto" sortable />
        <Column field="marca" header="Marca" sortable />
        <Column field="rubro" header="Rubro" sortable />
        <Column field="facturacion" header="Facturación" body={(row) => formatCurrency(row.facturacion)} sortable />
        <Column field="ordenes" header="Órdenes" body={(row) => formatNumber(row.ordenes)} sortable />
        <Column field="clientes" header="Clientes" body={(row) => formatNumber(row.clientes)} sortable />
        <Column field="tendencia" header="Tendencia" body={tendenciaBodyTemplate} />
        <Column field="variacionAnual" header="Variación Anual" body={(row) => formatPercent(row.variacionAnual)} sortable />
        <Column field="esEstacional" header="Estacionalidad" body={estacionalBodyTemplate} />
      </DataTable>
    </Card>
  );
};
