/**
 * Datos nutricionales completos
 */
export interface NutritionFacts {
  calories: number;
  protein?: number;
  carbs?: number;
  fats?: number;
  saturatedFat?: number;
  transFat?: number;
  fiber?: number;
  sugar?: number;
  sodium?: number;
  potassium?: number;
  calcium?: number;
  iron?: number;
  vitaminA?: number;
  vitaminC?: number;
  vitaminD?: number;
  cholesterol?: number;
}

/**
 * Detalle de comparación para un macro nutriente
 */
export interface MacroDetail {
  consumed: number;
  goal: number;
  diff: number;
  percentage: number;
}

/**
 * Comparación nutricional (objetivo vs consumido)
 */
export interface NutritionComparison {
  calories: MacroDetail;
  protein: MacroDetail;
  carbs: MacroDetail;
  fats: MacroDetail;
}

/**
 * Datos nutricionales con objetivo y comparación
 */
export interface DailyNutritionSummary {
  totalNutrition: NutritionFacts;
  goal: NutritionFacts | null;
  comparison: NutritionComparison | null;
}
