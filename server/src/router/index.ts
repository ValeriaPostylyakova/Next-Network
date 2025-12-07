import Router from 'express'
import { body } from 'express-validator'
import { ChatController } from '../controllers/chat-controller.js'
import { CommentsController } from '../controllers/comments-controller.js'
import { FeedController } from '../controllers/feed-controller.js'
import { FriendsController } from '../controllers/friends-controller.js'
import { MessageController } from '../controllers/message-controller.js'
import { PostControllers } from '../controllers/post-controllers.js'
import { SearchController } from '../controllers/search-controller.js'
import { StoriesController } from '../controllers/stories-controller.js'
import { UserControllers } from '../controllers/user-controllers.js'
import { multersAvatar } from '../middleware/avatar.js'
import { multersFile } from '../middleware/file.js'
import { multersStory } from '../middleware/story.js'

const router = Router()
const userControllers = new UserControllers()
const postControllers = new PostControllers()
const commentsController = new CommentsController()
const searchController = new SearchController()
const friendsController = new FriendsController()
const chatController = new ChatController()
const feedController = new FeedController()
const storiesController = new StoriesController()
const messageController = new MessageController()

router.post(
	'/registration',
	body('email').isEmail(),
	body('password').isLength({ min: 4, max: 20 }),
	userControllers.registration
)
router.post('/login', userControllers.login)
router.post('/logout', userControllers.logout)
router.get('/refresh', userControllers.refresh)
router.get('/user/:id', userControllers.getUser)
router.get('/profile/:id', userControllers.getProfile)

router.patch('/updateProfile', userControllers.updateProfileInfo)
router.patch('/updateProfilePhone', userControllers.updateProfileInfoPhone)
router.patch('/updateProfileEmail', userControllers.updateProfileInfoEmail)
router.patch(
	'/updateProfileImageUrl/:id',
	multersAvatar.single('avatar'),
	userControllers.updateProfileInfoImageUrl
)
router.patch('/avatar/:id', userControllers.deleteAvatar)

router.get('/', searchController.search)

router.post('/post/:id', multersFile.single('post'), postControllers.createPost)
router.get('/posts/:id', postControllers.posts)
router.delete('/postDelete/:id', postControllers.deletePost)

router.patch('/addPostLike/:id', postControllers.addPostLike)
router.patch('/removePostLike/:id', postControllers.removePostLike)

router.post('/comment', commentsController.createCommentPost)
router.delete('/commentDelete/:id', commentsController.deleteComment)

router.get('/friendsSuggestions', friendsController.getFriendsSuggetion)

router.get('/chats/:id', chatController.getChats)
router.post('/createChat', chatController.createChat)
router.get('/chat', chatController.getChat)
router.delete('/deleteChat/:id', chatController.deleteChat)
router.delete('/deleteChatEmpty/:id', chatController.deleteChatEmpty)
router.get('/messages/:id', messageController.getMessages)
router.get('/unreadMessages/:id', messageController.getUnreadMessages)
router.delete('/deleteMessage/:id', messageController.deleteMessage)

router.get('/feed', feedController.getFeed)

router.post(
	'/createStory/:id',
	multersStory.single('story'),
	storiesController.createStory
)
router.get('/stories', storiesController.getStories)

export const routers = router
