import Router from 'express'
import { body } from 'express-validator'
import { ProfileControllers } from '../controllers/profile-controllers'
import { UserControllers } from '../controllers/user-controllers'

const router = Router()
const userControllers = new UserControllers()
const profileControllers = new ProfileControllers()

router.post(
	'/registration',
	body('email').isEmail(),
	body('password').isLength({ min: 4, max: 20 }),
	userControllers.registration
)
router.post('/login', userControllers.login)
router.post('/logout', userControllers.logout)
router.get('/activate/:link', userControllers.activate)
router.get('/refresh', userControllers.refresh)

router.get('/profile/:id', profileControllers.profileInfo)
router.get('/posts/:id', profileControllers.posts)

export const routers = router
