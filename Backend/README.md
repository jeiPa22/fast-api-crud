# API FastAPI con Autenticación JWT

## Descripción
API REST desarrollada con FastAPI que incluye autenticación JWT, gestión de usuarios y documentación automática con Swagger.

## Características
- ✅ Autenticación JWT
- ✅ Gestión completa de usuarios (CRUD)
- ✅ Documentación automática con Swagger UI
- ✅ Base de datos SQLite con SQLAlchemy
- ✅ Middleware CORS configurado
- ✅ Validación de datos con Pydantic
- ✅ Hash seguro de contraseñas con bcrypt

## Requisitos
- Python 3.8+
- WSL (Windows Subsystem for Linux) o Linux/macOS

## Instalación

### 1. Crear entorno virtual
```bash
cd /mnt/c/Users/jrome/Downloads/Stravinsky/Backend
python3 -m venv venv
source venv/bin/activate
```

### 2. Instalar dependencias
```bash
pip install -r requirements.txt
```

### 3. Ejecutar el servidor
```bash
# Opción 1: Usando uvicorn directamente
python3 -m uvicorn main:app --reload --host 0.0.0.0 --port 8000

# Opción 2: Usando el script de inicio
./start_server.sh
```

## Uso

### URLs importantes
- **API Base**: http://localhost:8000
- **Documentación Swagger**: http://localhost:8000/docs
- **Documentación ReDoc**: http://localhost:8000/redoc

### Endpoints principales

#### Autenticación
- `POST /auth/register` - Registrar nuevo usuario
- `POST /auth/login` - Iniciar sesión y obtener token
- `GET /me` - Obtener perfil del usuario actual (requiere token)

#### Usuarios (requieren autenticación)
- `GET /usuarios/` - Listar todos los usuarios
- `POST /usuarios/` - Crear nuevo usuario
- `GET /usuarios/{id}` - Obtener usuario por ID
- `PUT /usuarios/{id}` - Actualizar usuario
- `DELETE /usuarios/{id}` - Eliminar usuario

### Ejemplo de uso con curl

#### 1. Registrar usuario
```bash
curl -X POST "http://localhost:8000/auth/register" \
     -H "Content-Type: application/json" \
     -d '{
       "nombre": "Juan Pérez",
       "correo": "juan@example.com",
       "password": "password123"
     }'
```

#### 2. Iniciar sesión
```bash
curl -X POST "http://localhost:8000/auth/login" \
     -H "Content-Type: application/json" \
     -d '{
       "correo": "juan@example.com",
       "password": "password123"
     }'
```

#### 3. Usar endpoint protegido
```bash
# Usar el token obtenido en el paso anterior
curl -X GET "http://localhost:8000/me" \
     -H "Authorization: Bearer TU_TOKEN_AQUI"
```

## Estructura del proyecto
```
Backend/
├── main.py              # Aplicación principal FastAPI
├── models.py            # Modelos de base de datos
├── schemas.py           # Esquemas Pydantic
├── crud.py              # Operaciones CRUD
├── auth.py              # Autenticación JWT
├── database.py          # Configuración base de datos
├── requirements.txt     # Dependencias
├── start_server.sh      # Script de inicio
├── test_api.sh          # Script de pruebas
└── README.md           # Este archivo
```

## Configuración de Swagger UI para JWT

1. Accede a http://localhost:8000/docs
2. Registra un usuario usando el endpoint `/auth/register`
3. Inicia sesión usando el endpoint `/auth/login` para obtener el token
4. Haz clic en el botón "Authorize" en la esquina superior derecha
5. Ingresa: `Bearer TU_TOKEN_AQUI`
6. Ahora puedes usar todos los endpoints protegidos desde Swagger

## Solución de problemas

### Error "import error"
- Asegúrate de estar en el directorio correcto
- Verifica que el entorno virtual esté activado
- Reinstala las dependencias si es necesario

### Error "file is not a database"
- Elimina el archivo de base de datos: `rm -f *.db`
- Reinicia el servidor para crear una nueva base de datos

### Servidor no responde
- Verifica que no haya otro proceso usando el puerto 8000
- Usa `netstat -tlnp | grep :8000` para verificar

## Tecnologías utilizadas
- **FastAPI**: Framework web moderno y rápido
- **SQLAlchemy**: ORM para Python
- **Pydantic**: Validación de datos
- **PyJWT**: Manejo de tokens JWT
- **Passlib**: Hash de contraseñas
- **Uvicorn**: Servidor ASGI
- **SQLite**: Base de datos ligera