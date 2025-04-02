import express, { Express } from "express";
import apiRouter from "./src/routes";
import connectionDB from "./src/connection/connection";
import morgan from "morgan";
import cors from "cors";

const app: Express = express();
const port = 3000;

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(apiRouter);

connectionDB();

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
