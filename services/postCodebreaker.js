const { codebreakerObject } = require('../config');

const changeCode = (req, res) => {
    const newSecret = req.body.secret;
    codebreakerObject.setSecret(String(newSecret));
    res.send({
        answer: "Secret changed"
    });
}

module.exports = {
    changeCode
}