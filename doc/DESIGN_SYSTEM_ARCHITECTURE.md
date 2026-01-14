# Sistema de Diseño y Arquitectura del Proyecto

## 📋 Tabla de Contenidos

1. [Introducción](#introducción)
2. [Arquitectura del Proyecto](#arquitectura-del-proyecto)
3. [Sistema de Diseño](#sistema-de-diseño)
4. [Organización de Componentes](#organización-de-componentes)
5. [Buenas Prácticas](#buenas-prácticas)
6. [Patrones de Código](#patrones-de-código)
7. [Estructura de Features](#estructura-de-features)
8. [Guías de Estilo](#guías-de-estilo)

---

## 🎯 Introducción

Este documento describe la arquitectura, el sistema de diseño y las buenas prácticas implementadas en este proyecto. Su propósito es servir como guía para mantener la consistencia, escalabilidad y calidad del código en proyectos futuros.

### Principios Fundamentales

- **Consistencia**: Todos los componentes deben seguir los mismos patrones y usar el sistema de diseño unificado.
- **Reutilización**: Componentes modulares y reutilizables siguiendo la arquitectura "Scream Architecture".
- **Mantenibilidad**: Código limpio, bien organizado y documentado.
- **Escalabilidad**: Estructura que permite crecer sin perder organización.

---

## 🏗️ Arquitectura del Proyecto

### Estructura General del Proyecto

El proyecto sigue una arquitectura **Feature-Based** combinada con **Scream Architecture** para componentes. Esta organización permite escalabilidad, mantenibilidad y separación clara de responsabilidades.

### Estructura de Directorios Detallada

#### Raíz del Proyecto

**`src/`** - Directorio principal del código fuente

#### 1. `app/` - Configuración de Redux y Estado Global

**Propósito:** Configuración centralizada de Redux Toolkit y el store de la aplicación.

**Contenido:**
- `hooks.ts` - Hooks personalizados de Redux (`useAppDispatch`, `useAppSelector`) que proporcionan tipos seguros
- `reducer.ts` - Root reducer que combina todos los reducers de la aplicación
- `store.ts` - Configuración del store de Redux, incluyendo middleware, persistencia y configuración de RTK Query

**Cuándo usar:** Para acceder al estado global o dispatch de acciones desde cualquier componente.

#### 2. `components/` - Componentes Reutilizables

**Propósito:** Componentes que pueden ser utilizados en múltiples features o páginas.

**Subdirectorios:**

- **`common/`** - Componentes comunes de la aplicación
  - Ejemplos: `Logo.tsx` - Logo de la marca
  - Componentes que no son específicos de ningún feature pero son compartidos

- **`layout/`** - Componentes de estructura y layout
  - `Sidebar.tsx` - Barra lateral principal con navegación
  - `PrivateLayout.tsx` - Layout para rutas protegidas (con sidebar)
  - `PublicLayout.tsx` - Layout para rutas públicas (sin sidebar)
  - `SectionNavbar.tsx` - Barra de navegación específica de secciones
  - `SectionTabs.tsx` - Tabs para navegación jerárquica
  - `ProtectedRoute.tsx` - Componente para proteger rutas que requieren autenticación

- **`visual/`** - Componentes del Design System (Scream Architecture)
  - Componentes base reutilizables: `Typography.tsx`, `Button.tsx`, `Input.tsx`, `Modal.tsx`
  - Componentes compuestos: `DataTable.tsx`, `FilterPanel.tsx`, `EmptyState.tsx`, `ErrorState.tsx`
  - Wrappers: `ContentWrapper.tsx`, `ButtonWrapper.tsx`, `InputWrapper.tsx`
  - Utilidades: `Breadcrumbs.tsx`, `UniqueMenu.tsx`
  - Globales: `GlobalToast.tsx`, `GlobalLoader.tsx`

**Cuándo usar:** Cuando necesites un componente que puede ser reutilizado en múltiples lugares o que forma parte del design system.

#### 3. `features/` - Features del Negocio (Feature-Based Architecture)

**Propósito:** Cada feature es un módulo independiente que contiene TODO lo relacionado con esa funcionalidad del negocio.

**Estructura de cada feature:**
- `components/` - Componentes específicos del feature
  - `organisms/` - Componentes complejos (tablas, filtros)
  - `organisms/modals/` - Modales específicos del feature
- `pages/` - Páginas del feature
- `store/` - Redux slice y API (RTK Query)
- `types/` - Tipos TypeScript específicos del feature
- `utils/` - Utilidades específicas (transformers, helpers)
- `styles/` - Estilos CSS específicos del feature (si aplica)
- `index.ts` - Exports públicos del feature

**Features existentes:**
- `auth/` - Autenticación y autorización (login, registro)
- `customers/` - Gestión de clientes
- `orders/` - Gestión de pedidos
- `representatives/` - Gestión de representantes
- `users/` - Gestión de usuarios
- `ui/` - Estado de UI global (toasts, loaders)

**Cuándo usar:** Para cualquier funcionalidad nueva del negocio, crear un nuevo feature siguiendo esta estructura.

#### 4. `pages/` - Páginas Principales

**Propósito:** Páginas de nivel superior que no pertenecen a un feature específico.

**Contenido:**
- `Dashboard.tsx` - Página principal del dashboard
- `Home.tsx` - Página de inicio
- `LandingPage.tsx` - Página de aterrizaje pública
- `NotFound.tsx` - Página 404

**Cuándo usar:** Para páginas que son puntos de entrada principales o que no encajan en un feature específico.

#### 5. `router/` - Configuración de Rutas

**Propósito:** Configuración centralizada del enrutamiento de la aplicación.

**Contenido:**
- `AppRouter.tsx` - Configuración principal de rutas usando React Router
- Define todas las rutas públicas y protegidas
- Maneja la navegación y redirecciones

**Cuándo usar:** Para agregar nuevas rutas o modificar la estructura de navegación.

#### 6. `services/` - Servicios y APIs Base

**Propósito:** Configuración base de servicios, especialmente la API base de RTK Query.

**Contenido:**
- `baseApi.ts` - Configuración base de RTK Query
  - Define el `baseUrl` de la API
  - Configura headers, interceptors, y manejo de errores
  - Proporciona el `baseApi` que todos los features usan para inyectar sus endpoints

**Cuándo usar:** Para modificar la configuración base de la API o agregar interceptors globales.

#### 7. `shared/` - Código Compartido

**Propósito:** Código que es compartido entre múltiples features pero no es un componente visual.

**Subdirectorios:**

- **`design-system/`** - Design Tokens
  - `colors.ts` - Paleta de colores del sistema
  - `spacing.ts` - Sistema de espaciado
  - `typography.ts` - Sistema de tipografía
  - `index.ts` - Exportaciones centralizadas

- **`enums/`** - Enumeraciones compartidas
  - Enums que se usan en múltiples features
  - Ejemplos: `payment-status.enum.ts`, `invoice-type.enum.ts`, `currency.enum.ts`

**Cuándo usar:** Para design tokens, enums, o utilidades que son compartidas entre features.

#### 8. `styles/` - Estilos Globales

**Propósito:** Estilos CSS globales que afectan toda la aplicación.

**Contenido:**
- `globals.css` - Estilos globales, resets, y utilidades
- `branding.css` - Estilos específicos de la marca (colores, fuentes personalizadas)

**Cuándo usar:** Para estilos que deben aplicarse globalmente o para variables CSS personalizadas.

#### 9. `types/` - Tipos TypeScript Globales

**Propósito:** Tipos y definiciones TypeScript que son globales a toda la aplicación.

**Contenido:**
- `global-types.d.ts` - Declaraciones de tipos globales
- `nutrition.types.ts` - Tipos relacionados con nutrición (si aplica)
- `react-notifications.d.ts` - Tipos para librerías externas

**Cuándo usar:** Para tipos que son compartidos globalmente o para extender tipos de librerías externas.

#### 10. `utils/` - Utilidades Globales

**Propósito:** Funciones de utilidad que pueden ser usadas en cualquier parte de la aplicación.

**Contenido:**
- `formatters.ts` - Funciones para formatear datos (fechas, monedas, números)
- `constants.ts` - Constantes globales (opciones de dropdowns, listas, etc.)
- `validators.ts` - Funciones de validación reutilizables
- `confirmAndRun.ts` - Utilidades para confirmaciones
- `mealPlanning.ts` - Utilidades específicas (si aplica)
- `wellness.ts` - Utilidades específicas (si aplica)

**Cuándo usar:** Para funciones de utilidad que no pertenecen a un feature específico.

### Flujo de Datos y Dependencias

**Jerarquía de dependencias:**
1. **Nivel más bajo:** `shared/`, `utils/`, `types/` - No dependen de nada
2. **Nivel medio:** `components/visual/` - Dependen de `shared/`
3. **Nivel alto:** `features/` - Dependen de `components/`, `shared/`, `utils/`
4. **Nivel superior:** `pages/`, `router/` - Dependen de `features/` y `components/`

**Regla importante:** Los features NO deben depender de otros features. Si necesitas compartir código entre features, moverlo a `shared/` o `components/`.

### Feature-Based Architecture

Cada feature es un módulo independiente que contiene todo lo relacionado con esa funcionalidad:

**Estructura de un feature:**
- `components/` - Componentes específicos del feature
  - `organisms/` - Componentes complejos (tablas, filtros, modales)
  - `modals/` - Modales específicos
- `pages/` - Páginas del feature
- `store/` - Redux slice y API (RTK Query)
- `types/` - Tipos TypeScript del feature
- `utils/` - Utilidades específicas (transformers, etc.)
- `styles/` - Estilos específicos del feature
- `index.ts` - Exports públicos del feature

---

## 🎨 Sistema de Diseño

### Design Tokens

El sistema de diseño está centralizado en `src/shared/design-system/` y se compone de:

#### 1. Colores (`colors.ts`)

**Estructura de colores:**
- `primary`: Colores principales (azules)
- `secondary`: Colores secundarios (grises)
- `success`, `warning`, `error`, `info`: Colores semánticos
- `gray`: Escala de grises
- `status`: Colores para estados (active, inactive, pending, etc.)
- `background`: Colores de fondo
- `text`: Colores de texto
- `border`: Colores de bordes

**Regla de oro:** NUNCA usar colores hardcodeados. Siempre usar `colors` del design system.

#### 2. Espaciado (`spacing.ts`)

**Sistema basado en múltiplos de 4px:**
- `spacing[0]` a `spacing[32]`: Valores base
- `spacingPresets.component`: Para espaciado entre componentes
- `spacingPresets.section`: Para espaciado entre secciones
- `spacingPresets.container`: Para padding de contenedores

#### 3. Tipografía (`typography.ts`)

**Variantes disponibles:**
- `h1` a `h6`: Encabezados
- `body1`, `body2`: Texto de cuerpo
- `caption`: Texto pequeño
- `overline`: Texto en mayúsculas
- `button`: Estilo para botones

### Componentes Visuales Reutilizables

Todos los componentes visuales están en `src/components/visual/` y siguen el principio de "Scream Architecture" (un componente por archivo, exportación nombrada).

#### Componentes Principales

1. **Typography** (`Typography.tsx`)
   - Componente de texto con variantes predefinidas
   - Props: `variant`, `fontWeight`, `color`, `component`, `align`

2. **Button** (`Button.tsx`)
   - Wrapper de PrimeReact Button con estilos consistentes
   - Props estándar de PrimeReact Button

3. **Input** (`Input.tsx`)
   - Componente unificado para todos los tipos de input
   - Soporta: texto, textarea, dropdown, calendar, multiselect, etc.
   - Props: `isEditing`, `isDropdown`, `isTextarea`, `isCalendar`, etc.

4. **Modal** (`Modal.tsx`)
   - Componente modal reutilizable con tamaños predefinidos
   - Tamaños: `xs`, `sm`, `md`, `lg`, `xl`, `full`
   - Props: `visible`, `onHide`, `title`, `footer`, `size`, `closable`

5. **DataTable** (`DataTable.tsx`)
   - Tabla basada en TanStack Table
   - Props: `data`, `columns`, `isLoading`, `onRowClick`, `emptyMessage`

6. **EmptyState** (`EmptyState.tsx`)
   - Estado vacío reutilizable
   - Props: `title`, `description`, `icon`, `action`

7. **ErrorState** (`ErrorState.tsx`)
   - Estado de error reutilizable
   - Props: `title`, `message`, `onRetry`

8. **Breadcrumbs** (`Breadcrumbs.tsx`)
   - Navegación breadcrumb
   - Props: `items` (array de { label, path })

9. **SectionNavbar** (`SectionNavbar.tsx`)
   - Barra de navegación para secciones
   - Props: `title`, `subtitle`, `items` (array de SectionNavItem)

10. **SectionTabs** (`SectionTabs.tsx`)
    - Tabs para navegación jerárquica
    - Props: `tabs` (array de { label, path, badge })

---

## 🧩 Organización de Componentes

### Scream Architecture

**Principio:** Un componente por archivo, exportación nombrada.

**Estructura:** Cada componente en `components/visual/` tiene su propio archivo (Button.tsx, Input.tsx, Typography.tsx) y usa exportación nombrada (`export const ComponentName`).

**NO hacer:** Usar solo `export default` sin exportación nombrada.

**SÍ hacer:** Usar exportación nombrada (`export const ComponentName`) y opcionalmente `export default` para compatibilidad.

### Jerarquía de Componentes

1. **Atoms** (Componentes básicos)
   - `Typography`, `Button`, `Input`
   - Componentes simples y reutilizables

2. **Molecules** (Combinaciones de atoms)
   - `FilterPanel`, `InputWrapper`, `ButtonWrapper`
   - Componentes compuestos pero aún reutilizables

3. **Organisms** (Componentes complejos)
   - `CustomersTable`, `OrdersFilters`, `SectionNavbar`
   - Componentes específicos de features pero reutilizables dentro del feature

4. **Templates** (Layouts)
   - `PrivateLayout`, `PublicLayout`, `CustomersLayout`
   - Estructuras de página

5. **Pages** (Vistas completas)
   - `CustomersListPage`, `OrdersListPage`
   - Páginas completas que combinan todos los niveles anteriores

---

## ✅ Buenas Prácticas

### 1. Uso de Design Tokens

**❌ MAL:** Usar colores hardcodeados directamente en el código.

**✅ BIEN:** Siempre importar y usar `colors` del design system.

### 2. Nombres de Componentes

- **Componentes:** PascalCase (`CustomersTable`, `CreateClientModal`)
- **Archivos:** PascalCase con extensión `.tsx`
- **Hooks:** camelCase con prefijo `use` (`useGetCustomers`, `useCallback`)
- **Utilidades:** camelCase (`formatDate`, `transformCustomer`)

### 3. Organización de Imports

**Orden recomendado:**
1. React y librerías externas
2. PrimeReact
3. Componentes internos (visual)
4. Design system
5. Store/API
6. Types
7. Utils

### 4. Manejo de Estado

**Usar Redux Toolkit (RTK Query) para:**
- Datos del servidor
- Estado global compartido
- Cache de datos

**Usar useState para:**
- Estado local del componente
- Estado de UI (modales, formularios)

### 5. Memoización

**Usar `useMemo` para:**
- Cálculos costosos
- Transformaciones de datos
- Columnas de tablas

**Usar `useCallback` para:**
- Funciones pasadas como props
- Handlers de eventos en listas

### 6. Componentes Memoizados

Para componentes que reciben props que cambian frecuentemente, usar `React.memo` para evitar re-renders innecesarios.

### 7. Validación de Formularios

**Siempre validar antes de enviar:** Crear una función `validateForm` que retorne `{ isValid: boolean; errors: string[] }`. Si la validación falla, mostrar un toast de error y no proceder con el envío.

### 8. Manejo de Errores

**Toasts simplificados:** Usar mensajes cortos y directos. Solo incluir `summary`, evitar `detail` a menos que sea crítico. Ejemplos: "Cliente actualizado", "Error al crear cliente".

### 9. Transformación de Datos

**Siempre usar transformers para mapear entre frontend y backend:** Crear funciones en `utils/featureTransformers.ts` que conviertan los DTOs del frontend al formato esperado por el backend.

### 10. Event Handling

**Prevenir propagación en elementos interactivos dentro de tablas:** Usar `e.stopPropagation()` y `e.preventDefault()` en handlers de `onClick` y `onMouseDown` para evitar conflictos con el click de la fila.

---

## 🔄 Patrones de Código

### Patrón de Modal

**Estructura:**
- Props: `visible`, `onHide`, `onSuccess?`, `data?`
- Estado local: `isSubmitting` para controlar loading
- Footer con botones "Cancelar" y "Guardar"
- Manejo de errores con toasts
- Cerrar modal y ejecutar `onSuccess` después de operación exitosa

### Patrón de Tabla

**Estructura:**
- Props: `data`, `isLoading`, `onRowClick`, `onEdit?`
- Columnas definidas con `useMemo`
- Columna de acciones usando `UniqueMenu`
- Prevenir propagación de eventos en elementos interactivos
- Usar `DataTable` del design system

### Patrón de Página con Filtros

**Estructura:**
- Estado local para filtros y modales
- `useGetItemsQuery` con filtros como parámetros
- `SectionNavbar` con acciones principales
- `FilterPanel` para aplicar/limpiar filtros
- Tabla con datos filtrados
- Modales para crear/editar

---

## 📁 Estructura de Features

### Template de Feature

**Estructura de carpetas:**
- `components/organisms/` - Componentes complejos (FeatureTable.tsx, FeatureFilters.tsx)
- `components/organisms/modals/` - Modales (CreateFeatureModal.tsx, EditFeatureModal.tsx)
- `components/FeatureLayout.tsx` - Layout específico (si aplica)
- `pages/FeatureListPage.tsx` - Página principal
- `store/featureApi.ts` - RTK Query endpoints
- `store/featureSlice.ts` - Redux slice (si aplica)
- `types/feature.types.ts` - Tipos TypeScript
- `utils/featureTransformers.ts` - Transformadores de datos
- `styles/feature.css` - Estilos específicos (si aplica)
- `index.ts` - Exports públicos

### Ejemplo: Feature de Customers

El archivo `index.ts` exporta los componentes y tipos públicos del feature para uso en otras partes de la aplicación.

---

## 🎨 Guías de Estilo

### Layouts

#### PrivateLayout
- Contiene el `Sidebar` principal
- Muestra el contenido de las rutas protegidas
- Incluye `GlobalToast` y `GlobalLoader`

#### PublicLayout
- Para páginas públicas (login, landing)
- Sin sidebar

#### Feature Layouts (ej: CustomersLayout)
- Layout específico para features con navegación jerárquica
- Usa `SectionTabs` para sub-navegación
- Proporciona contexto vía `useOutletContext`

### Sidebar

- **Estado:** Colapsado por defecto (solo iconos)
- **Comportamiento:** Se expande en hover
- **Selección:** Resalta la opción activa
- **Responsive:** Se oculta en móviles

### SectionNavbar

- Barra de navegación específica de cada sección
- Contiene acciones principales (crear, filtrar, etc.)
- Soporta badges para notificaciones
- Siempre visible en la parte superior de la sección

### Modales

- **Tamaños estándar:**
  - `xs`: 600px (formularios simples)
  - `sm`: 800px (formularios medianos)
  - `md`: 1000px (formularios complejos) - **default**
  - `lg`: 1200px (tablas dentro de modales)
  - `xl`: 1400px (vistas detalladas)
  - `full`: 95vw (vistas completas)

- **Estructura:** El título puede ser `string` o `ReactNode`. El contenido debe agruparse en `Card` para mejor organización visual. El footer contiene los botones de acción.

### Tablas

- **Columnas:** Usar `size` para controlar ancho
- **Acciones:** Usar `UniqueMenu` (3 puntos) para menú de acciones
- **Estados:** Usar `Tag` de PrimeReact con `severity`
- **Loading:** Mostrar skeleton o spinner
- **Empty:** Usar `EmptyState` cuando no hay datos

### Formularios

- **Agrupación:** Usar `Card` para agrupar secciones relacionadas
- **Labels:** Siempre incluir label descriptivo
- **Validación:** Validar antes de enviar, mostrar errores con toasts
- **Iconos:** Usar iconos de PrimeIcons (`pi pi-*`)
- **Espaciado:** Usar `space-y-4` o `space-y-5` entre campos

### Toasts

- **Regla:** Mensajes cortos y directos
- **Formato:** Solo `summary`, sin `detail` a menos que sea crítico
- **Ejemplos:**
  - ✅ "Cliente actualizado"
  - ✅ "Error al crear cliente"
  - ❌ "El cliente ha sido actualizado exitosamente en la base de datos"

### Colores en Componentes

**Siempre usar design tokens:** Importar `colors` del design system y usarlo en lugar de valores hardcodeados.

### Espaciado

**Usar Tailwind classes o design tokens:** Preferir clases de Tailwind (`space-y-4`, `p-6`) o usar `spacing` del design system cuando se necesite control más fino.

---

## 🔧 Configuración Técnica

### Dependencias Principales

- **React 18+**
- **TypeScript**
- **Redux Toolkit** (RTK Query)
- **React Router DOM**
- **PrimeReact** (UI Library)
- **TanStack Table** (Tablas)
- **Tailwind CSS** (Estilos)

### Estructura de Store (Redux)

El store se configura con `configureStore` de Redux Toolkit, incluyendo el reducer global persistido y el reducer de `baseApi` (RTK Query). El middleware incluye `baseApi.middleware` y desactiva `serializableCheck` e `immutableCheck`.

### RTK Query Pattern

Los endpoints se definen usando `baseApi.injectEndpoints`. Cada feature tiene su propio archivo `featureApi.ts` que exporta los hooks generados automáticamente (`useGetFeaturesQuery`, `useCreateFeatureMutation`, etc.).

---

## 📝 Checklist para Nuevos Componentes

Al crear un nuevo componente, verificar:

- [ ] ¿Usa los design tokens (colors, spacing, typography)?
- [ ] ¿Sigue la estructura de Scream Architecture?
- [ ] ¿Está en la carpeta correcta según su nivel (atom/molecule/organism)?
- [ ] ¿Tiene tipos TypeScript definidos?
- [ ] ¿Usa `useMemo`/`useCallback` cuando es necesario?
- [ ] ¿Maneja estados de loading y error?
- [ ] ¿Sigue los patrones establecidos?
- [ ] ¿Está documentado con comentarios si es complejo?
- [ ] ¿Exporta correctamente (named export)?

---

## 🚀 Ejemplo Completo: Crear un Nuevo Feature

### Paso 1: Crear estructura de carpetas

Crear la estructura de carpetas dentro de `features/new-feature/` incluyendo: `components/organisms/`, `components/organisms/modals/`, `pages/`, `store/`, `types/`, `utils/`, y `index.ts`.

### Paso 2: Definir tipos

Crear interfaces TypeScript para los datos del feature (items, DTOs de creación/actualización, respuestas de API, etc.).

### Paso 3: Crear API

Definir los endpoints RTK Query usando `baseApi.injectEndpoints`, incluyendo queries para obtener datos y mutations para crear/actualizar/eliminar.

### Paso 4: Crear componentes

Seguir los patrones establecidos en este documento para tablas, modales y filtros.

### Paso 5: Crear página

Implementar la página principal siguiendo el patrón de página con filtros, incluyendo `SectionNavbar`, `FilterPanel`, tabla y modales.

---

## 📚 Recursos Adicionales

### Archivos de Referencia

- `src/shared/design-system/` - Design tokens
- `src/components/visual/` - Componentes base
- `src/features/customers/` - Ejemplo completo de feature
- `src/components/layout/Sidebar.tsx` - Ejemplo de layout
- `src/components/visual/Modal.tsx` - Ejemplo de componente reutilizable

### Convenciones de Nombres

- **Componentes:** PascalCase
- **Archivos:** PascalCase.tsx
- **Hooks:** camelCase con `use` prefix
- **Utilidades:** camelCase
- **Types/Interfaces:** PascalCase
- **Constantes:** UPPER_SNAKE_CASE

---

## 🎯 Resumen de Principios

1. **Consistencia:** Usar siempre el design system
2. **Reutilización:** Crear componentes modulares
3. **Organización:** Feature-based architecture
4. **Tipado:** TypeScript estricto
5. **Performance:** Memoización cuando sea necesario
6. **Mantenibilidad:** Código limpio y bien estructurado
7. **Escalabilidad:** Estructura que crece ordenadamente

---

**Última actualización:** 2024
**Versión del documento:** 1.0
