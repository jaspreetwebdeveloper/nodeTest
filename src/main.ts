import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import baseRoute from './route';
import { authenticatedUser } from "./services/common";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(authenticatedUser);
app.use(baseRoute)

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.log(err, true);
    return res.status(400).json({
        error: err.message,
    });
});

const port = 3000;
app.listen(port, () => {
    console.log('Server listening at: ' + port);
}); 

export default app;