const express = require("express")
const router = express.Router()
const {getAllEmploye}=require('../controller/employee')

// router.get('/getAllEmployee', getAllEmploye)
 router.get('/getAllEmployee', getAllEmploye)

module.exports = router