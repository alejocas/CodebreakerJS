const { codebreakerObject } = require('../config');

/**
 * La ruta para GET es /guess/{number}
 */

const guessCode = (req, res) => {
    const number = String(req.params.number)
    
}

module.exports = {
    guessCode
}