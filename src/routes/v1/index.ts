import { Router } from 'express';
import authRoutes from './auth.route';
import userRoutes from './user.route';

const router = Router();

router.use('/auth', authRoutes);
router.use('/user', userRoutes);

// route validity checker
router.get('/ping_pong', (req,res) => {
    res.json('version one routing process is working properly');
})

export default router;