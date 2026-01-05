import React, { useEffect } from "react";
import { Dialog } from "primereact/dialog";
import { Controller, useForm } from "react-hook-form";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { MultiSelect } from "primereact/multiselect";
import { CreateUserDto, UpdateUserDto, UserRoles, translateUserRole } from "../../types/user.types";

interface Props {
    visible: boolean;
    onHide: () => void;
    onSubmit: (data: CreateUserDto | UpdateUserDto, id?: string) => Promise<boolean>;
    initialData?: {
        id: string;
        name: string;
        email: string;
        phone?: string;
        roles: UserRoles[];
    };
}

export const CreateUserModal: React.FC<Props> = ({ visible, onHide, onSubmit, initialData }) => {
    const isEditMode = Boolean(initialData);

    const { handleSubmit, control, reset } = useForm<CreateUserDto>({
        defaultValues: {
            name: "",
            email: "",
            password: "",
            roles: [UserRoles.EMPLOYEE],
            phone: "",
        },
    });

    useEffect(() => {
        if (initialData) {
            const { name, email, phone, roles } = initialData;
            reset({
                name,
                email,
                phone,
                roles: roles.length ? roles : [UserRoles.EMPLOYEE],
                password: "", // no editamos pass desde acá
            });
        } else {
            reset();
        }
    }, [initialData, reset]);

    const submit = async (data: CreateUserDto) => {
        const payload = isEditMode
            ? {
                name: data.name,
                email: data.email,
                phone: data.phone,
                roles: data.roles,
                ...(data.password?.trim() ? { newPassword: data.password.trim() } : {}),
            }
            : data;

        const success = await onSubmit(payload, initialData?.id);
        if (success) {
            reset();
            onHide();
        }
    };

    return (
        <Dialog
            header={isEditMode ? "Editar usuario" : "Crear nuevo usuario"}
            visible={visible}
            onHide={onHide}
            modal
            style={{ width: "30vw" }}
        >
            <form onSubmit={handleSubmit(submit)} className="flex flex-col gap-4">
                <div>
                    <label>Nombre</label>
                    <Controller
                        name="name"
                        control={control}
                        rules={{ required: "Nombre requerido" }}
                        render={({ field }) => <InputText {...field} className="w-full" />}
                    />
                </div>
                <div>
                    <label>Email</label>
                    <Controller
                        name="email"
                        control={control}
                        rules={{ required: "Email requerido" }}
                        render={({ field }) => <InputText {...field} className="w-full" />}
                    />
                </div>

                {!isEditMode && (
                    <div>
                        <label>Contraseña</label>
                        <Controller
                            name="password"
                            control={control}
                            rules={{ required: "Contraseña requerida" }}
                            render={({ field }) => <InputText type="password" {...field} className="w-full" />}
                        />
                    </div>
                )}

                <div>
                    <label>Teléfono</label>
                    <Controller
                        name="phone"
                        control={control}
                        render={({ field }) => <InputText {...field} className="w-full" />}
                    />
                </div>

                <div>
                    <label>Roles</label>
                    <Controller
                        name="roles"
                        control={control}
                        render={({ field }) => (
                            <MultiSelect
                                {...field}
                                value={field.value}
                                onChange={(e) => field.onChange(e.value)}
                                options={Object.values(UserRoles).map((role) => ({
                                    label: translateUserRole(role),
                                    value: role,
                                }))}
                                className="w-full"
                                display="chip"
                                placeholder="Seleccionar roles"
                            />
                        )}
                    />
                </div>

                <div className="flex justify-end gap-2 mt-4">
                    <Button type="button" label="Cancelar" className="p-button-text" onClick={onHide} />
                    <Button type="submit" label={isEditMode ? "Actualizar" : "Crear"} className="p-button-success" />
                </div>
            </form>
        </Dialog>
    );
};
