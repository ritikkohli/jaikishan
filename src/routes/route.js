const express = require('express')
const router = express.Router()
const {createCustomer, getCustomers, deleteCustomer} = require("../Controller/customerController")
const {createCard, getCards} = require("../Controller/cardController")
// const auth = require("../middleware/auth.js")

router.post("/customer", createCustomer)
router.get("/customer", getCustomers)
router.delete("/customer", deleteCustomer)

router.post("/card", createCard)
router.get("/card", getCards)


module.exports = router