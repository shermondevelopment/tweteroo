import { Router } from 'express'

import {SignUpController} from '../controllers/SignUp.js'
import {TweetsController, TweetsReadController, TweetsReadUser} from '../controllers/Tweet.js'

const router = Router()

router.post('/sign-up', SignUpController);
router.post('/tweets', TweetsController)
router.get('/tweets', TweetsReadController)
router.get('/tweets/:username', TweetsReadUser)


export default router