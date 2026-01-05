import { useGetCurrentUserQuery } from "../store/usersApi";
import ContentWrapper from "../../../components/visual/ContentWrapper";
import HeaderDashboard from "../../../components/visual/HeaderDashboard";
import { Card } from "primereact/card";
import { Skeleton } from "primereact/skeleton";

export const ProfilePage: React.FC = () => {
  const { data: userData, isLoading } = useGetCurrentUserQuery();

  const user = userData?.result;

  return (
    <div className="flex flex-col gap-6">
      <HeaderDashboard
        title="Mi Perfil"
        description="Configura tus metas nutricionales y de wellness"
        icon={<i className="pi pi-user text-4xl text-blue-500" />}
      />

      <ContentWrapper>
        {/* Información del usuario */}
        <Card title="Información Personal" className="shadow-md mb-6">
          {isLoading ? (
            <div className="space-y-4">
              <Skeleton width="100%" height="2rem" />
              <Skeleton width="100%" height="2rem" />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1">Nombre Completo</label>
                <p className="text-lg font-semibold">{user?.name || "Usuario"}</p>
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Correo Electrónico</label>
                <p className="text-lg font-semibold">{user?.email || "No disponible"}</p>
              </div>
            </div>
          )}
        </Card>


        {/* Información adicional */}
        <Card className="shadow-md mt-6 bg-gradient-to-r from-blue-50 to-green-50">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-800">💡 Consejos para establecer metas</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-800 mb-2">🥗 Nutrición</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Establece metas realistas según tu actividad física</li>
                  <li>• Consulta con un nutricionista para metas personalizadas</li>
                  <li>• Ajusta gradualmente tus macros según resultados</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-800 mb-2">🏃 Wellness</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Comienza con metas alcanzables y aumenta progresivamente</li>
                  <li>• Mantén una hidratación adecuada (30-35ml/kg de peso)</li>
                  <li>• La OMS recomienda 10,000 pasos diarios</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>
      </ContentWrapper>
    </div>
  );
};
