import express from 'express'
import { registerController, loginController, testController } from '../controllers/authController.js'
import { requireSignIn, isAdmin } from '../middlewares/authMiddlewares.js'

// router object
const router = express.Router()

// routing
// REGISTER || METHOED POST
router.post('/register', registerController)

// LOGIN || POST
router.post('/login', loginController)

router.get('/test', requireSignIn, isAdmin, testController)

export default router