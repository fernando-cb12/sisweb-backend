"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./src/routes"));
const connection_1 = __importDefault(require("./src/connection/connection"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const port = 3000;
app.use((0, cors_1.default)());
app.use((0, morgan_1.default)("dev"));
app.use(express_1.default.json());
app.use(routes_1.default);
(0, connection_1.default)();
app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`);
});
/*¿Qué valor guarda la constante app? ¿Por qué se declara como constante app?
La constante app guarda el objeto express, se declara como constante porque no se va a reasignar
- ¿De nuestra arquitectura MVC, qué parte representa la función app.get(...)? ¿Qué
mecanismo de la programación asíncrona está presente en esta función?
la función app.get(...) representa el controlador, y el mecanismo de programación asíncrona que está presente es el callback

- Qué función tiene la línea app.listen(...)?
Nos imprime en la terminal que el servidor está corriendo en el puerto 3000
*/
