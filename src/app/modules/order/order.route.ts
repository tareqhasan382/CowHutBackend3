import express from 'express'
import { OrderController } from './order.controller'
import validateRequest from '../../middlewares/validateRequest'
import { OrderValidation } from './order.validation'

const router = express.Router()
router.get('/orders', OrderController.getAllOrders),
  //post cow
  router.post(
    '/orders',
    validateRequest(OrderValidation.createOrderZodSchema),
    OrderController.createOrder
  )

export const OrderRoute = router
// router.post(
//   '/create-cow',
//   validateRequest(CowValidation.createCowZodSchema),
//   CowController.createCow
// )
