const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 8082;
const cors = require('cors');
const router = express.Router();

app.use(cors({origin: true, credentials: true}));
app.use(express.json({extended: false}));
app.get('/', (req, res) => res.send('Hello World!'));

const conn_str = 'mongodb+srv://codeyborrelli:flJCpJZuFsH0Adsr@cluster0.thd6qks.mongodb.net/?retryWrites=true&w=majority';
mongoose.set('strictQuery', false);
mongoose.connect(conn_str, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
.then(() => {
    app.listen(port);
    console.log('connection successful');
})
.catch(err => {
    console.log('error connecting ${err}');
})

/* old router code
router.get('/', (req, res) => {
    res.send('root route');
});
router.get('/home', (req, res) => res.send('This is the home page!'));
router.get('/login', (req, res) => {
    res.send('this is the login page');
});
app.use('/', router);

app.listen(port, () => console.log(`Server running on port ${port}`));
console.log('Web Server listening at port ' + (process.emitWarning.port || port))
*/