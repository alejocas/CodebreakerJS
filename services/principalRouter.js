const { express } = require('../config');
const { guessCode } = require('./getCodebreaker');

const router = express.Router()

router.get('/guess/:number', guessCode);

module.exports = {
    router
}