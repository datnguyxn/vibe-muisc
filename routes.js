import authRoute from "./src/routes/auth.route.js";
import userRoute from "./src/routes/user.route.js";
import homeRoute from "./src/routes/index.route.js";
import artistRoute from "./src/routes/artist.route.js";
import adminRoute from "./src/routes/admin.route.js";

import playlistRoute from "./src/routes/playlist.route.js";
const routes = (app) => {
    app.use('/api/v1/auth', authRoute)
    app.use('/api/user', userRoute)
    app.use('/', homeRoute)
    app.use("/api/artist", artistRoute);
    app.use("/admin", adminRoute)
    app.use('/api/playlist', playlistRoute)
}

export default routes;