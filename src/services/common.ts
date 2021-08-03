import fs from "fs";
import { NextFunction, Request, Response } from 'express';

export const addData = (data: any) => {
    const addDataToFile = JSON.stringify(data)
    fs.writeFileSync('src/contact.json', addDataToFile)
}

export const getData = () => {
    const fetchDataFromFile = JSON.parse(fs.readFileSync('src/contact.json', 'utf-8'))
    return fetchDataFromFile;
}

export const randomId = () => {
    return Math.floor(100000 + Math.random() * 900000);
};

export const authenticatedUser = (req: Request, res: Response, next: NextFunction) => {
    if (req.originalUrl.includes('/pub/proxy/')) {
        next()
    } else {
        res.send({ status: false, msg: "api route is not starting with pub/proxy" })
    }
}
