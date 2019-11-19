import { Router } from 'express';
const router = Router();

import indexhandler from './../routes/indexhandler';


router.get('/', indexhandler);


export default router;