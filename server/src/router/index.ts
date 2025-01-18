import Router from 'express'
import { UserControllers } from '../controllers/user-controllers'

const router = Router()
const controllers = new UserControllers()

router.post('/registration', controllers.registration)
router.post('/login', controllers.login)
router.post('/logout', controllers.logout)
router.get('/activate/:link', controllers.activate)
router.get('/refresh', controllers.refresh)
router.get('users', controllers.getUsers)
export const routers = router
