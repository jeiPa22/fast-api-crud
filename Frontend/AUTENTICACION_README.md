# Implementación de Autenticación JWT y Navegación por Rutas

## 🎉 Características Implementadas

### 1. **Autenticación JWT Completa**
- Login de usuarios con JWT
- Registro de nuevos usuarios
- Gestión de tokens en localStorage
- Cerrar sesión

### 2. **Navegación por Rutas**
- Rutas públicas: `/`, `/login`, `/register`
- Rutas protegidas: `/usuarios` (requiere autenticación)
- Ruta 404 para páginas no encontradas

### 3. **Protección de Rutas**
- Componente `ProtectedRoute` que redirige a login si no está autenticado
- Verificación automática de autenticación

## 📁 Archivos Creados

### API
- `src/api/authApi.ts` - Funciones para login, register y obtener usuario actual

### Context
- `src/context/AuthContext.tsx` - Context global para manejo de autenticación

### Páginas
- `src/pages/LoginPage.tsx` - Página de inicio de sesión
- `src/pages/RegisterPage.tsx` - Página de registro
- `src/pages/AuthPages.css` - Estilos para páginas de autenticación

### Componentes
- `src/components/ProtectedRoute.tsx` - Componente para proteger rutas

## 📝 Archivos Modificados

- `src/App.tsx` - Agregado AuthProvider y rutas de autenticación
- `src/components/Header.jsx` - Agregado navegación dinámica según estado de auth
- `src/components/Header.css` - Estilos actualizados para botones de auth
- `src/api/instrumentosApi.js` - Actualizado para usar JWT
- `src/api/usuariosApi.js` - Actualizado para usar JWT

## 🔧 Endpoints del Backend (FastAPI)

El frontend espera los siguientes endpoints del backend:

### Autenticación
```
POST /auth/register
Content-Type: application/json
Body: { "nombre": "Juan Pérez", "correo": "juan@example.com", "password": "password123" }
Response: { "id": 1, "nombre": "Juan Pérez", "correo": "juan@example.com" }
```

```
POST /auth/login
Content-Type: application/json
Body: { "correo": "juan@example.com", "password": "password123" }
Response: { "access_token": "...", "token_type": "bearer" }
```

```
GET /me
Authorization: Bearer <token>
Response: { "id": 1, "nombre": "Juan Pérez", "correo": "juan@example.com" }
```

## 🚀 Cómo Usar

### 1. Iniciar el Backend
```bash
cd Backend
python run.py
```

### 2. Iniciar el Frontend
```bash
cd Frontend
npm run dev
```

### 3. Navegar en la Aplicación

1. **Página Principal** (`/`): Ver productos disponibles
2. **Registrarse** (`/register`): Crear una nueva cuenta
3. **Iniciar Sesión** (`/login`): Acceder con credenciales
4. **Usuarios** (`/usuarios`): Ver lista de usuarios (requiere login)

## 🔐 Flujo de Autenticación

1. Usuario ingresa credenciales en `/login`
2. Frontend envía solicitud POST a `/token`
3. Backend valida y devuelve JWT
4. Frontend guarda token en localStorage
5. Frontend obtiene datos del usuario de `/users/me`
6. Se actualiza el contexto global con user y token
7. Header muestra nombre de usuario y botón de logout
8. Todas las peticiones subsecuentes incluyen el token JWT

## 🎨 Características del UI

- **Header Dinámico**: Muestra diferentes opciones según el estado de autenticación
- **Formularios Modernos**: Diseño atractivo con validación
- **Mensajes de Error**: Feedback claro al usuario
- **Estados de Carga**: Indicadores durante peticiones async
- **Responsive**: Adaptable a diferentes tamaños de pantalla

## 📦 Dependencias Utilizadas

- `react-router-dom` - Navegación entre páginas
- `axios` - Peticiones HTTP
- `react` - Context API para estado global

## 🔄 Persistencia

El token y datos del usuario se guardan en `localStorage`, permitiendo que la sesión persista entre recargas de página.

## ⚠️ Notas Importantes

1. Asegúrate de que el backend esté corriendo en `http://127.0.0.1:8000`
2. Los endpoints del backend deben coincidir con los especificados
3. El token JWT debe ser válido y tener formato Bearer
4. Las rutas protegidas redirigen a `/login` si no hay autenticación
