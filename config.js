const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const cors = require('cors');
const Codebreaker = require('./models/Codebreaker');
const codebreakerObject = new Codebreaker();

module.exports = {
    express,
    bodyParser,
    methodOverride,
    cors,
    codebreakerObject
}