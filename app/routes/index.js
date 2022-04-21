import { Router } from 'express'

import SignUpController from '../controllers/SignUp.js'
import {TweetsController, TweetsReadController} from '../controllers/Tweet.js'

const router = Router()

router.post('/sign-up', SignUpController);
router.post('/tweets', TweetsController)
router.get('/tweets', TweetsReadController)


export default router