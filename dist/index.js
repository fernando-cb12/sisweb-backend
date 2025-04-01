"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("./src/routes/index"));
const app = (0, express_1.default)();
const morgan = require("morgan");
const port = 3000;
app.use(morgan("dev"));
app.use(express_1.default.json());
app.use(index_1.default);
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
/*¿Qué valor guarda la constante app? ¿Por qué se declara como constante app?
La constante app guarda el objeto express, se declara como constante porque no se va a reasignar
- ¿De nuestra arquitectura MVC, qué parte representa la función app.get(...)? ¿Qué
mecanismo de la programación asíncrona está presente en esta función?
la función app.get(...) representa el controlador, y el mecanismo de programación asíncrona que está presente es el callback

- Qué función tiene la línea app.listen(...)?
Nos imprime en la terminal que el servidor está corriendo en el puerto 3000
*/
