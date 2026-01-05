import React from "react";

interface UserFilterProps {
    filters: {
        name: string;
        email: string;
        showInactive: boolean;
    };
    setFilters: React.Dispatch<React.SetStateAction<UserFilterProps["filters"]>>;
}

export const UserFilter: React.FC<UserFilterProps> = ({ filters, setFilters }) => {
    return (
        <div className="bg-gray-100 rounded shadow p-4 flex flex-wrap gap-4 items-end justify-end">
            {/* <div>
                <label className="block text-sm font-bold mb-1">Nombre</label>
                <input
                    type="text"
                    className="p-2 border rounded w-44"
                    value={filters.name}
                    onChange={(e) => setFilters((prev) => ({ ...prev, name: e.target.value }))}
                />
            </div> */}
            <div>
                {/* <label className="block text-sm font-bold mb-1">Email</label>
                <input
                    type="text"
                    className="p-2 border rounded w-44"
                    value={filters.email}
                    onChange={(e) => setFilters((prev) => ({ ...prev, email: e.target.value }))}
                /> */}
            </div>
            <div className="flex items-center gap-2">
                <input
                    type="checkbox"
                    checked={filters.showInactive}
                    onChange={() => setFilters((prev) => ({ ...prev, showInactive: !prev.showInactive }))}
                />
                <label className="text-sm">Mostrar desactivados</label>
            </div>
            {/* <button
                className="p-button p-button-warning"
                onClick={() => setFilters({ name: "", email: "", showInactive: false })}
            >
                Limpiar
            </button> */}
        </div>
    );
};
