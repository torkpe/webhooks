import { Router } from 'express';
import * as controllers from './controllers';
import validations from './validations';
import validator from '../../utils/validate';

const router = Router();

router.post("/", validator(validations.addChannel), controllers.addChannel);
router.get("/", controllers.getChannels);

export default router;
