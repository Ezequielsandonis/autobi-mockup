// Tipos temporales - estos módulos no existen en este proyecto
type PlanStatus = "CONSUMED" | "PLANNED" | "SKIPPED";
type ConsumedItemSource = "MANUAL" | "SCANNED" | "RECIPE";
type MealType = "BREAKFAST" | "LUNCH" | "DINNER" | "SNACK" | "PRE_WORKOUT" | "POST_WORKOUT" | "POST_DINNER";

// import { PlanStatus } from "../features/meal-planning/types/mealPlan.types";
// import { ConsumedItemSource } from "../features/daily-log/types/dailyLog.types";
// import { MealType } from "../features/meals/types/meal.types";

/**
 * Obtiene el color del badge según el estado del plan
 */
export const getMealPlanStatusColor = (status: PlanStatus): "success" | "info" | "warning" | "danger" => {
  switch (status) {
    case PlanStatus.CONSUMED:
      return "success";
    case PlanStatus.PLANNED:
      return "info";
    case PlanStatus.SKIPPED:
      return "warning";
    default:
      return "info";
  }
};

/**
 * Obtiene el texto del badge según el estado del plan
 */
export const getMealPlanStatusLabel = (status: PlanStatus): string => {
  switch (status) {
    case PlanStatus.CONSUMED:
      return "Consumido";
    case PlanStatus.PLANNED:
      return "Pendiente";
    case PlanStatus.SKIPPED:
      return "Omitido";
    default:
      return status;
  }
};

/**
 * Formatea el tipo de comida a español
 */
export const formatMealType = (mealType: MealType): string => {
  switch (mealType) {
    case MealType.BREAKFAST:
      return "Desayuno";
    case MealType.LUNCH:
      return "Almuerzo";
    case MealType.DINNER:
      return "Cena";
    case MealType.SNACK:
      return "Snack";
    case MealType.PRE_WORKOUT:
      return "Pre-Entreno";
    case MealType.POST_WORKOUT:
      return "Post-Entreno";
    case MealType.POST_DINNER:
      return "Post-Cena";
    default:
      return mealType;
  }
};

/**
 * Obtiene el emoji según el tipo de comida
 */
export const getMealTypeEmoji = (mealType: MealType): string => {
  switch (mealType) {
    case MealType.BREAKFAST:
      return "🍳";
    case MealType.LUNCH:
      return "🍽️";
    case MealType.DINNER:
      return "🌙";
    case MealType.SNACK:
      return "🍎";
    case MealType.PRE_WORKOUT:
      return "💪";
    case MealType.POST_WORKOUT:
      return "🏋️";
    case MealType.POST_DINNER:
      return "🌃";
    default:
      return "🍴";
  }
};

/**
 * Formatea una fecha a string legible
 */
export const formatPlanDate = (date: string): string => {
  const d = new Date(date);
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return d.toLocaleDateString("es-ES", options);
};

/**
 * Calcula el porcentaje de adherencia al plan
 */
export const calculateAdherence = (consumed: number, total: number): number => {
  if (total === 0) return 0;
  return Math.round((consumed / total) * 100);
};

/**
 * Obtiene el color de la barra de progreso según el porcentaje
 */
export const getAdherenceColor = (percentage: number): "success" | "warning" | "danger" => {
  if (percentage >= 80) return "success";
  if (percentage >= 60) return "warning";
  return "danger";
};
