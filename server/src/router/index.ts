import Router from 'express'
import { body } from 'express-validator'
import { CommentsController } from '../controllers/comments-controller'
import { PostControllers } from '../controllers/post-controllers'
import { SearchController } from '../controllers/search-controller'
import { UserControllers } from '../controllers/user-controllers'
import { multersAvatar } from '../middleware/avatar'
import { multersFile } from '../middleware/file'

const router = Router()
const userControllers = new UserControllers()
const postControllers = new PostControllers()
const commentsController = new CommentsController()
const searchController = new SearchController()

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
router.get('/user/:id', userControllers.getUser)

router.patch('/updateProfile', userControllers.updateProfileInfo)
router.patch('/updateProfilePhone', userControllers.updateProfileInfoPhone)
router.patch('/updateProfileEmail', userControllers.updateProfileInfoEmail)
router.patch(
	'/updateProfileImageUrl',
	multersAvatar.single('avatar'),
	userControllers.updateProfileInfoImageUrl
)
router.patch('/avatar/:id', userControllers.deleteAvatar)

// router.get('/users', userControllers.getUsers)
router.get('/', searchController.search)

router.post('/post', multersFile.single('post'), postControllers.createPost)
router.get('/posts/:id', postControllers.posts)
router.delete('/postDelete/:id', postControllers.deletePost)

router.patch('/addPostLike/:id', postControllers.addPostLike)
router.patch('/removePostLike/:id', postControllers.removePostLike)

router.post('/comment', commentsController.createCommentPost)

router.get('/friendsSuggestions', userControllers.getFriendsSuggetion)

export const routers = router
