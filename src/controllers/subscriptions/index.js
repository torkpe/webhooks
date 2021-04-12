import { Router } from 'express';
import * as controllers from './controllers';
import validations from './validations';
import validator from '../../utils/validate';

const router = Router();

router.post("/:id", validator(validations.subscribe), controllers.subscribe);
router.post("/:id/publish", validator(validations.publish), controllers.publish);

export default router;
