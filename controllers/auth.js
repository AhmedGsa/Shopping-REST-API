const jwt = require("jsonwebtoken")
const User = require("../models/User")
const Cart = require("../models/Cart")
const { BadRequest, UnauthorizedError, CustomAPIError } = require("../errors/index")
const { StatusCodes } = require("http-status-codes")

const login = async (req, res) => {
    const { email, password } = req.body
    const user = await User.findOne({email})
    if(!user) {
        throw new BadRequest("Couldn't find user with provided email")
    }
    const correctPassword = await user.verifyPass(password)
    if(!correctPassword) {
        throw new BadRequest("Wrong Password!")
    }
    const token = await user.createJWT()
    res.status(StatusCodes.OK).json({userID: user._ID, token})
}

const register = async (req, res, next) => {
    const { email, password } = req.body
    if(!email || !password) {
        throw new BadRequest("Please provide email and password")
    }
    const user = await User.create({ email, password })
    const cart = await Cart.create({owner: user._id})
    const token = await user.createJWT()
    return res.status(StatusCodes.CREATED).json({userID: user._id, token, cart})
}

module.exports = { login, register }