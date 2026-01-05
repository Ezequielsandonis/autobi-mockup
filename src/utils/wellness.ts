import { ContainerType, ExerciseType, ExerciseIntensity, CONTAINER_ML_VALUES, CALORIES_PER_MINUTE } from "../features/wellness/types/wellness.types";

/**
 * Obtiene el label en español para cada tipo de contenedor
 */
export const formatContainerType = (container: ContainerType): string => {
  const labels: Record<ContainerType, string> = {
    [ContainerType.GLASS]: "Vaso",
    [ContainerType.CUP]: "Taza",
    [ContainerType.SMALL_BOTTLE]: "Botella pequeña",
    [ContainerType.BOTTLE]: "Botella",
    [ContainerType.LARGE_BOTTLE]: "Botella grande",
    [ContainerType.THERMOS]: "Termo",
    [ContainerType.SPORTS_BOTTLE]: "Botella deportiva",
    [ContainerType.CUSTOM]: "Personalizado",
  };
  return labels[container];
};

/**
 * Obtiene emoji representativo para cada tipo de contenedor
 */
export const getContainerEmoji = (container: ContainerType): string => {
  const emojis: Record<ContainerType, string> = {
    [ContainerType.GLASS]: "🥤",
    [ContainerType.CUP]: "☕",
    [ContainerType.SMALL_BOTTLE]: "🍶",
    [ContainerType.BOTTLE]: "💧",
    [ContainerType.LARGE_BOTTLE]: "🧴",
    [ContainerType.THERMOS]: "🫖",
    [ContainerType.SPORTS_BOTTLE]: "🏋️",
    [ContainerType.CUSTOM]: "🔧",
  };
  return emojis[container];
};

/**
 * Formatea el tipo de ejercicio en español con categorización
 */
export const formatExerciseType = (exercise: ExerciseType): string => {
  const labels: Record<ExerciseType, string> = {
    // Cardio
    [ExerciseType.RUNNING]: "Correr",
    [ExerciseType.WALKING]: "Caminar",
    [ExerciseType.CYCLING]: "Ciclismo",
    [ExerciseType.SWIMMING]: "Natación",
    [ExerciseType.ROWING]: "Remo",
    [ExerciseType.ELLIPTICAL]: "Elíptica",
    [ExerciseType.JUMP_ROPE]: "Saltar la cuerda",
    [ExerciseType.HIKING]: "Senderismo",
    [ExerciseType.DANCING]: "Baile",

    // Fuerza
    [ExerciseType.WEIGHTLIFTING]: "Entrenamiento con pesas",
    [ExerciseType.BODYWEIGHT]: "Ejercicios de peso corporal",
    [ExerciseType.CROSSFIT]: "CrossFit",
    [ExerciseType.CALISTHENICS]: "Calistenia",

    // Flexibilidad
    [ExerciseType.YOGA]: "Yoga",
    [ExerciseType.PILATES]: "Pilates",
    [ExerciseType.STRETCHING]: "Estiramientos",
    [ExerciseType.TAI_CHI]: "Tai Chi",

    // Deportes
    [ExerciseType.SOCCER]: "Fútbol",
    [ExerciseType.BASKETBALL]: "Baloncesto",
    [ExerciseType.TENNIS]: "Tenis",
    [ExerciseType.VOLLEYBALL]: "Voleibol",
    [ExerciseType.BADMINTON]: "Bádminton",
    [ExerciseType.TABLE_TENNIS]: "Tenis de mesa",
    [ExerciseType.GOLF]: "Golf",

    // Artes marciales
    [ExerciseType.BOXING]: "Boxeo",
    [ExerciseType.KICKBOXING]: "Kickboxing",
    [ExerciseType.KARATE]: "Karate",
    [ExerciseType.JUDO]: "Judo",
    [ExerciseType.MMA]: "MMA",

    // Otros
    [ExerciseType.CLIMBING]: "Escalada",
    [ExerciseType.SKIING]: "Esquí",
    [ExerciseType.SKATING]: "Patinaje",
    [ExerciseType.SURFING]: "Surf",
    [ExerciseType.CUSTOM]: "Personalizado",
  };
  return labels[exercise];
};

/**
 * Obtiene la categoría del ejercicio
 */
