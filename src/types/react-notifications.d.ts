declare module "react-notifications" {
  // Aquí puedes agregar tipos personalizados si conoces los métodos y componentes del módulo.
  export const NotificationContainer: React.ComponentType<any>;
  export const NotificationManager: {
    success: (message: string, title?: string, timeOut?: number, callback?: () => void) => void;
    error: (message: string, title?: string, timeOut?: number, callback?: () => void) => void;
    warning: (message: string, title?: string, timeOut?: number, callback?: () => void) => void;
    info: (message: string, title?: string, timeOut?: number, callback?: () => void) => void;
  };
}
