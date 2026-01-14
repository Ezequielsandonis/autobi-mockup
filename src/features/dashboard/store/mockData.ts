/**
 * Datos mock para desarrollo del Dashboard
 */

import {
  GeneralMetrics,
  MonthlyData,
  MacroData,
  MicroProductoData,
  MicroClienteData,
  MicroVendedorData,
  ImpactoAutobimation,
  FeatureSummary,
} from "../types";

// Generar datos mensuales para 36 meses (3 años) - Valores más bajos para mostrar impacto
const generateMonthlyData = (startYear: number, startMonth: number): MonthlyData[] => {
  const data: MonthlyData[] = [];
  let year = startYear;
  let month = startMonth;
  // Valores base más bajos (sin Autobimation)
  const baseValues = {
    facturacion: 18000000,
    kilosLitros: 110000,
    bultos: 3800,
    ordenes: 950,
    clientes: 380,
  };
  
  for (let i = 0; i < 36; i++) {
    const monthNames = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
    const variation = Math.sin(i / 6) * 0.08; // Variación más controlada
    data.push({
      month: monthNames[month],
      year,
      facturacion: baseValues.facturacion * (1 + variation) + (Math.random() - 0.5) * 1500000,
      kilosLitros: baseValues.kilosLitros * (1 + variation) + (Math.random() - 0.5) * 10000,
      bultos: baseValues.bultos * (1 + variation) + (Math.random() - 0.5) * 300,
      ordenes: baseValues.ordenes * (1 + variation) + (Math.random() - 0.5) * 100,
      clientes: baseValues.clientes * (1 + variation) + (Math.random() - 0.5) * 20,
    });
    
    month++;
    if (month >= 12) {
      month = 0;
      year++;
    }
  }
  
  return data;
};

// Datos de los últimos 36 meses (Enero 2024 - Diciembre 2026)
export const mockMonthlyData36Meses = generateMonthlyData(2024, 0);

// Métricas generales (promedio de 36 meses) - Valores más bajos sin Autobimation
export const mockGeneralMetrics: GeneralMetrics = {
  facturacion: 19500000,
  kilosLitros: 118000,
  bultos: 3950,
  ordenes: 1020,
  clientes: 405,
};

// Datos Macro - Por Fabricante/Marca/Producto (top 10) - Valores más bajos
export const mockMacroFabricanteMarca: MacroData[] = [
  { id: "1", name: "Coca Cola Company", facturacion: 2200000, kilosLitros: 32000, bultos: 850, ordenes: 280, clientes: 240, porcentajeSobreTotal: 11.3 },
  { id: "2", name: "Molinos Río de la Plata", facturacion: 1950000, kilosLitros: 27000, bultos: 780, ordenes: 260, clientes: 220, porcentajeSobreTotal: 10.0 },
  { id: "3", name: "Arcor", facturacion: 1750000, kilosLitros: 24000, bultos: 720, ordenes: 240, clientes: 200, porcentajeSobreTotal: 9.0 },
  { id: "4", name: "La Serenísima (Mastellone)", facturacion: 1550000, kilosLitros: 22000, bultos: 680, ordenes: 220, clientes: 190, porcentajeSobreTotal: 7.9 },
  { id: "5", name: "Unilever", facturacion: 1400000, kilosLitros: 20000, bultos: 630, ordenes: 210, clientes: 180, porcentajeSobreTotal: 7.2 },
  { id: "6", name: "P&G", facturacion: 1250000, kilosLitros: 18000, bultos: 590, ordenes: 195, clientes: 170, porcentajeSobreTotal: 6.4 },
  { id: "7", name: "Aceitera General Deheza", facturacion: 1100000, kilosLitros: 16000, bultos: 550, ordenes: 180, clientes: 160, porcentajeSobreTotal: 5.6 },
  { id: "8", name: "Quilmes (AB InBev)", facturacion: 1050000, kilosLitros: 15000, bultos: 520, ordenes: 175, clientes: 150, porcentajeSobreTotal: 5.4 },
  { id: "9", name: "Ledesma", facturacion: 980000, kilosLitros: 14000, bultos: 500, ordenes: 170, clientes: 145, porcentajeSobreTotal: 5.0 },
  { id: "10", name: "Química Estrella", facturacion: 850000, kilosLitros: 12000, bultos: 460, ordenes: 155, clientes: 135, porcentajeSobreTotal: 4.4 },
];

