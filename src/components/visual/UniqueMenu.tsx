import React, { useRef } from "react";
import { Menu } from "primereact/menu";
import { MenuItemCommandEvent } from "primereact/menuitem";

interface UniqueMenuProps {
  model: Array<{
    label: string;
    command?: (e: MenuItemCommandEvent) => void; // Ajuste del tipo del evento
    disabled?: boolean;
  }>;
}

const UniqueMenu: React.FC<UniqueMenuProps> = ({ model }) => {
  const menu = useRef<Menu | null>(null);

  return (
    <div className="flex items-center relative">
      {/* Ícono para abrir el menú */}
      <i
        className="pi pi-ellipsis-v text-xl cursor-pointer"
        onClick={(e) => {
          e.stopPropagation(); // Evita la propagación del evento
          menu.current?.toggle(e);
        }}
      />

      {/* Menú de PrimeReact */}
      <Menu
        popup
        ref={menu}
        model={model.map((item) => ({
          ...item,
          command: (e) => {
            e.originalEvent.stopPropagation(); // Asegura que el evento no se propague
            item.command?.(e); // Ejecuta el comando definido en el modelo
          },
          className: item.disabled ? "pointer-events-none opacity-50" : "hover:bg-blue-500 hover:text-white",
        }))}
        className="bg-white shadow-lg rounded-md"
      />
    </div>
  );
};

export default UniqueMenu;
