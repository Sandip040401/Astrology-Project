import express from 'express';
import { matchKundli } from '../controllers/kundliController.js';
import auth from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/',auth, matchKundli);

export default router;
