import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import hbs from "hbs";

const app= express();
const PORT=8080||process.env.PORT;
const __filename=fileURLToPath(import.meta.url);
const __dirname=path.dirname(__filename);
const staticPath=path.join(__dirname,"../public");
const template_path=path.join(__dirname,"../templates/views");
const partials_path=path.join(__dirname,"../templates/partials");

//public static path
app.use(express.static(staticPath));
app.set('view engine', 'hbs');
app.set('views',template_path);
hbs.registerPartials(partials_path);

//routing
app.get("/",(req,res)=>{
    res.render("index");
});
app.get("/about",(req,res)=>{
    res.render("about");
});
app.get("/weather",(req,res)=>{
    res.render("weather");
});
app.get("*",(req,res)=>{
    res.status(404).render("404errorpage");
});
app.listen(PORT,(err)=>{
    if(err)console.error(err);
    console.log(`Listening to the port number ${PORT}`);
})