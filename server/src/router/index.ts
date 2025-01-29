import Router from 'express'
import { body } from 'express-validator'
import { CommentsController } from '../controllers/comments-controller'
import { PostControllers } from '../controllers/post-controllers'
import { ProfileControllers } from '../controllers/profile-controllers'
import { UserControllers } from '../controllers/user-controllers'
import { multersFile } from '../middleware/file'

const router = Router()
const userControllers = new UserControllers()
const profileControllers = new ProfileControllers()
const postControllers = new PostControllers()
const commentsController = new CommentsController()

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

router.post('/post', multersFile.single('post'), postControllers.createPost)
router.get('/posts/:id', postControllers.posts)

router.patch('/addPostLike/:id', postControllers.addPostLike)
router.patch('/removePostLike/:id', postControllers.removePostLike)

router.post('/comment', commentsController.createCommentPost)

export const routers = router
