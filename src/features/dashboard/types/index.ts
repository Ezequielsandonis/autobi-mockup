/**
 * Tipos para el feature Dashboard
 */

// Métricas generales
export interface GeneralMetrics {
  facturacion: number;
  kilosLitros: number;
  bultos: number;
  ordenes: number;
  clientes: number;
}

// Métricas con período
export interface MetricsWithPeriod {
  metrics: GeneralMetrics;
  period: {
    start: Date;
    end: Date;
  };
}

// Datos mensuales para gráficos de tendencia
export interface MonthlyData {
  month: string;
  year: number;
  facturacion: number;
  kilosLitros: number;
  bultos: number;
  ordenes: number;
  clientes: number;
}

// Dimensión Macro
export type MacroDimension = 
  | "fabricante-marca-producto"
  | "rubro-linea"
  | "provincia-localidad"
  | "ramo"
  | "vendedor"
  | "cliente";

export interface MacroData {
  id: string;
  name: string;
  facturacion: number;
  kilosLitros?: number;
  bultos?: number;
  ordenes?: number;
  clientes?: number;
  porcentajeSobreTotal: number;
}

// Tipo Micro
export type MicroType = "producto" | "cliente" | "vendedor";

export interface MicroProductoData {
  productoId: string;
  productoName: string;
  marca?: string;
  fabricante?: string;
  rubro?: string;
  linea?: string;
  facturacion: number;
  kilosLitros: number;
  bultos: number;
  ordenes: number;
  clientes: number;
  // Tendencias
  tendencia: "creciente" | "decreciente" | "estable";
  variacionAnual: number; // porcentaje
  // Estacionalidad
  estacionalidad: {
    t1: number; // trimestre 1
    t2: number;
    t3: number;
    t4: number;
  };
  esEstacional: boolean;
}

export interface MicroClienteData {
  clienteId: string;
  clienteName: string;
  ramo?: string;
  provincia?: string;
  localidad?: string;
  facturacion: number;
  kilosLitros: number;
  bultos: number;
  ordenes: number;
  tendencia: "creciente" | "decreciente" | "estable";
  variacionAnual: number;
}

export interface MicroVendedorData {
  vendedorId: string;
  vendedorName: string;
  facturacion: number;
  kilosLitros: number;
  bultos: number;
  ordenes: number;
  clientes: number;
  tendencia: "creciente" | "decreciente" | "estable";
  variacionAnual: number;
}

// Impacto Autobimation
export interface ImpactoAutobimation {
  periodo: {
    start: Date;
    end: Date;
  };
  metrics: {
    facturacion: {
      antes: number;
      despues: number;
      cambio: number; // porcentaje
    };
    kilosLitros: {
      antes: number;
      despues: number;
      cambio: number;
    };
    bultos: {
      antes: number;
      despues: number;
      cambio: number;
    };
    ordenes: {
      antes: number;
      despues: number;
      cambio: number;
    };
    clientes: {
      antes: number;
      despues: number;
      cambio: number;
    };
  };
}

// Resumen por Feature
export interface FeatureSummary {
  ticketPlus?: {
    carritosEnviados: number;
    carritosAbiertos: number;
    pedidosAgregados: number;
    tasaConversion: number;
    valorAgregado: number;
  };
  autoFolder?: {
    revistasCreadas: number;
    revistasEnviadas: number;
    ordenesGeneradas: number;
    aperturasOrdenes: number;
    tasaApertura: number;
  };
  empoweredSeller?: {
    sugerenciasEnviadas: number;
    coincidencias: number;
    tasaCoincidencia: number;
    alertasEnviadas: number;
  };
}
