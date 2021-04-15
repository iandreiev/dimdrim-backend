const express = require("express");
const passport = require('passport')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const mongoose = require('mongoose')
const socket = require('socket.io')

const authRoutes = require('./routes/auth.routes')
const usersRoutes = require('./routes/users.routes')
const shopRoutes = require('./routes/shop.routes')
const sizeRoutes = require('./routes/sizes.routes')
const cartRoutes = require('./routes/cart.routes')
const orderRoutes = require('./routes/order.routes')
const catRoutes = require('./routes/categories.routes')
const colorsRoutes = require('./routes/colors.routes')
const payRoutes = require('./routes/payment.routes')
const searchRoutes = require('./routes/search.routes')
const notifRoutes = require('./routes/notification.routes')
const slideRoutes = require('./routes/slider.routes')


const keys = require('./config/keys')
const app = express()


mongoose.connect(keys.mongoURI, {useNewUrlParser:true, useUnifiedTopology:true})
.then(()=>console.log('Connected to DB'))
.catch(err=>console.log(err))

app.use(passport.initialize())
require('./middleware/passport')(passport)

app.use(morgan('dev'))
app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.use('/api/auth', authRoutes)
app.use('/api/users', usersRoutes)
app.use('/api/shop', shopRoutes)
app.use('/api/sizes', sizeRoutes)
app.use('/api/cart', cartRoutes)
app.use('/api/order', orderRoutes)
app.use('/api/cats', catRoutes)
app.use('/api/colors', colorsRoutes)
app.use('/api/payment', payRoutes)
app.use('/api/search', searchRoutes)
app.use('/api/notifs', notifRoutes)
app.use('/api/slider', slideRoutes)

module.exports = app