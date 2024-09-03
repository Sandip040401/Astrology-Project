import express from 'express';
import { getProfile, updateProfile } from '../controllers/profileController.js';
import auth from '../middlewares/authMiddleware.js';

const router = express.Router();

router.get('/',  getProfile);
router.put('/',  updateProfile);

export default router;
