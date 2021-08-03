import { Router } from 'express';
const router = Router();

import { addContact , getContactDetails } from "../controllers/contact";

router.route('/contact')
.get(getContactDetails)
.post(addContact);

export default router; 