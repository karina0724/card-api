## 💳 Add Card API

API RESTful desarrollada con **Node.js** y **Express.js**, aplicando buenas prácticas de Clean Code y el patrón Repository.
Permite **crear, consultar, actualizar y eliminar tarjetas de crédito**, almacenadas localmente en un archivo JSON.

---

## 🗂️ Estructura del proyecto

```
add-card-api/
├── cards/
│   ├── card.controller.js
│   ├── card.repository.js
│   ├── card.routes.js
│   ├── card.service.js
│   └── card.validation.js
├── data/
│   └── cards.json
├── middlewares/
│   └── validate.js
├── utils/
│   ├── response.js
│   └── AddCard.postman_collection.json
├── app.js
├── server.js
└── package.json
```

---

## 🚀 Tecnologías utilizadas

* **Node.js** – entorno de ejecución
* **Express.js** – framework web
* **Joi** – validación de datos
* **UUID** – generación de identificadores únicos
* **FileSystem** – persistencia en `cards.json`
* **Postman** – colección de pruebas incluida

---

## 📦 Instalación

1. **Clona el repositorio**

```bash
git clone https://github.com/tu-usuario/add-card-api.git
cd add-card-api
```

2. **Instala dependencias**

```bash
npm install
```

3. **Inicia el servidor**

```bash
node server.js
```

El servidor estará disponible en:
📍 [http://localhost:3000](http://localhost:3000)

---

## 📮 Endpoints disponibles

### 🔹 Obtener todas las tarjetas

```
GET /cards
```

### 🔹 Obtener una tarjeta por ID

```
GET /cards/:id
```

### 🔹 Crear tarjeta

```
POST /cards
```

**Ejemplo:**

```json
{
  "number": "1234567890123456",
  "holder": "Juan Pérez",
  "expiry": "12/26",
  "cvv": "565"
}
```

### 🔹 Actualizar tarjeta

```
PUT /cards/:id
```

**Ejemplo:**

```json
{
  "holder": "Pedro Ramírez",
  "cvv": "456"
}
```

### 🔹 Eliminar tarjeta

```
DELETE /cards/:id
```

---

## 🧪 Pruebas con Postman

La colección Postman se encuentra en:

```
utils/AddCard.postman_collection.json
```

Pasos:

1. Abre Postman.
2. Importa el archivo.
3. Ejecuta los endpoints directamente.

---

## 🧰 Requisitos

* Node.js 16 o superior
* NPM

---

## ✍️ Autor

Karina Montero Leonardo

---

## 📄 Licencia

MIT

---
