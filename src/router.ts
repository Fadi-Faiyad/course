import {Router} from 'express'

const router = Router()

/**
 * Product
 */
router.get('/product', (req, res) => {
    res.json({message: "yoooo"})
})
router.get('/product/:id', () => {})
router.put('/product/:id', () => {})
router.post('/product', () => {})
router.delete('/product/:id', () => {})

/**
 * Updata
 */
router.get('/updata', () => {})
router.get('/updata/:id', () => {})
router.put('/updata/:id', () => {})
router.post('/updata', () => {})
router.delete('/updata/:id', () => {})


/**
 * Update_Point
 */
router.get('/updatapoint', () => {})
router.get('/updatapoint/:id', () => {})
router.put('/updatapoint/:id', () => {})
router.post('/updatapoint', () => {})
router.delete('/updatapoint/:id', () => {})

export default router