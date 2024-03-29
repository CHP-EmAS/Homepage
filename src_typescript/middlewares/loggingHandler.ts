import { Request, Response, NextFunction } from "express";

class LoggingHandler {
    public static async requestLogging(request: Request, response: Response, next: NextFunction) {
        
        let url: string = "";

        if(request.originalUrl.length > 100) {
            url = request.originalUrl.substring(0,97) + "...";
        } else {
            url = request.originalUrl;
        }

        console.log("[request] " + request.method + " " + url)
    
        next();
    }
}

export default LoggingHandler;