// Datos Macro - Por Rubro/Línea - Valores más bajos
export const mockMacroRubroLinea: MacroData[] = [
  { id: "1", name: "Almacén", facturacion: 6000000, kilosLitros: 42000, bultos: 1450, ordenes: 380, clientes: 310, porcentajeSobreTotal: 30.8 },
  { id: "2", name: "Bebidas", facturacion: 4400000, kilosLitros: 32000, bultos: 1100, ordenes: 310, clientes: 280, porcentajeSobreTotal: 22.6 },
  { id: "3", name: "Lácteos", facturacion: 3400000, kilosLitros: 25000, bultos: 900, ordenes: 280, clientes: 240, porcentajeSobreTotal: 17.4 },
  { id: "4", name: "Limpieza", facturacion: 2500000, kilosLitros: 13000, bultos: 680, ordenes: 210, clientes: 195, porcentajeSobreTotal: 12.8 },
  { id: "5", name: "Perfumería", facturacion: 3200000, kilosLitros: 10000, bultos: 620, ordenes: 190, clientes: 170, porcentajeSobreTotal: 16.4 },
];

// Datos Macro - Por Ramo - Valores más bajos
export const mockMacroRamo: MacroData[] = [
  { id: "1", name: "Kioscos", facturacion: 8500000, kilosLitros: 60000, bultos: 2000, ordenes: 520, clientes: 200, porcentajeSobreTotal: 43.6 },
  { id: "2", name: "Autoservicios", facturacion: 6400000, kilosLitros: 46000, bultos: 1500, ordenes: 420, clientes: 90, porcentajeSobreTotal: 32.8 },
  { id: "3", name: "Tradicionales", facturacion: 4600000, kilosLitros: 32000, bultos: 1080, ordenes: 300, clientes: 130, porcentajeSobreTotal: 23.6 },
];

// Datos Macro - Por Vendedor - Valores más bajos
export const mockMacroVendedor: MacroData[] = [
  { id: "1", name: "Juan Pérez", facturacion: 2500000, kilosLitros: 18000, bultos: 620, ordenes: 160, clientes: 62, porcentajeSobreTotal: 12.8 },
  { id: "2", name: "María González", facturacion: 2300000, kilosLitros: 16500, bultos: 570, ordenes: 145, clientes: 57, porcentajeSobreTotal: 11.8 },
  { id: "3", name: "Carlos Rodríguez", facturacion: 2150000, kilosLitros: 15500, bultos: 540, ordenes: 138, clientes: 53, porcentajeSobreTotal: 11.0 },
  { id: "4", name: "Ana Martínez", facturacion: 2000000, kilosLitros: 14500, bultos: 510, ordenes: 130, clientes: 50, porcentajeSobreTotal: 10.3 },
  { id: "5", name: "Luis Fernández", facturacion: 1850000, kilosLitros: 13500, bultos: 490, ordenes: 125, clientes: 48, porcentajeSobreTotal: 9.5 },
];

// Datos Micro - Por Producto - Valores más bajos
export const mockMicroProductos: MicroProductoData[] = [
  {
    productoId: "1",
    productoName: "Coca Cola 2.25L",
    marca: "Coca Cola",
    fabricante: "Coca Cola Company",
    rubro: "Bebidas",
    linea: "Gaseosas",
    facturacion: 600000,
    kilosLitros: 8500,
    bultos: 250,
    ordenes: 200,
    clientes: 170,
    tendencia: "creciente",
    variacionAnual: 8.5,
    estacionalidad: { t1: 22, t2: 28, t3: 32, t4: 18 },
    esEstacional: true,
  },
  {
    productoId: "2",
    productoName: "Aceite Cocinero 900ml",
    marca: "Cocinero",
    fabricante: "Aceitera General Deheza",
    rubro: "Almacén",
    linea: "Aceites",
    facturacion: 440000,
    kilosLitros: 6000,
    bultos: 200,
    ordenes: 160,
    clientes: 140,
    tendencia: "estable",
    variacionAnual: 2.1,
    estacionalidad: { t1: 25, t2: 24, t3: 25, t4: 26 },
    esEstacional: false,
  },
  // Agregar más productos según necesidad
];

