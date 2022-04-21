import { Router } from 'express'

import { SignUp } from '../controllers/SignUp.js'

const router = Router()

router.post('/sign-up', SignUp);


export default router