const express = require('express');
const app = express();
const cookieParser = require('cookie-parser')
const mainRoutes = require('./routes/index')
const cardRoutes = require('./routes/cards.js')

app.use(cookieParser())
app.use(express.urlencoded({extended: false}))
app.set('view engine', 'pug')
app.use(mainRoutes);
app.use('/cards', cardRoutes)
app.use('/static', express.static('public'))

app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
})

app.use((err, req, res, next) => {
    res.locals.err = err
    res.status(err.status);
    res.render('error')
})

app.listen(4040, () => console.log('The application is running'));
