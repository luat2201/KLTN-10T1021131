import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./configs/viewEngnie"
import webRoutes from "./routes/web";
import chatbotService from "./services/chatbotService"
let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//config view Engine
viewEngine(app);

//config web routes
webRoutes(app);

let port = process.env.PORT || 8080;


chatbotService.getLunchMenuTemplate()
app.listen(port, () => {
    console.log("App is running at the port: " + port);
})