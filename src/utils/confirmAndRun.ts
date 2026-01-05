import { confirmDialog } from "primereact/confirmdialog";

interface ConfirmOptions {
  message: string;
  header: string;
  acceptCallback: () => Promise<boolean>;
}

export const confirmAndRun = ({ message, header, acceptCallback }: ConfirmOptions): Promise<boolean> => {
  return new Promise((resolve) => {
    confirmDialog({
      message,
      header,
      icon: "pi pi-exclamation-triangle",
      acceptLabel: "Sí",
      rejectLabel: "Cancelar",
      accept: async () => {
        const result = await acceptCallback();
        resolve(result);
      },
      reject: () => resolve(false),
    });
  });
};
