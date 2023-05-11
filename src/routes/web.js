import express from "express";
import homeController from "../controllers/HomeController";

let router = express.Router();

let initWebRoutes = (app) => {
    router.get("/", homeController.getHomePage);

    router.post('/setup-profile', homeController.setupProfile)
    router.post('/setup-persistent-menu', homeController.setupPersistentMenu)
    router.post('/webhook', homeController.postWebhook);
    router.get('/webhook', homeController.getWebhook)

    router.get('/reserve-table/:senderId', homeController.handleReserveTable)
    router.post('/reserve-table-ajax', homeController.handlePostReserveTable)

    router.get('/reserve-table/:senderId', homeController.handleFallBackReserveTable)
    return app.use('/', router);
}

module.exports = initWebRoutes;