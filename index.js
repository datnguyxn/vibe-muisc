import express from 'express';
import { connector, config, variables } from "./src/configuration/index.js";
import routes from "./routes.js";
const app = express();

config(app);
connector().then(r => console.log("Database connected successfully") ).catch(e => console.log(e));

routes(app);
app.listen(variables.PORT, () => {
    console.log(`Server is running on port ${variables.URL + variables.PORT}`);
})

