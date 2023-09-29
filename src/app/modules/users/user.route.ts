import express from 'express'
import { UserController } from './user.controller'
import validateRequest from '../../middlewares/validateRequest'
import { UserValidation } from './user.validation'
//export const UserValidation = { createUserZodSchema }
const router = express.Router()

router.get('/users/:id', UserController.getSingleUser),
  router.get('/users', UserController.getAllUser),
  router.patch('/users/:id', UserController.updateUser),
  router.delete('/users/:id', UserController.deletedUser),
  router.post(
    '/auth/signup',
    validateRequest(UserValidation.createUserZodSchema),
    UserController.createUser
  )
export const UserRoute = router
