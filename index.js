const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')
const session = require('express-session');
const config = require('./config')

const app = express();

const port = 3000;


const corsOptions = {
    origin: 'http://localhost:3000'
};

const userCtrl = require('./controllers/userCtrl.js')
const profileCtrl = require('./controllers/profileCtrl.js')


app.use(cors(corsOptions))
app.use(bodyParser.json())
app.use(session({
    secret: config.sessionSecret,
    saveUninitialized: true,
    resave: true
}));

app.use(express.static(__dirname + '/public'));


app.get('/api/profiles', profileCtrl.getFriendProfiles)

app.post('/api/login', userCtrl.login)


app.listen(port, () => {
    console.log(`It's the year ${port}. No signs of intelligent life.`)
})
