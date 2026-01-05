import React, { useState } from "react";
import { useCreateUserMutation, useDeactivateUserMutation, useGetAllUsersQuery, useUpdateUserMutation } from "../store/userApi";
import { CreateUserDto, UpdateUserDto, UserRoles, getUserRoleIcon, translateUserRole } from "../types/user.types";
import { UserFilter } from "../components/UserFilter";
import { CreateUserModal } from "../components/modals/CreateUserModal";
import { Button } from "primereact/button";
import { Tag } from "primereact/tag";
import { Tooltip } from "primereact/tooltip";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import UniqueMenu from "../../../components/visual/UniqueMenu";
import { useAppDispatch } from "../../../app/hooks";
import { showToast } from "../../ui/uiSlice";
import { confirmAndRun } from "../../../utils/confirmAndRun";

export const ManageUsersPage: React.FC = () => {
  const { data, refetch, isLoading } = useGetAllUsersQuery();
  const [createUser] = useCreateUserMutation();
  const [deactivateUser] = useDeactivateUserMutation();
  const [updateUser] = useUpdateUserMutation();
  const dispatch = useAppDispatch();

  const [showCreateModal, setShowCreateModal] = useState(false);
  const [filters, setFilters] = useState({ name: "", email: "", showInactive: false });
  const [selectedUser, setSelectedUser] = useState<any>(null);

  const handleCreate = async (form: CreateUserDto): Promise<boolean> => {
    try {
      await createUser(form).unwrap();
      await refetch();
      return true;
    } catch (error) {
      console.error("Error al crear usuario:", error);
      return false;
    }
  };

  const filteredUsers = data?.result?.filter((user) => {
    const matchName = filters.name ? user.name.toLowerCase().includes(filters.name.toLowerCase()) : true;
    const matchEmail = filters.email ? user.email.toLowerCase().includes(filters.email.toLowerCase()) : true;
    const matchStatus = filters.showInactive ? true : user.status !== false;
    return matchName && matchEmail && matchStatus;
  });

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Gestión de Usuarios</h2>

        <Button label="Crear Usuario" icon="pi pi-user-plus" className="p-button-success" onClick={() => setShowCreateModal(true)} />
      </div>

      <UserFilter filters={filters} setFilters={setFilters} />

      {isLoading ? (
        <p>Cargando usuarios...</p>
      ) : (
        <DataTable
          value={filteredUsers || []}
          paginator
          rows={10}
          responsiveLayout="scroll"
          header="Usuarios"
          className="shadow-md"
          showGridlines
        >
          <Column field="name" header="Nombre" sortable />
          <Column field="email" header="Email" sortable />
          <Column
            header="Roles"
            body={(user) => (
              <div className="flex gap-2 flex-wrap items-center">
                {user.roles.length > 0 ? (
                  user.roles.map((role: any) => {
                    const tooltipId = `role-tooltip-${user.id}-${role}`;
                    return (
                      <div key={tooltipId} id={tooltipId}>
                        <Tag
                          icon={getUserRoleIcon(role)}
                          className="text-xs"
                          style={{ cursor: "help" }}
                        />
                        <Tooltip target={`#${tooltipId}`} content={translateUserRole(role)} />
                      </div>
                    );
                  })
                ) : (
                  (() => {
                    const tooltipId = `role-tooltip-${user.id}-inactive`;
                    return (
                      <div key={tooltipId} id={tooltipId}>
                        <Tag
                          icon={getUserRoleIcon("inactive")}
                          className="text-xs"
                          style={{ cursor: "help" }}
                        />
                        <Tooltip target={`#${tooltipId}`} content="Sin roles activos" />
                      </div>
                    );
                  })()
                )}
              </div>
            )}
          />
          <Column
            header="Estado"
            body={(user) => (user.status ? "Activo" : "Desactivado")}
            style={{ width: "10%" }}
          />
          <Column
            header="Acciones"
            body={(user) => {
              const actions = [
                {
                  label: "Editar",
                  icon: "pi pi-pencil",
                  command: () => {
                    setSelectedUser(user);
                    setShowCreateModal(true);
                  },
                },
                {
                  label: "Blanquear password.",
                  icon: "pi pi-pencil",
                  command: () => {
                    setSelectedUser(user);
                    setShowCreateModal(true);
                  },
                },
              ];

              if (user.status) {
                actions.push({
                  label: "Desactivar",
                  icon: "pi pi-ban",
                  command: async () => {
                    await confirmAndRun({
                      header: "¿Desactivar usuario?",
                      message: `¿Confirmás desactivar a ${user.name}?`,
                      acceptCallback: async () => {
                        try {
                          await deactivateUser(user.id).unwrap();
                          dispatch(showToast({ severity: "success", summary: "Usuario desactivado" }));
                          await refetch();
                          return true;
                        } catch (err: any) {
                          dispatch(showToast({ severity: "error", summary: "Error", detail: err?.data?.message || err.message }));
                          return false;
                        }
                      },
                    });
                  },
                });
              } else {
                actions.push({
                  label: "Activar",
                  icon: "pi pi-check",
                  command: async () => {
                    await confirmAndRun({
                      header: "¿Activar usuario?",
                      message: `¿Querés activar a ${user.name}? Se le asignará el rol 'employee' si no tiene roles.`,
                      acceptCallback: async () => {
                        try {
                          const updatedRoles = user.roles.length > 0 ? user.roles : [UserRoles.EMPLOYEE];
                          await updateUser({ id: user.id, data: { status: true, roles: updatedRoles } }).unwrap();
                          dispatch(showToast({ severity: "success", summary: "Usuario activado" }));
                          await refetch();
                          return true;
                        } catch (err: any) {
                          dispatch(showToast({ severity: "error", summary: "Error", detail: err?.data?.message || err.message }));
                          return false;
                        }
                      },
                    });
                  },
                });
              }

              return <UniqueMenu model={actions} />;
            }}
            style={{ width: "10%" }}
          />
        </DataTable>
      )}

      <CreateUserModal
        visible={showCreateModal}
        onHide={() => {
          setShowCreateModal(false);
          setSelectedUser(null);
        }}
        onSubmit={async (data, id) => {
          try {
            let result
            if (id) {
              result = await updateUser({ id, data: data as UpdateUserDto }).unwrap();
            } else {
              result = await createUser(data as CreateUserDto).unwrap();
            }
            await refetch();
            dispatch(
              showToast({
                severity: "success",
                summary: "Operación con éxito",
                detail: result.message,
              })
            );
            return true;
          } catch (error) {
            return false
          }

        }}
        initialData={selectedUser}
      />

    </div>
  );
};