// Datos Micro - Por Cliente - Valores más bajos
export const mockMicroClientes: MicroClienteData[] = [
  {
    clienteId: "1",
    clienteName: "Kiosco San Martín",
    ramo: "Kiosco",
    provincia: "Buenos Aires",
    localidad: "La Plata",
    facturacion: 320000,
    kilosLitros: 2300,
    bultos: 85,
    ordenes: 32,
    tendencia: "creciente",
    variacionAnual: 12.5,
  },
  {
    clienteId: "2",
    clienteName: "Autoservicio El Economía",
    ramo: "Autoservicio",
    provincia: "Buenos Aires",
    localidad: "Mar del Plata",
    facturacion: 270000,
    kilosLitros: 2000,
    bultos: 75,
    ordenes: 28,
    tendencia: "creciente",
    variacionAnual: 9.8,
  },
];

// Datos Micro - Por Vendedor - Valores más bajos
export const mockMicroVendedores: MicroVendedorData[] = [
  {
    vendedorId: "1",
    vendedorName: "Juan Pérez",
    facturacion: 2500000,
    kilosLitros: 18000,
    bultos: 620,
    ordenes: 160,
    clientes: 62,
    tendencia: "creciente",
    variacionAnual: 15.2,
  },
  {
    vendedorId: "2",
    vendedorName: "María González",
    facturacion: 2300000,
    kilosLitros: 16500,
    bultos: 570,
    ordenes: 145,
    clientes: 57,
    tendencia: "creciente",
    variacionAnual: 11.8,
  },
];

// Impacto Autobimation (6 meses) - Valores mejorados notablemente
export const mockImpactoAutobimation: ImpactoAutobimation = {
  periodo: {
    start: new Date(2025, 6, 1), // Julio 2025
    end: new Date(2025, 11, 31), // Diciembre 2025
  },
  metrics: {
    facturacion: {
      antes: 19500000, // promedio mensual histórico (más bajo)
      despues: 25350000, // +30% - Impacto notable
      cambio: 30.0,
    },
    kilosLitros: {
      antes: 118000,
      despues: 153400, // +30%
      cambio: 30.0,
    },
    bultos: {
      antes: 3950,
      despues: 5135, // +30%
      cambio: 30.0,
    },
    ordenes: {
      antes: 1020,
      despues: 1428, // +40% - Mayor impacto en órdenes
      cambio: 40.0,
    },
    clientes: {
      antes: 405,
      despues: 486, // +20%
      cambio: 20.0,
    },
  },
};

// Datos para gráfico comparativo de evolución (6 meses)
export const mockComparativeData = {
  facturacion: [
    { month: "Jul", antes: 19500000, despues: 20500000 },
    { month: "Ago", antes: 19600000, despues: 21800000 },
    { month: "Sep", antes: 19700000, despues: 23200000 },
    { month: "Oct", antes: 19800000, despues: 24500000 },
    { month: "Nov", antes: 19900000, despues: 25800000 },
    { month: "Dic", antes: 20000000, despues: 27000000 },
  ],
  ventas: [
    { month: "Jul", antes: 1020, despues: 1150 },
    { month: "Ago", antes: 1030, despues: 1220 },
    { month: "Sep", antes: 1040, despues: 1300 },
    { month: "Oct", antes: 1050, despues: 1360 },
    { month: "Nov", antes: 1060, despues: 1400 },
    { month: "Dic", antes: 1070, despues: 1428 },
  ],
  rotacionProductos: [
    { month: "Jul", antes: 85, despues: 92 },
    { month: "Ago", antes: 86, despues: 98 },
    { month: "Sep", antes: 87, despues: 105 },
    { month: "Oct", antes: 88, despues: 112 },
    { month: "Nov", antes: 89, despues: 118 },
    { month: "Dic", antes: 90, despues: 125 },
  ],
};

// Resumen por Feature
export const mockFeatureSummary: FeatureSummary = {
  ticketPlus: {
    carritosEnviados: 7500,
    carritosAbiertos: 5400,
    pedidosAgregados: 2700,
    tasaConversion: 36.0,
    valorAgregado: 6750000,
  },
  autoFolder: {
    revistasCreadas: 156,
    revistasEnviadas: 156,
    ordenesGeneradas: 2340,
    aperturasOrdenes: 1872,
    tasaApertura: 80.0,
  },
  empoweredSeller: {
    sugerenciasEnviadas: 11250,
    coincidencias: 2925,
    tasaCoincidencia: 26.0,
    alertasEnviadas: 850,
  },
};
