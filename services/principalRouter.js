const { express } = require('../config');
const { guessCode } = require('./getCodebreaker');
const { changeCode } = require('./postCodebreaker');

const router = express.Router()

router.get('/guess/:number', guessCode);
router.post('/guess', changeCode);

module.exports = {
    router
}