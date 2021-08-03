import { Router } from 'express';
const router = Router();

import Routes from "./routes/contact"
import { authenticatedUser } from "./services/common";

router.use('/pub/proxy/', Routes);

export default router; 