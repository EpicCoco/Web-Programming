const express = require('express');
const app = express();
const router = express.Router();
router.get('/', (req, res) => {
    res.send('root route');
});
router.get('/home', (req, res) => res.send('This is the home page!'));
router.get('/login', (req, res) => {
    res.send('this is the login page');
});
app.use('/', router);
const port = process.env.PORT || 8082;
app.listen(port, () => console.log(`Server running on port ${port}`));
console.log('Web Server listening at port ' + (process.emitWarning.port || port))
