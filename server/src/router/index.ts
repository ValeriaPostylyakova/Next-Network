import Router from 'express'
import { body } from 'express-validator'
import { PostControllers } from '../controllers/post-controllers'
import { ProfileControllers } from '../controllers/profile-controllers'
import { UserControllers } from '../controllers/user-controllers'
import { multersFile } from '../middleware/file'

const router = Router()
const userControllers = new UserControllers()
const profileControllers = new ProfileControllers()
const postControllers = new PostControllers()

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
router.post('/post', multersFile.single('post'), profileControllers.createPost)
router.get('/posts/:id', profileControllers.posts)

router.patch('/updatePost/:id', postControllers.updatePostLikes)

export const routers = router
