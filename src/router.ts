import { Router } from 'express'
import { body, oneOf, validationResult } from 'express-validator'
import { getOneProduct, getProducts, createProduct, deleteProduct } from './handlers/product'
import { handleinputErrors } from './modules/middleware'
import { createUpdate, deleteUpdate, getOneUpdate, getUpdates, updateUpdate } from './handlers/updata'

const router = Router()

/**
 * Product
 */
router.get('/product', getProducts)
router.get('/product/:id', getOneProduct)
router.put('/product/:id', body('name').isString(), handleinputErrors, (req, res) => {

})
router.post('/product', body('name').isString(), handleinputErrors, createProduct)
router.delete('/product/:id', deleteProduct)


/**
 * Updata
 */
router.get('/updata', getUpdates)
router.get('/updata/:id', getOneUpdate)
router.put('/updata/:id',
    body('title').optional(),
    body('body').optional(),
    body('status').isIn(['IN_PROGRESS', 'SHIPPED', 'DEPRECATED']).optional(),
    body('version').optional(),
    updateUpdate

)
router.post('/updata',
    body('title').exists().isString(),
    body('body').exists().isString(),
    body('productId').exists().isString(),
    createUpdate

)
router.delete('/updata/:id', deleteUpdate)


/**
 * Update_Point
 */
router.get('/updatapoint', () => { })
router.get('/updatapoint/:id', () => { })
router.put('/updatapoint/:id',
body('name').optional().isString(),
body('description').optional().isString(),
 () => { }
 )
router.post('/updatapoint', 
body('name').isString(),
body('description').isString(),
body('updateId').exists().isString(),
() => { }
)
router.delete('/updatapoint/:id', () => { })

router.use((err, req, res, next) =>{
console.log(err)
res.json({message: 'in router handler'})
})

export default router