import express from 'express'
import { CowController } from './cow.controller'
import validateRequest from '../../middlewares/validateRequest'
import { CowValidation } from './cow.validation'
// import validateRequest from '../../middlewares/validateRequest'
//export const UserValidation = { createUserZodSchema }

const router = express.Router()
//get all cow
router.get('/cows', CowController.getAllCow),
  router.get('/cows/:id', CowController.getSingleCow),
  router.patch('/cows/:id', CowController.updateCow),
  router.delete('/cows/:id', CowController.deletedCow),
  //post cow
  router.post(
    '/cows',
    validateRequest(CowValidation.createCowZodSchema),
    CowController.createCow
  )

export const CowRoute = router
