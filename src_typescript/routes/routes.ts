import express,  { Router, Request, Response} from "express";
import path from "path";

const routes = Router();

routes.use('/css', express.static('static/css'));
routes.use('/fonts', express.static('static/fonts'));
routes.use('/js', express.static('static/js'));
routes.use('/img', express.static('static/img'));
routes.use('/files', express.static('static/files'));

routes.get("/", function(req, res) {
    res.sendFile(path.join(__dirname + '/../../static/html/homepage.html'));
});

routes.use("*", function(request: Request, response: Response) {
    response.status(404).json();
});

export default routes;