const express = require('express');
const cors = require('cors');
const app = express();

const authMiddleware = require('./middlewares/authMiddleware')
const Data = require('./init/data')

const userRouter = require('./routes/user');
const productRouter = require('./routes/product');
const shoppingCartRouter = require('./routes/shoppingCart');

app.use(cors());
app.use(express.json());
app.use(express.static('public'))

app.use('/users/authenticate', userRouter);

app.use('/', authMiddleware);
app.use('/products', productRouter);
app.use('/carts', shoppingCartRouter);

app.use((req, res, next) => {
    res.status(404).json({ error: req.url + ' API not supported!' });
});

app.use((err, req, res, next) => {
    if (err.message === 'NOT Found') {
        res.status(404).json({ error: err.message });
    } else {
        res.status(500).json({ error: 'Something is wrong! Try later' });
    }
});

app.listen(3000, () => {
    Data.initData();
    console.log('Listening to 3000...');
});