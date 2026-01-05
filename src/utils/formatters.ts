/**
 * Converts a hex color code to an RGBA color string.
 *
 * @param hex - The hex color code in the format `#RRGGBB`.
 * @param alpha - The alpha (opacity) value, a number between 0 and 1.
 * @returns The RGBA color string in the format `rgba(r, g, b, alpha)`.
 */
export const hexToRgba = (hex: string, alpha: number) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

export const getLocalDate = (date: Date) => {
  const dateLocal = new Date(date);
  dateLocal.setHours(dateLocal.getHours() - 6);
  return dateLocal;
};

export const getLegibleArgDate = (date: any) => {
  const dateARG = new Date(date).toLocaleString("es-AR", { timeZone: "America/Argentina/Buenos_Aires" });
  try {
    return dateARG.replace(",", "");
  } catch (error) {}
};

type SnakeToCamelCase<S extends string> = S extends `${infer T}_${infer U}` ? `${T}${Capitalize<SnakeToCamelCase<U>>}` : S;

type ConvertSnakeToCamel<T> = {
  [K in keyof T as SnakeToCamelCase<string & K>]: T[K] extends object ? ConvertSnakeToCamel<T[K]> : T[K];
};

export const snakeToCamelObject = <T extends object>(snakeCaseObj: T): ConvertSnakeToCamel<T> =>
  Array.isArray(snakeCaseObj)
    ? (snakeCaseObj.map((item) => (typeof item === "object" && item !== null ? snakeToCamelObject(item) : item)) as ConvertSnakeToCamel<T>)
    : Object.entries(snakeCaseObj).reduce(
        (acc, [key, value]) => ({
          ...acc,
          [key.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase())]: value && typeof value === "object" ? snakeToCamelObject(value) : value,
        }),
        {} as any
      );

/**
 * Convierte un objeto de camelCase a snake_case.
 * @param obj - El objeto original en camelCase.
 * @returns El objeto convertido a snake_case.
 */
export const camelToSnakeObject = <T extends Record<string, any>>(obj: T): Record<string, any> => {
  if (Array.isArray(obj)) {
    return obj.map((item) => (typeof item === "object" && item !== null ? camelToSnakeObject(item) : item));
  } else if (typeof obj === "object" && obj !== null) {
    return Object.keys(obj).reduce((acc, key) => {
      const snakeKey = key.replace(/([A-Z])/g, "_$1").toLowerCase();
      acc[snakeKey] = typeof obj[key] === "object" ? camelToSnakeObject(obj[key]) : obj[key];
      return acc;
    }, {} as Record<string, any>);
  }
  return obj;
};

export const formatCurrency = (value: number | string): string => {
  const number = typeof value === "string" ? parseFloat(value) : value;

  if (isNaN(number)) return "-";

  return number
    .toFixed(2) // siempre 2 decimales
    .replace(".", ",") // decimal: punto → coma
    .replace(/\B(?=(\d{3})+(?!\d))/g, "."); // miles: insertar punto
};
