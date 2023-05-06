import express from "express"
import bodyParser from "body-parser"
import viewEngine from "./configs/viewEngnie"
import webRoutes from "./routes/web"

let app = express();

//config view enging
viewEngine(app)


//config web routes
webRoutes(app)


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

let port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log("App đang chạy trên cổng: "+port)
})