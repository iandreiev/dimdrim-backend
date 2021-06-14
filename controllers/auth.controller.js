const bcrypt = require('bcryptjs')
const User = require('../models/users.model')
const jwt = require('jsonwebtoken')
const keys = require('../config/keys')
const errorHandler = require('../utils/errorHandler.util')
const moment = require('moment')


module.exports.login = async (req, res) => {
    const candidate = await User.findOne({ email: req.body.email })

    if (candidate) {
        // user_exists
        const passwordResult = bcrypt.compareSync(req.body.password, candidate.password)

        if (passwordResult) {
            // generate token, passwords compared
            const token = jwt.sign({
                email: candidate.email,
                userId: candidate._id
            }, keys.jwt, { expiresIn: 60 * 60 * 48})

            res.status(200).json({
                token: `Bearer ${token}`,
                user: {
                    id:candidate._id,
                    email:candidate.email,
                    name: candidate.name,
                    phone: candidate.phone,
                    midname: candidate.midname,
                    type:candidate.type,
                    created_at:candidate.created_at,
                    location: candidate.location,
                    billing_address: candidate.billing_address,
                    country: candidate.country,
                    country_code: candidate.country_code,
                    last_login: candidate.last_login
                }
            })
        } else {
            // Error: password_incorrect
            res.status(401).json({ msg: 'password_incorrect' })
        }
    } else {
        //user_not_exists
        res.status(404).json({ msg: 'not_found' })
    }
}

module.exports.register = async (req, res) => {
    const candidate = await User.findOne({
        email: req.body.email
    })

    if (candidate) {
        // User exists, retrieve error
        res.status(409).json({
            msg: 'email_exist'
        })
    } else {
        //Create user
        const salt = bcrypt.genSaltSync(10)

        const password = req.body.password

        const user = new User({
            email: req.body.email,
            password: bcrypt.hashSync(password, salt),
            name: req.body.name,
            midname: req.body.midname,
            type: req.body.type,
            location: req.body.location,
            billing_address: req.body.billing_address,
            country: req.body.country,
            country_code: req.body.country_code,
            last_login:req.body.last_login
            // phone: req.body.phone,
        })

        try {
            await user.save()
            res.status(201).json({
                id: user._id,
                email: user.email,
                name: user.phone,
                midname: user.midname,
                type: user.type,
                phone:user.phone,
                type: user.type,
                created_at: user.created_at,
                billing_address: user.billing_address,
                location: user.location,
                country: user.country,
                country_code: user.country_code,
                last_login: user.last_login
            })
        }
        catch (e) {      
            errorHandler(res, e)
        }

    }
}

module.exports.reset = (req, res) => {
    res.status(200).json({
        reset: true
    })
}