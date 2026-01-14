import React, { useState } from "react";
import { TabView, TabPanel } from "primereact/tabview";
import { colors, spacingPresets } from "../../../shared/design-system";
import { SectionNavbar } from "../../../components/visual/SectionNavbar";
import { AnalisisHistoricoView } from "../components/AnalisisHistoricoView";
import { ImpactoAutobimationView } from "../components/ImpactoAutobimationView";

export const DashboardPage: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex flex-col h-full">
      <SectionNavbar
        title="Dashboard"
        subtitle="Análisis histórico y medición de impacto de Autobimation"
      />

      <div className="flex-1 overflow-hidden" style={{ backgroundColor: colors.background.light as string }}>
        <TabView
          activeIndex={activeIndex}
          onTabChange={(e) => setActiveIndex(e.index)}
          className="h-full"
        >
          <TabPanel header="Análisis Histórico">
            <div style={{ backgroundColor: colors.background.light as string, padding: spacingPresets.container.md }}>
              <AnalisisHistoricoView />
            </div>
          </TabPanel>
          
          <TabPanel header="Autobimation">
            <div style={{ backgroundColor: colors.background.light as string, padding: spacingPresets.container.md }}>
              <ImpactoAutobimationView />
            </div>
          </TabPanel>
        </TabView>
      </div>
    </div>
  );
};