export const getExerciseCategory = (exercise: ExerciseType): string => {
  const cardio = [
    ExerciseType.RUNNING,
    ExerciseType.WALKING,
    ExerciseType.CYCLING,
    ExerciseType.SWIMMING,
    ExerciseType.ROWING,
    ExerciseType.ELLIPTICAL,
    ExerciseType.JUMP_ROPE,
    ExerciseType.HIKING,
    ExerciseType.DANCING,
  ];

  const strength = [ExerciseType.WEIGHTLIFTING, ExerciseType.BODYWEIGHT, ExerciseType.CROSSFIT, ExerciseType.CALISTHENICS];

  const flexibility = [ExerciseType.YOGA, ExerciseType.PILATES, ExerciseType.STRETCHING, ExerciseType.TAI_CHI];

  const sports = [ExerciseType.SOCCER, ExerciseType.BASKETBALL, ExerciseType.TENNIS, ExerciseType.VOLLEYBALL, ExerciseType.BADMINTON, ExerciseType.TABLE_TENNIS, ExerciseType.GOLF];

  const martialArts = [ExerciseType.BOXING, ExerciseType.KICKBOXING, ExerciseType.KARATE, ExerciseType.JUDO, ExerciseType.MMA];

  if (cardio.includes(exercise)) return "Cardio";
  if (strength.includes(exercise)) return "Fuerza";
  if (flexibility.includes(exercise)) return "Flexibilidad";
  if (sports.includes(exercise)) return "Deportes";
  if (martialArts.includes(exercise)) return "Artes Marciales";
  return "Otros";
};

/**
 * Formatea la intensidad del ejercicio en español
 */
export const formatExerciseIntensity = (intensity: ExerciseIntensity): string => {
  const labels: Record<ExerciseIntensity, string> = {
    [ExerciseIntensity.LOW]: "Baja",
    [ExerciseIntensity.MODERATE]: "Moderada",
    [ExerciseIntensity.HIGH]: "Alta",
    [ExerciseIntensity.VERY_HIGH]: "Muy alta",
  };
  return labels[intensity];
};

/**
 * Calcula calorías quemadas basado en intensidad y duración
 */
export const calculateCalories = (intensity: ExerciseIntensity, durationMinutes: number): number => {
  const caloriesPerMinute = CALORIES_PER_MINUTE[intensity];
  return Math.round(caloriesPerMinute * durationMinutes);
};

/**
 * Obtiene color de severidad para el progreso (PrimeReact)
 */
export const getProgressColor = (percentage: number): "success" | "info" | "warning" | "danger" => {
  if (percentage >= 100) return "success";
  if (percentage >= 70) return "info";
  if (percentage >= 40) return "warning";
  return "danger";
};

/**
 * Obtiene color de severidad basado en meta cumplida
 */
export const getGoalSeverity = (current: number, goal: number): "success" | "warning" | "danger" => {
  const percentage = (current / goal) * 100;
  if (percentage >= 100) return "success";
  if (percentage >= 50) return "warning";
  return "danger";
};

/**
 * Formatea mililitros a formato legible (ej: 2500ml → 2.5L)
 */
export const formatWaterAmount = (ml: number): string => {
  if (ml >= 1000) {
    return `${(ml / 1000).toFixed(1)}L`;
  }
  return `${ml}ml`;
};

/**
 * Formatea duración de ejercicio (ej: 65 minutos → 1h 5min)
 */
export const formatDuration = (minutes: number): string => {
  if (minutes < 60) {
    return `${minutes}min`;
  }
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return mins > 0 ? `${hours}h ${mins}min` : `${hours}h`;
};

/**
 * Formatea número de pasos con separadores de miles
 */
export const formatSteps = (steps: number): string => {
  return steps.toLocaleString("es-ES");
};

/**
 * Calcula porcentaje de cumplimiento de meta
 */
export const calculateGoalPercentage = (current: number, goal: number): number => {
  if (goal === 0) return 0;
  return Math.min(Math.round((current / goal) * 100), 100);
};

/**
 * Obtiene el valor en ml de un tipo de contenedor
 */
export const getContainerMl = (container: ContainerType, customMl?: number): number => {
  if (container === ContainerType.CUSTOM && customMl) {
    return customMl;
  }
  return CONTAINER_ML_VALUES[container];
};
