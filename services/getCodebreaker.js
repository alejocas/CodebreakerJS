const { codebreakerObject } = require('../config');

/**
 * La ruta para GET es /guess/{number}
 */

const guessCode = (req, res) => {
    const number = String(req.params.number)
    res.send({
        answer: codebreakerObject.guess(number)
    })
}

module.exports = {
    guessCode
}