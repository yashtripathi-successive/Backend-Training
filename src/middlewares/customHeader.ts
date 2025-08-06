import { NextFunction, Request, Response } from "express";

function customHeader(headerName:string , headerValue:string ) {
  return function (req:Request, res:Response, next:NextFunction) {
    res.setHeader(headerName, headerValue);
    next();
  };
}

export default customHeader;
