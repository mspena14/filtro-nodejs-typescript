import { Request, Response, NextFunction } from "express";

const errorHandler = (error: any, req: Request, res: Response, next: NextFunction): void => {
    console.error(error.stack);
    res.status(500).json({message: "Server error"});
    next()
};

export default errorHandler;