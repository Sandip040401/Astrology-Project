import express from 'express';
import { matchKundli } from '../controllers/kundliController.js';
import auth from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/', matchKundli);

export default router;
