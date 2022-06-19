const express = require('express');
const messagesRouter = express.Router();

const messageController = require('../controllers/messages.controller');

messagesRouter.get('/', messageController.getMessages);
messagesRouter.post('/', messageController.postMessage);

module.exports = messagesRouter;