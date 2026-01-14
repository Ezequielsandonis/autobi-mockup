import React, { useState, useMemo } from "react";
import { Card } from "primereact/card";
import { Dropdown } from "primereact/dropdown";
import { colors } from "../../../shared/design-system";
import { MicroType } from "../types";
import { MicroProductosView } from "./MicroProductosView";
import { MicroClientesView } from "./MicroClientesView";
import { MicroVendedoresView } from "./MicroVendedoresView";

const microTypeOptions = [
  { label: "Producto", value: "producto" },
  { label: "Cliente", value: "cliente" },
  { label: "Vendedor", value: "vendedor" },
];

export const MicroView: React.FC = () => {
  const [microType, setMicroType] = useState<MicroType>("producto");

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4" style={{ backgroundColor: colors.background.paper, padding: "16px", borderRadius: "8px" }}>
        <label className="text-sm font-medium" style={{ color: colors.text.primary }}>
          Tipo de Análisis:
        </label>
        <Dropdown
          value={microType}
          onChange={(e) => setMicroType(e.value)}
          options={microTypeOptions}
          optionLabel="label"
          optionValue="value"
          style={{ minWidth: "200px" }}
        />
      </div>

      {microType === "producto" && <MicroProductosView />}
      {microType === "cliente" && <MicroClientesView />}
      {microType === "vendedor" && <MicroVendedoresView />}
    </div>
  );
};
