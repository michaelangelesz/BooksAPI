const router = require('express').Router()

router.get('/', (req, res) => {
    res.send('Hello Bookworms!')
})

module.exports = router