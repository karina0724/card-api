# Add Card API

API RESTful desarrollada con Node.js y Express.js aplicando buenas prácticas de Clean Code y el patrón Repository. Permite crear, consultar, actualizar y eliminar tarjetas almacenadas localmente en un archivo JSON.

## 📁 Estructura del proyecto

add-card-api/
├── cards/
├── data/
├── middlewares/
├── utils/
├── app.js
├── server.js
└── package.json


## 🚀 Tecnologías utilizadas

- Node.js
- Express.js
- Joi (validaciones)
- UUID (generación de ID únicos)
- FileSystem (persistencia en JSON)

## 📦 Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/tu-usuario/add-card-api.git
cd add-card-api

2. Instala dependencias:

npm install
Ejecuta el servidor:

node server.js
El servidor quedará disponible en http://localhost:3000.

📌 Endpoints
➕ Crear tarjeta
POST /cards

{
  "number": "1234567890123456",
  "holder": "Juan Pérez",
  "expiry": "12/26",
  "cvv": "565"
}
Valida número (16 dígitos), nombre (letras y tildes), y fecha (mm/yy).

Devuelve tarjeta creada con ID único.

📄 Obtener todas
GET /cards

Devuelve lista de tarjetas.

🔍 Obtener por ID
GET /cards/:id

Devuelve la tarjeta correspondiente o 404 si no existe.

✏️ Actualizar tarjeta
PUT /cards/:id

Campos opcionales: number, holder, expiry.

🗑 Eliminar tarjeta
DELETE /cards/:id

Elimina por ID y devuelve mensaje de confirmación.

🧪 Pruebas con Postman
Abre Postman

Importa el archivo AddCard.postman_collection.json

Ejecuta los endpoints disponibles