const express = require('express')
const app = express()
const { Router } = require('express')
const router = Router()

router.get('/', (req, res) => {
    res.render('main.pug', {})
})    



module.exports = router